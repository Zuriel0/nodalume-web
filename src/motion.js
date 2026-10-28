import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function mountMotion(root) {
  const hero = root.querySelector(".hero");
  const visual = root.querySelector(".hero-figure");
  const pointer = root.querySelector(".composition-pointer");
  const paths = root.querySelector(".connection");
  const signal = root.querySelector(".signal");
  const length = paths.getTotalLength();
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
  const disposers = [];
  let visible = false;
  let alive = true;
  let refreshFrame = 0;
  let ambient;
  let intro;
  let bounds;
  let hidden = false;
  let interrupted = [];

  // Scoped context is used instead of a React hook so the entire engine stays lazy-loaded.
  const context = gsap.context(() => {
    gsap.set(pointer, {
      transformPerspective: 1100,
      transformOrigin: "50% 50%",
    });
    intro = gsap
      .timeline({ defaults: { duration: 0.9, ease: "power3.out" } })
      .addLabel("open")
      .from(".hero-line", { y: 22, opacity: 0.78, stagger: 0.12 }, "open")
      .from(
        ".hero-intro, .hero .button",
        { y: 12, opacity: 0.9, stagger: 0.1 },
        "open+=.15",
      )
      .from(
        ".composition-intro",
        { rotation: -6, scale: 0.93, duration: 1.3 },
        "open",
      )
      .from(
        paths,
        {
          strokeDasharray: length,
          strokeDashoffset: length,
          duration: 1.5,
          ease: "power2.inOut",
        },
        "open+=.2",
      );
    const position = { progress: 0 };
    ambient = gsap
      .timeline({ repeat: -1, paused: true })
      .to(
        ".planes",
        {
          y: -8,
          rotation: 1.5,
          svgOrigin: "325 325",
          duration: 4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: 1,
        },
        0,
      )
      .to(
        position,
        {
          progress: 1,
          duration: 8,
          ease: "none",
          onUpdate: () => {
            const point = paths.getPointAtLength(position.progress * length);
            signal.setAttribute("cx", point.x);
            signal.setAttribute("cy", point.y);
          },
        },
        0,
      );

    ambient
      .to(
        ".plane-float-back",
        {
          x: 8,
          y: -16,
          duration: 4,
          ease: "sine.inOut",
          repeat: 1,
          yoyo: true,
        },
        0,
      )
      .to(
        ".plane-float-front",
        {
          x: -5,
          y: 12,
          duration: 4,
          ease: "sine.inOut",
          repeat: 1,
          yoyo: true,
        },
        0,
      )
      .fromTo(signal, { opacity: 0 }, { opacity: 1, duration: 0.35 }, 0)
      .to(signal, { opacity: 0, duration: 0.35 }, 7.65);

    gsap.to(".composition-pointer", {
      /* scroll and pointer never share a target transform */
      opacity: 0.65,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
      },
    });
    gsap.to(".composition-scroll", {
      yPercent: 16,
      rotation: 10,
      scale: 0.88,
      ease: "none",
      overwrite: false,
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
        onEnter: () => intro.progress(1),
      },
    });
    gsap.to(".scene-seam", {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".philosophy",
        start: "top 92%",
        end: "top 55%",
        scrub: 0.5,
      },
    });
    const story = gsap.timeline({
      scrollTrigger: {
        trigger: ".philosophy",
        start: "top 85%",
        end: "top 20%",
        scrub: 0.6,
      },
    });
    const connector = root.querySelector(".story-connector path");
    const connectorLength = connector.getTotalLength();
    story
      .from(
        ".story-line",
        { x: 16, opacity: 0.78, stagger: 0.12, ease: "none" },
        0,
      )
      .from(
        connector,
        {
          strokeDasharray: connectorLength,
          strokeDashoffset: connectorLength,
          ease: "none",
        },
        0,
      );
    gsap.from(".studio-art", {
      y: 18,
      scale: 0.96,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".studio-workbench",
        start: "top 85%",
        toggleActions: "play pause resume pause",
      },
    });
    gsap.from(".film-fold", {
      y: 24,
      rotation: -3,
      svgOrigin: "600 338",
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".film",
        start: "top 80%",
        toggleActions: "play pause resume pause",
      },
    });

    const x = gsap.quickTo(pointer, "x", { duration: 0.9, ease: "power3.out" });
    const y = gsap.quickTo(pointer, "y", { duration: 0.9, ease: "power3.out" });
    const rotation = gsap.quickTo(pointer, "rotation", {
      duration: 1.1,
      ease: "power3.out",
    });
    const tiltX = gsap.quickTo(pointer, "rotationX", {
      duration: 1.1,
      ease: "power3.out",
    });
    const tiltY = gsap.quickTo(pointer, "rotationY", {
      duration: 1.1,
      ease: "power3.out",
    });
    const enter = () => {
      bounds = hero.getBoundingClientRect();
    };
    const move = (event) => {
      if (!finePointer.matches || !bounds || document.hidden) return;
      const dx = Math.max(
        -0.5,
        Math.min(0.5, (event.clientX - bounds.left) / bounds.width - 0.5),
      );
      const dy = Math.max(
        -0.5,
        Math.min(0.5, (event.clientY - bounds.top) / bounds.height - 0.5),
      );
      x(dx * 20);
      y(dy * 16);
      rotation(dx * 3);
      tiltX(-dy * 6);
      tiltY(dx * 8);
    };
    const leave = () => {
      x(0);
      y(0);
      rotation(0);
      tiltX(0);
      tiltY(0);
    };
    const pointerChanged = () => {
      if (!finePointer.matches) leave();
    };
    finePointer.addEventListener("change", pointerChanged);
    hero.addEventListener("pointerenter", enter);
    hero.addEventListener("pointermove", move);
    hero.addEventListener("pointerleave", leave);
    disposers.push(() => {
      finePointer.removeEventListener("change", pointerChanged);
      hero.removeEventListener("pointerenter", enter);
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", leave);
    });
  }, root);

  const ownedTriggers = ScrollTrigger.getAll().filter((trigger) =>
    root.contains(trigger.trigger),
  );
  const sync = () => {
    if (document.hidden && !hidden) {
      interrupted = context
        .getTweens()
        .filter((tween) => tween.isActive() && !tween.paused());
      interrupted.forEach((tween) => tween.pause());
      ownedTriggers.forEach((trigger) => {
        trigger.getTween()?.pause();
        trigger.disable(false, false);
      });
      intro.pause();
    } else if (!document.hidden && hidden) {
      ownedTriggers.forEach((trigger) => {
        trigger.enable(false, false);
        trigger.getTween()?.resume();
      });
      interrupted.forEach((tween) => tween.resume());
      interrupted = [];
    }
    hidden = document.hidden;
    const playing = visible && !document.hidden;
    if (playing) ambient.play();
    else ambient.pause();
    root.dataset.ambient = playing ? "playing" : "paused";
    if (!document.hidden && visible && intro.progress() < 1) intro.play();
  };
  const observer = new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting;
    if (!visible && intro.progress() < 1) intro.progress(1);
    sync();
  });
  observer.observe(visual);
  document.addEventListener("visibilitychange", sync);
  // Text is never split into injected spans. Resize handles locale and details changes.
  const resize = new ResizeObserver(() => {
    cancelAnimationFrame(refreshFrame);
    refreshFrame = requestAnimationFrame(() => {
      if (alive) {
        bounds = hero.getBoundingClientRect();
        ScrollTrigger.refresh();
      }
    });
  });
  resize.observe(root);
  root.dataset.motion = "active";
  root.dataset.triggers = String(ScrollTrigger.getAll().length);
  document.fonts.ready.then(() => {
    if (alive) ScrollTrigger.refresh();
  });

  return () => {
    alive = false;
    cancelAnimationFrame(refreshFrame);
    observer.disconnect();
    resize.disconnect();
    document.removeEventListener("visibilitychange", sync);
    disposers.forEach((dispose) => dispose());
    context.revert();
    signal.setAttribute("cx", "28");
    signal.setAttribute("cy", "438");
    root.dataset.triggers = String(ScrollTrigger.getAll().length);
    root.dataset.ambient = "paused";
  };
}
