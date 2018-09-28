function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf, action } from '@storybook/react';
import RadioGroup from '../../radio-group';
import Radio from '../../radio-group/radio';
import { RADIO_GROUP } from '../../../utilities/constants';

var RadioGroupExample =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RadioGroupExample, _React$Component);

  function RadioGroupExample(props) {
    var _this;

    _classCallCheck(this, RadioGroupExample);

    _this = _possibleConstructorReturn(this, (RadioGroupExample.__proto__ || Object.getPrototypeOf(RadioGroupExample)).call(this, props));
    _this.state = {};
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RadioGroupExample, [{
    key: "onChange",
    value: function onChange(event) {
      this.setState({
        checked: event.target.value
      });
      action('onChange')(event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var values = ['Radio Label One', 'Radio Label Two'];
      return React.createElement("div", null, React.createElement("h1", {
        className: "slds-text-title_caps slds-p-vertical--medium"
      }, this.props.heading), React.createElement(RadioGroup, {
        labels: this.props.labels,
        onChange: this.onChange,
        disabled: this.props.disabled,
        required: this.props.required
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

  return RadioGroupExample;
}(React.Component);

RadioGroupExample.propTypes = {
  labels: PropTypes.shape({
    error: PropTypes.string,
    label: PropTypes.string
  }),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  heading: PropTypes.string
};
RadioGroupExample.defaultProps = {
  labels: {
    label: 'Radio Group Label'
  }
};
storiesOf(RADIO_GROUP, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, getStory());
}).add('Base', function () {
  return React.createElement(RadioGroupExample, {
    heading: "Base"
  });
}).add('Disabled', function () {
  return React.createElement(RadioGroupExample, {
    heading: "Disabled",
    disabled: true
  });
}).add('Required', function () {
  return React.createElement(RadioGroupExample, {
    heading: "Required",
    required: true
  });
}).add('Error', function () {
  return React.createElement(RadioGroupExample, {
    heading: "Error",
    labels: {
      label: 'Radio Group Label',
      error: 'There is an error'
    }
  });
});
//# sourceMappingURL=storybook-stories.js.map