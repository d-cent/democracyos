/**
 * Module dependencies.
 */

var classes = require('classes');
var Emitter = require('emitter');
var events = require('events');
var log = require('debug')('democracyos:comments-replies-edit');
var o = require('query');
var render = require('render');
var request = require('request');
var t = require('t');
var template = require('./comments-replies-edit');
var serialize = require('serialize');

/**
 * Expose comments view
 */

module.exports = CommentsRepliesEditView;

/**
 * View constructor
 *
 * @param {Comment} comment
 * @constructor
 */

function CommentsRepliesEditView(comment, reply) {
  if (!(this instanceof CommentsRepliesEditView)) {
    return new CommentsRepliesEditView(comment, reply);
  };

  this.comment = comment;
  this.reply = reply;

  this.build();
  this.switchOn();
}

/**
 * Mixin Emitter
 */

Emitter(CommentsRepliesEditView.prototype);

/**
 * Build element
 *
 * @api public
 */

CommentsRepliesEditView.prototype.build = function() {
  var options = {};
  options.comment = this.comment;
  options.reply = this.reply;

  this.el = render.dom(template, options);
};

/**
 * Switch on events
 *
 * @api public
 */

CommentsRepliesEditView.prototype.switchOn = function() {
  this.events = events(this.el, this);
  this.events.bind('submit form.reply-edit-form');
  this.events.bind('click form.reply-edit-form .btn-cancel', 'oncancel');
};

/**
 * Switch off events
 *
 * @api public
 */

CommentsRepliesEditView.prototype.switchOff = function() {
  this.off('put');
  this.emit('off', this.el);
  this.events.unbind();
}

/**
 * Handle form submition
 *
 * @param {Object} data
 * @return {Array} of Errors
 * @api public
 */

CommentsRepliesEditView.prototype.onsubmit = function(ev) {
  ev.preventDefault();

  var data = serialize.object(ev.target);
  var errors = this.validate(data);
  this.errors(errors);
  if (errors.length) return log('Found errors: %o', errors);
  this.emit('submit', data);
  this.put(data);
};

/**
 * Successful submit handler
 *
 * @param {Event} ev
 * @api private
 */

CommentsRepliesEditView.prototype.onput = function(reply) {
  this.add(reply);
  var textarea = o('textarea', this.el);
  textarea.value = '';
};

/**
 * Put a comment
 *
 * @param {Object} data
 * @api public
 */

CommentsRepliesEditView.prototype.put = function(data) {
  var view = this;

  request
  .put(this.url())
  .send({ text: data.text })
  .end(function(err, res) {
    
    if (res.body && res.body.error) {
      return log('Fetch response error: %s', res.body.error), view.errors([res.body.error]);
    };

    if (err || !res.ok) return log('Fetch error: %s', err || res.error);

    view.emit('put', { data: res.body, el: view.el });
  });
}

/**
 * On cancel editing a comment
 *
 * @param {Object} data
 * @api public
 */

 CommentsRepliesEditView.prototype.oncancel = function(ev) {
  ev.preventDefault();
  classes(this.el.parentNode).remove('edit');
  this.switchOff();
};

/**
 * Validate form's fields
 *
 * @param {Object} data
 * @return {Array} of Errors
 * @api public
 */

CommentsRepliesEditView.prototype.validate = function(data) {
  var errors = [];
  if (!data.text) {
    errors.push(t('Argument cannot be empty'));
  };
  if (data.text.length > 4096) {
    errors.push(t('Argument is limited to 4096 characters'));
  };
  return errors;
}

/**
 * Fill errors list
 *
 * @param {Array} errors
 * @api public
 */

CommentsRepliesEditView.prototype.errors = function(errors) {
  var span = o('span.help-text.form-errors', this.el);
  errors = errors || [];

  span.innerHTML = '';
  errors.forEach(function(err) {
    span.innerHTML += err;
  });
}

/**
 * Render inside el
 */

CommentsRepliesEditView.prototype.render = function(el) {
  if (1 === arguments.length) {

    // if string, then query element
    if ('string' === typeof el) {
      el = o(el);
    };

    // if it's not currently inserted
    // at `el`, then append to `el`
    if (el !== this.el.parentNode) {
      el.appendChild(this.el);
    };

    // !!!: Should we return different things
    // on different conditions?
    // Or should we be consistent with
    // render returning always `this.el`
    return this;
  };

  return this.el;
}


/**
 * Get api route
 */

CommentsRepliesEditView.prototype.url = function() {
  return "/api/comment/{commentId}/reply/{replyId}"
    .replace('{commentId}', this.comment.id)
    .replace('{replyId}', this.reply.id);
}