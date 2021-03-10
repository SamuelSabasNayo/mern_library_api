FROM node:14-alpine3.10

LABEL version='1.0'
LABEL description='Production image for the MERN Library API'

# workdir is where our code shall live in the container
# all commands executed relative to this directory
WORKDIR /app

COPY ['package.json', 'package-lock.json*', 'npm-shrinkwrap.json*', './']

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]
