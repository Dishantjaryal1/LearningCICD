# backend stage
FROM node:18 AS backend
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend .

# frontend stage
FROM node:18 AS frontend
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend .
RUN npm run build

# production stage (use nginx or node for deployment if needed)
FROM node:18
WORKDIR /app
COPY --from=backend /app/backend ./backend
COPY --from=frontend /app/frontend/dist ./frontend/dist

# Start backend server
CMD ["node", "backend/server.js"]
