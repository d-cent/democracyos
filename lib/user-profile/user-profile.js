/**
 * Module dependencies.
 */
var citizen = require('citizen');
var render = require('render');
var title = require('title');
var page = require('page');
var o = require('dom');
var template = require('./template');

/**
 * Render the user view.
 */
page("/user/:id", citizen.required, tags.middleware, function(ctx, next) {
  var userId = ctx.params.id || "me";
  var loadedCitizen = citizen.load(userId);

  loadedCitizen.ready(function (){
    var container = o(render.dom(template, {loadedCitizen: loadedCitizen}));

    // prepare wrapper and container
    o('#content').empty().append(container);

    // Display current settings page
    container.removeClass('hide');
  });

});