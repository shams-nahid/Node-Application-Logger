const express = require('express');
const morgan = require('morgan');
const logger = require('./logger');

const app = express();

logger.error('Error log example');
logger.warn('Warn log example');
logger.info('Info log example');

app.use(morgan('tiny', { stream: logger.stream }));

app.use('/', (req, res) => res.send('Hello World'));

app.listen(3000);
