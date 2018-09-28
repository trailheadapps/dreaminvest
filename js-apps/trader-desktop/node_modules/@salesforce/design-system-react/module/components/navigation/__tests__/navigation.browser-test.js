function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Adds all of the Mocha (eg `it` and `should`) and sinon testing global
 * variables to the global namespace for eslint purposes.
 */

/* eslint-env mocha */

/* global sinon */
// Import your external dependencies
import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import entries from 'object.entries';
/* Enzyme Helpers that can mount and unmount React component instances to
 * the DOM and set `this.wrapper` and `this.dom` within Mocha's `this`
 * context [full source here](tests/enzyme-helpers.js). `this` can
 * only be referenced if inside `function () {}`.
 */

import { mountComponent, unmountComponent } from '../../../tests/enzyme-helpers';
import { sampleReportCategories } from '../../../utilities/sample-data/navigation';
import Navigation from '../../navigation'; // shim for PhantomJS

if (!Object.entries) {
  entries.shim();
}
/* Set Chai to use chaiEnzyme for enzyme compatible assertions:
 * https://github.com/producthunt/chai-enzyme
 */


chai.use(chaiEnzyme());
var defaultProps = {
  id: 'sample-navigation',
  className: 'sample-navigation',
  categories: sampleReportCategories
};
/* A re-usable demo component fixture outside of `describe` sections
 * can accept props within each test and be unmounted after each tests.
 */

var DemoComponent = createReactClass({
  displayName: 'NavigationDemoComponent',
  propTypes: {
    selectedId: PropTypes.string,
    onSelect: PropTypes.func
  },
  getDefaultProps: function getDefaultProps() {
    return defaultProps;
  },
  getInitialState: function getInitialState() {
    return {};
  },
  // event handlers
  render: function render() {
    return React.createElement(Navigation, this.props);
  }
});
describe('SLDSNavigation', function () {
  describe('Assistive technology', function () {
    /* Detect if presence of accessibility features such as ARIA
     * roles and screen reader text is present in the DOM.
     */
    beforeEach(mountComponent(React.createElement(DemoComponent, null)));
    afterEach(unmountComponent);
    it('has items described by category headers', function () {
      var _this = this;

      var structure = {
        reports: 5,
        folders: 3
      };
      Object.entries(structure).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            categoryId = _ref2[0],
            itemCount = _ref2[1];

        var header = _this.wrapper.find("#sample-navigation-".concat(categoryId));

        expect(header).to.have.length(1);

        var ariaDescribedbyId = _this.wrapper.find("a[aria-describedby=\"sample-navigation-".concat(categoryId, "\"]"));

        expect(ariaDescribedbyId).to.have.length(itemCount);
      });
    });
  }); // PROPS

  describe('selectedId prop', function () {
    var selectedId = 'my_folders';
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      selectedId: selectedId
    })));
    afterEach(unmountComponent);
    it('is used to select an item', function () {
      var item = this.wrapper.find('.sample-navigation').find('li.slds-is-active').find('a[data-id="my_folders"]');
      expect(item).to.have.length(1);
    });
  }); // EVENTS

  describe('Item', function () {
    var clickHandler = sinon.spy();
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      onSelect: clickHandler
    })));
    afterEach(unmountComponent);
    it('calls onSelect', function () {
      var item = this.wrapper.find('.sample-navigation').find('a[data-id="my_folders"]');
      item.simulate('click');
      expect(clickHandler.callCount).to.equal(1);
    });
  });
});
//# sourceMappingURL=navigation.browser-test.js.map