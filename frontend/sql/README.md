# NoteX – Final Project

NoteX es una aplicación web para gestionar notas.

## 🚀 Arquitectura en Google Cloud
Servicios utilizados:
- Cloud Run (Frontend y Backend)
- Cloud SQL (Postgres)
- Cloud Storage (opcional)
- Cloud Build (CI/CD)
- Cloud DNS (dominio personalizado)

## 📌 Cómo correr localmente

### Backend

cd backend
npm install
export DATABASE_URL="postgres://user:pass@localhost:5432/notex"
npm start


### Frontend
cd frontend
npm install
npm start


## 📦 Deploy a Cloud Run con Cloud Build
gcloud builds submit --config backend/cloudbuild.yaml
gcloud builds submit --config frontend/cloudbuild.yaml


## 📡 Dominio
Se puede usar Cloud Run → Custom Domains.

## 📚 Base de datos
Ejecutar sql/schema.sql en tu instancia de Cloud SQL.
