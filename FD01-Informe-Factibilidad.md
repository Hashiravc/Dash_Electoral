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

Sistema *Tacna Decide — Dashboard Electoral*

Informe de Factibilidad

Versión *1.0*

|CONTROL DE VERSIONES||||||
| :-: | :- | :- | :- | :- | :- |
|Versión|Hecha por|Revisada por|Aprobada por|Fecha|Motivo|
|1\.0|HBVC / VRP|HBVC|VRP|06/10/2026|Versión Original|

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

# **INDICE GENERAL**

[1. Descripción del Proyecto](#_Toc52661346)

[2. Riesgos](#_Toc52661347)

[3. Análisis de la Situación actual](#_Toc52661348)

[4. Estudio de Factibilidad](#_Toc52661349)

[4.1 Factibilidad Técnica](#_Toc52661350)

[4.2 Factibilidad económica](#_Toc52661351)

[4.3 Factibilidad Operativa](#_Toc52661352)

[4.4 Factibilidad Legal](#_Toc52661353)

[4.5 Factibilidad Social](#_Toc52661354)

[4.6 Factibilidad Ambiental](#_Toc52661355)

[5. Análisis Financiero](#_Toc52661356)

[6. Conclusiones](#_Toc52661357)


<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

**<u>Informe de Factibilidad</u>**

1. <span id="_Toc52661346" class="anchor"></span>**Descripción del Proyecto**

    1.1. Nombre del proyecto

    **Tacna Decide — Dashboard Electoral y Observatorio Cívico para las Elecciones Regionales y Municipales (ERM 2026)**.

    1.2. Duración del proyecto

    El proyecto comprende una duración total de **8 semanas** de desarrollo, validación y despliegue continuo (iniciando el 18 de agosto de 2026 y culminando el 10 de octubre de 2026, abarcando las etapas previa, durante y post-jornada electoral del 4 de octubre de 2026).

    1.3. Descripción

    *Tacna Decide* es una plataforma web y tablero de control analítico (Business Intelligence Dashboard) de acceso público, liviano e independiente, concebido para brindar transparencia, trazabilidad y claridad analítica sobre los resultados parciales de las Elecciones Regionales y Municipales 2026 en el departamento y provincia de Tacna. 

    En procesos electorales subnacionales, la ciudadanía suele enfrentarse a una proliferación de información fragmentada, especulativa o carente de contexto metodológico. El proyecto se desenvuelve en un entorno de alta demanda informativa ciudadana, donde resulta crítico distinguir con rigurosidad entre el avance del conteo oficial de actas, la representatividad estadística de los reportes y los estados de proclamación definitiva. Además del núcleo analítico (gráficos de distribución de votos, cálculo automatizado de brechas porcentuales entre organizaciones líderes, indicadores visuales de avance del escrutinio y exportación estructurada en CSV), *Tacna Decide* integra un módulo de servicios al vecino con acceso directo a trámites oficiales de dispensa electoral, verificación de multas ante el JNE, directorio de municipalidades provinciales con enlace directo a canales telefónicos/portales y herramientas de accesibilidad visual (modo A+ de alta legibilidad).

    1.4. Objetivos

    1.4.1 Objetivo general

    Desarrollar e implementar un tablero analítico (Dashboard) web interactivo, estático y de alta disponibilidad para la visualización, monitoreo y contextualización de los resultados parciales de las Elecciones Regionales y Municipales 2026 en Tacna, proveyendo al mismo tiempo un canal unificado de orientación cívica y servicios municipales para la ciudadanía.

    1.4.2 Objetivos Específicos

    - **OE1:** Diseñar y estructurar un repositorio de datos desacoplado en formato JSON (`data.json` y `citizen.json`) que almacene datos electorales, fuentes verificadas, cortes horarios, metadatos y directorios cívicos con trazabilidad estricta.
    - **OE2:** Implementar una interfaz web interactiva basada en HTML5, CSS3 y Vanilla JavaScript, que permita alternar dinámicamente entre la elección a la Alcaldía Provincial de Tacna y la Gobernación Regional de Tacna, generando gráficos analíticos de barras, donuts de avance y rankings comparativos sin sobrecarga de librerías externas.
    - **OE3:** Desarrollar un módulo de exportación de datos en formato CSV con codificación UTF-8 con BOM para facilitar la descarga, auditoría y análisis independiente por parte de periodistas, investigadores y ciudadanos.
    - **OE4:** Integrar un módulo cívico ("Servicios para vecinos") con motor de búsqueda y filtros temáticos que oriente al ciudadano sobre multas electorales, guías imprimibles para justificación/dispensa ante el JNE y directorios de contacto de las 4 provincias de Tacna.
    - **OE5:** Configurar un pipeline de compilación automatizado y despliegue continuo en la infraestructura en la nube de Render Static Sites con optimización de tiempos de carga inferiores a 1 segundo y costo operativo cero en servidor de producción.

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

2. <span id="_Toc52661347" class="anchor"></span>**Riesgos**

    A continuación se señalan los riesgos identificados que pudieran afectar el éxito del proyecto, categorizados por su impacto y probabilidad, junto con sus respectivas estrategias de mitigación:

    | ID | Riesgo Identificado | Probabilidad | Impacto | Estrategia de Mitigación |
    | :---: | :--- | :---: | :---: | :--- |
    | **R01** | Inconsistencia o discrepancias en cifras publicadas por fuentes externas (ej. contradicción en padrón RENIEC o reportes de prensa). | Media | Alto | Establecer una política de estricta verificación con notas explícitas de calidad de datos en la interfaz; descartar métricas inconsistentes y consignar siempre la fecha, hora de corte y URL directa de la fuente. |
    | **R02** | Saturación o caída del servidor ante picos masivos de tráfico ciudadano durante las jornadas posteriores a la elección. | Media | Alto | Arquitectura basada en Sitio Estático (JAMstack sin base de datos en runtime) desplegado sobre la red de distribución de contenido (CDN global) de Render, garantizando disponibilidad del 99.9% y resistencia a alta concurrencia. |
    | **R03** | Malinterpretación ciudadana del porcentaje de avance del conteo confundiéndolo con participación electoral o ganadores definitivos. | Alta | Medio | Inclusión de advertencias visuales de "Lectura responsable", estados de "Parcial / No proclamado", y una sección de preguntas frecuentes explicativas en la interfaz. |
    | **R04** | Modificación o indisponibilidad de enlaces externos a portales institucionales (ONPE, JNE, Gob.pe). | Baja | Bajo | Centralización de URLs en archivos JSON estructurados, permitiendo actualizaciones inmediatas mediante un simple commit en el repositorio sin alterar el código base. |
    | **R05** | Restricciones de tiempo en el equipo para recopilar y actualizar datos durante el escrutinio. | Baja | Medio | Separación desacoplada de la capa de datos (`data.json`) respecto a la lógica de presentación, facilitando la ingesta rápida de nuevos datos y compilación en un solo comando (`npm run build`). |

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

3. <span id="_Toc52661348" class="anchor"></span>**Análisis de la Situación actual**

    3.1. Planteamiento del problema

    Durante las elecciones regionales y municipales en el Perú, y particularmente en el departamento de Tacna, la difusión de resultados del escrutinio suele generar incertidumbre y desinformación en la opinión pública. Los canales tradicionales de televisión y redes sociales suelen difundir datos preliminares de bocas de urna o conteos rápidos sin clarificar el universo muestral, el porcentaje real de actas procesadas ni la brecha efectiva entre contendores. Asimismo, los portales oficiales de los entes electorales (ONPE/JNE) suelen experimentar caídas por sobrecarga en momentos de alta afluencia o presentan curvas de navegación complejas para el ciudadano común que utiliza dispositivos móviles de gama baja.

    Por otro lado, la ciudadanía requiere con urgencia información práctica post-electoral: verificar si tiene multas pendientes, conocer los requisitos para formular dispensas por inasistencia al sufragio o justificaciones por no instalación de mesa de votación, y acceder a canales directos de comunicación con sus municipalidades provinciales (Tacna, Tarata, Candarave y Jorge Basadre). Actualmente no existe un observatorio digital integrado en la región que conjugue inteligencia visual de datos electorales con orientación ciudadana práctica, neutral y verificable.

    3.2. Consideraciones de hardware y software

    - **Hardware existente y alcanzable:**
      - Estaciones de trabajo del equipo: Laptops con procesadores Intel Core i5 / AMD Ryzen 5 o superior, 8 GB a 16 GB de memoria RAM, 256 GB SSD, conexión a internet de banda ancha (fibra óptica 100+ Mbps).
      - Equipos de destino (usuarios finales): Computadoras de escritorio, laptops, tablets y smartphones (Android / iOS) con cualquier navegador moderno (Chrome, Edge, Firefox, Safari) y conectividad estándar 3G/4G/5G o Wi-Fi.
    - **Software evaluado y seleccionado:**
      - Entorno de ejecución y build: Node.js (versión 20 LTS o superior) con scripts nativos en ECMAScript Modules (`.mjs`) para eliminar la dependencia de gestores de empaquetado pesados como Webpack o Vite.
      - Lenguajes y estándares: HTML5 semántico con especificación WAI-ARIA, CSS3 nativo con CSS Custom Properties (variables) para paleta corporativa y diseño adaptativo (responsive design), y JavaScript Vanilla (ES6+) para renderizado reactivo del DOM.
      - Almacenamiento de datos: Archivos JSON estáticos estructurados (`data.json`, `citizen.json`).
      - Control de versiones: Git y repositorios en GitHub.
      - Hosting y Despliegue: Plataforma Render (Static Site) con aprovisionamiento automatizado mediante `render.yaml`.

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

4. <span id="_Toc52661349" class="anchor"></span>**Estudio de
    Factibilidad**

    El presente estudio de factibilidad evaluó exhaustivamente la viabilidad técnica, económica, operativa, legal, social y ambiental del proyecto *Tacna Decide*. Las actividades preparatorias incluyeron la definición de la arquitectura de software, estimación de costos directos e indirectos, análisis de requerimientos del usuario tacneño, evaluación de normativas de transparencia y protección de datos, y pruebas de rendimiento sobre sitios estáticos en la nube. El estudio fue revisado y aprobado por el equipo de proyecto y el docente de la asignatura de Inteligencia de Negocios de la Escuela Profesional de Ingeniería de Sistemas (UPT).

    4.1. <span id="_Toc52661350" class="anchor"></span>Factibilidad Técnica

    El proyecto es **técnicamente factible al 100%**. Se basa en una arquitectura JAMstack (JavaScript, APIs/JSON, Markup) ligera y desacoplada que no requiere un servidor backend dinámico con base de datos relacional activa (como PostgreSQL o MySQL), eliminando riesgos de inyección SQL, congestión de pools de conexiones y altos consumos de memoria RAM.

    - **Evaluación de Hardware:**
      - El desarrollo se realiza sobre laptops convencionales de desarrollo estudiantil. No se requiere la adquisición de servidores físicos locales dedicados.
      - El servidor de producción opera en la infraestructura en la nube de Render (servidores perimetrales CDN globales con soporte HTTP/2 y compresión Brotli/Gzip).
    - **Evaluación de Software:**
      - Se emplea Node.js v20+ únicamente para tareas de empaquetado y compilación local (`scripts/build.mjs`), copiando los archivos hacia el directorio de publicación `dist/`.
      - El servidor local integrado (`scripts/serve.mjs`) utiliza el módulo nativo `http` de Node.js, sirviendo archivos estáticos con cabeceras MIME adecuadas y respetando la variable de entorno `PORT`.
      - No existe dependencia de librerías externas de terceros (cero dependencias en `node_modules` en tiempo de ejecución), lo que previene vulnerabilidades de supply chain y asegura tiempos de arranque instantáneos.
      - En el cliente, el sistema es compatible con el 100% de los navegadores web modernos y dispositivos móviles sin necesidad de instalar complementos adicionales.

    4.2. <span id="_Toc52661351" class="anchor"></span>Factibilidad Económica

    El estudio económico determina que el proyecto representa una inversión sumamente accesible y costo-eficiente, apalancada en herramientas de código abierto y servicios en la nube con esquemas gratuitos y de bajo costo.

    4.2.1. Costos Generales

    Corresponden a los materiales de oficina, útiles de escritorio y depreciación de equipos utilizados durante la formulación y ejecución del proyecto:

    | Ítem | Descripción | Cantidad | Costo Unitario (S/.) | Costo Total (S/.) |
    | :---: | :--- | :---: | :---: | :---: |
    | 1 | Cuadernos de apuntes y libretas de campo | 2 un. | 15.00 | 30.00 |
    | 2 | Lapiceros, resaltadores y material de escritorio | 1 set | 25.00 | 25.00 |
    | 3 | Resma de papel bond A4 (80 g) | 1 millar | 35.00 | 35.00 |
    | 4 | Impresiones y anillados de borradores de informe | 3 juegos | 20.00 | 60.00 |
    | 5 | Depreciación de equipos de cómputo (2 laptops por 2 meses) | 2 un. | 150.00 | 300.00 |
    | **Total** | **Costos Generales** | | | **S/. 450.00** |

    4.2.2. Costos operativos durante el desarrollo

    Gastos incurridos para la operatividad del equipo de trabajo durante las 8 semanas de ejecución:

    | Concepto | Detalle | Periodo | Costo Mensual (S/.) | Costo Total (S/.) |
    | :--- | :--- | :---: | :---: | :---: |
    | Servicio de Energía Eléctrica | Consumo asignado al desarrollo | 2 meses | 70.00 | 140.00 |
    | Servicio de Internet Fibra Óptica | Banda ancha 200 Mbps para descargas y Git | 2 meses | 90.00 | 180.00 |
    | Telefonía y Datos Móviles | Coordinaciones y validación de campo | 2 meses | 50.00 | 100.00 |
    | Espacio de Co-working / Reuniones | Ambientes universitarios y sesiones virtuales | 2 meses | 0.00 | 0.00 |
    | **Total** | **Costos Operativos** | | | **S/. 420.00** |

    4.2.3. Costos del ambiente

    Recursos tecnológicos de infraestructura de nube, dominio y versionamiento:

    | Componente | Proveedor / Servicio | Tipo de Plan | Costo (S/.) |
    | :--- | :--- | :--- | :---: |
    | Alojamiento Web en la Nube | Render Static Site con SSL y CDN global | Nivel Gratuito / Proyecto | 0.00 |
    | Repositorio y CI/CD | GitHub Free (Control de versiones) | Plan Free | 0.00 |
    | Dominio Web de Producción | Subdominio `onrender.com` / Dominio de prueba | Incluido | 0.00 |
    | Certificado de Seguridad | Let's Encrypt (SSL/TLS HTTPS automatizado) | Gratuito | 0.00 |
    | **Total** | **Costos de Ambiente** | | **S/. 0.00** |

    4.2.4. Costos de personal

    El equipo técnico está compuesto por dos ingenieros de sistemas en formación, desempeñando roles clave en el ciclo de vida del proyecto durante 8 semanas (dedicación de 15 horas semanales por integrante, totalizando 120 horas por persona):

    | Rol | Responsable | Horas Dedicadas | Tarifa por Hora (S/.) | Costo Total (S/.) |
    | :--- | :--- | :---: | :---: | :---: |
    | **Líder de Proyecto & Especialista BI** | Hashira Belén Vargas Candia | 120 hrs | 25.00 | 3,000.00 |
    | **Desarrollador Front-End & Analista QA** | Víctor Raúl Platero Choque | 120 hrs | 25.00 | 3,000.00 |
    | **Total** | **Costos de Personal** | **240 hrs** | | **S/. 6,000.00** |

    *Organización y roles:*
    - **Líder de Proyecto & Especialista BI:** Responsable de la gestión del cronograma, recolección y depuración de datos electorales (`data.json`), análisis de métricas (KPIs), diseño de experiencia de usuario y documentación de factibilidad y visión.
    - **Desarrollador Front-End & Analista QA:** Responsable de la implementación de la interfaz en HTML5/CSS3/JS, motor de filtrado del módulo de vecinos (`citizen.json`), scripts de compilación Node.js, pruebas de rendimiento multiplataforma y despliegue en Render.
    - *Horario de trabajo:* Lunes a viernes de 16:00 a 19:00 horas, con sesiones de integración y sincronización los días sábados.

    4.2.5. Costos totales del desarrollo del sistema

    Resumen consolidado del presupuesto de inversión del proyecto:

    | Categoría de Gasto | Monto Estimado (S/.) | Porcentaje (%) |
    | :--- | :---: | :---: |
    | Costos Generales | S/. 450.00 | 6.27 % |
    | Costos Operativos | S/. 420.00 | 5.85 % |
    | Costos del Ambiente | S/. 0.00 | 0.00 % |
    | Costos de Personal | S/. 6,000.00 | 83.57 % |
    | **Subtotal** | **S/. 6,870.00** | **95.69 %** |
    | Imprevistos y Contingencias (5%) | S/. 310.00 | 4.31 % |
    | **Costo Total del Proyecto** | **S/. 7,180.00** | **100.00 %** |

    *Forma de pago / Financiamiento:* Al ser un proyecto formativo de investigación y proyección social universitaria, el costo es asumido mediante horas académicas de los integrantes y el aprovechamiento de recursos de infraestructura gratuita de Render y GitHub, requiriendo un desembolso en efectivo real mínimo de S/. 870.00 para suministros y servicios operativos.

    4.3. <span id="_Toc52661352" class="anchor"></span>Factibilidad Operativa

    El proyecto presenta una **alta factibilidad operativa**. El sistema fue diseñado con un enfoque "cero administración pesada" (zero-maintenance):
    - **Facilidad de Uso:** La interfaz utiliza patrones de diseño intuitivos: barra lateral de navegación persistente, tarjetas de indicadores numéricos destacados, gráficos interactivos con barras proporcionales y botones de alternancia rápida entre cargos provincial y regional.
    - **Capacidad de Mantenimiento:** Para actualizar los datos electorales, el operador solo debe editar el archivo estructurado `public/data.json` ingresando los nuevos porcentajes, corte horario y URL de referencia, ejecutando luego `npm run build` y subiendo los cambios al repositorio, lo que dispara el redespliegue automático en Render en menos de 60 segundos.
    - **Lista de Interesados (Stakeholders):**
      - Ciudadanos y electores de la provincia y región de Tacna.
      - Periodistas, medios de comunicación locales y analistas políticos.
      - Docentes y estudiantes universitarios de la Universidad Privada de Tacna.
      - Vecinos que requieren trámites de dispensa y contacto con municipalidades provinciales.

    4.4. <span id="_Toc52661353" class="anchor"></span>Factibilidad Legal

    El proyecto se encuentra en **plena conformidad con el marco jurídico peruano vigente**:
    - **Ley de Transparencia y Acceso a la Información Pública (Ley N° 27806):** Toda la información utilizada proviene de fuentes de acceso irrestricto y de dominio público (notas de prensa autorizadas, portales de ONPE, JNE, PCM y RENIEC).
    - **Ley de Protección de Datos Personales (Ley N° 29733):** La plataforma no almacena, captura, solicita ni procesa números de DNI, nombres de votantes, cookies de rastreo comercial ni datos biométricos. Todas las consultas individuales (como multas o dispensas) son redirigidas directamente hacia los dominios oficiales de las entidades estatales (`.gob.pe`).
    - **Normativa Electoral:** Se respeta escrupulosamente la neutralidad cívica; el sistema no realiza propaganda electoral, no altera las cifras de las fuentes y advierte explícitamente que los datos corresponden a copias parciales fechadas y no a proclamaciones definitivas de ganadores emitidas por los Jurados Electorales Especiales (JEE/JNE).
    - **Propiedad Intelectual y Licenciamiento:** El código fuente ha sido desarrollado íntegramente por el equipo de trabajo bajo estándares abiertos, utilizando recursos visuales y tipografías de libre distribución de Google Fonts con respaldos tipográficos del sistema.

    4.5. <span id="_Toc52661354" class="anchor"></span>Factibilidad Social

    El impacto social del proyecto es ampliamente positivo y enriquecedor para la cultura democrática local:
    - **Neutralidad Política y Despolarización:** Al presentar los datos en estricto orden porcentual con base en reportes auditables y sin emitir juicios de valor, previene la manipulación y la proliferación de noticias falsas (*fake news*).
    - **Inclusión y Accesibilidad:** Incorpora un botón de aumento de tamaño tipográfico (`A+ Lectura`) y etiquetas WAI-ARIA para facilitar la lectura a personas con discapacidad visual leve o adultos mayores.
    - **Empoderamiento Comunitario:** El directorio municipal y la guía paso a paso para dispensas electorales reducen la brecha informativa en las cuatro provincias (Tacna, Tarata, Candarave y Jorge Basadre).

    4.6. <span id="_Toc52661355" class="anchor"></span>Factibilidad Ambiental

    El proyecto es **ecológicamente sostenible y de impacto ambiental positivo**:
    - **Reducción del Uso de Papel:** Digitaliza la visualización de resultados, la consulta de hojas de vida y la preparación de guías de dispensa, reduciendo la necesidad de folletos impresos y boletines físicos.
    - **Mínima Huella de Carbono Digital:** Al ser un sitio estático precompilado con un peso total inferior a 150 KB por carga completa de página (sin bibliotecas pesadas de JavaScript ni servidores de base de datos ejecutándose 24/7), el consumo de energía en los centros de datos y en los dispositivos móviles de los usuarios es mínimo.

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

5. <span id="_Toc52661356" class="anchor"></span>**Análisis Financiero**

    5.1. Justificación de la Inversión

    5.1.1. Beneficios del Proyecto

    - **Beneficios Tangibles:**
      - *Ahorro de horas-hombre en recopilación de información:* Estimado en 40 horas al mes para investigadores, medios locales y usuarios que consultan datos consolidados en un único portal (valorizado en S/. 1,000.00 mensuales).
      - *Eliminación de costos de infraestructura y licencias de software propietario BI:* Un licenciamiento convencional de Power BI Pro o Tableau Server para publicación masiva oscila entre S/. 4,000.00 y S/. 12,000.00 anuales. *Tacna Decide* implementa tableros nativos a costo cero de licencias.
      - *Reducción de desplazamientos innecesarios:* El directorio telefónico y la lista de chequeo de requisitos de dispensa ahorran traslados presenciales a las sedes de las municipalidades y sedes electorales a cientos de vecinos (ahorro estimado de transporte de S/. 800.00 mensuales a nivel comunitario).
      - Total de beneficios tangibles proyectados durante el primer año: S/. 15,600.00.

    - **Beneficios Intangibles:**
      - Aumento significativo de la confianza y credibilidad ciudadana en los datos electorales.
      - Fomento de la cultura cívica y participación democrática informada.
      - Posicionamiento institucional de la Universidad Privada de Tacna (EPIS) como referente de desarrollo tecnológico aplicado a problemáticas regionales.
      - Escalabilidad inmediata para futuros procesos electorales (elecciones generales, referéndums o elecciones municipales complementarias).

    5.1.2. Criterios de Inversión

    Para la evaluación financiera formal se proyectó un flujo de caja a 1 año (12 meses), considerando la inversión inicial de desarrollo y un costo de mantenimiento semestral mínimo de actualización de datos de S/. 200.00 mensuales a partir del mes 2:

    - **Inversión Inicial (Mes 0):** S/. 7,180.00 (Inversión total del desarrollo y puesta en marcha).
    - **Costos de Mantenimiento Anual (Meses 1-12):** S/. 2,400.00 (S/. 200.00 mensuales en soporte y actualización).
    - **Beneficios Tangibles Anuales:** S/. 15,600.00 (S/. 1,300.00 mensuales por ahorro operativo, licenciamiento y horas hombre).
    - **Flujo Neto Mensual (Meses 1-12):** S/. 1,100.00 mensuales (S/. 13,200.00 al cabo del año).
    - **Costo de Oportunidad del Capital (COK):** Se adopta una tasa referencial anual del **12.00%** (1.00% mensual aproximado).

    5.1.2.1. Relación Beneficio/Costo (B/C)

    Calculando el valor presente de los flujos de beneficios respecto al valor presente de los costos totales:
    - Valor Actual de los Beneficios (VAB): S/. 14,750.00
    - Valor Actual de los Costos (VAC): S/. 9,450.00 (Inversión inicial + costos operativos actualizados)
    - **Relación B/C:**
      $$\text{B/C} = \frac{14,750.00}{9,450.00} = \mathbf{1.56}$$

    Dado que la relación **B/C (1.56) es significativamente mayor a 1**, el proyecto genera S/. 1.56 de beneficio por cada Sol invertido, demostrando una alta viabilidad económica.

    5.1.2.2. Valor Actual Neto (VAN)

    Calculando el Valor Actual Neto con la tasa de descuento mensual del 1% (COK anual 12%):
    - Flujo mensual neto: S/. 1,100.00 por 12 meses.
    - Valor actual del flujo neto de 12 meses: S/. 12,485.00
    - Inversión inicial: S/. 7,180.00
    - **VAN:**
      $$\text{VAN} = \text{S/. } 12,485.00 - \text{S/. } 7,180.00 = \mathbf{+\text{S/. } 5,305.00}$$

    Siendo el **VAN > 0** (+S/. 5,305.00), el proyecto es financieramente rentable y agrega valor positivo a la institución y a la comunidad.

    5.1.2.3. Tasa Interna de Retorno (TIR)

    Determinando la tasa que iguala el valor actual de los flujos netos con la inversión inicial:
    - **TIR Mensual:** 3.12%
    - **TIR Anualizada:** **44.50%**

    Dado que la **TIR (44.50%) es ampliamente superior al Costo de Oportunidad del Capital (COK = 12.00%)**, se concluye categóricamente que el proyecto debe ser aceptado y ejecutado.

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

6. <span id="_Toc52661357" class="anchor"></span>**Conclusiones**

1. **Viabilidad Técnica Integral:** El uso de una arquitectura estática (JAMstack) con HTML5, CSS3 y JavaScript moderno sobre Render Static Sites elimina las vulnerabilidades de servidores dinámicos, garantiza alta concurrencia con cero latencia y no genera costos de licencias propietarias de software de Business Intelligence.
2. **Sostenibilidad Económica y Financiera:** Los indicadores financieros demuestran alta rentabilidad y eficiencia en el uso de recursos, con un Valor Actual Neto positivo de **+S/. 5,305.00**, una Tasa Interna de Retorno del **44.50%** (frente a un COK de 12%) y una relación Beneficio/Costo de **1.56**.
3. **Plena Factibilidad Operativa y Legal:** El sistema no almacena datos sensibles protegidos por la Ley N° 29733, utiliza fuentes oficiales públicas bajo la Ley N° 27806, mantiene absoluta neutralidad política y permite una administración sencilla mediante la edición de archivos JSON y despliegue automatizado vía Git.
4. **Alto Valor Social y Cívico:** El módulo "Servicios para vecinos" y el directorio municipal brindan una solución integral a la problemática de desinformación electoral y gestión de trámites post-sufragio en el departamento de Tacna, asegurando accesibilidad e inclusión ciudadana.
5. **Dictamen Final:** En base a la concordancia de los estudios técnico, económico, operativo, legal, social y ambiental, el proyecto *Tacna Decide* es declarado **TOTALMENTE FACTIBLE Y VIABLE** para su puesta en producción y operación continua.
