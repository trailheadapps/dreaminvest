/* eslint-disable react/no-render-return-value */

/* eslint-disable react/no-find-dom-node */
import React from 'react';
import ReactDOM from 'react-dom';
import assign from 'lodash.assign';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import SLDSNotification from '../../notification';
import IconSettings from '../../icon-settings';
describe('SLDSNotification: ', function () {
  var generateNotification = function generateNotification(notificationInstance) {
    var reactCmp = TestUtils.renderIntoDocument(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, notificationInstance));
    return ReactDOM.findDOMNode(reactCmp);
  };

  describe('component renders', function () {
    it('notification renders', function () {
      var notification = generateNotification(React.createElement(SLDSNotification, {
        variant: "toast",
        theme: "success",
        isOpen: true
      }));
      expect(notification).to.not.equal(undefined);
    });
  });
  describe('component basic props render', function () {
    it('renders variant', function () {
      var notification = generateNotification(React.createElement(SLDSNotification, {
        variant: "toast",
        theme: "success",
        icon: "notification",
        isOpen: true,
        texture: true,
        animated: true
      }));
      var alert = notification.getElementsByTagName('div')[0];
      expect(alert.className).to.include('slds-notify--toast');
    });
    it('renders theme', function () {
      var notification = generateNotification(React.createElement(SLDSNotification, {
        variant: "toast",
        theme: "error",
        isOpen: true
      }));
      var alert = notification.getElementsByTagName('div')[0];
      expect(alert.className).to.include('slds-theme--error');
    });
    it('renders icon', function (done) {
      var notification = generateNotification(React.createElement(SLDSNotification, {
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
        expect(close[0].className).to.include('slds-notify__close');
        expect(svgs[0]).to.exist;
        done();
      }, 400);
    });
  });
  describe('dismiss notification click', function () {
    it('button onClick invokes method from props', function (done) {
      var onClick = sinon.spy();
      var notification = generateNotification(React.createElement(SLDSNotification, {
        variant: "toast",
        theme: "success",
        iconName: "notification",
        onDismiss: onClick,
        isOpen: true
      }));
      setTimeout(function () {
        var dismissBtn = notification.getElementsByTagName('button')[0];
        TestUtils.Simulate.click(dismissBtn);
        expect(onClick.calledOnce).to.be.true;
        done();
      }, 400);
    });
  });
});
//# sourceMappingURL=notification.browser-test.js.map