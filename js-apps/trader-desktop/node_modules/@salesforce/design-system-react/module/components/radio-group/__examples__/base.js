function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import RadioGroup from "../../../../components/radio-group"; // `~` is replaced with design-system-react at runtime

import Radio from "../../../../components/radio-group/radio"; // `~` is replaced with design-system-react at runtime

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var values = ['Radio Label One', 'Radio Label Two'];
      var labels = {
        label: 'Radio Group Label'
      };

      if (this.props.errorLabel) {
        labels.error = this.props.errorLabel;
      }

      return React.createElement("div", null, React.createElement(RadioGroup, {
        labels: labels,
        onChange: function onChange(event) {
          return _this2.setState({
            checked: event.target.value
          });
        },
        disabled: this.props.disabled,
        required: this.props.required,
        name: this.props.name,
        errorId: this.props.errorId
      }, values.map(function (value) {
        return React.createElement(Radio, {
          key: value,
          id: value,
          label: value,
          value: value,
          checked: _this2.state.checked === value,
          variant: "base"
        });
      })));
    }
  }]);

  return Example;
}(React.Component);

Example.propTypes = {
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  name: PropTypes.string,
  errorId: PropTypes.string,
  errorLabel: PropTypes.string
};
Example.displayName = 'RadioGroupExample';
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=base.js.map