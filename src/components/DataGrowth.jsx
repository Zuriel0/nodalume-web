function Wire() {
  return (
    <svg
      className="growth-wire"
      viewBox="0 0 120 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 16h112m-7-6 7 6-7 6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function DataGrowth({ text }) {
  return (
    <section
      className="growth shell"
      id="data-growth"
      tabIndex="-1"
      aria-labelledby="growth-title"
    >
      <div className="growth-heading">
        <h2 id="growth-title">{text.title}</h2>
        <p>{text.intro}</p>
      </div>
      <figure className="growth-figure">
        <div className="growth-composition">
          <div className="growth-origin">
            <span className="growth-fold" aria-hidden="true" />
            <h3>{text.source}</h3>
          </div>
          <Wire />
          <div className="growth-signals">
            <h3>{text.signals}</h3>
            <ul>
              {text.signalLabels.map((label, index) => (
                <li key={index}>
                  <span aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
          <Wire />
          <div className="growth-decision">
            <span className="growth-human">{text.human}</span>
            <h3>{text.decision}</h3>
            <p>{text.question}</p>
          </div>
        </div>
        <figcaption>{text.concept}</figcaption>
      </figure>
      <ol className="growth-stages">
        {text.stages.map((stage) => (
          <li key={stage.id}>
            <h3>{stage.title}</h3>
            <p>{stage.body}</p>
          </li>
        ))}
      </ol>
      <details className="growth-scope" id="growth-scope">
        <summary>
          {text.scopeTitle}
          <span aria-hidden="true">+</span>
        </summary>
        <div className="growth-scope-content">
          <p>{text.scopeIntro}</p>
          <dl>
            {text.scope.map((item) => (
              <div key={item.title}>
                <dt>{item.title}</dt>
                <dd>{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </details>
      <div className="growth-close">
        <p>{text.horizon}</p>
        <a className="proof-link" href="#horizon">
          {text.next}
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
