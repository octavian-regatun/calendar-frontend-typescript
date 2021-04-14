FROM node:lts-alpine
ARG BRANCH
WORKDIR /app
COPY . ./planitly-frontend
RUN cd planitly-frontend && npm install
RUN cd planitly-frontend && npm run build
CMD cd planitly-frontend && npm run start
EXPOSE 3000
