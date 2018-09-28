function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// Implements the [Progress Indicator design pattern](https://lightningdesignsystem.com/components/progress-indicator/) in React.
// Based on SLDS v2.4.0
import React from 'react';
import PropTypes from 'prop-types';
import assign from 'lodash.assign';
import find from 'lodash.find'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid';
import { PROGRESS_INDICATOR } from '../../utilities/constants'; // Child components

import Step from './private/step';
import Progress from './private/progress';
var displayName = PROGRESS_INDICATOR;
var propTypes = {
  /**
   * **Assistive text for accessibility**
   * This object is merged with the default props object on every render.
   * * `percentage`: Label for Progress Bar. The default is `Progress: [this.props.value]%`
   */
  assistiveText: PropTypes.shape({
    percentage: PropTypes.string
  }),

  /**
   * CSS class names to be added to the container element. `array`, `object`, or `string` are accepted.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Stores all completed steps. It is an array of step objects.
   */
  completedSteps: PropTypes.array,

  /**
   * Stores all disabled steps. It is an array of step objects. Steps are still clickable/focusable,
   * this only disables cursor change and removes onClick and onFocus event callbacks.
   */
  disabledSteps: PropTypes.array,

  /**
   * Stores all error steps. It is an array of step objects and usually there is only one error step, the current step.
   */
  errorSteps: PropTypes.array,

  /**
   * HTML id for component.
   */
  id: PropTypes.string,

  /**
   * Triggered when an individual step is clicked. By default, it receives an event and returns step state and the step object clicked: `{ isCompleted, isDisabled, isError, isSelected, step }`. Users are able to pass a callback handleClick function in forms of: <function name>(event, data) where data is the callback result.
   * ```
   * const handleStepClick = function(event, data) { console.log(data); };
   *   <ProgressIndicator onStepClick={handleStepClick} />
   * ```
   */
  onStepClick: PropTypes.func,

  /**
   * Triggered when an individual step is focused. By default, it receives an event and returns step state and the step object clicked: `{ isCompleted, isDisabled, isError, isSelected, step }`. Users are able to pass a callback handleClick function in forms of: <function name>(event, data) where data is the callback result.
   * ```
   * const handleStepFocus = function(event, data) { console.log(data); };
   *   <ProgressIndicator onStepFocus={handleStepFocus} />
   * ```
   */
  onStepFocus: PropTypes.func,

  /**
   * Represents the currently selected or active step. It is a step object.
   */
  selectedStep: PropTypes.object.isRequired,

  /**
   * It is an array of step objects in the following form:
   * ```
   *  [{
   *    id: <PropTypes.number> or <PropTypes.string>, has to be unique
   *    label: <PropTypes.string>, representing the tooltip content
   *    assistiveText: <PropTypes.string>, The default is `[Step props.index + 1]: [status]`. Status is if the step has been completed or in an error state.
   *  }],
   *  ```
   */
  steps: PropTypes.array.isRequired,

  /**
   * Stores all steps with opened tooltips. This property is mainly for development purposes. The tooltip should only show on hover for the user.
   */
  tooltipIsOpenSteps: PropTypes.array,

  /**
   * Determines component style.
   */
  variant: PropTypes.oneOf(['base', 'modal'])
};
var defaultSteps = [{
  id: 0,
  label: 'tooltip label #1'
}, {
  id: 1,
  label: 'tooltip label #2'
}, {
  id: 2,
  label: 'tooltip label #3'
}, {
  id: 3,
  label: 'tooltip label #4'
}, {
  id: 4,
  label: 'tooltip label #5'
}];
var defaultProps = {
  assistiveText: {},
  errorSteps: [],
  completedSteps: [],
  disabledSteps: [],
  selectedStep: defaultSteps[0],
  variant: 'base',
  // click/focus callbacks by default do nothing
  onStepClick: function onStepClick() {},
  onStepFocus: function onStepFocus() {}
};
/**
 * Check if `steps` prop is valid
 */

function checkSteps(steps) {
  var isStepsDefined = steps !== undefined;

  var isLabelDefined = function isLabelDefined(step) {
    return step.label !== undefined;
  };

  var stepLabelsDefined = Array.isArray(steps) && steps.every(isLabelDefined);
  return isStepsDefined && stepLabelsDefined;
}
/**
 * Check if an item is from an array of items when 'items' is an array;
 * Check if an item is equal to the other item after being stringified when 'items' is a JSON object
 */


function findStep(item, items) {
  if (Array.isArray(items)) {
    return !!find(items, item);
  }

  return JSON.stringify(item) === JSON.stringify(items);
}
/**
 * Progress Indicator is a component that communicates to the user the progress of a particular process.
 */


var ProgressIndicator =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProgressIndicator, _React$Component);

  function ProgressIndicator() {
    _classCallCheck(this, ProgressIndicator);

    return _possibleConstructorReturn(this, (ProgressIndicator.__proto__ || Object.getPrototypeOf(ProgressIndicator)).apply(this, arguments));
  }

  _createClass(ProgressIndicator, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.generatedId = shortid.generate();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isUnmounting = true;
    }
    /**
     * Get the progress indicator's HTML id. Generate a new one if no ID present.
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.props.id || this.generatedId;
    }
  }, {
    key: "getSteps",
    value: function getSteps() {
      // check if passed steps are valid
      return checkSteps(this.props.steps) ? this.props.steps : defaultSteps;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      // Merge objects of strings with their default object
      var assistiveText = this.props ? assign({}, defaultProps.assistiveText, this.props.assistiveText) : defaultProps.assistiveText;
      /** 1. preparing data */

      var allSteps = this.getSteps();
      var currentStep = 0; // find index for the current step

      for (var i = 0; i < allSteps.length; i += 1) {
        // assign step an id if it does not have one
        if (allSteps[i].id === undefined) {
          allSteps[i].id = i;
        }

        if (findStep(allSteps[i], this.props.selectedStep)) {
          currentStep = i;
        }
      }
      /** 2. return DOM */


      return React.createElement(Progress, {
        assistiveText: assistiveText,
        id: this.getId(),
        value: currentStep === 0 ? '0' : "".concat(100 * (currentStep / (allSteps.length - 1))),
        variant: this.props.variant,
        className: this.props.className
      }, allSteps.map(function (step, i) {
        return React.createElement(Step, {
          key: "".concat(_this.getId(), "-").concat(step.id),
          id: _this.getId(),
          index: i,
          isSelected: findStep(step, _this.props.selectedStep),
          isDisabled: findStep(step, _this.props.disabledSteps),
          isError: findStep(step, _this.props.errorSteps),
          isCompleted: findStep(step, _this.props.completedSteps),
          onClick: _this.props.onStepClick,
          onFocus: _this.props.onStepFocus,
          step: step,
          tooltipIsOpen: findStep(step, _this.props.tooltipIsOpenSteps)
        });
      }));
    }
  }]);

  return ProgressIndicator;
}(React.Component);

ProgressIndicator.displayName = displayName;
ProgressIndicator.propTypes = propTypes;
ProgressIndicator.defaultProps = defaultProps;
export default ProgressIndicator;
//# sourceMappingURL=index.js.map