function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Tooltip
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid';
import { POPOVER_TOOLTIP } from '../../utilities/constants';
import Dialog from '../utilities/dialog';
import Icon from '../icon';
import { getMargin, getNubbinClassName } from '../../utilities/dialog-helpers'; // This component's `checkProps` which issues warnings to developers about properties when in development mode (similar to React's built in development tools)

import checkProps from './check-props'; // ### Display Name
// Always use the canonical component name as the React display name.

var displayName = POPOVER_TOOLTIP;
var propTypes = {
  /**
   * Alignment of the Tooltip relative to the element that triggers it.
   */
  align: PropTypes.oneOf(['top', 'top left', 'top right', 'right', 'right top', 'right bottom', 'bottom', 'bottom left', 'bottom right', 'left', 'left top', 'left bottom']).isRequired,

  /**
   * **Assistive text for accessibility**
   * This object is merged with the default props object on every render.
   * * `tooltipTipLearnMoreIcon`: This text is inside the info icon within the tooltip content and exists to "complete the sentence" for assistive tech users.
   * * `triggerLearnMoreIcon`: This text is inside the info icon that triggers the tooltip in order to have text within the link.
   */
  assistiveText: PropTypes.shape({
    tooltipTipLearnMoreIcon: PropTypes.string,
    triggerLearnMoreIcon: PropTypes.string
  }),

  /**
   * Pass the one element that triggers the Tooltip as a child. It must be an element with `tabIndex` or an element that already has a `tabIndex` set such as an anchor or a button, so that keyboard users can tab to it.
   */
  children: PropTypes.node,

  /**
   * Content inside Tooltip.
   */
  content: PropTypes.node.isRequired,

  /**
   * By default, dialogs will flip their alignment (such as bottom to top) if they extend beyond a boundary element such as a scrolling parent or a window/viewpoint. `hasStaticAlignment` disables this behavior and allows this component to extend beyond boundary elements. _Not tested._
   */
  hasStaticAlignment: PropTypes.bool,

  /**
   * Delay on Tooltip closing.
   */
  hoverCloseDelay: PropTypes.number,

  /**
   * A unique ID is needed in order to support keyboard navigation, ARIA support, and connect the popover to the triggering element.
   */
  id: PropTypes.string,

  /**
   * **Text labels for internationalization**
   * This object is merged with the default props object on every render.
   * * `learnMoreAfter`: This label appears in the tooltip after the info icon.
   * * `learnMoreBefore`: This label appears in the tooltip before the info icon.
   */
  labels: PropTypes.shape({
    learnMoreAfter: PropTypes.string,
    learnMoreBefore: PropTypes.string
  }),

  /**
   * Forces tooltip to be open. A value of `false` will disable any interaction with the tooltip.
   */
  isOpen: PropTypes.bool,

  /**
   * CSS classes to be added to tag with `slds-tooltip-trigger`.
   */
  triggerClassName: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Please select one of the following:
   * * `absolute` - (default) The dialog will use `position: absolute` and style attributes to position itself. This allows inverted placement or flipping of the dialog.
   * * `overflowBoundaryElement` - The dialog will overflow scrolling parents. Use on elements that are aligned to the left or right of their target and don't care about the target being within a scrolling parent. Typically this is a popover or tooltip. Dropdown menus can usually open up and down if no room exists. In order to achieve this a portal element will be created and attached to `body`. This element will render into that detached render tree.
   * * `relative` - No styling or portals will be used. Menus will be positioned relative to their triggers. This is a great choice for HTML snapshot testing.
   */
  position: PropTypes.oneOf(['absolute', 'overflowBoundaryElement', 'relative']),

  /**
   * Custom styles to be added to wrapping triggering `div`.
   */
  triggerStyle: PropTypes.object,

  /**
   * Determines the theme of tooltip: for informative purpose (blue background) or warning purpose (red background). This used to be `variant`.
   */
  theme: PropTypes.oneOf(['info', 'error']),

  /**
   * Determines the type of the tooltip.
   */
  variant: PropTypes.oneOf(['base', 'learnMore'])
};
var defaultProps = {
  assistiveText: {
    tooltipTipLearnMoreIcon: 'this link',
    triggerLearnMoreIcon: 'Learn More'
  },
  align: 'top',
  content: React.createElement("span", null, "Tooltip"),
  labels: {
    learnMoreAfter: 'to learn more.',
    learnMoreBefore: 'Click'
  },
  hoverCloseDelay: 50,
  position: 'absolute',
  theme: 'info',
  variant: 'base'
};
/**
 * The PopoverTooltip component is variant of the Lightning Design System Popover component. This component wraps an element that triggers it to open. It must be a focusable child element (either a button or an anchor), so that keyboard users can navigate to it.
 */

var Tooltip =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip(props) {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "handleCancel", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          isOpen: false,
          isClosing: false
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleMouseEnter", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          isOpen: true,
          isClosing: false
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleMouseLeave", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          isClosing: true
        });

        setTimeout(function () {
          if (!_this.isUnmounting && _this.state.isClosing) {
            _this.setState({
              isOpen: false,
              isClosing: false
            });
          }
        }, _this.props.hoverCloseDelay);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "saveTriggerRef", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(component) {
        _this.trigger = component; // yes, this is a re-render triggered by a render.
        // Dialog/Popper.js cannot place the popover until
        // the trigger/target DOM node is mounted. This
        // way `findDOMNode` is not called and parent
        // DOM nodes are not queried.

        if (!_this.state.triggerRendered) {
          _this.setState({
            triggerRendered: true
          });
        }
      }
    });
    _this.state = {
      isClosing: false,
      isOpen: false
    };
    return _this;
  }

  _createClass(Tooltip, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // `checkProps` issues warnings to developers about properties (similar to React's built in development tools)
      checkProps(POPOVER_TOOLTIP, this.props);
      this.generatedId = shortid.generate();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isUnmounting = true;
    }
  }, {
    key: "getContent",
    value: function getContent() {
      var _this2 = this;

      var children;

      if (React.Children.count(this.props.children) === 0) {
        children = [React.createElement("a", {
          href: "javascript:void(0)",
          onClick: this.props.onClickTrigger
        }, React.createElement(Icon, {
          category: "utility",
          name: "info",
          assistiveText: this.props.assistiveText.triggerLearnMoreIcon,
          size: "x-small"
        }))];
      } else {
        children = this.props.children;
      }

      return React.Children.map(children, function (child, i) {
        return React.cloneElement(child, {
          key: i,
          'aria-describedby': _this2.getId(),
          onBlur: _this2.handleMouseLeave,
          onFocus: _this2.handleMouseEnter,
          onMouseEnter: _this2.handleMouseEnter,
          onMouseLeave: _this2.handleMouseLeave
        });
      });
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.props.id || this.generatedId;
    }
  }, {
    key: "getTooltip",
    value: function getTooltip() {
      var _this3 = this;

      var isOpen = this.props.isOpen === undefined ? this.state.isOpen : this.props.isOpen;
      var align = this.props.align; // REMOVE AT NEXT BREAKING CHANGE (v1.0 or v0.9)

      var deprecatedWay = this.props.variant === 'error';
      return isOpen ? React.createElement(Dialog, {
        align: align,
        context: this.context,
        closeOnTabKey: true,
        hasStaticAlignment: this.props.hasStaticAlignment,
        onClose: this.handleCancel,
        onRequestTargetElement: function onRequestTargetElement() {
          return _this3.getTooltipTarget();
        },
        position: this.props.position,
        style: {
          marginBottom: getMargin.bottom(align),
          marginLeft: getMargin.left(align),
          marginRight: getMargin.right(align),
          marginTop: getMargin.top(align)
        },
        variant: "tooltip"
      }, React.createElement("div", {
        id: this.getId(),
        className: classNames('slds-popover', 'slds-popover--tooltip', {
          'slds-theme_error': this.props.theme === 'error' || deprecatedWay
        }, getNubbinClassName(align)),
        role: "tooltip"
      }, this.getTooltipContent())) : React.createElement("span", null);
    }
  }, {
    key: "getTooltipContent",
    value: function getTooltipContent() {
      return React.createElement("div", {
        className: "slds-popover__body"
      }, this.props.content, this.props.variant === 'learnMore' ? React.createElement("div", {
        className: "slds-m-top_x-small"
      }, this.props.labels.learnMoreBefore, ' ', React.createElement(Icon, {
        assistiveText: this.props.assistiveText.tooltipTipLearnMoreIcon,
        category: "utility",
        inverse: true,
        name: "info",
        size: "x-small"
      }), ' ', this.props.labels.learnMoreAfter, ' ') : null);
    }
  }, {
    key: "getTooltipTarget",
    value: function getTooltipTarget() {
      return this.props.target ? this.props.target : this.trigger;
    }
  }, {
    key: "render",
    value: function render() {
      var containerStyles = _objectSpread({
        display: 'inline'
      }, this.props.triggerStyle);

      return React.createElement("div", {
        className: classNames('slds-tooltip-trigger', this.props.triggerClassName),
        style: containerStyles,
        ref: this.saveTriggerRef
      }, this.getContent(), this.getTooltip());
    }
  }]);

  return Tooltip;
}(React.Component);

Tooltip.contextTypes = {
  iconPath: PropTypes.string
};
Tooltip.displayName = displayName;
Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;
export default Tooltip;
//# sourceMappingURL=index.js.map