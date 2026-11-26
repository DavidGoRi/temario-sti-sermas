# Temario STI · SERMAS

Web de estudio para la oposición de **Técnico Especialista de Sistemas y Tecnologías de la Información** del Servicio Madrileño de Salud (SERMAS), convocatoria de 2025 (BOCM n.º 181, de 31-7-2025).

**Ábrela aquí:** https://davidgori.github.io/temario-sti-sermas/

Funciona en el navegador, también en el móvil, sin instalar nada. El progreso (notas, subrayados, estadísticas y plan) se guarda en el propio navegador.

## Qué incluye

- **Temario completo**: los 40 temas desarrollados según su epígrafe oficial (unas 146.000 palabras), con índice, 42 gráficos interactivos, mapa mental de cada tema y enlaces a los artículos citados.
- **Legislación**: 22 normas con el texto consolidado del BOE y el RGPD, con buscador y salto a cualquier artículo.
- **Esquemas, tarjetas y test**: más de 1.000 preguntas con explicación y enlace a su fuente.
- **Simulacro oficial** (95 preguntas + 10 de reserva, 115 minutos, cada error resta ¼), test adaptativo con repetición espaciada, preguntas trampa, tablas para memorizar, reglas nemotécnicas y ejercicios prácticos (subredes, cambio de base, plazos, nulidad, contratos, RAID, ordenar fases).
- **Exámenes anteriores** de la misma categoría (Servicio Aragonés de Salud 2019 y 2025, y SACYL de Castilla y León 2025) y del TAI del Estado (2026), corregidos con la plantilla oficial y su penalización.
- **Artículos clave**: 189 tarjetas con los artículos de las leyes que más caen (sacados de las preguntas y del temario, con su texto del BOE), con repetición espaciada, filtro por ley o por tema y audio.
- **Progreso individual guardado en tu navegador**: se guarda solo y por duplicado (localStorage y copia en IndexedDB, con almacenamiento persistente); no se envía a ningún servidor. En «Progreso y nota» puedes descargar o copiar una copia de seguridad y restaurarla en otro dispositivo.
- **Esquema imprimible** de cada tema (o de los 40): una hoja con los puntos clave, las ideas que más caen, las reglas para recordar y los artículos clave (solo en la versión de GitHub).
- **Plan de estudio** por fechas con cuenta atrás, **estadísticas** con nota estimada, **ensayo** imprimible del día del examen, **impugnaciones**, **subrayado y notas**, **buscador global**, **audio** de los 40 temas, del repaso exprés y de las tarjetas grabado con la voz neuronal Ximena de Microsoft (español de España), con el párrafo que se lee resaltado y descarga para escuchar sin conexión; **ajustes de lectura** (interlineado, ancho, tipografías Lexend y Atkinson Hyperlegible y modo lectura), **repaso semanal** con minisimulacro y modo oscuro.

## Cómo se construye

El contenido se edita en `fuente/` y se compila con Node.js:

```
cd fuente
node build.js
```

- `fuente/temas/NN.md`: temas desarrollados (Markdown; enlaces a leyes con `[[BOE-A-xxxx#artículo|texto]]` y gráficos con `::diagrama nombre`).
- `fuente/preguntas/NN.txt`: banco de preguntas (`?` enunciado, `+` correcta, `-` incorrectas, `=` explicación, `@` referencia).
- `fuente/datos.js`: esquemas, tarjetas y test de cada tema.
- `fuente/generar_articulos.js`: genera `articulos.js` (tarjetas de artículos clave) al compilar.
- `fuente/diagramas.js`, `tablas.js`, `trampas.js`, `nemotecnias.js`, `examenes.js`: el resto de contenidos.
- `fuente/descargar_leyes.js`: descarga la legislación de la API de datos abiertos del BOE.

## Aviso

Es material de estudio personal, no oficial. Contrasta siempre los datos legales con el texto consolidado del BOE o del BOCM. Los cuadernillos de examen se enlazan a sus webs oficiales; aquí solo se guardan las plantillas de respuestas para poder corregirlos.

## Autor

<!-- author-section -->
Hecho por **David Gómez Rivas**, técnico de soporte IT y sistemas. **Disponible para trabajar** en soporte IT o administración de sistemas (presencial o remoto).

[![LinkedIn](https://img.shields.io/badge/LinkedIn-David_G%C3%B3mez_Rivas-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/david-gomez-rivas-6026501b7/) [![Email](https://img.shields.io/badge/Email-david.gm.ri%40gmail.com-EA4335?logo=gmail&logoColor=white)](mailto:david.gm.ri@gmail.com) [![Ko-fi](https://img.shields.io/badge/Ko--fi-Ap%C3%B3yame-FF5E5B?logo=kofi&logoColor=white)](https://ko-fi.com/davidgmri)

Si este proyecto te ahorra tiempo, puedes [apoyarlo en Ko-fi](https://ko-fi.com/davidgmri). Es totalmente opcional: seguirá siendo gratis. Una ⭐ también ayuda.

Más proyectos en [github.com/DavidGoRi](https://github.com/DavidGoRi).

