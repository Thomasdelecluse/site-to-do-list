# Étape 1 : Utiliser une image Node.js comme base
FROM node:14-alpine AS builder

# Étape 2 : Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Étape 3 : Copier le fichier package.json et package-lock.json (si existant)
COPY package*.json ./

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Copier le reste des fichiers de l'application
COPY . .

# Étape 6 : Compiler l'application Angular
RUN npm run build --prod

# Étape 7 : Utiliser une image légère pour servir l'application
FROM nginx:alpine

# Étape 8 : Copier les fichiers de l'application construite depuis l'étape précédente
COPY --from=builder /app/dist/* /usr/share/nginx/html/

# Étape 9 : Exposer le port 80 (port par défaut pour Nginx)
EXPOSE 80

# Étape 10 : Commande pour démarrer Nginx et servir l'application
CMD ["nginx", "-g", "daemon off;"]
