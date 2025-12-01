# 📝 NoteX — Notes Web App (Google Cloud Platform Deployment)

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
- 🛠️ CI/CD con **Cloud Build**
- 📦 Contenedores almacenados en **Artifact Registry**
- 🗃️ Código desplegado automáticamente con `gcloud builds submit`

---

## 🏗️ Arquitectura del Proyecto

---

## 🧰 Tecnologías utilizadas

### Frontend
- React 18
- react-scripts
- Axios (para requests)

### Backend
- Node.js 18
- Express.js
- pg (módulo PostgreSQL)
- CORS

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


---

# ⚙️ Backend — API REST

### ▶️ Endpoints

| Método | Ruta         | Descripción            |
|--------|--------------|------------------------|
| GET    | `/notes`     | Lista todas las notas |
| POST   | `/notes`     | Crea una nueva nota   |

Ejemplo de payload:

```json
{
  "title": "Mi primera nota",
  "description": "Hola NoteX!"
}