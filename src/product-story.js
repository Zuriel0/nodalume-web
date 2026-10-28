// Product claims are scoped to the read-only source review recorded in docs/ndl-web-003-capabilities.md.
export const story = {
  es: {
    builder: {
      title: "Compón cada detalle.",
      intro:
        "Empieza con una pantalla. Combina bloques, organiza sus capas y ajusta las propiedades de cada elemento. El portal toma forma desde el lienzo.",
      parts: [
        "Bloques con propósito",
        "Capas con orden",
        "Propiedades en contexto",
      ],
      inspectorTitle: "El detalle también diseña.",
      inspectorBody:
        "Texto, imagen, botón o contenedor: el inspector adapta sus controles al elemento seleccionado. La estructura y su apariencia se editan en el mismo espacio.",
      responsiveTitle: "Otra pantalla. La misma intención.",
      responsiveBody:
        "Escritorio, tableta y móvil tienen una vista propia en el editor. Revisar esas composiciones es parte del proceso, antes de preparar una publicación.",
    },
    media: {
      pending: "Demostración por preparar",
      note: "Espacio reservado. No contiene capturas ni una simulación del producto.",
      specification: "Qué mostrará esta demostración",
      labels: [
        "Función",
        "Alcance acreditado",
        "Formato y duración",
        "Alternativa textual",
        "En móvil",
        "Carga prevista",
      ],
    },
    slots: [
      {
        id: "demo-builder",
        name: "Portal Builder",
        word: "Componer",
        ratio: "16 / 9",
        kind: "wide",
        feature:
          "Lienzo, biblioteca de bloques y árbol de capas; seleccionar un elemento sin editarlo.",
        evidence:
          "Interfaz implementada en código. La grabación real y su revisión visual siguen pendientes; este espacio no acredita funcionamiento.",
        format:
          "WebM con MP4 alternativo; 16:9; 15–20 s; sin audio obligatorio.",
        alternative:
          "El editor muestra la pantalla completa; se selecciona un bloque y se localiza en sus capas.",
        mobile:
          "Poster completo, sin recorte. Reproducción opcional a pantalla completa para leer los controles.",
        loading:
          "Poster optimizado diferido, espacio reservado. Video solo al solicitarlo; preload=none.",
      },
      {
        id: "demo-inspector",
        name: "Inspector",
        word: "Afinar",
        ratio: "4 / 3",
        kind: "inspector",
        feature:
          "Selección de un botón y lectura de sus propiedades contextuales, sin cambiar valores.",
        evidence:
          "Controles contextuales verificados en fuente. No se demuestra aquí persistencia ni modificación de propiedades.",
        format: "Secuencia de 2 capturas reales o video WebM/MP4; 4:3; 6–8 s.",
        alternative:
          "Al seleccionar un botón, el inspector presenta sus controles de contenido y apariencia.",
        mobile:
          "Capturas apiladas con descripción; imagen ampliable mediante controles accesibles si se incorpora.",
        loading:
          "AVIF/WebP diferido con dimensiones explícitas; video opcional y bajo demanda.",
      },
      {
        id: "demo-responsive",
        name: "Responsive",
        word: "Adaptar",
        ratio: "9 / 16",
        kind: "portrait",
        feature:
          "Alternancia de escritorio, tableta y móvil sobre el mismo portal de demostración.",
        evidence:
          "Selectores y lógica de vistas implementados. La calidad de un portal concreto debe comprobarse en la captura real.",
        format: "Video WebM/MP4 o secuencia de capturas; 9:16; 6–8 s.",
        alternative:
          "El mismo portal se muestra primero en escritorio y después en su vista móvil.",
        mobile:
          "Vista vertical completa; transcripción junto al medio. Sin scroll horizontal ni reproducción automática.",
        loading:
          "Poster diferido; versión vertical seleccionada por tamaño; medio únicamente bajo demanda.",
      },
      {
        id: "demo-logic",
        name: "Logic Builder",
        word: "Conectar",
        ratio: "16 / 9",
        kind: "logic",
        feature:
          "Vista de pantallas, puertos, conexiones y una condición existente; sin ejecutar ni modificar flujos.",
        evidence:
          "Editor, evaluación de reglas y servicio de ejecución presentes en código. No equivale a validación integral ni a una integración externa probada.",
        format:
          "Video WebM con MP4 alternativo; 16:9; 10–12 s; detalle estático complementario.",
        alternative:
          "Una pantalla se relaciona con una condición; sus salidas llevan a destinos diferentes según el resultado.",
        mobile:
          "Vista general más un detalle legible y transcripción; nunca depender de un grafo reducido para comprender.",
        loading:
          "Poster diferido y video bajo demanda; pausar al salir de pantalla o al ocultarse la pestaña.",
      },
    ],
    logic: {
      title: "El diseño también decide.",
      intro:
        "Una pantalla inicia el recorrido. Un botón lo conecta. Una condición permite elegir el siguiente paso según el resultado.",
      source:
        "Hay edición de conexiones, evaluación de reglas y un servicio de ejecución en el código actual. Su integración operativa no se ha probado en esta fase.",
      screen: "Pantalla",
      event: "Interacción",
      rule: "Condición",
      yes: "Se cumple",
      no: "Otro resultado",
      caption:
        "Relación conceptual entre diseño y lógica. No es un flujo capturado, una simulación ni evidencia de ejecución.",
      next: "Conocer la arquitectura",
    },
    control: {
      title: "Libertad al crear. Control al operar.",
      intro:
        "El lienzo forma parte de un sistema: el borrador se prepara, la publicación conserva revisiones y la sesión determina el contexto de administración.",
      stages: [
        {
          name: "Borrador",
          body: "El trabajo editable mantiene su versión. El servicio comprueba conflictos antes de aceptar cambios.",
        },
        {
          name: "Publicación",
          body: "Publicar crea una revisión y actualiza la referencia pública. No es lo mismo que guardar el borrador.",
        },
        {
          name: "Historial",
          body: "Las revisiones publicadas se conservan. Restaurar crea otra revisión; no borra el recorrido anterior.",
        },
      ],
      tenantTitle: "Un contexto para cada tenant.",
      tenantBody:
        "La consola distingue administración de plataforma y de tenant. Los permisos y las consultas delimitan el contexto; esta lectura de código no sustituye una prueba de aislamiento ni una auditoría de seguridad.",
      scope:
        "Arquitectura implementada en código. Sin publicar portales ni comprobar operación de red en esta fase.",
      studio: "Explorar el lenguaje Creative Systems",
      evolution: "Ver qué funciona hoy",
    },
    evidenceNote:
      "Alcance revisado en código · octubre de 2026. Demostraciones públicas pendientes.",
    close: "Conoce el proyecto por dentro.",
    closeBody:
      "La intención creativa continúa en las decisiones técnicas. Explora la arquitectura, la evidencia y los límites del laboratorio en el caso de ingeniería.",
  },
  en: {
    builder: {
      title: "Compose every detail.",
      intro:
        "Start with a screen. Combine blocks, arrange their layers and adjust each element’s properties. Shape the portal on the canvas.",
      parts: ["Purposeful blocks", "Ordered layers", "Contextual properties"],
      inspectorTitle: "Details shape the design.",
      inspectorBody:
        "Text, image, button or container: the inspector adapts its controls to the selected element. Structure and appearance are edited in the same workspace.",
      responsiveTitle: "Another screen. The same intent.",
      responsiveBody:
        "Desktop, tablet and mobile each have a view in the editor. Reviewing those compositions is part of the process before preparing a publication.",
    },
    media: {
      pending: "Demonstration to prepare",
      note: "Reserved space. No product screenshots or simulation are shown here.",
      specification: "What this demonstration will show",
      labels: [
        "Function",
        "Evidence scope",
        "Format and duration",
        "Text alternative",
        "On mobile",
        "Loading plan",
      ],
    },
    slots: [
      {
        id: "demo-builder",
        name: "Portal Builder",
        word: "Compose",
        ratio: "16 / 9",
        kind: "wide",
        feature:
          "Canvas, block library and layer tree; select an element without editing it.",
        evidence:
          "Interface implemented in source. Real footage and visual review are still pending; this space does not establish functionality.",
        format:
          "WebM with an MP4 alternative; 16:9; 15–20 s; audio not required.",
        alternative:
          "The editor shows the full screen; a block is selected and located in its layers.",
        mobile:
          "Full poster without cropping. Optional fullscreen playback to read the controls.",
        loading:
          "Lazy-loaded optimized poster with reserved space. Video on request only; preload=none.",
      },
      {
        id: "demo-inspector",
        name: "Inspector",
        word: "Refine",
        ratio: "4 / 3",
        kind: "inspector",
        feature:
          "Select a button and read its contextual properties without changing values.",
        evidence:
          "Contextual controls verified in source. Property changes and persistence are not demonstrated here.",
        format: "Two real screenshots or WebM/MP4 video; 4:3; 6–8 s.",
        alternative:
          "Selecting a button reveals its content and appearance controls in the inspector.",
        mobile:
          "Stacked screenshots with descriptions; accessible image enlargement if added.",
        loading:
          "Lazy AVIF/WebP with explicit dimensions; optional on-demand video.",
      },
      {
        id: "demo-responsive",
        name: "Responsive",
        word: "Adapt",
        ratio: "9 / 16",
        kind: "portrait",
        feature:
          "Switch between desktop, tablet and mobile views of the same demonstration portal.",
        evidence:
          "View selectors and logic are implemented. The quality of a specific portal needs to be checked in real footage.",
        format: "WebM/MP4 video or screenshot sequence; 9:16; 6–8 s.",
        alternative:
          "The same portal appears in desktop view and then in its mobile view.",
        mobile:
          "Complete vertical view with an adjacent transcript. No horizontal scrolling or autoplay.",
        loading:
          "Lazy poster; vertical rendition selected by size; media on request only.",
      },
      {
        id: "demo-logic",
        name: "Logic Builder",
        word: "Connect",
        ratio: "16 / 9",
        kind: "logic",
        feature:
          "Show screens, ports, connections and an existing condition without running or changing flows.",
        evidence:
          "Editor, rule evaluation and execution service exist in source. This is not end-to-end validation or proof of an external integration.",
        format:
          "WebM with an MP4 alternative; 16:9; 10–12 s; supplementary still detail.",
        alternative:
          "A screen connects to a condition; its outputs lead to different destinations according to the result.",
        mobile:
          "Overview, readable detail and transcript; understanding must not depend on a tiny graph.",
        loading:
          "Lazy poster and on-demand video; pause offscreen or when the tab is hidden.",
      },
    ],
    logic: {
      title: "Design makes decisions, too.",
      intro:
        "A screen starts the journey. A button connects it. A condition chooses the next step according to the result.",
      source:
        "Connection editing, rule evaluation and an execution service exist in the current source. Their operational integration has not been tested in this phase.",
      screen: "Screen",
      event: "Interaction",
      rule: "Condition",
      yes: "Matches",
      no: "Other result",
      caption:
        "A conceptual relationship between design and logic. Not a captured flow, a simulation or execution evidence.",
      next: "Explore the architecture",
    },
    control: {
      title: "Freedom to create. Control to operate.",
      intro:
        "The canvas belongs to a system: drafts are prepared, publication preserves revisions and the session determines the administration context.",
      stages: [
        {
          name: "Draft",
          body: "Editable work retains its version. The service checks for conflicts before accepting changes.",
        },
        {
          name: "Publication",
          body: "Publishing creates a revision and updates the public reference. It is a separate operation from saving a draft.",
        },
        {
          name: "History",
          body: "Published revisions are retained. Restoring creates another revision and preserves previous history.",
        },
      ],
      tenantTitle: "A context for each tenant.",
      tenantBody:
        "The console distinguishes platform and tenant administration. Permissions and queries scope the context; this source review is not an isolation test or a security audit.",
      scope:
        "Architecture implemented in source. No portals published or network operations tested in this phase.",
      studio: "Explore the Creative Systems language",
      evolution: "See what works today",
    },
    evidenceNote:
      "Scope reviewed in source · October 2026. Public demonstrations pending.",
    close: "Get to know the project inside out.",
    closeBody:
      "Creative intent continues in technical decisions. Explore the architecture, evidence and laboratory limits in the engineering case.",
  },
};
