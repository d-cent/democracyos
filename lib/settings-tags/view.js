/**
 * Module dependencies.
 */

var autocomplete = require('autocomplete');
var citizen = require('citizen');
var FormView = require('form-view');
var log = require('debug')('democracyos:settings-tags');
var o = require('dom');
var t = require('t');
var tags = require('tags').get();
var template = require('./template');

/**
 * Tags
 */

module.exports = TagsForm;

/**
 * Creates a profile edit view
 */

function TagsForm() {
  if (!(this instanceof TagsForm)) {
    return new TagsForm();
  };

  FormView.call(this, template);
  this.tags = this.find('#tags');
}

/**
 * Mixin with `Emitter`
 */

FormView(TagsForm);


/**
 * Turn on event bindings
 */

TagsForm.prototype.switchOn = function() {
  this.on('success', this.bound('onsuccess'));
  var self = this;
  autocomplete(this.tags[0], '/api/tag/all', {headers: { Accept: 'application/json', 'Content-Type': 'application/json'}})
    .label('name')
    .value('id')
    .parse(function(data){
      var str = self.tags.val().toLowerCase();
      o('ul.menu li.menu-item-').remove();
      return data.filter(function(tag) {
        return tag.name.toLowerCase().indexOf(str) == 0;
      });
    })
    .on('select', function(tag) {
      self.tags.val('');
    });
}

/**
 * Turn off event bindings
 */

TagsForm.prototype.switchOff = function() {
  this.off();
}

/**
 * Handle `error` event with
 * logging and display
 *
 * @param {String} error
 * @api private
 */

TagsForm.prototype.onsuccess = function() {
  log('Profile updated');
  citizen.load('me');
  this.messages([t('Your profile was successfuly updated')], 'success');
}

/**
 * Sanitizes form input data. This function has side effect on parameter data.
 * @param  {Object} data
 */
TagsForm.prototype.postserialize = function(data) {
  data.firstName = data.firstName.trim().replace(/\s+/g, ' ');
  data.lastName = data.lastName.trim().replace(/\s+/g, ' ');
}