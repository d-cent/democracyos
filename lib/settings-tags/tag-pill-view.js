/**
 * Module dependencies.
 */

var View = require('view');
var template = require('./tag-pill')

/**
 * TagPillView
 */

module.exports = TagPillView;

/**
 * Creates a profile edit view
 */

function TagPillView(tag) {
  if (!(this instanceof TagPillView)) {
    return new TagPillView();
  };

  this.tag = tag;
  var options = { tag: tag };
  View.call(this, template, options);
}

/**
 * Mixin with `View`
 */

View(TagPillView);


/**
 * Turn on event bindings
 */

TagPillView.prototype.switchOn = function() {
  this.bind('click', '.btn-remove', 'onremovetag');
}

/**
 * Turn off event bindings
 */

TagPillView.prototype.switchOff = function() {
  this.off();
}

/**
 * Remove TagPill click handler
 */

TagPillView.prototype.onremovetag = function(ev) {
  ev.preventDefault();
  this.remove();
  this.emit('removetag', this.tag);
}