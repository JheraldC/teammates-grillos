# syntax = docker/dockerfile:1

ARG NODE_VERSION=20.18.0
FROM node:${NODE_VERSION}-slim AS build

LABEL fly_launch_runtime="Node.js"

# Directorio de trabajo
WORKDIR /app

# Instalar herramientas de compilación
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3 && \
    rm -rf /var/lib/apt/lists/*

# Copiar dependencias
COPY package.json package-lock.json ./

# Limpiar caché npm e instalar dependencias
RUN npm cache clean --force && npm ci --include=dev

# Copiar resto del código fuente
COPY . .

# Dar permisos a gradlew
RUN chmod +x ./gradlew

# Precompilación de Gradle
RUN ./gradlew --no-daemon build || true

# Construcción aplicación Node
RUN npm run build

# Eliminar dependencias de desarrollo
RUN npm prune --omit=dev

# Imagen final
FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

# Copiar desde la etapa de construcción
COPY --from=build /app /app

# Exponer puerto por defecto
EXPOSE 8080

# Ejecutar servidor
CMD ["./gradlew", "serverRun"]
