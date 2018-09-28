import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
/* Enzyme Helpers that can mount and unmount React component instances to
 * the DOM and set `this.wrapper` and `this.dom` within Mocha's `this`
 * context [full source here](tests/enzyme-helpers.js). `this` can
 * only be referenced if inside `function () {}`.
 */

import { createMountNode, destroyMountNode } from '../../../tests/enzyme-helpers'; // Import your internal dependencies (for example):

import Popover from '../../popover';
import Button from '../../button';
import Filter from '../../filter';
import IconSettings from '../../icon-settings';
/* Set Chai to use chaiEnzyme for enzyme compatible assertions:
 * https://github.com/producthunt/chai-enzyme
 */

chai.use(chaiEnzyme());
var defaultProps = {
  id: 'sample-popover',
  body: React.createElement("span", {
    id: "sample-body"
  }, "This is the body"),
  heading: React.createElement("span", {
    id: "sample-heading"
  }, "This is the heading")
};
var defaultIds = {
  trigger: defaultProps.id,
  popover: "".concat(defaultProps.id, "-popover"),
  body: "".concat(defaultProps.id, "-dialog-body"),
  heading: "".concat(defaultProps.id, "-dialog-heading")
};
/* A re-usable demo component fixture outside of `describe` sections
 * can accept props within each test and be unmounted after each tests.
 * This wrapping component will be similar to your wrapping component
 * you will create in the React Storybook for manual testing.
 */

var DemoComponent = createReactClass({
  displayName: 'PopoverDemoComponent',
  propTypes: {
    isOpen: PropTypes.bool
  },
  getDefaultProps: function getDefaultProps() {
    return defaultProps;
  },
  getInitialState: function getInitialState() {
    return {};
  },
  render: function render() {
    return React.createElement(Popover, this.props, React.createElement(Button, {
      label: "Trigger Popover"
    }));
  }
});
/* All tests for component being tested should be wrapped in a root `describe`,
 * which should be named after the component being tested.
 * When read aloud, the cumulative `describe` and `it` names should form a coherent
 * sentence, eg "Date Picker default structure and css is present with expected
 * attributes set". If you are having trouble constructing a cumulative short
 * sentence, this may be an indicator that your test is poorly structured.
 * String provided as first parameter names the `describe` section. Limit to nouns
 * as much as possible/appropriate.`
 */

describe('SLDSFilter', function () {
  var mountNode;
  var portalWrapper;
  var wrapper; // BASIC STRUCTURE

  describe('Add custom props to Filter Popover', function () {
    var _this = this;

    beforeEach(function () {
      mountNode = createMountNode({
        context: _this
      });
    });
    afterEach(function () {
      destroyMountNode({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('Filter could take popover as a prop and use the props of popover to render, verifies the custom popover className', function () {
      var demoPopover = React.createElement(DemoComponent, {
        className: "custom-filter-popover",
        isOpen: true,
        position: "absolute"
      });
      wrapper = mount(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(Filter, {
        property: "Show Me",
        predicate: "All Opportunities",
        popover: demoPopover
      })), {
        attachTo: mountNode
      });
      expect(wrapper.find('.custom-filter-popover')).to.exist;
    });
  });
  describe('On click handler when clicking on filter', function () {
    var _this2 = this;

    beforeEach(function () {
      mountNode = createMountNode({
        context: _this2
      });
    });
    afterEach(function () {
      destroyMountNode({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('Filter could take onClick prop and trigger this callback during filter click', function (done) {
      var demoPopover = React.createElement(DemoComponent, {
        className: "custom-filter-popover"
      });
      var onFilterClicked = false;

      var onClick = function onClick() {
        onFilterClicked = true;
      };

      wrapper = mount(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(Filter, {
        property: "Show Me",
        predicate: "All Opportunities",
        popover: demoPopover,
        onClick: onClick
      })), {
        attachTo: mountNode
      });
      setTimeout(function () {
        var filterButton = wrapper.find('.slds-filters__item .slds-button--reset');
        filterButton.simulate('click', {});
        expect(onFilterClicked).to.be.true;
        done();
      }, 0);
    });
  });
});
//# sourceMappingURL=filter.browser-test.js.map