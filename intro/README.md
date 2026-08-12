# 🚀 Presentación Intro — CALMÉCAC

Presentación de introducción institucional a **CALMÉCAC** basada en el contenido oficial de [calmecac.lat](https://calmecac.lat).

Esta presentación está construida con [Slidev](https://sli.dev/) y utiliza el tema corporativo [`@calmecac/slidev-theme-calmecac`](https://github.com/Calmecac-MX/calmecac-theme).

---

## 🚀 Comandos Disponibles

En la carpeta `intro`, puedes ejecutar los siguientes comandos:

### Desarrollo Local
Inicia el servidor de desarrollo interactivo con recarga en vivo:
```bash
pnpm dev
# o con npm:
npm run dev
```

### Construcción para Producción
Genera la versión estática de la presentación en la carpeta `public/` (ideal para despliegues como Vercel o Netlify):
```bash
pnpm build
# o con npm:
npm run build
```

### Exportar a PDF
Exporta la presentación completa a formato PDF:
```bash
pnpm export
# o con npm:
npm run export
```

### Exportar a Imágenes (PNG)
Captura cada diapositiva en formato de imagen PNG:
```bash
pnpm screenshot
# o con npm:
npm run screenshot
```

---

## 🛠️ Estructura del Proyecto

- `slides.md`: Archivo principal con las diapositivas y el contenido Markdown.
- `public/`: Assets estáticos y resultado del build de producción (generado tras `pnpm build`).
- `package.json`: Dependencias e historias de comandos.
- `vercel.json`: Configuración de despliegue en Vercel.

---

## 🎨 Tema
Utiliza el tema oficial de la organización: [`@calmecac/slidev-theme-calmecac`](https://github.com/Calmecac-MX/calmecac-theme).
