"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require("lodash.assign");

var _lodash2 = _interopRequireDefault(_lodash);

var _reactAddonsTestUtils = require("react-addons-test-utils");

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _chai = require("chai");

var _notification = require("../../notification");

var _notification2 = _interopRequireDefault(_notification);

var _iconSettings = require("../../icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-render-return-value */

/* eslint-disable react/no-find-dom-node */
describe('SLDSNotification: ', function () {
  var generateNotification = function generateNotification(notificationInstance) {
    var reactCmp = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(_iconSettings2.default, {
      iconPath: "/assets/icons"
    }, notificationInstance));

    return _reactDom2.default.findDOMNode(reactCmp);
  };

  describe('component renders', function () {
    it('notification renders', function () {
      var notification = generateNotification(_react2.default.createElement(_notification2.default, {
        variant: "toast",
        theme: "success",
        isOpen: true
      }));
      (0, _chai.expect)(notification).to.not.equal(undefined);
    });
  });
  describe('component basic props render', function () {
    it('renders variant', function () {
      var notification = generateNotification(_react2.default.createElement(_notification2.default, {
        variant: "toast",
        theme: "success",
        icon: "notification",
        isOpen: true,
        texture: true,
        animated: true
      }));
      var alert = notification.getElementsByTagName('div')[0];
      (0, _chai.expect)(alert.className).to.include('slds-notify--toast');
    });
    it('renders theme', function () {
      var notification = generateNotification(_react2.default.createElement(_notification2.default, {
        variant: "toast",
        theme: "error",
        isOpen: true
      }));
      var alert = notification.getElementsByTagName('div')[0];
      (0, _chai.expect)(alert.className).to.include('slds-theme--error');
    });
    it('renders icon', function (done) {
      var notification = generateNotification(_react2.default.createElement(_notification2.default, {
        variant: "alert",
        theme: "success",
        iconName: "notification",
        isOpen: true,
        texture: true,
        content: "hi"
      }));
      setTimeout(function () {
        var close = notification.querySelectorAll('button');
        var svgs = notification.querySelectorAll('[*|href="/assets/icons/utility-sprite/svg/symbols.svg#notification"]');
        (0, _chai.expect)(close[0].className).to.include('slds-notify__close');
        (0, _chai.expect)(svgs[0]).to.exist;
        done();
      }, 400);
    });
  });
  describe('dismiss notification click', function () {
    it('button onClick invokes method from props', function (done) {
      var onClick = sinon.spy();
      var notification = generateNotification(_react2.default.createElement(_notification2.default, {
        variant: "toast",
        theme: "success",
        iconName: "notification",
        onDismiss: onClick,
        isOpen: true
      }));
      setTimeout(function () {
        var dismissBtn = notification.getElementsByTagName('button')[0];

        _reactAddonsTestUtils2.default.Simulate.click(dismissBtn);

        (0, _chai.expect)(onClick.calledOnce).to.be.true;
        done();
      }, 400);
    });
  });
});