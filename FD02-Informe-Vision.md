<center>

[comment]: <img src="./media/media/image1.png" style="width:1.088in;height:1.46256in" alt="escudo.png" />

![./media/media/image1.png](./media/logo-upt.png)

**UNIVERSIDAD PRIVADA DE TACNA**

**FACULTAD DE INGENIERIA**

**Escuela Profesional de Ingeniería de Sistemas**

**Proyecto *Tacna Decide — Dashboard Electoral y Observatorio de Inteligencia Cívica***

Curso: *Inteligencia de Negocios (SI-885)*

Docente: *Mag. Patrick José Cuadros Quiroga*

Integrantes:

***Vargas Candia, Hashira Belén (2020067891)***  
***Platero Choque, Víctor Raúl (2020068124)***  
***(Grupo 1)***

**Tacna – Perú**

***2026***

**  
**
</center>
<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

|CONTROL DE VERSIONES||||||
| :-: | :- | :- | :- | :- | :- |
|Versión|Hecha por|Revisada por|Aprobada por|Fecha|Motivo|
|1\.0|HBVC / VRP|HBVC|VRP|06/10/2026|Versión Original y Culminación del Documento de Visión|












**Sistema *Tacna Decide — Dashboard Electoral***

**Documento de Visión**

**Versión *1.0***
**

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

|CONTROL DE VERSIONES||||||
| :-: | :- | :- | :- | :- | :- |
|Versión|Hecha por|Revisada por|Aprobada por|Fecha|Motivo|
|1\.0|HBVC / VRP|HBVC|VRP|06/10/2026|Versión Original y Culminación del Documento de Visión|


<div style="page-break-after: always; visibility: hidden">\pagebreak</div>


**INDICE GENERAL**
#
[1.	Introducción](#_Toc52661346)

1.1	Propósito

1.2	Alcance

1.3	Definiciones, Siglas y Abreviaturas

1.4	Referencias

1.5	Visión General

[2.	Posicionamiento](#_Toc52661347)

2.1	Oportunidad de negocio

2.2	Definición del problema

[3.	Descripción de los interesados y usuarios](#_Toc52661348)

3.1	Resumen de los interesados

3.2	Resumen de los usuarios

3.3	Entorno de usuario

3.4	Perfiles de los interesados

3.5	Perfiles de los Usuarios

3.6	Necesidades de los interesados y usuarios

[4.	Vista General del Producto](#_Toc52661349)

4.1	Perspectiva del producto

4.2	Resumen de capacidades

4.3	Suposiciones y dependencias

4.4	Costos y precios

4.5	Licenciamiento e instalación

[5.	Características del producto](#_Toc52661350)

[6.	Restricciones](#_Toc52661351)

[7.	Rangos de calidad](#_Toc52661352)

[8.	Precedencia y Prioridad](#_Toc52661353)

[9.	Otros requerimientos del producto](#_Toc52661354)

b) Estandares legales

c) Estandares de comunicación	](#_toc394513800)37

d) Estandaraes de cumplimiento de la plataforma	](#_toc394513800)42

e) Estandaraes de calidad y seguridad	](#_toc394513800)42

[CONCLUSIONES](#_Toc52661355)

[RECOMENDACIONES](#_Toc52661356)

[BIBLIOGRAFIA](#_Toc52661357)

[WEBGRAFIA](#_Toc52661358)


<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

**<u>Informe de Visión</u>**

1. <span id="_Toc52661346" class="anchor"></span>**Introducción**

    1.1	Propósito

    El propósito del presente Documento de Visión es definir de manera integral las metas, características funcionales y no funcionales, alcances y directrices arquitecturales del sistema **Tacna Decide — Dashboard Electoral y Observatorio Cívico**. Este documento formaliza las necesidades de la ciudadanía, investigadores y medios de comunicación del departamento de Tacna respecto al acceso ágil, confiable y transparente a los resultados de las Elecciones Regionales y Municipales 2026 (ERM 2026), sirviendo de base contractual y técnica para el desarrollo y evolución del sistema de Inteligencia de Negocios y Orientación Cívica.

    1.2	Alcance

    El sistema comprende una solución de software web de alta disponibilidad construida bajo la arquitectura JAMstack (sitio estático optimizado), orientada a dos frentes principales:
    - **Inteligencia Visual Electoral:** Monitoreo analítico de los comicios para la Alcaldía Provincial de Tacna y la Gobernación Regional de Tacna; generación interactiva de indicadores clave de desempeño (KPIs: organización puntera, margen de diferencia con el segundo lugar, avance del conteo oficial de actas, alcance territorial), gráficos de barras proporcionales, anillos de avance del escrutinio, rankings tabulados y exportación certificada a archivos CSV.
    - **Servicios Cívicos al Vecino:** Plataforma de orientación para trámites electorales y municipales que integra un buscador inteligente con filtros temáticos, enlaces directos a los sistemas del Jurado Nacional de Elecciones (JNE) y la Oficina Nacional de Procesos Electorales (ONPE), un directorio verificado de las cuatro municipalidades provinciales de Tacna (Tacna, Tarata, Candarave y Jorge Basadre), una guía interactiva con lista de chequeo imprimible para la tramitación de dispensas por omisión al sufragio y funciones de accesibilidad visual (modo A+ de texto ampliado).

    1.3	Definiciones, Siglas y Abreviaturas

    - **BI (Business Intelligence):** Inteligencia de Negocios; conjunto de metodologías y aplicaciones para transformar datos brutos en información significativa y procesable para la toma de decisiones.
    - **Dashboard (Cuadro de Mando):** Interfaz gráfica interactiva que resume y visualiza indicadores críticos y métricas relevantes de un proceso en una sola pantalla.
    - **ERM 2026:** Elecciones Regionales y Municipales del año 2026 en la República del Perú.
    - **ONPE:** Oficina Nacional de Procesos Electorales; organismo constitucional autónomo encargado de la organización y ejecución de los procesos electorales.
    - **JNE:** Jurado Nacional de Elecciones; máximo tribunal de justicia electoral en el Perú, fiscalizador y proclamador oficial de resultados.
    - **RENIEC:** Registro Nacional de Identificación y Estado Civil; entidad encargada de la elaboración y depuración del padrón electoral.
    - **KPI (Key Performance Indicator):** Indicador Clave de Rendimiento o Desempeño.
    - **CSV (Comma-Separated Values):** Formato estándar de archivo de texto plano para el intercambio y análisis de datos tabulares.
    - **JAMstack:** Arquitectura moderna de desarrollo web basada en JavaScript del lado cliente, APIs reutilizables y marcado pre-renderizado (Markup estático).
    - **CDN (Content Delivery Network):** Red distribuida de servidores que entrega contenido web con alta velocidad y tolerancia a fallos.
    - **WAI-ARIA:** Iniciativa de Accesibilidad Web para Aplicaciones Ricas en Internet del W3C.

    1.4	Referencias

    - Constitución Política del Perú de 1993.
    - Ley Orgánica de Elecciones (Ley N° 26859) y modificatorias.
    - Ley de Transparencia y Acceso a la Información Pública (Ley N° 27806).
    - Ley de Protección de Datos Personales (Ley N° 29733).
    - Decretos Supremos de Convocatoria a Elecciones Regionales y Municipales 2026.
    - Reportes periodísticos y cortes de conteo publicados por Diario El Comercio y fuentes oficiales de ONPE.
    - Repositorio del proyecto en GitHub: `Hashiravc/Dash_Electoral`.

    1.5	Visión General

    El documento se organiza estructuradamente en nueve secciones principales: la definición del posicionamiento del producto ante la problemática regional (Sección 2); la caracterización y segmentación de interesados y usuarios finales (Sección 3); la perspectiva integral del producto, capacidades, dependencias y costos (Sección 4); la especificación detallada de características funcionales (Sección 5); las restricciones de diseño y tecnología (Sección 6); los rangos de calidad técnica esperados (Sección 7); la priorización de requerimientos (Sección 8); el cumplimiento de estándares legales, comunicacionales y de seguridad (Sección 9); y concluye con las conclusiones, recomendaciones y referencias bibliográficas correspondientes.

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

2. <span id="_Toc52661347" class="anchor"></span>**Posicionamiento**

    2.1	Oportunidad de negocio

    En el contexto de comicios electorales masivos, el flujo de información suele estar saturado de datos parciales desordenados, especulaciones en redes sociales y saturación de portales gubernamentales tradicionales que dejan de responder ante picos de alta demanda ciudadana. Existe una necesidad latente en la comunidad tacneña (integrada por más de 300,000 electores, periodistas, académicos y líderes vecinales) de contar con un observatorio digital independiente, ágil, altamente responsivo y de acceso gratuito que procese la información con rigurosidad metodológica.

    La oportunidad estratégica radica en ofrecer un producto tecnológico con cero costo de mantenimiento recurrente, cero fricción de registro (sin pedir datos personales ni DNI) y máxima velocidad de respuesta (inferior a un segundo), posicionando a la Universidad Privada de Tacna como una institución promotora de soluciones de Inteligencia de Negocios aplicadas a la transparencia cívica y la gobernanza digital regional.

    2.2	Definición del problema

    | Elemento | Descripción Detallada |
    | :--- | :--- |
    | **El problema de:** | La dispersión, descontextualización y sobrecarga informativa sobre los resultados del escrutinio en las Elecciones Regionales y Municipales 2026, sumada a la dificultad del ciudadano para encontrar orientación rápida sobre trámites electorales post-sufragio y contacto municipal. |
    | **Afecta a:** | Los ciudadanos votantes, miembros de mesa, investigadores sociales, medios periodísticos locales y habitantes de las cuatro provincias del departamento de Tacna (Tacna, Tarata, Candarave y Jorge Basadre). |
    | **El impacto de lo cual es:** | Confusión pública entre porcentajes parciales y proclamación definitiva de ganadores, proliferación de noticias no verificadas (*fake news*), incertidumbre sobre causales de multas o dispensas, y pérdida de tiempo en desplazamientos físicos innecesarios hacia sedes institucionales. |
    | **Una solución exitosa sería:** | Desarrollar la plataforma web *Tacna Decide*, un dashboard de Inteligencia de Negocios ligero e independiente que visualice con exactitud científica y auditabilidad las cifras electorales con sus cortes y fuentes, integrando un catálogo interactivo de servicios cívicos, lista imprimible de dispensas y directorio institucional directo. |

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

3. <span id="_Toc52661348" class="anchor"></span>**Descripción de los interesados y usuarios**

    3.1	Resumen de los interesados

    | Interesado (Stakeholder) | Representante / Colectivo | Rol en el Proyecto | Expectativas Principales |
    | :--- | :--- | :--- | :--- |
    | **Comunidad Ciudadana de Tacna** | Electores de las provincias de Tacna, Tarata, Candarave y Jorge Basadre. | Usuarios finales beneficiarios. | Acceder a resultados claros, entender el avance del conteo sin términos confusos y gestionar trámites de dispensa fácilmente. |
    | **Medios de Comunicación y Periodistas** | Prensa escrita, radio, televisión y medios digitales de Tacna. | Usuarios analíticos y difusores. | Disponer de datos ordenados, comparar márgenes porcentuales y descargar tablas de resultados en formato CSV para análisis periodístico. |
    | **Academia (UPT - EPIS)** | Docentes y estudiantes del curso de Inteligencia de Negocios. | Entidad patrocinadora y evaluadora. | Demostrar la aplicación práctica de herramientas de BI, arquitectura web estática y cumplimiento de estándares de ingeniería de software. |
    | **Entidades Públicas Locales** | Municipalidades provinciales y oficinas desconcentradas (ODPE / JEE). | Proveedores de datos y canales de servicio. | Disminución de consultas repetitivas en ventanilla y canalización ordenada de la ciudadanía hacia sus canales oficiales. |

    3.2	Resumen de los usuarios

    | Tipo de Usuario | Características Principales | Nivel Técnico | Frecuencia de Uso |
    | :--- | :--- | :---: | :---: |
    | **Ciudadano Común / Vecino** | Adultos y jóvenes de 18 a 70+ años con smartphones o computadoras hogareñas. | Básico | Esporádica / Alta durante la semana electoral. |
    | **Investigador / Periodista** | Analistas de datos, comunicadores y politólogos locales. | Intermedio / Avanzado | Frecuente / Intensiva durante el periodo de escrutinio. |
    | **Operador del Sistema (Administrador)** | Miembro del equipo de desarrollo encargado de actualizar `data.json`. | Avanzado | Periódica ante cada nuevo corte informativo. |

    3.3	Entorno de usuario

    El sistema se ejecuta en el navegador web del usuario sin necesidad de instalar aplicaciones nativas ni plugins. El entorno de usuario es heterogéneo:
    - **Dispositivos móviles (Smartphones y Tablets):** Pantallas de 360px a 768px de ancho, navegadores móviles Google Chrome, Safari, Samsung Internet, conectados mediante redes celulares 3G/4G/5G o Wi-Fi.
    - **Computadoras personales y de oficina:** Pantallas de 1024px a 1920px+ con Google Chrome, Mozilla Firefox, Microsoft Edge o Apple Safari.
    - **Entorno de baja conectividad:** La carga inicial transfiere menos de 150 KB de recursos optimizados, garantizando funcionamiento fluido aun con planes de datos limitados.

    3.4	Perfiles de los interesados

    - **Líder Comunitario y Elector Local:** Requiere respuestas inmediatas a preguntas esenciales: *¿Quién va adelante en la votación?*, *¿Qué tan amplia es la diferencia?*, *¿Cuál es el porcentaje de actas procesadas?*, *¿Qué tengo que hacer si no pude votar?*.
    - **Cronista / Analista Regional:** Demanda rigor en las fuentes: *¿A qué hora se realizó el corte?*, *¿Quién emitió la cifra?*, *¿Puedo descargar la serie en formato estructurado para alimentar mis hojas de cálculo o análisis estadístico?*.

    3.5	Perfiles de los Usuarios

    - **Usuario General (Móvil):** Prioriza la navegación mediante toques simples, menús colapsables tipo hamburguesa, tipografía legible y botones de llamada telefónica que abren directamente el marcador del celular.
    - **Usuario de Oficina (Escritorio):** Aprovecha la vista en múltiples columnas, paneles simultáneos de estadísticas y la descarga directa de datos en archivo CSV.
    - **Usuario con Baja Visión o Adulto Mayor:** Emplea el botón `A+ Lectura` para agrandar la escala visual de textos sin romper la maquetación.

    3.6	Necesidades de los interesados y usuarios

    | Necesidad Crítica | Prioridad | Solución Implementada en *Tacna Decide* |
    | :--- | :---: | :--- |
    | Visualizar los resultados de forma diferenciada entre provincia y región. | Alta | Selector segmentado interactivo (`Alcalde provincial` / `Gobernador regional`) que actualiza instantáneamente todos los KPIs y gráficos. |
    | Conocer la brecha exacta entre el primer y segundo lugar. | Alta | Tarjeta de métrica destacada que calcula en tiempo real la brecha en puntos porcentuales (pp). |
    | Saber si el conteo ha terminado o está en progreso. | Alta | Gráfico visual donut con el porcentaje exacto de avance atribuido a la fuente y etiqueta de advertencia "Resultados parciales". |
    | Acceder a trámites y teléfonos de contacto de las municipalidades. | Alta | Módulo de servicios con buscador instantáneo, menú desplegable por provincia, teléfonos enlazados (`tel:`) y enlaces directos a sedes oficiales. |
    | Descargar los datos para análisis personal. | Media | Botón "Descargar CSV" que genera dinámicamente un archivo estructurado con codificación UTF-8 con BOM. |
    | Saber qué hacer ante una multa electoral. | Alta | Asistente de dispensa con lista de chequeo de 4 pasos e integración para impresión en papel físico (`window.print()`). |

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

4. <span id="_Toc52661349" class="anchor"></span>**Estudio de
    Factibilidad**

    4.1	Perspectiva del producto

    *Tacna Decide* es un sistema web independiente y autónomo. No depende de sistemas transaccionales heredados (*legacy systems*) ni de bases de datos centralizadas en runtime. Se sitúa como una capa analítica ligera entre las fuentes públicas de datos oficiales/periodísticos y la ciudadanía. Su arquitectura desacoplada garantiza que la caída de servidores de terceros no afecte la disponibilidad del tablero, ya que este sirve copias fechadas auditables y estáticas.

    ```
    [ Fuentes Públicas: ONPE / JNE / El Comercio ]
                         │
                         ▼ (Validación y estructuración)
             [ Repositorio de Datos: data.json / citizen.json ]
                         │
                         ▼ (Build estático con Node.js)
                 [ Directorio de Distribución: dist/ ]
                         │
                         ▼ (Despliegue automatizado)
               [ Plataforma Render Static Sites (CDN Global) ]
                         │
          ┌──────────────┴──────────────┐
          ▼                             ▼
    [ Usuario Móvil ]            [ Usuario Escritorio ]
    ```

    4.2	Resumen de capacidades

    - Visualización reactiva e instantánea de datos electorales sin recarga de página (*Single Page Application* ligera basada en anclas hash).
    - Representación gráfica de barras horizontales proporcionales a las cuotas de votación con código de colores sobrio y accesible.
    - Cálculo automatizado de la diferencia matemática entre el candidato líder y el segundo lugar.
    - Panel de avance del conteo en gráfico donut basado en gradientes cónicos nativos de CSS (`conic-gradient`).
    - Tabla comparativa con estados explícitos de conteo y descarga de datos en formato CSV con metadatos completos.
    - Directorio municipal inteligente con filtrado de sedes, horarios y teléfonos enlazados para marcado telefónico directo.
    - Asistente de preparación para dispensa electoral con barra de progreso reactiva y hoja de estilo especializada para impresión en papel.
    - Panel contextual con información territorial histórica (4 provincias y 28 distritos) y notas de calidad de datos que advierten discrepancias en el padrón electoral de RENIEC.

    4.3	Suposiciones y dependencias

    - Se asume que los usuarios finales disponen de un navegador web moderno con soporte para JavaScript ES6 y CSS Flexbox/Grid.
    - Se asume la disponibilidad del servicio de CDN de Render con su nivel de servicio de alta disponibilidad (99.9%).
    - La veracidad de los datos electorales depende de la estricta correspondencia con los reportes fechados de El Comercio y la ONPE, asumiendo su carácter provisional hasta la proclamación definitiva del JNE.
    - Se asume que las URLs oficiales de trámites gubernamentales (`gob.pe`, `jne.gob.pe`, `onpe.gob.pe`) mantienen su vigencia institucional.

    4.4	Costos y precios

    El sistema *Tacna Decide* es un bien público digital desarrollado en el ámbito universitario:
    - **Precio al usuario final:** Completamente gratuito y libre de publicidad.
    - **Costo de desarrollo:** S/. 7,180.00 (asumido mediante horas académicas de desarrollo e infraestructura abierta).
    - **Costo de mantenimiento en producción:** S/. 0.00 en infraestructura gracias al esquema de alojamiento estático en Render.
    - **Costo de actualización periódica:** Menor a S/. 200.00 mensuales en horas-hombre para la ingesta de nuevos datos en JSON.

    4.5	Licenciamiento e instalación

    - **Licencia:** El proyecto se distribuye bajo términos de código abierto para fines educativos, académicos y cívicos, prohibiéndose su uso con fines proselitistas o de lucro.
    - **Instalación:** No requiere instalación en el dispositivo cliente. Para su ejecución en entornos locales de desarrollo, basta con contar con Node.js 20+ y ejecutar:
      ```sh
      npm run build
      npm start
      ```
    - **Despliegue:** Despliegue automatizado en Render Static Sites a través del archivo de especificación de infraestructura `render.yaml`, apuntando al directorio `dist/`.

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

5. <span id="_Toc52661350" class="anchor"></span>**Características del producto**

    1. **Tablero Analítico con Selector Dinámico de Ámbito:** Permite conmutar fluidamente entre la elección para la "Alcaldía provincial" (ámbito provincial de Tacna) y la "Gobernación regional" (ámbito departamental de Tacna), actualizando todos los paneles de datos en tiempo real.
    2. **Tarjetas de Indicadores Clave (KPI Cards):**
       - Organización puntera: exhibe el porcentaje y denominación de la agrupación en primer lugar con advertencia de estado "Posición provisional · No proclamada".
       - Brecha porcentual: calcula y muestra en puntos porcentuales la ventaja sobre el segundo lugar.
       - Organizaciones reportadas: consigna el conteo de agrupaciones incluidas en el corte.
       - Ámbito electoral: identifica el alcance geopolítico de la elección consultada.
    3. **Gráficos Analíticos Nativos:**
       - Gráfico de barras horizontales: refleja la distribución del voto reportado de las cinco agrupaciones principales, con etiquetas descriptivas y proporciones relativas a la escala máxima del 40%.
       - Gráfico donut de avance: ilustra el porcentaje acumulado de actas contabilizadas con corte horario exacto y enlace directo al reporte fuente original.
       - Ranking ordenado: lista jerárquica compacta de las organizaciones políticas.
    4. **Exportación Estructurada a CSV:** Generación en el cliente de un archivo descargable (`tacna-[cargo]-2026.csv`) que incluye cabeceras estandarizadas, comillas de escape y metadatos de auditoría.
    5. **Calendario Electoral de Octubre 2026:** Cuadrícula mensual interactiva que resalta los hitos clave del proceso: domingo 4 de octubre (jornada de sufragio) y martes 6 de octubre (corte de consulta y auditoría de fuentes).
    6. **Buscador y Filtro Temático de Servicios al Ciudadano:** Motor de búsqueda reactivo sobre `citizen.json` que normaliza acentos y texto para localizar rápidamente trámites por palabras clave (ej. "multa", "dispensa", "local de votación"), con opciones de filtrado por temas: Trámites electorales, Información electoral y Atención municipal.
    7. **Directorio Provincial Interactivo:** Selector de provincias que presenta la razón social de la municipalidad, dirección física de la sede, horario de atención y botones telefónicos enlazados para llamada directa.
    8. **Guía Interactiva de Dispensa Electoral:** Lista de verificación interactiva de cuatro pasos para preparar la documentación de justificación ante el JNE, con indicador reactivo de progreso y botón de impresión con estilos optimizados para papel.
    9. **Módulo de Contexto Territorial y Control de Calidad:** Fichas biográficas institucionales de las autoridades vigentes del período 2023-2026 (alcalde provincial Pascual Güisa Bravo y gobernador Luis Torres Robledo), delimitación de 4 provincias y 28 distritos según PCM 2021, y un panel de advertencia analítica sobre inconsistencias numéricas detectadas en la nota oficial de RENIEC respecto al padrón electoral.
    10. **Herramienta de Accesibilidad Visual A+:** Conmutador de modo de lectura accesible que incrementa el tamaño de la tipografía y el interlineado en toda la plataforma.

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

6. <span id="_Toc52661351" class="anchor"></span>**Restricciones**

    1. **Restricción de Arquitectura Tecnológica:** La aplicación debe operar estrictamente como un sitio web estático (Static Site), sin depender de un servidor de aplicaciones backend (como Express o Django en tiempo de ejecución) ni de motores de bases de datos relacionales en línea, asegurando invulnerabilidad frente a ataques web comunes y máxima velocidad de entrega vía CDN.
    2. **Restricción de Privacidad y Manejo de Datos:** El sistema no puede recolectar, registrar, almacenar ni transmitir datos personales de los usuarios (DNI, nombres, huellas, contraseñas o geolocalización personal). Cualquier trámite que requiera autenticación individual debe redirigir al usuario al portal gubernamental oficial respectivo (`.gob.pe`).
    3. **Restricción de Actualización y Conexión:** El tablero no efectúa sincronizaciones en vivo mediante WebSockets ni sondeos automáticos recurrentes hacia las plataformas del Estado, evitando bloqueos de IP o sobrecarga de los portales de la ONPE/JNE. Las actualizaciones se efectúan mediante actualización versionada del archivo `data.json`.
    4. **Restricción de Imparcialidad y Neutralidad Electoral:** El sistema no puede mostrar opiniones políticas, inclinaciones proselitistas, proyecciones basadas en encuestas a boca de urna no oficiales ni proclamar ganadores antes de las resoluciones oficiales del JNE.
    5. **Restricción de Compatibilidad de Navegadores:** Se excluye el soporte para navegadores obsoletos que no soporten el estándar ECMAScript 6 o propiedades modernas de CSS Grid y CSS Variables (por ejemplo, Internet Explorer 11).

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

7. <span id="_Toc52661352" class="anchor"></span>**Rangos de Calidad**

    - **Rendimiento y Velocidad:**
      - Tiempo de primera pintura con contenido (First Contentful Paint - FCP): Inferior a 0.5 segundos bajo conexión estándar.
      - Tiempo total de carga interactiva (Time to Interactive - TTI): Inferior a 1.0 segundo.
      - Peso de transferencia total de la aplicación (HTML + CSS + JS + JSON): Menor a 150 KB.
    - **Disponibilidad y Confiabilidad:**
      - Disponibilidad del servicio (Uptime): 99.9% garantizado a través de la infraestructura global de Render Static Sites.
      - Tolerancia a picos de tráfico: Capacidad de soportar miles de peticiones simultáneas concurrentes sin degradación de rendimiento.
    - **Usabilidad y Accesibilidad:**
      - Cumplimiento de pautas WCAG 2.1 nivel AA: Relación de contraste de color superior a 4.5:1 en textos principales sobre fondo oscuro corporativo (`#0d304c`).
      - Navegabilidad mediante teclado: Inclusión de enlace "Saltar al contenido" (`skip link`), focos visuales definidos y navegación completa sin requerir mouse.
      - Adaptabilidad responsiva: Visualización fluida y consistente en anchos de pantalla desde 320 píxeles hasta monitores 4K.
    - **Portabilidad y Mantenibilidad:**
      - Código modular y limpio sin dependencias de frameworks externos en runtime.
      - Compatibilidad multiplataforma garantizada en Windows, macOS, Linux, Android e iOS.

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

8. <span id="_Toc52661353" class="anchor"></span>**Precedencia y Prioridad**

    Los requisitos y características del sistema han sido organizados bajo la metodología MoSCoW (Must have, Should have, Could have, Won't have):

    | Nivel de Prioridad | Característica / Módulo | Justificación Técnica y de Negocio |
    | :--- | :--- | :--- |
    | **Alta (Must Have)** | Visualización de indicadores electorales (KPIs) y gráficos de distribución para Alcaldía y Región. | Constituye el núcleo analítico imprescindible del producto para la toma de decisiones ciudadana. |
    | **Alta (Must Have)** | Selector de ámbito electoral y cálculo de brechas porcentuales. | Permite diferenciar con precisión las dos elecciones que coexisten en la misma jornada. |
    | **Alta (Must Have)** | Directorio municipal y catálogo de servicios con enlaces directos a trámites oficiales. | Resuelve la necesidad crítica inmediata de gestión ciudadana en el territorio tacneño. |
    | **Media (Should Have)** | Módulo de exportación de resultados a formato CSV. | Aporta valor indispensable para la labor de prensa, auditabilidad y análisis académico. |
    | **Media (Should Have)** | Asistente de preparación para dispensa con soporte para impresión (`window.print()`). | Facilita la preparación de documentos a usuarios que no pueden acudir a cabinas de internet. |
    | **Baja (Could Have)** | Calendario interactivo de la jornada de octubre 2026. | Agrega valor estético y contextual sin condicionar la funcionalidad esencial. |
    | **Baja (Could Have)** | Conmutador de modo accesible de lectura A+. | Mejora la experiencia para usuarios con problemas de visión leve. |
    | **Excluido (Won't Have)** | Consulta de DNI individual dentro del dashboard o conexión de base de datos SQL activa. | Excluido expresamente por normativas de privacidad (Ley N° 29733) y para mantener la arquitectura estática. |

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

9. <span id="_Toc52661354" class="anchor"></span>**Otros requerimientos del producto**

    b) Estandares legales

    - **Ley de Protección de Datos Personales (Ley N° 29733):** El sistema garantiza anonimato absoluto; no utiliza cookies de seguimiento invasivas ni registra direcciones IP con fines publicitarios.
    - **Ley de Transparencia y Acceso a la Información Pública (Ley N° 27806):** Todas las cifras, fuentes, fechas y metodologías están expuestas de forma abierta e hipervinculada para consulta ciudadana irrestricta.
    - **Código de Ética de la Función Pública y Neutralidad:** El observatorio se adhiere a un lenguaje neutral, riguroso y objetivo, absteniéndose de calificativos hacia las agrupaciones en contienda.

    c) Estandares de comunicación	](#_toc394513800)37

    - Protocolo de transferencia seguro obligatorio mediante **HTTPS** con cifrado **TLS 1.3**, impidiendo la interceptación o alteración de los datos en tránsito.
    - Respuestas HTTP con compresión moderna (Brotli y Gzip) y cabeceras de caché eficientes (`Cache-Control`) para archivos estáticos inmutables.
    - Codificación estándar universal **UTF-8** en todos los recursos HTML, JavaScript, JSON y archivos descargables CSV.

    d) Estandaraes de cumplimiento de la plataforma	](#_toc394513800)42

    - Estándar de compilación para Sitios Estáticos en Render mediante archivo declarativo `render.yaml`.
    - Cumplimiento de estándares de compatibilidad Node.js v20 LTS o superior para los scripts de mantenimiento y empaquetado.
    - Compatibilidad estricta con navegadores web aprobados por el consorcio W3C (Google Chrome 100+, Mozilla Firefox 100+, Safari 15+, Microsoft Edge 100+).

    e) Estandaraes de calidad y seguridad	](#_toc394513800)42

    - Empleo de cabeceras de seguridad web (`X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`).
    - Validación y normalización estricta de entradas de texto en el buscador en el cliente para prevenir cualquier intento de inyección de código.
    - Código fuente validado mediante linters de estándares de accesibilidad WAI-ARIA y semántica HTML5.

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

<span id="_Toc52661355" class="anchor"></span>**CONCLUSIONES**

1. **Cumplimiento Integral de la Visión:** El sistema *Tacna Decide* responde con solvencia técnica, rigor metodológico y valor social a la necesidad de contar con un observatorio electoral moderno, neutral y accesible para la región de Tacna durante las ERM 2026.
2. **Eficiencia y Resiliencia Arquitectural:** La adopción de la arquitectura JAMstack (HTML5 semántico, CSS3, Vanilla JS y datos en JSON) sobre la plataforma de nube Render Static Sites garantiza un rendimiento sobresaliente (carga en menos de un segundo), disponibilidad del 99.9% y costo cero de infraestructura en producción.
3. **Innovación en Inteligencia Cívica:** El proyecto no se limita a graficar porcentajes de votación; aporta valor integral mediante el cálculo automático de brechas porcentuales, advertencias explícitas de calidad de datos, exportación de tablas en CSV y un completo catálogo de servicios municipales y electorales al vecino.
4. **Respeto a la Privacidad y la Ley:** Al prescindir de la captura de datos personales y basarse en fuentes de dominio público, el sistema cumple a cabalidad con la Ley N° 29733 de Protección de Datos y la Ley N° 27806 de Transparencia, salvaguardando la integridad de los usuarios.

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

<span id="_Toc52661356" class="anchor"></span>**RECOMENDACIONES**

1. **Automatización de Ingesta de Datos (Fase Futura):** Desarrollar un script en Node.js o Python que permita validar automáticamente la estructura del esquema JSON antes de cada despliegue, previniendo errores tipográficos en los porcentajes reportados.
2. **Ampliación de Cobertura Geográfica:** En iteraciones posteriores del producto, incorporar los resultados desagregados de las elecciones distritales de las cuatro provincias del departamento conforme la ONPE culmine el procesamiento de actas.
3. **Alianzas de Difusión Institucional:** Coordinar con la Escuela Profesional de Ingeniería de Sistemas (EPIS) y el área de Imagen Institucional de la Universidad Privada de Tacna la difusión del dashboard en redes institucionales y medios locales durante las semanas del escrutinio electoral.
4. **Incorporación de Soporte Offline (PWA):** Evaluar la integración de un Service Worker ligero para convertir la plataforma en una Progressive Web App (PWA), permitiendo la consulta de los últimos datos almacenados en caché aun sin conexión activa a internet.

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

<span id="_Toc52661357" class="anchor"></span>**BIBLIOGRAFIA**

1. Pressman, R. S., & Maxim, B. R. (2020). *Software Engineering: A Practitioner's Approach* (9th ed.). McGraw-Hill Education.
2. Sommerville, I. (2016). *Software Engineering* (10th ed.). Pearson.
3. Kimball, R., & Ross, M. (2013). *The Data Warehouse Toolkit: The Definitive Guide to Dimensional Modeling* (3rd ed.). John Wiley & Sons.
4. Few, S. (2013). *Information Dashboard Design: Displaying Data for At-a-Glance Monitoring* (2nd ed.). Analytics Press.
5. Jurado Nacional de Elecciones. (2026). *Compendio Electoral Peruano: Normativa y Jurisprudencia Electoral*. Fondo Editorial del JNE.
6. Oficina Nacional de Procesos Electorales. (2026). *Manual de Procedimientos Electorales para las ERM 2026*. Lima: ONPE.

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

<span id="_Toc52661358" class="anchor"></span>**WEBGRAFIA**

1. Jurado Nacional de Elecciones - Portal Oficial: https://www.jne.gob.pe/
2. Oficina Nacional de Procesos Electorales - Plataforma ERM 2026: https://erm2026.onpe.gob.pe/
3. Portal del Estado Peruano - Requisitos para Dispensa Electoral: https://www.gob.pe/113905
4. Sistema de Consulta de Multas Electorales del JNE: https://multas.jne.gob.pe/login/
5. Plataforma Electoral Voto Informado: https://votoinformado.jne.gob.pe/
6. Presidencia del Consejo de Ministros - Información Territorial de Tacna: https://www.gob.pe/institucion/pcm/campa%C3%B1as/4351-tacna-informacion-territorial
7. Render Static Sites - Documentación Oficial: https://render.com/docs/static-sites
8. MDN Web Docs - Guías de Accesibilidad Web (WAI-ARIA): https://developer.mozilla.org/es/docs/Web/Accessibility/ARIA
