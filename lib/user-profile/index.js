/**
 * Module dependencies.
 */

var config = require('lib/config');
var express = require('express');
var app = module.exports = express();

app.get('/me', require('lib/layout'));