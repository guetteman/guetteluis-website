---
title: 'How to configure an API with ExpressJS'
coverImage: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80'
headerImage: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&h=700&q=80'
imageAlt: 'Code in a screen'
date: '2017-07-27T05:35:07.322Z'
ogImage:
  url: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80'
---

Recently, I’ve been coding with MEAN stack and I realized that is little hard to find a good explanation about how to prepare the environments for a real platform.

So I’ve decided to make this little tutorial on what I think is the first step to code a real app with MEAN Stack, and how you can deploy it in Heroku. Let’s get started.

## Requirements

1. NodeJS
2. MongoDB installed locally or online.
3. Heroku account
4. Heroku-CLI

## Step 1 — Create a Git Repo of the Project

The first thing that you have to do is to create the git repository where you will save your code in a service like GitHub or GitLab. Let’s assume that the project will be named as test-project.

## Step 2 — Create the Project Folder

Now, we create a folder where we want to store all related files of the project. Let’s assume that the folder will be named as test-project.

## Step 3 — Project Initialization

To initialize the project, inside the project folder, write on terminal the following command:

```bash
npm init
```

Then, you will need to fill some basic information about the project, like the following example:

```
name: (test-project)
version: (1.0.0)
description: Test API
entry point: (index.js) "change to app.js"
test command:
git repository: "git repository"
keywords: NodeJS ExpressJS Test API
author: Luis Güette
license: (ISC)
```

When completing the process a **package.json** file will be created as in the following example:

```json
{
   "name": "test-project",
   "version": "1.0.0",
   "description": "Test API",
   "main": "app.js",
   "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
      "start": "node app"
   },
   "repository": {
      "type": "git",
      "url": "git@github.com:guetteluis/test-project.git"
   },
   "keywords": [
      "NodeJS",
      "Express",
      "Test",
      "API"
   ],
   "author": "Type IQs",
   "license": "ISC",
   "bugs": {
      "url": "https://github.com/guetteluis/test-project/issues"
   },
   "homepage": "https://github.com/guetteluis/test-project#README"
}
```

## Step 4 —Initial Dependencies Installation

You have two options to install a dependency. The first one is when you need to use such dependency in development and production as well, in this case you can use the following command:

```bash
npm install "packages" --save
```

But, sometimes you don’t need the package in production. In this case, you can use:

```bash
npm install "packages" --save-dev
```

In this tutorial we will install some common packages used in API’s development:

```bash
npm install bcryptjs body-parser compression cors express app-root-path file-exists mongoose node-env-file passport passport-jwt helmet express-rate-limit --save
```

If you wanna know more these packages, check [npmjs.com](https://www.npmjs.com/)

## Project Structure

The folder organization is really important to make good and maintainable API. So here is a proposal for this structure:

```
├── app
│   ├── Http
│   ├── Listeners
│   └── Models
├── config
├── services
├── dist
├── resources
│   └── views
└── storage
```

- **app** — It will contain most of the APIs code.
- **HTTP** — It will contain the entities related to HTTP server, like: Controllers, Middlewares, Routes, etc.
- **Listeners** —It will contain API listeners.
- **Models** — It will contain models created with mongoose.
- **config** — This folder will have all the code related to settings definitions of the API.
- **services** —This folder will contain the services, for example, a service to connect with Mailgun API.
- **resources** — In this folder will be contained some views, for example, email template views.
- **storage** — This folder will be used to save app logs or temporal information.

## Step 6 — .env file configuration

The .env file is a configuration file which store all config variables of the API. In Heroku, you can create this variables through CLI or dashboard.

At the root of the project, there should be two files, .env and .env.example, the .env file will contain configuration variables, and the .env.example file is an example for developers. .env serves to centralize the configuration variables locally. In production, the configuration variables are configured directly in Heroku, with the production values ​​of each variable. The .env.example file is added to the git repository, but the .env should never be added since it contains sensitive information.

To load the configuration variables in both development and production, create a file called env.js, inside the config folder. This file should contain the following code:

```javascript
const appRootPath = require('app-root-path');
const fileExists = require('file-exists');
const env = require('node-env-file');

module.exports = {
    get: () => {
        const envFileLocation = appRootPath + '/.env';
        if (fileExists.sync(envFileLocation)){
            env(envFileLocation);
        }
    }
};
```

This code will help us to load the configuration variable whenever we need them.

**.env** and **.env.example** files should contain the following variables at the beginning:

```
PORT=3100

MONGO_DB_USERNAME=
MONGO_DB_PASSWORD=
MONGO_DB_HOST=localhost
MONGO_DB_PORT=27017
MONGO_DB_DATABASE=envex_core_api
MONGO_DB_PARAMETERS=
```

The developers can replace the configuration variable according to his local development environment.

## Step 7 — Database Configuration (MongoDB)

In the config folder you must add a file named database.js with the following information:

```javascript
const env = require('./env');

env.get();
module.exports = {
    mongodb: {
        uri: 'mongodb://' + process.env.MONGO_DB_HOST + ':' + process.env.MONGO_DB_PORT + '/' + process.env.MONGO_DB_DATABASE + process.env.MONGO_DB_PARAMETERS,
        username: process.env.MONGO_DB_USERNAME,
        password: process.env.MONGO_DB_PASSWORD
    }
};
```

## Step 8 — Routes File

You must create a file named routes.js in "app / Http" which will contain all the routes of the API. Initially you will have:

```javascript
const express = require('express');
const router = express.Router();router.get('/', (request, response) => {
    response.send('Hello');
});module.exports = router;
```

## Step 9 — Configure express-rate-limit

This package is used to limit the number of requests that can be made to the server in a certain time, this decreases the effectiveness of a brute force attack. A file named rate-limit.js must be created inside the config folder with the following code:

```javascript
const RateLimit = require('express-rate-limit');

module.exports = {
    limiter: () => {
        return new RateLimit({
            windowMs: 15*60*1000, // 15 minutes
            max: 100, // limit each IP to 100 requests per windowMs
            delayMs: 0 // disable delaying - full speed until the max limit is reached
        });
    }
};
```

Step 10 — Main File (app.js)

At the root of the project, you must create the app.js file which will have all the general API settings.

- The first block is the configuration of **ExpressJS** and the load of .env variables.
- **Helmet** is initialized.
- Then the connection to the database (**MongoDB**) is added.
- The **CORS** package is initialized.
- The **BodyParser** middleware is initialized with JSON.
- The **express-rate-limit** middleware is initialized. The line "**app.enable ('trust proxy')**" is used when the API is behind a reverse proxy (Heroku, Bluemix, etc.).
- The routes are initialized.
- Finally, the server is initialized

```javascript
const env = require('./config/env');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const mongoose = require('mongoose');
const database = require('./config/database');
const cors = require('cors');
const bodyParser = require('body-parser');
const RateLimit = require('./config/rate-limit');
const routes = require('./app/Http/routes');

// .env file configuration
env.get();

// Express initialization
const app = express();

// CORS initialization
app.use(cors());

// Helmet initialization
app.use(helmet());

// compress all responses
app.use(compression());

// MongoDB connection
mongoose.connect(database.mongodb.uri, {
    useMongoClient: true,
    user: database.mongodb.username,
    pass: database.mongodb.password
});
mongoose.Promise = global.Promise;

// On connection error
mongoose.connection.on('error', (error) => {
    console.log('Database error: ' + error);
});

// On successful connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database');
});

// Body parser middleware
app.use(bodyParser.json());

//Basic rate-limiting middleware
app.enable('trust proxy');
app.use(RateLimit.limiter());

// Routes
app.use('/', routes);

const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log('app running on port', port);
});
```

## Step 12 — GIT Initialization

To initialize the **GIT repository**, the following should be written to the terminal in the project folder:

```bash
git init
```

## Way of Working

To work locally, you can install **nodemon** and in the terminal, inside the project folder, write the following command:

```bash
nodemon
```

A local server will start on the port defined in the .env file (8080 if none was defined). It will restart every time it detects changes to the code.

## Deploys in Heroku

To do deploys in **Heroku**, you must commit the changes. A merge of the develop branch is made with the master branch. An application is created in Heroku with the following command (if it is not already created):

```bash
heroku create
```

To run the previous command, **Heroku-CLI** must be installed and you must be logged in the service. Before uploading the code to heroku, the configuration variables must be added from the heroku dashboard in the application created in the **Settings / config** vars section.

Finally the code is uploaded to **Heroku** with the following command:


```bash
git push heroku master
```

**Heroku** will run the API and it will assign a public url to the app.

And it is done. Now you can start to develop and API with **ExpressJS**!
