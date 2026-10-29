import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { copy, initialLanguage } from "./content.js";
import LivingInterface from "./components/LivingInterface.jsx";
import ProductStory from "./components/ProductStory.jsx";
import { story } from "./product-story.js";
import { growth } from "./data-growth.js";
import DataGrowth from "./components/DataGrowth.jsx";

function Arrow({ down = false }) {
  return (
    <span className={`t-learn-chevron${down ? " arrow-down" : ""}`}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="currentColor" strokeWidth="1.2">
          <path d="M2 8h8" />
          <path className="t-learn-arm t-learn-arm-top" d="M6 4L10 8" />
          <path className="t-learn-arm t-learn-arm-bot" d="M10 8L6 12" />
        </g>
      </svg>
    </span>
  );
}

function Composition() {
  return (
    <div className="composition-scroll">
      <div className="composition-intro">
        <div className="composition-pointer">
          <svg
            className="composition"
            viewBox="0 0 650 650"
            fill="none"
            aria-hidden="true"
          >
            <g className="orbit">
              <path
                className="connection"
                d="M28 438h125c60 0 65-69 125-69h134c72 0 52-112 116-112h90"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path
                d="M73 155h70c61 0 26 115 105 115h108c67 0 53 113 135 113h105M125 555h103c73 0 38-65 112-65h133"
                stroke="currentColor"
                strokeWidth="1"
                opacity=".22"
              />
              <circle cx="28" cy="438" r="5" fill="currentColor" />
              <circle cx="618" cy="257" r="5" fill="currentColor" />
              <circle
                className="signal"
                cx="28"
                cy="438"
                r="7"
                fill="var(--signal)"
                stroke="var(--ink)"
                strokeWidth="1.5"
              />
            </g>
            <g className="planes">
              <g className="plane-float-back">
                <path
                  className="plane-back"
                  d="M186 146 400 106 534 307 320 347Z"
                  fill="var(--surface)"
                  stroke="var(--ink)"
                  strokeWidth="1.5"
                />
              </g>
              <path
                className="plane-main"
                d="m153 245 214-40 134 201-214 40Z"
                fill="var(--electric)"
                stroke="var(--electric)"
                strokeWidth="1.5"
              />
              <path
                d="m186 146 134 201M400 106l-33 99M534 307l-33 99"
                stroke="var(--ink)"
                strokeWidth="1.2"
                strokeDasharray="4 6"
                opacity=".3"
              />
              <g className="plane-float-front">
                <path
                  className="plane-front"
                  d="m119 342 214-40 134 201-214 40Z"
                  fill="var(--canvas)"
                  stroke="var(--ink)"
                  strokeWidth="1.5"
                />
                <path
                  d="m163 373 153-28m-132 59 154-29m-133 59 154-28"
                  stroke="var(--ink)"
                  strokeWidth="1"
                  opacity=".18"
                />
                <circle
                  cx="333"
                  cy="302"
                  r="12"
                  fill="var(--signal)"
                  stroke="var(--ink)"
                  strokeWidth="1.5"
                />
                <path
                  d="m328 302 3 3 6-7"
                  stroke="var(--ink)"
                  strokeWidth="1.5"
                />
              </g>
            </g>
            <path
              d="M52 585h24m-12-12v24M556 90h24m-12-12v24"
              stroke="var(--ink)"
              opacity=".4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const root = useRef(null);
  const menuButton = useRef(null);
  const [lang, setLang] = useState(initialLanguage);
  const [menu, setMenu] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(
    () => matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const t = copy[lang];
  const targets = [
    "product",
    "design-to-logic",
    "architecture",
    "data-growth",
    "horizon",
  ];

  useLayoutEffect(() => {
    document.documentElement.lang = lang;
    document.querySelector('meta[name="description"]').content =
      copy[lang].meta;
    try {
      localStorage.setItem("nodalume-site:lang", lang);
    } catch {
      /* Storage is optional. */
    }
  }, [lang]);

  // The browser can resolve an initial hash before the React target exists.
  // Run once after commit; subsequent links and history retain native scrolling.
  useLayoutEffect(() => {
    try {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (id)
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "instant", block: "start" });
    } catch {
      /* A malformed or unknown public hash leaves the page usable. */
    }
  }, []);

  useEffect(() => {
    const query = matchMedia("(prefers-reduced-motion: reduce)");
    const changed = () => setReduced(query.matches);
    query.addEventListener("change", changed);
    return () => query.removeEventListener("change", changed);
  }, []);

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === "Escape" && menu) {
        setMenu(false);
        menuButton.current?.focus();
      }
    };
    const desktop = matchMedia("(min-width: 900px)");
    const onDesktop = () => {
      if (desktop.matches) setMenu(false);
    };
    document.addEventListener("keydown", onEscape);
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.removeEventListener("keydown", onEscape);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [menu]);

  useEffect(() => {
    const element = root.current;
    let disposed = false;
    let cleanup;
    if (paused || reduced) {
      element.dataset.motion = reduced ? "reduced" : "paused";
      return;
    }
    element.dataset.motion = "loading";
    // Motion code is a separate chunk. A failed import leaves the complete static composition.
    import("./motion.js")
      .then(({ mountMotion }) => {
        if (!disposed) cleanup = mountMotion(element);
      })
      .catch(() => {
        if (!disposed) element.dataset.motion = "static-fallback";
      });
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, [paused, reduced]);

  return (
    <div
      ref={root}
      id="top"
      className="site"
      data-motion="static"
      data-triggers="0"
    >
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="Nodalume">
          <img src="/brand/nodalume-mark.svg" alt="" width="34" height="34" />
          <span>Nodalume</span>
        </a>
        <nav
          className="desktop-nav"
          aria-label={lang === "es" ? "Principal" : "Main"}
        >
          {targets.map((id, i) => (
            <a key={id} href={`#${id}`}>
              {t.nav[i]}
            </a>
          ))}
        </nav>
        <div className="nav-tools">
          <div className="language-switch" role="group" aria-label={t.language}>
            {["es", "en"].map((code) => (
              <button
                key={code}
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
                lang={code}
                aria-label={code === "es" ? "Español" : "English"}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            className="menu-button"
            ref={menuButton}
            aria-expanded={menu}
            aria-controls="mobile-navigation"
            aria-label={menu ? t.close : t.menu}
            onClick={() => setMenu(!menu)}
          >
            <span className="menu-label">{menu ? t.close : t.menu}</span>
            <span
              className="t-icon-swap"
              data-state={menu ? "b" : "a"}
              aria-hidden="true"
            >
              <span className="t-icon" data-icon="a">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M2 6h16M2 14h16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
              <span className="t-icon" data-icon="b">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="m5 5 10 10M15 5 5 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
            </span>
          </button>
        </div>
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          hidden={!menu}
          aria-label={lang === "es" ? "Móvil" : "Mobile"}
        >
          {targets.map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => {
                setMenu(false);
                document.getElementById(id)?.focus({ preventScroll: true });
              }}
            >
              {t.nav[i]}
              <Arrow />
            </a>
          ))}
        </nav>
      </header>
      <main id="main" tabIndex="-1">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title" aria-label={t.headline.join(" ")}>
              {t.headline.map((line) => (
                <span className="hero-line" key={line}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="hero-intro">{t.intro}</p>
            <a className="button button-primary t-learn" href="#product">
              {t.discover}
              <Arrow />
            </a>
            <a className="hero-secondary t-learn" href="#idea">
              {t.see}
              <Arrow />
            </a>
          </div>
          <figure className="hero-figure">
            <Composition />
            <figcaption>
              <span>{t.concept}</span>
              <span className="figure-note">{t.conceptNote}</span>
            </figcaption>
          </figure>
          <div className="hero-bottom">
            <a className="scroll-link t-learn" href="#idea">
              <Arrow down />
              {t.scroll}
            </a>
            <button
              className="motion-control"
              aria-pressed={paused || reduced}
              disabled={reduced}
              onClick={() => setPaused(!paused)}
            >
              <span
                className="t-icon-swap"
                data-state={paused || reduced ? "b" : "a"}
                aria-hidden="true"
              >
                <span className="t-icon" data-icon="a">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M5 3v10M11 3v10"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <span className="t-icon" data-icon="b">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="m5 3 7 5-7 5Z" fill="currentColor" />
                  </svg>
                </span>
              </span>
              {reduced ? t.reduced : paused ? t.resume : t.pause}
            </button>
          </div>
        </section>
        <section
          className="philosophy"
          id="idea"
          tabIndex="-1"
          aria-labelledby="idea-title"
        >
          <svg
            className="scene-seam"
            viewBox="0 0 1440 72"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path d="M0 0h1440l-184 0-64 64H0Z" fill="var(--canvas)" />
            <path d="m1256 0-64 64" stroke="var(--electric)" strokeWidth="2" />
          </svg>
          <div className="shell">
            <h2 id="idea-title" aria-label={t.philosophy.join(" ")}>
              {t.philosophy.map((line) => (
                <span className="story-line" key={line}>
                  {line}
                </span>
              ))}
            </h2>
            <div className="story-body">
              <span className="story-connector" aria-hidden="true">
                <svg viewBox="0 0 100 150" fill="none">
                  <path
                    d="M10 0v65c0 40 80 15 80 55v30"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="90" cy="142" r="7" fill="var(--signal)" />
                </svg>
              </span>
              <div>
                <h3>{t.philosophyIntro}</h3>
                <p>{t.philosophyBody}</p>
              </div>
            </div>
            <p className="principle">{t.principle}</p>
          </div>
        </section>
        <ProductStory text={story[lang]} />
        <DataGrowth text={growth[lang]} />
        <LivingInterface texts={t.studio} />
        <section
          className="horizon shell"
          id="horizon"
          tabIndex="-1"
          aria-labelledby="horizon-title"
        >
          <div className="section-heading">
            <h2 id="horizon-title">{t.mapTitle}</h2>
            <p>{t.mapBody}</p>
          </div>
          <div className="experience-map">
            {t.map.map((item) => (
              <details
                id={item.id}
                key={item.id}
                className={`map-row map-${item.kind}`}
              >
                <summary>
                  <span className="map-title">{item.title}</span>
                  <span className="map-meta">
                    <span className="status">{item.status}</span>
                    <span className="map-short">{item.short}</span>
                  </span>
                  <span className="expand-icon" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 12h16M12 4v16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="map-detail">
                  <p>{item.detail}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="shell">
          <h2>{story[lang].close}</h2>
          <p className="footer-intro">{story[lang].closeBody}</p>
          <a
            className="text-link t-learn engineering-close"
            href="https://anxzu.com/projects/nodalume/"
          >
            {t.engineering}
            <Arrow />
          </a>
          <a className="text-link t-learn" href="#top">
            {t.top}
            <Arrow />
          </a>
          <div className="footer-base">
            <a className="brand" href="#top">
              <img
                src="/brand/nodalume-mark.svg"
                alt=""
                width="30"
                height="30"
              />
              <span>Nodalume</span>
            </a>
            <p>{t.footerNote}</p>
            <span className="development">
              <span aria-hidden="true" />
              {t.lab}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
