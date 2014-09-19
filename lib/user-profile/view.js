/**
 * Module dependencies.
 */
var log = require('debug')('democracyos:user-profile');
var t = require('t');
var template = require('./template');
var View = require('view');
var o = require('dom');

/**
 * Expose UserProfile
 */
module.exports = UserProfile;

/**
 * Creates a profile edit view
 */
//TODO: user = citizen. All should be unified all to user instead of citizen
function UserProfile(user) {
  if (!(this instanceof UserProfile)) {
    return new UserProfile(user);
  }

  View.call(this, template, {loadedCitizen: user});
}

/**
 * Mixin with `Emitter`
 */
View(UserProfile);