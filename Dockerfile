FROM node:lts-alpine
ARG BRANCH=master
RUN echo $BRANCH
WORKDIR /app
COPY . ./calendar-frontend-typescript
RUN cd calendar-frontend-typescript && npm install
RUN cd calendar-frontend-typescript && npm run build
RUN apk add --update git
RUN git clone -b $BRANCH https://github.com/octavian-regatun/calendar-backend-typescript
RUN cd calendar-backend-typescript && npm install
CMD cd calendar-backend-typescript && npm run start

