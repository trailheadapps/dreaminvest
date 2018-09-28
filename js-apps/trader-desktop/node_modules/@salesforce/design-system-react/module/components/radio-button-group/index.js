function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// Implements the [Radio Button Group design pattern](https://lightningdesignsystem.com/components/radio-button-group/) in React.
// Based on SLDS v2.5.0
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shortid from 'shortid';
import assign from 'lodash.assign';
import { RADIO_BUTTON_GROUP } from '../../utilities/constants';
var propTypes = {
  /**
   * Children are expected to be Radio components.
   */
  children: PropTypes.node.isRequired,

  /**
   * Custom CSS classes added to `slds-radio_button-group` node.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * **Text labels for internationalization**
   * This object is merged with the default props object on every render.
   * * `error`: Message to display when any of Checkboxes are in an error state.
   * * `label`: This label appears above the button group.
   */
  labels: PropTypes.shape({
    error: PropTypes.string,
    label: PropTypes.string
  }),

  /**
   * This event fires when the radio selection changes.
   */
  onChange: PropTypes.func,

  /**
   * Disable all radio inputs.
   */
  disabled: PropTypes.bool,

  /**
   * Adds an indicator that this field is required.
   */
  required: PropTypes.bool,

  /**
   * The name of this radio group.
   */
  name: PropTypes.string,

  /**
   * The ID of the error message, for linking to radio inputs with aria-describedby.
   */
  errorId: PropTypes.string
};
var defaultProps = {
  labels: {}
};
/**
 * A styled select list that can have a single entry checked at any one time.
 * The RadioButtonGroup component wraps [Radio](/components/radios) components, which should be used as children.
 */

var RadioButtonGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RadioButtonGroup, _React$Component);

  function RadioButtonGroup(props) {
    var _this;

    _classCallCheck(this, RadioButtonGroup);

    _this = _possibleConstructorReturn(this, (RadioButtonGroup.__proto__ || Object.getPrototypeOf(RadioButtonGroup)).call(this, props)); // Merge objects of strings with their default object

    _this.labels = _this.props.labels ? assign({}, defaultProps.labels, _this.props.labels) : defaultProps.labels;
    _this.generatedName = shortid.generate();
    _this.generatedErrorId = _this.labels.error ? shortid.generate() : null;
    return _this;
  }

  _createClass(RadioButtonGroup, [{
    key: "getErrorId",
    value: function getErrorId() {
      if (this.hasError()) {
        return this.props.errorId || this.generatedErrorId;
      }

      return undefined;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.props.name || this.generatedName;
    }
  }, {
    key: "hasError",
    value: function hasError() {
      return !!this.labels.error;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = React.Children.map(this.props.children, function (child) {
        return React.cloneElement(child, {
          name: _this2.getName(),
          onChange: _this2.props.onChange,
          'aria-describedby': _this2.getErrorId(),
          disabled: _this2.props.disabled
        });
      });
      return React.createElement("fieldset", {
        className: classNames('slds-form-element', {
          'slds-has-error': this.labels.error
        })
      }, React.createElement("legend", {
        className: "slds-form-element__legend slds-form-element__label"
      }, this.props.required ? React.createElement("abbr", {
        className: "slds-required",
        title: "required"
      }, "*") : null, this.labels.label), React.createElement("div", {
        className: classNames('slds-form-element__control', this.props.className)
      }, React.createElement("div", {
        className: "slds-radio_button-group"
      }, children), this.labels.error ? React.createElement("div", {
        id: this.getErrorId(),
        className: "slds-form-element__help"
      }, this.labels.error) : null));
    }
  }]);

  return RadioButtonGroup;
}(React.Component);

RadioButtonGroup.displayName = RADIO_BUTTON_GROUP;
RadioButtonGroup.propTypes = propTypes;
RadioButtonGroup.defaultProps = defaultProps;
export default RadioButtonGroup;
//# sourceMappingURL=index.js.map