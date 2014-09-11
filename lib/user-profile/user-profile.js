/**
 * Module dependencies.
 */
var citizen = require('citizen');
var render = require('render');
var title = require('title');
var page = require('page');
var o = require('dom');
var template = require('./template');
var tagTemplate = require('./tag-template');
var tags = require('tags');

/**
 * Render the user view.
 */
page("/citizen/:id", citizen.required, function(ctx, next) {
  var userId = ctx.params.id || "me";
  var loadedCitizen = citizen.load(userId);

  loadedCitizen.ready(function () {
    var container = o(render.dom(template, {loadedCitizen: loadedCitizen}));

    // prepare wrapper and container
    o('#content').empty().append(container);

    loadedCitizen.tags.forEach(function (tagId) {
      var tag = tags.get(tagId);
      o(".tag-pills", container).append(tagTemplate({tag: tag}));
    });

    // Display current settings page
    container.removeClass('hide');


    //Hide actions
    if ("me" === userId) {
      var settingsButton = o(".name button",container);
      settingsButton.removeClass("hide");
      settingsButton.on('click', function ()  {
        page("/settings");
      })
    }

  });

});
