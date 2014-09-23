/**
 * Module dependencies.
 */

var citizen = require('citizen');
var FormView = require('form-view');
var log = require('debug')('democracyos:user-profile-edit');
var t = require('t');
var template = require('./template');
var o = require('dom');
var Tags = require('settings-tags');

/**
 * Expose ProfileForm
 */

module.exports = ProfileForm;

/**
 * Creates a profile edit view
 */

function ProfileForm() {
  if (!(this instanceof ProfileForm)) {
    return new ProfileForm();
  }

  FormView.call(this, template);
  this.bind();
  var tags = new Tags();
  tags.appendTo(o('.form-group.tags-wrapper', this.el));
}

/**
 * Mixin with `Emitter`
 */

FormView(ProfileForm);

/**
 *
 */
ProfileForm.prototype.bind = function () {
  var self = this;
  this.on("user-profile-edit:show", function () {
    self.el.removeClass('hide')
  });
};

/**
 * Turn on event bindings
 */
ProfileForm.prototype.switchOn = function() {
  this.on('success', this.bound('onsuccess'));
};

/**
 * Turn off event bindings
 */
ProfileForm.prototype.switchOff = function() {
  this.off();
};

/**
 * Handle `error` event with
 * logging and display
 *
 * @api private
 */
ProfileForm.prototype.onsuccess = function() {
  log('Profile updated');
  citizen.load('me');
  //TODO: maybe this message should be display on the top of the profile view.
  this.messages([t('Your profile was successfuly updated')], 'success');

  //After edit force reload
  setTimeout(window.location.reload(), 3000);
};

/**
 * Sanitizes form input data. This function has side effect on parameter data.
 * @param  {Object} data
 */
ProfileForm.prototype.postserialize = function(data) {
  data.firstName = data.firstName.trim().replace(/\s+/g, ' ');
  data.lastName = data.lastName.trim().replace(/\s+/g, ' ');
};

/**
 * Toggle current view
 *
 * @see UserProfile
 */
ProfileForm.prototype.toggle = function () {
  this.el.toggleClass('hide');
};

