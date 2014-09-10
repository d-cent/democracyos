/**
 * Module dependencies.
 */

var autocomplete = require('autocomplete');
var citizen = require('citizen');
var FormView = require('form-view');
var log = require('debug')('democracyos:settings-tags');
var o = require('dom');
var t = require('t');
var tags = require('tags');
var template = require('./template');
var TagPill = require('./tag-pill-view');

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
  this.pills = [];
  this.form = this.find('form');
  this.tags = this.find('#availableTags');
  this.tags.focus();
  this.setTags();
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
  this.autocomplete = autocomplete(this.tags[0], '/api/tag/all', {headers: { Accept: 'application/json', 'Content-Type': 'application/json'}})
    .label('name')
    .value('id')
    .parse(this.bound('parsedata'))
    .on('select', this.bound('ontagselected'));
}

/**
 * Turn off event bindings
 */

TagsForm.prototype.switchOff = function() {
  this.off();
}

TagsForm.prototype.setTags = function() {
  citizen.tags.forEach(this.bound('addTag'));
};


/**
 * Turn off event bindings
 */

TagsForm.prototype.parsedata = function(data){
  var str = this.tags.val().toLowerCase();
  o('ul.menu li.menu-item-').remove();
  return data.filter(function(tag) {
    var pill = o('.tag-pill[data-id=":id"]'.replace(':id', tag.id));
    return tag.name.toLowerCase().indexOf(str) == 0 && pill.length() == 0;
  });
}

/**
 * Tag selected handler
 */

TagsForm.prototype.ontagselected = function(id) {
  this.addTag(id);
  this.submit();
}

TagsForm.prototype.addTag = function(id) {
  var tag = tags.get(id);
  var pill = new TagPill(tag);
  pill.appendTo(this.find('ul.tag-pills'));
  this.pills.push(pill);
  pill.on('removetag', this.bound('ontagremoved'));
  this.tags.val('');
  this.tags.focus();
};

/**
 * Tag selected handler
 */

TagsForm.prototype.ontagremoved = function(tag) {
  this.submit();
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