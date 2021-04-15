FROM node:lts-alpine
WORKDIR /app
ARG BACKEND_URI
ARG PORT
ENV NEXT_PUBLIC_BACKEND_URI=$BACKEND_URI
ENV ENV_PORT=$PORT
COPY . ./planitly-frontend
RUN cd planitly-frontend && npm install
RUN cd planitly-frontend && npm run build
CMD cd planitly-frontend && npm run start -- -p $ENV_PORT
