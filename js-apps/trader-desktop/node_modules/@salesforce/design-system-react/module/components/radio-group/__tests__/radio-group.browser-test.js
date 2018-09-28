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
import RadioGroup from '../../radio-group';
import Radio from '../../radio-group/radio';
chai.use(chaiEnzyme());
/* Re-usable demo component.
 */

var RadioGroupExample =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RadioGroupExample, _React$Component);

  function RadioGroupExample(props) {
    var _this;

    _classCallCheck(this, RadioGroupExample);

    _this = _possibleConstructorReturn(this, (RadioGroupExample.__proto__ || Object.getPrototypeOf(RadioGroupExample)).call(this, props));
    _this.state = {
      checked: 'Radio Label One'
    };
    return _this;
  }

  _createClass(RadioGroupExample, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var values = ['Radio Label One', 'Radio Label Two'];
      return React.createElement(RadioGroup, {
        labels: this.props.labels,
        onChange: function onChange(event) {
          return _this2.setState({
            checked: event.target.value
          });
        },
        disabled: this.props.disabled,
        required: this.props.required
      }, values.map(function (value) {
        return React.createElement(Radio, {
          key: value,
          label: value,
          value: value,
          checked: _this2.state.checked === value,
          variant: "base"
        });
      }));
    }
  }]);

  return RadioGroupExample;
}(React.Component);

RadioGroupExample.propTypes = {
  labels: PropTypes.shape({
    error: PropTypes.string,
    label: PropTypes.string
  }),
  disabled: PropTypes.bool,
  required: PropTypes.bool
};
RadioGroupExample.defaultProps = {
  labels: {
    label: 'Radio Group Label'
  }
};
/* RadioGroup rendering tests
 */

describe('RadioGroup', function () {
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
  it('renders a radio group', function () {
    wrapper = mount(React.createElement(RadioGroupExample, null), {
      attachTo: mountNode
    });
    var radios = wrapper.find(Radio);
    expect(radios).to.have.lengthOf(2, 'there are 2 radio inputs');
    radios.forEach(function (radioWrapper, index) {
      var radio = radios.get(index);
      expect(radio.props.checked).to.equal(radio.props.label === 'Radio Label One', 'the second radio input is checked');
    });
    var legend = wrapper.find('legend');
    expect(legend.text()).to.equal('Radio Group Label', 'there is a label');
  });
  it('renders a disabled state', function () {
    wrapper = mount(React.createElement(RadioGroupExample, {
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
    wrapper = mount(React.createElement(RadioGroupExample, {
      required: true
    }), {
      attachTo: mountNode
    });
    var abbr = wrapper.find('abbr');
    expect(abbr.text()).to.equal('*', 'there is a required indicator');
  });
  it('triggers a change callback', function () {
    wrapper = mount(React.createElement(RadioGroupExample, null), {
      attachTo: mountNode
    });
    var radio = wrapper.find({
      value: 'Radio Label Two'
    });
    expect(radio.props().checked).to.be.false;
    radio.simulate('change', {
      event: {
        target: 'Radio Label Two'
      }
    });
    expect(radio.props().checked, 'radio button changes from unchecked to checked').to.be.true;
  });
});
//# sourceMappingURL=radio-group.browser-test.js.map