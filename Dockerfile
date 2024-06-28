FROM node:alpine

LABEL MAINTAINER=abrahamkakooza@gmail.com

# create & set working directory
RUN mkdir -p /src
WORKDIR /src

# Copy source code to /src in container
COPY . /src

# Install app and dependencies into /src in container
RUN yarn install

#Start app
RUN npm run build

# Document the port the app listens on
EXPOSE 3000

# Run this command (starts the app) when the container starts
CMD npm run start
