# NDL-WEB-003 — plan de diseño

Baseline local 8d48a14, main publicado d4f8330. Rama sucesora: codex/ndl-web-003-product-storytelling.

Paleta conservada: Canvas #F7F7F4, Surface #FFFFFF, Ink #111111, Electric #5E46FF, Signal #C8FF5E. Syne en títulos y DM Sans en lectura; alineación izquierda, texto <65ch.

Secuencia: Hero libertad → problema oscuro → Builder blanco (medio principal grande + inspector lateral + responsive vertical) → Design to Logic negro (diagrama editorial de una decisión, no réplica de app) → control blanco (ciclo borrador/revisión + lectura tenant) → Living Interface conceptual conservada → horizonte y cierre violeta con caso técnico.

Wireframe escritorio:
[ Hero 62% texto | composición heredada ]
[ Problema: tipografía de gran escala, negro ]
[ Builder: título | contexto ]
[ reserva 16:9 a ancho completo ]
[ Inspector reserva 4:3 | texto / Responsive 9:16 ]
[ Lógica: título blanco | decisión abstracta ]
[ reserva 16:9 ]
[ Control: gran palabra + líneas editoriales ]
[ Living Interface: controles originales ]
[ Evolución: filas desplegables / cierre ]

Móvil: orden DOM narrativo, todos los medios en una columna; no recortar UI futura. Los paneles técnicos van en details nativo y los medios no fingen reproductores. Cada espacio expone que no contiene captura ni demo; el estado se acredita por código, no por la representación.

Revisión contra brief: se descarta sucesión de tarjetas y falsa maqueta de editor. La firma visual sigue siendo el plano plegado de 002. La sección Logic añade una sola relación scroll entre ramas; evita animar las dos como si se ejecutaran a la vez. Todas las composiciones completas sin GSAP.
