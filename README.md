# 📊 CALMÉCAC — Monorepo de Presentaciones

Este repositorio unificado (`presentaciones`) contiene todas las presentaciones institucionales y propuestas comerciales de **CALMÉCAC** desarrolladas con [Slidev](https://sli.dev/) y el tema corporativo [`@calmecac/slidev-theme-calmecac`](https://github.com/Calmecac-MX/theme-slidev).

---

## 📁 Presentaciones e Subdominios

| Presentación | Subdominio Sugerido | Directorio en Repo | Comando de Dev |
| :--- | :--- | :--- | :--- |
| **🤝 Aliados** | `aliados.calmecac.lat` | [`/aliados`](./aliados) | `pnpm dev:aliados` |
| **🎨 Creadores** | `creadores.calmecac.lat` | [`/creadores`](./creadores) | `pnpm dev:creadores` |
| **🚀 Intro** | `intro.calmecac.lat` | [`/intro`](./intro) | `pnpm dev:intro` |
| **🌐 Hub Portal** | `presentaciones.calmecac.lat` | `./` (Raíz) | `pnpm build` |

---

## 🌐 Configuración de Subdominios en Vercel (Con 1 Solo Repositorio GitHub)

Para tener subdominios separados (`aliados.calmecac.lat`, `creadores.calmecac.lat`, etc.) **SIN necesidad de tener múltiples repositorios en GitHub**, se conectan proyectos de Vercel al **mismo repositorio único** (`Calmecac-MX/presentaciones`):

### Configuración para Subdominios Independientes

Crea un proyecto en Vercel por cada subdominio, todos vinculados al repositorio **`Calmecac-MX/presentaciones`**:

#### 1️⃣ Subdominio Aliados (`aliados.calmecac.lat`)
- **Vercel Project Name**: `aliados-calmecac`
- **GitHub Repository**: `Calmecac-MX/presentaciones`
- **Root Directory**: `aliados`
- **Build Command**: `pnpm run build`
- **Output Directory**: `public`
- **Domain en Vercel**: `aliados.calmecac.lat`

#### 2️⃣ Subdominio Creadores (`creadores.calmecac.lat`)
- **Vercel Project Name**: `creadores-calmecac`
- **GitHub Repository**: `Calmecac-MX/presentaciones`
- **Root Directory**: `creadores`
- **Build Command**: `pnpm run build`
- **Output Directory**: `public`
- **Domain en Vercel**: `creadores.calmecac.lat`

#### 3️⃣ Subdominio Intro (`intro.calmecac.lat`)
- **Vercel Project Name**: `intro-calmecac`
- **GitHub Repository**: `Calmecac-MX/presentaciones`
- **Root Directory**: `intro`
- **Build Command**: `pnpm run build`
- **Output Directory**: `public`
- **Domain en Vercel**: `intro.calmecac.lat`

---

### Configuración para Portal Hub Unificado (`presentaciones.calmecac.lat`)

Si prefieres un único sitio web que contenga todas las presentaciones bajo subrutas (`/aliados/`, `/creadores/`, `/intro/`):

- **GitHub Repository**: `Calmecac-MX/presentaciones`
- **Root Directory**: `./` (vacío)
- **Build Command**: `pnpm run build`
- **Output Directory**: `dist`
- **Domain en Vercel**: `presentaciones.calmecac.lat`

---

## 🛠️ Desarrollo Local

```bash
# Iniciar servidor de desarrollo de Aliados
pnpm dev:aliados

# Iniciar servidor de desarrollo de Creadores
pnpm dev:creadores

# Iniciar servidor de desarrollo de Intro
pnpm dev:intro
```
