/**
 * Module dependencies.
 */
var citizen = require('citizen');
var render = require('render');
var title = require('title');
var page = require('page');
var o = require('dom');
var template = require('./template');
var pillbox = require('pillbox');
var tags = require('tags');

/**
 * Render the user view.
 */
page("/me", citizen.required, tags.middleware, function(ctx, next) {
  var page = ctx.params.page || "user-profile";
  var container = o(render.dom(template));

  // prepare wrapper and container
  o('#content').empty().append(container);

  // Display current settings page
  container.removeClass('hide');

  var names = tags.get().map(function (tag) {
    return tag.name;
  });
  var input = pillbox(o('.tags', container)[0], names);
});