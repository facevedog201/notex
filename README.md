# 📝 NoteX — Notes Web App

NoteX es una aplicación web full-stack para gestionar notas simples.  
El proyecto fue desarrollado como parte de un trabajo final 
usando servicios serverless y una arquitectura moderna basada en contenedores.

---

## 🚀 Características principales

- ✏️ Crear, listar y administrar notas
- 🌐 Frontend en **React**
- ⚙️ Backend en **Node.js + Express (API REST)**
- 🗄️ Base de datos **Cloud SQL (PostgreSQL)**
- ☁️ Despliegue serverless en **Cloud Run**

## 🧰 Tecnologías utilizadas

### Frontend
- React 18
- react-scripts

### Backend
- Node.js 18
- Express.js
- pg (módulo PostgreSQL)

### Google Cloud Platform
- Cloud Run (Frontend + Backend)
- Cloud SQL (PostgreSQL)
- Cloud Build
- IAM (permisos públicos)

---

# 📦 Estructura del Repositorio

notex/
│── backend/
│ ├── src/
│ ├── package.json
│ ├── Dockerfile
│ └── cloudbuild.yaml
│
│── frontend/
│ ├── public/
│ ├── src/
│ ├── Dockerfile
│ ├── nginx.conf
│ ├── .env
│ └── cloudbuild.yaml
│
│── diagrams/
│ └── notex-architecture.png
│
└── README.md
