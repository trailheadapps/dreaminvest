/* eslint-disable react/no-render-return-value */

/* eslint-disable react/no-find-dom-node */
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import IconSettings from '../../icon-settings';
import SLDSButtonGroup from '../../button-group';
import SLDSButton from '../../button';
describe('SLDSButtonGroup: ', function () {
  var generateButtonGroup = function generateButtonGroup(buttonGroupInstance) {
    var reactCmp = TestUtils.renderIntoDocument(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", null, buttonGroupInstance)));
    return ReactDOM.findDOMNode(reactCmp).children[0];
  };

  describe('component renders', function () {
    it('buttonGroup renders', function () {
      var instance = React.createElement(SLDSButtonGroup, null, React.createElement(SLDSButton, {
        label: "Chart",
        variant: "icon",
        iconCategory: "utility",
        iconName: "chart",
        iconVariant: "border"
      }), React.createElement(SLDSButton, {
        label: "Filter",
        variant: "icon",
        iconCategory: "utility",
        iconName: "filter",
        iconVariant: "border"
      }), React.createElement(SLDSButton, {
        label: "Sort",
        variant: "icon",
        iconCategory: "utility",
        iconName: "sort",
        iconVariant: "more"
      }));
      var buttonGroup = generateButtonGroup(instance);
      expect(buttonGroup).to.not.equal(undefined);
    });
    it('renders proper attributes', function () {
      var instance = React.createElement(SLDSButtonGroup, null, React.createElement(SLDSButton, {
        label: "Chart",
        variant: "icon",
        iconCategory: "utility",
        iconName: "chart",
        iconVariant: "border"
      }), React.createElement(SLDSButton, {
        label: "Filter",
        variant: "icon",
        iconCategory: "utility",
        iconName: "filter",
        iconVariant: "border"
      }), React.createElement(SLDSButton, {
        label: "Sort",
        variant: "icon",
        iconCategory: "utility",
        iconName: "sort",
        iconVariant: "more"
      }));
      var buttonGroup = generateButtonGroup(instance);
      var role = buttonGroup.getAttribute('role');
      expect(role).to.equal('group');
    });
    it('renders children', function () {
      var instance = React.createElement(SLDSButtonGroup, null, React.createElement(SLDSButton, {
        label: "Chart",
        variant: "icon",
        iconCategory: "utility",
        iconName: "chart",
        iconVariant: "border"
      }), React.createElement(SLDSButton, {
        label: "Filter",
        variant: "icon",
        iconCategory: "utility",
        iconName: "filter",
        iconVariant: "border"
      }), React.createElement(SLDSButton, {
        label: "Sort",
        variant: "icon",
        iconCategory: "utility",
        iconName: "sort",
        iconVariant: "more"
      }));
      var buttonGroup = generateButtonGroup(instance);
      var children = buttonGroup.getElementsByTagName('button');
      expect(children.length).to.equal(3);
    });
  });
  describe('component behavior works', function () {
    it('first button in group invokes method from props', function () {
      var onClick = sinon.spy();
      var instance = React.createElement(SLDSButtonGroup, null, React.createElement(SLDSButton, {
        label: "Refresh",
        variant: "neutral",
        onClick: onClick
      }), React.createElement(SLDSButton, {
        label: "Edit",
        variant: "neutral"
      }), React.createElement(SLDSButton, {
        label: "Save",
        variant: "neutral"
      }), React.createElement(SLDSButton, {
        label: "More Options",
        variant: "icon",
        iconCategory: "utility",
        iconName: "down",
        iconVariant: "border-filled"
      }));
      var buttonGroup = generateButtonGroup(instance);
      var firstBtn = buttonGroup.getElementsByTagName('button')[0];
      TestUtils.Simulate.click(firstBtn);
      expect(onClick.calledOnce).to.be.true;
    });
  });
});
//# sourceMappingURL=button-group.browser-test.js.map