# Tacna Decide — Dashboard electoral

Web en español inspirada en la referencia: barra lateral azul, tarjetas de indicadores, gráficos y acentos naranjas. Incluye alcaldía **provincial** de Tacna y gobernación regional, navegación, tabla y exportación CSV. Se adapta a móvil.

## Ejecutar en tu equipo

Instala Node.js 20 o superior y abre una terminal en esta carpeta:

```sh
npm run build
npm start
```

Abre http://localhost:4173. No necesita instalar paquetes. Abrir el HTML con doble clic no carga los datos: utiliza el servidor local.

## Desplegar en Render.com

1. Sube el contenido de esta carpeta a un repositorio GitHub o GitLab.
2. En Render, elige **New → Static Site** y conecta ese repositorio.
3. Configura **Build Command**: `npm run build`.
4. Configura **Publish Directory**: `dist`.
5. Pulsa **Create Static Site**.

También puedes usar **New → Blueprint**: el archivo `render.yaml` configura el sitio estático. Si el proyecto está dentro de una subcarpeta del repositorio, configura esa carpeta como Root Directory.

Documentación: https://render.com/docs/static-sites y https://render.com/docs/blueprint-spec

El proyecto está preparado para Render; no se ha publicado ni conectado a una cuenta. No necesita base de datos, claves ni backend en producción. Las fuentes y tipografías no bloquean los datos: si Google Fonts no está disponible, se usan fuentes del sistema.

## Datos y actualización

La consulta web se realizó el **6 de octubre de 2026**. Los porcentajes de ambos cargos son copias de reportes parciales de El Comercio del **5 de octubre de 2026**, que atribuyen el conteo a ONPE. No se verificaron directamente contra las actas; no son resultados definitivos ni una proclamación de ganadores.

Solo se incluyen las cinco organizaciones publicadas en cada nota. No se inventan votos, candidaturas, participación, series históricas ni detalles distritales. La nota no detalla el denominador de sus porcentajes. El anillo muestra el avance reportado del conteo; no es participación electoral.

Las fichas oficiales de las autoridades del período 2023–2026 son contexto y no candidaturas de 2026. La referencia de PCM sobre 4 provincias y 28 distritos fue publicada en 2021. El total del padrón de RENIEC se excluyó porque la nota contiene una contradicción entre título y cuerpo.

Para actualizar: modifica `public/data.json`, registra fecha/corte/fuente, ejecuta `npm run build` y sube los cambios al repositorio conectado a Render. La interfaz tiene enlaces a todas las fuentes. No hay actualización automática ni conexión en vivo.

## Estructura

- `public/index.html`: interfaz.
- `public/styles.css`: diseño y adaptación a móvil.
- `public/app.js`: gráficos, navegación, selector y exportación.
- `public/data.json`: información y enlaces investigados.
- `scripts/build.mjs`: prepara `dist`.
- `scripts/serve.mjs`: servidor local; también respeta `PORT`.
- `render.yaml`: configuración de Render Static Site.

## Servicios para vecinos

La sección incorpora búsqueda por palabra y filtro por tema, consulta de multas en el JNE, requisitos para dispensa, acceso a Voto Informado y ONPE, directorio de las cuatro municipalidades provinciales, teléfonos enlazados, lista de preparación para dispensa, impresión de esa guía y preguntas frecuentes. El botón A+ amplía el texto de lectura; su estado no persiste al cerrar la página. No se recogen DNI ni documentos, no se presentan solicitudes ni se realizan llamadas automáticamente.

El directorio se guarda en `public/citizen.json`. Fuente y fecha de consulta: 6 de octubre de 2026. Los datos de contacto de Jorge Basadre que no pudieron confirmarse se muestran pendientes; Candarave no tiene un teléfono verificado en este directorio. Los enlaces oficiales incluyen Gob.pe, JNE y ONPE. El checklist es orientativo, no determina la elegibilidad de una solicitud. La impresión se limita a la guía de preparación. La compilación y configuración de Render no cambian.
