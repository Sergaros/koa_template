'use strict'

const favicon = require('koa-favicon');

module.exports = app => app.use(favicon('./client/src/favicon.ico'));
