// Evidence scope and source snapshot: docs/ndl-web-004-data-growth.md.
export const growth = {
  es: {
    title: "Cada conexión puede convertirse en una oportunidad.",
    intro:
      "Conocer a tu audiencia es el primer paso para ofrecer mejores experiencias. Nodalume busca conectar identidad, interacción y datos para ayudarte a comprender comportamientos, identificar oportunidades y tomar decisiones con mayor contexto.",
    source: "Una conexión",
    signals: "Señales con contexto",
    decision: "Decisión de negocio",
    human: "Criterio humano",
    question: "¿Qué experiencia mejorar?",
    signalLabels: [
      "Identidad declarada",
      "Consentimiento de acceso",
      "Interacciones observadas",
      "Actividad de red",
    ],
    concept:
      "Representación conceptual. No muestra datos de clientes ni resultados reales. Crecer es el objetivo; la decisión sigue siendo humana.",
    stages: [
      {
        id: "connect",
        title: "CONECTA",
        body: "Ofrece una experiencia de acceso con identidad propia.",
      },
      {
        id: "understand",
        title: "CONOCE",
        body: "Da contexto a la información declarada y las interacciones observadas.",
      },
      {
        id: "analyze",
        title: "ANALIZA",
        body: "Consulta las señales disponibles y reconoce sus límites antes de interpretar.",
      },
      {
        id: "grow",
        title: "CRECE",
        body: "Usa ese contexto para orientar mejoras. El crecimiento es una meta, no una garantía.",
      },
    ],
    scopeTitle: "Qué respalda esta propuesta",
    scopeIntro:
      "La implementación revisada incluye captura y reportes. La operación integral y su valor comercial requieren validación adicional.",
    scope: [
      {
        title: "Información y consentimiento",
        body: "El código contempla formularios, respuestas e identidad declarada. El consentimiento revisado corresponde al acceso a la red; no acredita autorización para marketing ni verifica por sí mismo una identidad.",
      },
      {
        title: "Interacciones y acceso",
        body: "Hay registro de eventos del portal y reportes de sesiones y accounting. Las observaciones del navegador pueden ser incompletas. La actividad de red no demuestra compras ni visitas físicas.",
      },
      {
        title: "Lectura y análisis",
        body: "Existen vistas de dispositivos, consumo, hábitos de acceso y experiencia de acceso, además de reportes de campañas. Se revisaron sus consultas y controles; no se validaron resultados con una base de datos real en esta fase.",
      },
      {
        title: "Exportación y contexto",
        body: "Los reportes de campañas tienen implementación de PDF, CSV y JSON. El contexto de tenant limita las consultas revisadas. No se probó la exportación ni el aislamiento integral y no se anuncia integración automática con un CRM.",
      },
    ],
    horizon:
      "La visión: ayudar a decidir con información, sin confundir actividad técnica con resultados de negocio.",
    next: "Conocer la evolución del proyecto",
  },
  en: {
    title: "Every connection can become an opportunity.",
    intro:
      "Understanding your audience is the first step toward better experiences. Nodalume aims to connect identity, interaction and data to help you understand behavior, identify opportunities and make decisions with more context.",
    source: "A connection",
    signals: "Signals in context",
    decision: "Business decision",
    human: "Human judgment",
    question: "Which experience could improve?",
    signalLabels: [
      "Declared identity",
      "Network access consent",
      "Observed interactions",
      "Network activity",
    ],
    concept:
      "Conceptual representation. No customer data or real results are shown. Growth is the goal; the decision remains human.",
    stages: [
      {
        id: "connect",
        title: "CONNECT",
        body: "Offer an access experience with an identity of its own.",
      },
      {
        id: "understand",
        title: "UNDERSTAND",
        body: "Give context to declared information and observed interactions.",
      },
      {
        id: "analyze",
        title: "ANALYZE",
        body: "Read the available signals and recognize their limits before interpreting them.",
      },
      {
        id: "grow",
        title: "GROW",
        body: "Use that context to guide improvements. Growth is a goal, not a guarantee.",
      },
    ],
    scopeTitle: "What supports this direction",
    scopeIntro:
      "The reviewed implementation includes data collection and reporting. End-to-end operation and business value need further validation.",
    scope: [
      {
        title: "Information and consent",
        body: "The source supports forms, responses and declared identity. The reviewed consent concerns network access; it does not establish marketing permission or verify an identity on its own.",
      },
      {
        title: "Interactions and access",
        body: "Portal event collection, session reports and accounting are implemented. Browser observations can be incomplete. Network activity is not evidence of purchases or physical visits.",
      },
      {
        title: "Reading and analysis",
        body: "Device, usage, access habit and access experience views exist alongside campaign reports. Their queries and controls were reviewed; results were not validated against a real database in this phase.",
      },
      {
        title: "Exports and context",
        body: "Campaign reports have PDF, CSV and JSON implementations. Tenant context scopes the reviewed queries. Exports and end-to-end isolation were not tested, and no automatic CRM integration is announced.",
      },
    ],
    horizon:
      "The vision: support informed decisions without mistaking technical activity for business results.",
    next: "Explore the project’s evolution",
  },
};
