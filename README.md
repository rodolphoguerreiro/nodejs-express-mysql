# API-REST

#### Requirements
* Node.js >= 15
* Docker >= 20.10
* Docker Compose >= 1.29.2

## Installation

#### Steps
Install Node.js and manage versions using NVM

**Download and install NVM :**
```sh
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
# or
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```
**Install Node.js v15 :**
```sh
$ nvm install 15
```
**Install npm packages :**
```sh
$ npm install
```
```sh
$ npm start
# Or optional run the docker-compose command  :
$ docker-compose up -d
```

## Technologies
..for development environment
* [API-Rest] : http://localhost:8081
* [Swagger] : http://localhost:8082
* [MailHog] : http://localhost:8025

## Commands
#### Docker
Use the command `docker logs api-rest -f` for viewing logs containers
#### Swagger
Install the [Swagger Viewer](https://marketplace.visualstudio.com/items?itemName=Arjun.swagger-viewer) package in VS Code IDE and Press Shift + Alt + P