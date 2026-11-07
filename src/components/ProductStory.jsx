import { useState } from "react";
import RecordedDemo from "./RecordedDemo.jsx";
import { productVideos } from "../product-videos.js";

function MediaSpace({ item, text, paused }) {
  const [failed, setFailed] = useState(false);
  const asset = productVideos[item.id];
  return (
    <figure className={`media-space media-${item.kind} has-video`} id={item.id}>
      <div
        className="media-aperture media-aperture-video"
        style={{ "--media-ratio": `${asset.width} / ${asset.height}` }}
      >
        {failed ? (
          <img
            className="product-video"
            src={asset.poster}
            width={asset.width}
            height={asset.height}
            alt={item.alternative}
            loading="lazy"
          />
        ) : (
          <RecordedDemo
            asset={asset}
            label={item.name}
            descriptionId={`${item.id}-note`}
            paused={paused}
            onFailure={() => setFailed(true)}
          />
        )}
      </div>
      <figcaption>
        <p id={`${item.id}-note`}>{item.alternative}</p>
        {failed && <p role="status">{text.failed}</p>}
      </figcaption>
    </figure>
  );
}

export default function ProductStory({ text, mediaPaused }) {
  const b = text.builder,
    l = text.logic,
    c = text.control;
  return (
    <>
      <section
        className="product product-story shell"
        id="product"
        tabIndex="-1"
        aria-labelledby="product-title"
      >
        <div className="section-heading">
          <h2 id="product-title">{b.title}</h2>
          <p>{b.intro}</p>
        </div>
        <ul className="builder-parts">
          {b.parts.map((part) => (
            <li key={part}>{part}</li>
          ))}
        </ul>
        <MediaSpace
          item={text.slots[0]}
          text={text.media}
          paused={mediaPaused}
        />
        <div className="product-pair inspector-scene">
          <div className="product-explanation">
            <h3>{b.inspectorTitle}</h3>
            <p>{b.inspectorBody}</p>
          </div>
          <MediaSpace
            item={text.slots[1]}
            text={text.media}
            paused={mediaPaused}
          />
        </div>
        <div className="product-pair responsive-scene">
          <div className="product-explanation">
            <h3>{b.responsiveTitle}</h3>
            <p>{b.responsiveBody}</p>
          </div>
          <MediaSpace
            item={text.slots[2]}
            text={text.media}
            paused={mediaPaused}
          />
        </div>
      </section>
      <section
        className="logic-story"
        id="design-to-logic"
        tabIndex="-1"
        aria-labelledby="logic-title"
      >
        <div className="shell">
          <div className="section-heading">
            <h2 id="logic-title">{l.title}</h2>
            <p>{l.intro}</p>
          </div>
          <figure className="decision-figure" id="demo-logic">
            <div className="decision-map">
              <span className="decision-screen">{l.screen}</span>
              <span className="decision-event">{l.event}</span>
              <svg
                className="decision-stem"
                viewBox="0 0 160 40"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path d="M0 20H160" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="decision-rule">{l.rule}</span>
              <div className="decision-results">
                <span>{l.yes}</span>
                <span>{l.no}</span>
              </div>
            </div>
            <figcaption>{l.caption}</figcaption>
          </figure>
          <a className="text-link" href="#architecture">
            {l.next}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
      <section
        className="control-story shell"
        id="architecture"
        tabIndex="-1"
        aria-labelledby="architecture-title"
      >
        <div className="section-heading">
          <h2 id="architecture-title">{c.title}</h2>
          <p>{c.intro}</p>
        </div>
        <ol className="editorial-cycle">
          {c.stages.map((stage) => (
            <li key={stage.name}>
              <h3>{stage.name}</h3>
              <p>{stage.body}</p>
            </li>
          ))}
        </ol>
        <div className="tenant-context">
          <span className="tenant-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <div>
            <h3>{c.tenantTitle}</h3>
            <p>{c.tenantBody}</p>
          </div>
        </div>
        <div className="chapter-links">
          <a className="proof-link" href="#horizon">
            {c.evolution}
            <span aria-hidden="true">↓</span>
          </a>
          <a className="proof-link" href="#studio">
            {c.studio}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
    </>
  );
}
