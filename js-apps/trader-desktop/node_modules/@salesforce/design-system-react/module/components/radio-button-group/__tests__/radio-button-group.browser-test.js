function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
/* Enzyme Helpers that can mount and unmount React component instances to
 * the DOM and set `this.wrapper` and `this.dom` within Mocha's `this`
 * context [full source here](tests/enzyme-helpers.js). `this` can
 * only be referenced if inside `function () {}`.
 */

import { createMountNode, destroyMountNode } from '../../../tests/enzyme-helpers';
import RadioButtonGroup from '../../radio-button-group';
import Radio from '../../radio-button-group/radio';
chai.use(chaiEnzyme());
/* Re-usable demo component.
 */

var RadioButtonGroupExample =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RadioButtonGroupExample, _React$Component);

  function RadioButtonGroupExample(props) {
    var _this;

    _classCallCheck(this, RadioButtonGroupExample);

    _this = _possibleConstructorReturn(this, (RadioButtonGroupExample.__proto__ || Object.getPrototypeOf(RadioButtonGroupExample)).call(this, props));
    _this.state = {
      checked: 'Tue'
    };
    return _this;
  }

  _createClass(RadioButtonGroupExample, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
      return React.createElement(RadioButtonGroup, {
        labels: this.props.labels,
        onChange: function onChange(event) {
          return _this2.setState({
            checked: event.target.value
          });
        },
        disabled: this.props.disabled,
        required: this.props.required
      }, days.map(function (day) {
        return React.createElement(Radio, {
          key: day,
          label: day,
          value: day,
          checked: _this2.state.checked === day,
          variant: "button-group"
        });
      }));
    }
  }]);

  return RadioButtonGroupExample;
}(React.Component);

RadioButtonGroupExample.propTypes = {
  labels: PropTypes.shape({
    error: PropTypes.string,
    label: PropTypes.string
  }),
  disabled: PropTypes.bool,
  required: PropTypes.bool
};
RadioButtonGroupExample.defaultProps = {
  labels: {
    label: 'Day of week'
  }
};
/* RadioButtonGroup rendering tests
 */

describe('RadioButtonGroup', function () {
  var _this3 = this;

  var mountNode;
  var wrapper;
  beforeEach(function () {
    mountNode = createMountNode({
      context: _this3
    });
  });
  afterEach(function () {
    destroyMountNode({
      wrapper: wrapper,
      mountNode: mountNode
    });
  });
  it('renders a radio button group', function () {
    wrapper = mount(React.createElement(RadioButtonGroupExample, null), {
      attachTo: mountNode
    });
    var radios = wrapper.find(Radio);
    expect(radios).to.have.lengthOf(5, 'there are five radio inputs');
    radios.forEach(function (radioWrapper, index) {
      var radio = radios.get(index);
      expect(radio.props.checked).to.equal(radio.props.label === 'Tue', 'the second radio input is checked');
    });
    var legend = wrapper.find('legend');
    expect(legend.text()).to.equal('Day of week', 'there is a label');
  });
  it('renders a disabled state', function () {
    wrapper = mount(React.createElement(RadioButtonGroupExample, {
      disabled: true
    }), {
      attachTo: mountNode
    });
    var radios = wrapper.find(Radio);
    radios.forEach(function (radioWrapper, index) {
      var radio = radios.get(index);
      expect(radio.props.disabled, 'all radio inputs are disabled').to.be.true;
    });
  });
  it('renders a required indicator', function () {
    wrapper = mount(React.createElement(RadioButtonGroupExample, {
      required: true
    }), {
      attachTo: mountNode
    });
    var abbr = wrapper.find('abbr');
    expect(abbr.text()).to.equal('*', 'there is a required indicator');
  });
  it('triggers a change callback', function () {
    wrapper = mount(React.createElement(RadioButtonGroupExample, null), {
      attachTo: mountNode
    });
    var radio = wrapper.find({
      value: 'Mon'
    });
    expect(radio.props().checked).to.be.false;
    radio.simulate('change', {
      event: {
        target: 'Mon'
      }
    });
    expect(radio.props().checked, 'radio button changes from unchecked to checked').to.be.true;
  });
});
//# sourceMappingURL=radio-button-group.browser-test.js.map