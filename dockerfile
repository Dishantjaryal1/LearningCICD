# Stage 1: Build frontend (React/Vite)
FROM node:18 AS frontend-builder

WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend .
RUN npm run build

# Stage 2: Setup backend and serve frontend
FROM node:18

# Backend setup
WORKDIR /app
COPY backend/package*.json ./backend/
RUN cd backend && npm install

# Copy backend source
COPY backend ./backend

# Copy built frontend into backend (e.g., /backend/public or /backend/dist)
COPY --from=frontend-builder /app/frontend/dist ./backend/public

# Set working directory to backend
WORKDIR /app/backend

# Expose the backend API port
EXPOSE 4000

# Start backend server
CMD ["npm", "start"]
