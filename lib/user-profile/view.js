/**
 * Module dependencies.
 */
var log = require('debug')('democracyos:user-profile');
var t = require('t');
var template = require('./template');
var View = require('view');
var o = require('dom');
var tagTemplate = require('./tag-template.jade');
var tags = require('tags');
var citizen = require('citizen');
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
  this.loadTags(user.tags);
  this.shouldShowEdition(user.id);
}

/**
 * Mixin with `Emitter`
 */
View(UserProfile);

/**
 * Create user tags view for current profile view.
 * @param {Array} tagList collection of tag object.
 * @see Tag
 */
UserProfile.prototype.loadTags = function (tagList) {
  var profileTemplate = this.el;
  tagList.forEach(function (tagId) {
    var tag = tags.get(tagId);
    o('ul.tag-pills' , profileTemplate).append(tagTemplate({tag: tag}));
  });
};


UserProfile.prototype.shouldShowEdition = function (userId) {
  if (citizen.id === userId) {
    o('button' , this.el).removeClass('hide');
  }
};