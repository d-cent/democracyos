/**
 * Module dependencies.
 */
var log = require('debug')('democracyos:settings-profile');
var t = require('t');
var template = require('./template');
var activityTemplate = require('./activity-item-template');
var View = require('view');
var o = require('dom');

/**
 * Expose ActivityStream
 */
module.exports = ActivityStream;

/**
 * Creates a profile edit view
 */

function ActivityStream() {
  if (!(this instanceof ActivityStream)) {
    return new ActivityStream();
  }

  View.call(this, template);
  this.doList();
}


/**
 * Mixin with `Emitter`
 */
View(ActivityStream);


/**
 * Render an activity over the list.
 * @param anActivity Activity for the stream.
 */
ActivityStream.prototype.renderActivity = function (anActivity) {
  o("#activity-stream-wrapper ul" , this.el).append(o(activityTemplate({activity: anActivity})));
};

/**
 *  Render the list of te activities over the element
 * @param aList
 */
ActivityStream.prototype.renderActivityList = function (aList) {
  var self = this;
  aList.forEach(function (anActivity) {
    self.renderActivity(anActivity);
  });
};

ActivityStream.prototype.doList = function () {
  //FIXME: harcode activities
  var activities = [
    {
      event: "An event"
      , date: "12313"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "9 mins ago"
      , actor: "fulano de tal"
    },
    {
      event: "An event"
      , date: "12313"
      , actor: "fulano de tal"
    }
  ];
  this.renderActivityList(activities);
};