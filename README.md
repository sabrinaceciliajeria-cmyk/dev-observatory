# 🔭 Dev Observatory — GitHub Developer Analytics

> **Portfolio Project #02** · Frontend Dashboard · React + GitHub API

Dev Observatory es un dashboard frontend diseñado para analizar y visualizar la actividad técnica de un perfil de GitHub.

La aplicación transforma información procedente de GitHub en una experiencia visual orientada a métricas, tecnologías, lenguajes, actividad y perfil profesional.

El objetivo es construir una interfaz moderna de análisis de datos que combine **React, consumo de APIs REST, visualización de información y arquitectura frontend escalable**.

---

## 📸 Preview

![Dev Observatory Dashboard] <img width="654" height="317" alt="dev observatory 1 0" src="https://github.com/user-attachments/assets/82b0c8c2-d9f5-4045-9875-60fc5075da83" />

> Estado actual del proyecto: **Fase 1 — Configuración base completada.**

## 🎯 Objetivo del proyecto

Desarrollar una aplicación frontend capaz de convertir datos públicos de GitHub en información visual y fácilmente interpretable.

El proyecto pone especial énfasis en:

- Arquitectura frontend mantenible.
- Componentización con React.
- Consumo de APIs REST.
- Transformación y normalización de datos.
- Visualización mediante gráficos.
- Diseño responsive.
- Experiencia de usuario.
- Accesibilidad.
- Testing.
- Calidad y mantenibilidad del código.

---

## ✨ Funcionalidades

### 📊 Estadísticas de repositorios

Resumen de métricas relevantes de los repositorios públicos analizados.

### 💻 Tecnologías

Identificación de las principales tecnologías utilizadas en los proyectos.

### 🗣️ Lenguajes

Distribución de los lenguajes presentes en los repositorios.

### 📅 Actividad

Análisis de la actividad pública del perfil.

### 🔥 Contribution Heatmap

Representación visual de la frecuencia de contribuciones.

### 📈 Data Visualization

Gráficos interactivos para facilitar la interpretación de las métricas obtenidas.

### 👤 Developer Profile

Presentación del perfil técnico mediante información agregada del usuario.

---

## 🛠️ Stack tecnológico

### Core

- React
- JavaScript ES6+
- Vite
- pnpm

### UI

- Tailwind CSS
- HTML5
- CSS3

### Data Visualization

- Recharts

### API

- GitHub REST API

### Quality

- ESLint
- Jest

### Version Control

- Git
- GitHub

---

## 🏗️ Arquitectura

La aplicación sigue una estructura modular orientada a responsabilidades:

```text
src/
│
├── assets/
│
├── components/
│   ├── common/
│   ├── dashboard/
│   └── charts/
│
├── pages/
├── layouts/
├── services/
├── hooks/
├── utils/
├── constants/
├── data/
├── styles/
├── tests/
│
├── App.jsx
├── main.jsx
└── index.css
```

### Principios arquitectónicos

- Separación de responsabilidades.
- Componentización.
- Reutilización.
- Bajo acoplamiento.
- Código mantenible.
- Preparación para escalabilidad.
- Separación entre presentación y acceso a datos.

---

## 🚀 Instalación

### Requisitos

- Node.js
- pnpm
- Git

### Clonar

```bash
git clone https://github.com/sabrinaceciliajeria-cmyk/dev-observatory.git
```

### Instalar dependencias

```bash
cd dev-observatory
pnpm install
```

### Ejecutar en desarrollo

```bash
pnpm dev
```

Aplicación disponible en:

```text
http://localhost:5173
```

---

## 📜 Scripts

| Comando        | Descripción                  |
| -------------- | ---------------------------- |
| `pnpm dev`     | Servidor de desarrollo       |
| `pnpm build`   | Build de producción          |
| `pnpm preview` | Previsualización del build   |
| `pnpm lint`    | Análisis estático con ESLint |

---

## 🔐 Variables de entorno

La configuración local utiliza variables de entorno mediante `.env`.

Ejemplo:

```env
VITE_GITHUB_API_URL=...
```

> Las variables `VITE_*` son expuestas al cliente. No deben utilizarse para almacenar secretos o credenciales privadas.

---

## 🗺️ Roadmap

- [x] **Fase 0 — Inicialización y arquitectura**
- [x] **Fase 1 — Configuración base**
- [ ] **Fase 2 — Integración con GitHub API**
- [ ] **Fase 3 — Gestión y transformación de datos**
- [ ] **Fase 4 — Dashboard principal**
- [ ] **Fase 5 — Visualización de datos**
- [ ] **Fase 6 — Perfil profesional**
- [ ] **Fase 7 — Responsive Design y UX**
- [ ] **Fase 8 — Testing**
- [ ] **Fase 9 — Optimización y accesibilidad**
- [ ] **Fase 10 — Build y despliegue**

---

## 🧪 Calidad

El desarrollo seguirá prácticas orientadas a producción:

- ESLint.
- Testing automatizado.
- Componentes reutilizables.
- Manejo de errores.
- Diseño responsive.
- Accesibilidad.
- Optimización de rendimiento.
- Commits semánticos.
- Documentación progresiva.

---

## 📊 Competencias demostradas

| Área                 | Tecnologías / conocimientos      |
| -------------------- | -------------------------------- |
| Frontend             | React · JavaScript ES6+          |
| Tooling              | Vite · pnpm                      |
| UI                   | Tailwind CSS · Responsive Design |
| APIs                 | GitHub REST API                  |
| Visualización        | Recharts                         |
| Arquitectura         | Componentización · Modularidad   |
| Testing              | Jest                             |
| Calidad              | ESLint                           |
| Control de versiones | Git · GitHub                     |

---

## 📌 Estado

**🚧 En desarrollo**

**Dev Observatory** forma parte del portfolio de proyectos de desarrollo frontend y corresponde al **Proyecto #02**.

La arquitectura inicial se encuentra establecida y las funcionalidades se incorporarán progresivamente siguiendo el roadmap.

---

## 👩‍💻 Portfolio

**Sabrina Cecilia Jeria**

Frontend Developer · JavaScript · React · Java

---

## 📄 Licencia

La licencia del proyecto se definirá antes de la publicación de la versión final.
