# [Log Node Application Activity](https://medium.com/@bmshamsnahid/log-activity-in-node-application-44f9bc2ac46b)

Step by Step [Guideline](https://medium.com/@bmshamsnahid/log-activity-in-node-application-44f9bc2ac46b) 

## Objective

  * `logging` activity in node app.
  * Create specific log file every hour
  * Easy configure log file round (Hourly, daily)
  * Easy configure log file size
  * Delete log files after specific days
  * Environment specific log structure


## Run application

Clone the repository

```bash
git clone https://github.com/bmshamsnahid/Manage-Node-App-Environment
```

Install dependencies

```bash
npm i
```

Import the  `logger.js` file in your desired place, in my case `example.js` and invoke it.

```js
const logger = require('./logger');
logger.info('Info log example');
```

Now run example.js

```bash
node example.js
```

## Stream
To integrate with [morgan](https://www.npmjs.com/package/morgan/v/1.1.1)

```js
const express = require('express');
const morgan = require('morgan');

const logger = require('./logger');
const app = express();

app.use(morgan('tiny', { stream: logger.stream }));
```

Now morgan will put each route information in log file.

## Configure
Go to `logger.js` file and update configurations.

## License

MIT
