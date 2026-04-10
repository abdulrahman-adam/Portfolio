# Utilisation d'une image légère de Node.js
FROM node:18-alpine

# Définition du dossier de travail dans le conteneur
WORKDIR /app

# Copie des fichiers de dépendances en premier (optimisation du cache)
COPY package*.json ./

# Installation des dépendances
RUN npm install --production

# Copie du reste des fichiers du projet
COPY . .

# Exposition du port utilisé par ton application (ex: 3000, à adapter selon ton .env)
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "index.js"]