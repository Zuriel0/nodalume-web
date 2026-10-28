import { useState } from "react";

export default function LivingInterface({ texts }) {
  const [composition, setComposition] = useState("open");
  const [connections, setConnections] = useState(true);
  const selected = texts.options.find((option) => option.id === composition);
  const unchanged = composition === "open" && connections;

  return (
    <section
      className="studio shell"
      id="studio"
      tabIndex="-1"
      aria-labelledby="studio-title"
    >
      <div className="section-heading">
        <h2 id="studio-title">{texts.title}</h2>
        <p>{texts.intro}</p>
      </div>
      <div className="studio-workbench">
        <figure
          className="studio-canvas"
          data-composition={composition}
          data-connections={connections}
          aria-describedby="studio-disclaimer"
        >
          <svg
            className="studio-art"
            viewBox="0 0 1000 620"
            fill="none"
            aria-hidden="true"
          >
            <g
              className="studio-paths"
              stroke="var(--electric)"
              strokeWidth="1.5"
            >
              <path d="M65 420h95c90 0 34-150 128-150h167c100 0 44-130 145-130h335" />
              <path
                d="M65 485h155c100 0 45 45 145 45h170c105 0 35-170 140-170h260"
                opacity=".3"
              />
              <circle
                cx="65"
                cy="420"
                r="7"
                fill="var(--signal)"
                stroke="var(--ink)"
              />
              <circle
                cx="935"
                cy="140"
                r="7"
                fill="var(--signal)"
                stroke="var(--ink)"
              />
            </g>
            <g className="studio-shape studio-shape-a">
              <path
                d="m180 155 240-45 145 220-240 45Z"
                fill="var(--canvas)"
                stroke="var(--ink)"
                strokeWidth="1.5"
              />
              <path
                d="m218 187 100-19m-80 49 156-29"
                stroke="var(--ink)"
                strokeWidth="1"
                opacity=".3"
              />
            </g>
            <g className="studio-shape studio-shape-b">
              <path
                d="m350 230 240-45 145 220-240 45Z"
                fill="var(--electric)"
              />
              <circle
                cx="543"
                cy="316"
                r="31"
                stroke="var(--surface)"
                strokeWidth="1.5"
              />
              <path
                d="M520 343h61m-31-58v61"
                stroke="var(--surface)"
                strokeWidth="1"
                opacity=".5"
              />
            </g>
            <g className="studio-shape studio-shape-c">
              <path
                d="m520 305 240-45 145 220-240 45Z"
                fill="var(--surface)"
                stroke="var(--ink)"
                strokeWidth="1.5"
              />
              <path
                d="m558 337 153-28m-132 59 154-29m-133 59 154-28"
                stroke="var(--ink)"
                strokeWidth="1"
                opacity=".2"
              />
              <circle
                cx="760"
                cy="260"
                r="12"
                fill="var(--signal)"
                stroke="var(--ink)"
                strokeWidth="1.5"
              />
            </g>
            <path
              d="M67 80h26M80 67v26m827 474h26m-13-13v26"
              stroke="var(--ink)"
              opacity=".25"
            />
          </svg>
          <figcaption aria-live="polite" aria-atomic="true">
            <strong>{selected.label}</strong>
            <span>{selected.description}</span>
          </figcaption>
        </figure>
        <div className="studio-controls">
          <fieldset>
            <legend>{texts.composition}</legend>
            <div className="studio-options">
              {texts.options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={composition === option.id}
                  onClick={() => setComposition(option.id)}
                >
                  <span>{option.label}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="10" cy="10" r="7" stroke="currentColor" />
                    <circle
                      className="studio-selected"
                      cx="10"
                      cy="10"
                      r="3"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              ))}
            </div>
          </fieldset>
          <label className="studio-checkbox">
            <input
              type="checkbox"
              checked={connections}
              onChange={(event) => setConnections(event.target.checked)}
            />
            <span>{texts.connections}</span>
          </label>
          <button
            type="button"
            className="studio-reset"
            disabled={unchanged}
            onClick={() => {
              setComposition("open");
              setConnections(true);
            }}
          >
            {texts.reset}
          </button>
          <p className="studio-disclaimer" id="studio-disclaimer">
            {texts.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
