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
page("/me", citizen.required, function(ctx, next) {
  var page = ctx.params.page || "user-profile";
  var container = o(render.dom(template));

  // prepare wrapper and container
  o('#content').empty().append(container);

  // Display current settings page
  container.removeClass('hide');
});