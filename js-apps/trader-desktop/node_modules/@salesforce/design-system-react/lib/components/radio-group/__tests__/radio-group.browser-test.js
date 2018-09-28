"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _chaiEnzyme = require("chai-enzyme");

var _chaiEnzyme2 = _interopRequireDefault(_chaiEnzyme);

var _enzyme = require("enzyme");

var _enzymeHelpers = require("../../../tests/enzyme-helpers");

var _radioGroup = require("../../radio-group");

var _radioGroup2 = _interopRequireDefault(_radioGroup);

var _radio = require("../../radio-group/radio");

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_chai2.default.use((0, _chaiEnzyme2.default)());
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
      return _react2.default.createElement(_radioGroup2.default, {
        labels: this.props.labels,
        onChange: function onChange(event) {
          return _this2.setState({
            checked: event.target.value
          });
        },
        disabled: this.props.disabled,
        required: this.props.required
      }, values.map(function (value) {
        return _react2.default.createElement(_radio2.default, {
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
}(_react2.default.Component);

RadioGroupExample.propTypes = {
  labels: _propTypes2.default.shape({
    error: _propTypes2.default.string,
    label: _propTypes2.default.string
  }),
  disabled: _propTypes2.default.bool,
  required: _propTypes2.default.bool
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
    mountNode = (0, _enzymeHelpers.createMountNode)({
      context: _this3
    });
  });
  afterEach(function () {
    (0, _enzymeHelpers.destroyMountNode)({
      wrapper: wrapper,
      mountNode: mountNode
    });
  });
  it('renders a radio group', function () {
    wrapper = (0, _enzyme.mount)(_react2.default.createElement(RadioGroupExample, null), {
      attachTo: mountNode
    });
    var radios = wrapper.find(_radio2.default);
    (0, _chai.expect)(radios).to.have.lengthOf(2, 'there are 2 radio inputs');
    radios.forEach(function (radioWrapper, index) {
      var radio = radios.get(index);
      (0, _chai.expect)(radio.props.checked).to.equal(radio.props.label === 'Radio Label One', 'the second radio input is checked');
    });
    var legend = wrapper.find('legend');
    (0, _chai.expect)(legend.text()).to.equal('Radio Group Label', 'there is a label');
  });
  it('renders a disabled state', function () {
    wrapper = (0, _enzyme.mount)(_react2.default.createElement(RadioGroupExample, {
      disabled: true
    }), {
      attachTo: mountNode
    });
    var radios = wrapper.find(_radio2.default);
    radios.forEach(function (radioWrapper, index) {
      var radio = radios.get(index);
      (0, _chai.expect)(radio.props.disabled, 'all radio inputs are disabled').to.be.true;
    });
  });
  it('renders a required indicator', function () {
    wrapper = (0, _enzyme.mount)(_react2.default.createElement(RadioGroupExample, {
      required: true
    }), {
      attachTo: mountNode
    });
    var abbr = wrapper.find('abbr');
    (0, _chai.expect)(abbr.text()).to.equal('*', 'there is a required indicator');
  });
  it('triggers a change callback', function () {
    wrapper = (0, _enzyme.mount)(_react2.default.createElement(RadioGroupExample, null), {
      attachTo: mountNode
    });
    var radio = wrapper.find({
      value: 'Radio Label Two'
    });
    (0, _chai.expect)(radio.props().checked).to.be.false;
    radio.simulate('change', {
      event: {
        target: 'Radio Label Two'
      }
    });
    (0, _chai.expect)(radio.props().checked, 'radio button changes from unchecked to checked').to.be.true;
  });
});