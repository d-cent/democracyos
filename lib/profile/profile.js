/**
 * Module dependencies.
 */
var citizen = require('citizen');
var render = require('render');
var title = require('title');
var page = require('page');
var o = require('dom');
var template = require('./template');
var request = require('request');
var ActivityStream = require('activity-stream');
var UserProfile = require('user-profile');

/**
 * Render the user view.
 */
page("/citizen/:id", citizen.required, function(ctx, next) {
  var userId = ctx.params.id || "me";
  var stream = new ActivityStream();
  var container = o(render.dom(template));

  // prepare wrapper and container
  o('#content').empty().append(container);

  //Append activity stream to user profile
  stream.appendTo(container);

  //Request for the requested citizen
  request.get('/api/citizen/'.concat(userId))
      .end(function(err, res) {
          var loadedCitizen = res.body;
          var userProfile = new UserProfile(loadedCitizen);
          userProfile.appendTo(container);

          // Display current settings page
           container.removeClass('hide');
      });
});
