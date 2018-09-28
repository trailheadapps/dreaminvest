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

/* eslint-disable react/prefer-es6-class, jsx-a11y/no-noninteractive-element-interactions */
// Implements the [Modal design pattern](https://lightningdesignsystem.com/components/modals/) in React.
// Based on SLDS v2.2.1
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import ReactModal from 'react-modal'; // ### isBoolean

import isBoolean from 'lodash.isboolean'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid'; // This component's `checkProps` which issues warnings to developers about properties when in development mode (similar to React's built in development tools)

import checkProps from './check-props';
import Button from '../button';
import { MODAL } from '../../utilities/constants';
var propTypes = {
  /**
   * Vertical alignment of Modal.
   */
  align: PropTypes.oneOf(['top', 'center']),

  /**
   * **Assistive text for accessibility.**
   * This object is merged with the default props object on every render.
   * * `dialogLabel`: This is a visually hidden label for the dialog. If not provided, `title` is used.
   * * `closeButton`: This is a visually hidden label for the close button.
   */
  assistiveText: PropTypes.shape({
    dialogLabel: PropTypes.string,
    closeButton: PropTypes.string
  }),

  /**
   * Modal content.
   */
  children: PropTypes.node.isRequired,

  /**
   * Custom CSS classes for the modal's container. This is the element with `.slds-modal__container`. Use `classNames` [API](https://github.com/JedWatson/classnames).
   */
  containerClassName: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Custom CSS classes for the modal's body. This is the element that has overflow rules and should be used to set a static height if desired. Use `classNames` [API](https://github.com/JedWatson/classnames).
   */
  contentClassName: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Custom styles for the modal's body. This is the element that has overflow rules and should be used to set a static height if desired.
   */
  contentStyle: PropTypes.object,

  /**
   * If true, modal footer buttons render left and right. An example use case would be for "back" and "next" buttons.
   */
  directional: PropTypes.bool,

  /**
   * If true, Modals can be dismissed by clicking on the close icon or pressing esc key.
   */
  dismissible: PropTypes.bool,

  /**
   * If true, Modals can be dismissed by clicking outside of modal. If unspecified, defaults to dismissible.
   */
  dismissOnClickOutside: PropTypes.bool,

  /**
   * Callback to fire with Modal is dismissed
   */
  onRequestClose: PropTypes.func,

  /**
   * Accepts a node or array of nodes that are typically a `Button` or `ProgressIndicator`. If an array, the nodes render on the right side first but are then floated left and right if <code>directional</code> prop is `true`.
   */
  footer: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),

  /**
   * Allows for a custom modal header that does not scroll with modal content. If this is defined, `title` and `tagline` will be ignored. The close button will still be present.
   */
  header: PropTypes.node,

  /**
   * Adds CSS classes to the container surrounding the modal header and the close button. Use `classNames` [API](https://github.com/JedWatson/classnames).
   */
  headerClassName: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Forces the modal to be open or closed.
   */
  isOpen: PropTypes.bool.isRequired,

  /**
   * Function that returns parent node to contain Modal. Should return document.querySelector('#myModalContainer').
   */
  parentSelector: PropTypes.func,

  /**
   * Custom CSS classes for the portal DOM node. This node is a direct descendant of the `body` and is the parent of `ReactModal__Overlay`. Use `classNames` [API](https://github.com/JedWatson/classnames).
   */
  portalClassName: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Styles the modal as a prompt.
   */
  prompt: PropTypes.oneOf(['success', 'warning', 'error', 'wrench', 'offline', 'info']),

  /**
   * Specifiies the modal's width. May be deprecated in favor of `width` in the future.
   */
  size: PropTypes.oneOf(['medium', 'large']),

  /**
   * Content underneath the title in the modal header.
   */
  tagline: PropTypes.node,

  /**
   * Text heading at the top of a modal.
   */
  title: PropTypes.node,

  /**
   * Allows adding additional notifications within the modal.
   */
  toast: PropTypes.node
};
var defaultProps = {
  assistiveText: {
    dialogLabel: '',
    closeButton: 'Close'
  },
  align: 'center',
  dismissible: true
};
/**
 * The Modal component is used for the Lightning Design System Modal and Notification > Prompt components. The Modal opens from a state change outside of the component itself (pass this state to the <code>isOpen</code> prop). For more details on the Prompt markup, please review the <a href="http://www.lightningdesignsystem.com/components/notifications#prompt">Notifications > Prompt</a>.
 *
 * By default, `Modal` will add `aria-hidden=true` to the `body` tag, but this disables some assistive technologies. To prevent this you can add the following to your application with `#mount` being the root node of your application that you would like to hide from assistive technologies when the `Modal` is open.
 * ```
 * import settings from 'design-system-react/components/settings';
 * settings.setAppElement('#mount');
 * ```
 * This component uses a portalMount (a disconnected React subtree mount) to create a modal as a child of `body`.
 */

var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));
    _this.state = {
      isClosing: false
    }; // Bind

    _this.handleModalClick = _this.handleModalClick.bind(_assertThisInitialized(_this));
    _this.closeModal = _this.closeModal.bind(_assertThisInitialized(_this));
    _this.dismissModalOnClickOutside = _this.dismissModalOnClickOutside.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Modal, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.generatedId = shortid.generate();
      checkProps(MODAL, this.props);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setReturnFocus();
      this.updateBodyScroll();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.isOpen !== prevProps.isOpen) {
        this.updateBodyScroll();
      }

      if (this.state.isClosing !== prevState.isClosing) {
        if (this.state.isClosing) {
          // This section of code should be removed once trigger.jsx
          // and manager.jsx are removed. They appear to have
          // been created in order to do modals in portals.
          if (!this.isUnmounting) {
            var el = ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node

            if (el && el.parentNode && el.parentNode.getAttribute('data-slds-modal')) {
              ReactDOM.unmountComponentAtNode(el);
              document.body.removeChild(el);
            }
          }
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isUnmounting = true;
      this.clearBodyScroll();
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.props.id || this.generatedId;
    }
  }, {
    key: "getModal",
    value: function getModal() {
      var modalStyle = this.props.align === 'top' ? {
        justifyContent: 'flex-start'
      } : null;
      var borderRadius = this.props.title || this.props.header ? {} : {
        borderRadius: '.25rem'
      };
      var contentStyleFromProps = this.props.contentStyle || {};

      var contentStyle = _objectSpread({}, borderRadius, contentStyleFromProps);

      return (// temporarily disabling eslint for the onClicks on the div tags

        /* eslint-disable */
        React.createElement("div", {
          "aria-label": this.props.assistiveText.dialogLabel,
          "aria-labelledby": !this.props.assistiveText.dialogLabel && this.props.title ? this.getId() : null,
          className: classNames({
            'slds-modal': true,
            'slds-fade-in-open': true,
            'slds-modal--large': this.props.size === 'large',
            'slds-modal--prompt': this.isPrompt()
          }),
          onClick: this.dismissModalOnClickOutside,
          role: this.props.dismissible ? 'dialog' : 'alertdialog'
        }, React.createElement("div", {
          className: classNames('slds-modal__container', this.props.containerClassName),
          style: modalStyle
        }, this.headerComponent(), React.createElement("div", {
          className: classNames('slds-modal__content', this.props.contentClassName),
          style: contentStyle,
          onClick: this.handleModalClick
        }, this.props.children), this.footerComponent()))
        /* eslint-enable */

      );
    }
  }, {
    key: "setReturnFocus",
    value: function setReturnFocus() {
      this.setState({
        returnFocusTo: document.activeElement
      });
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "clearBodyScroll",
    value: function clearBodyScroll() {
      if (window && document && document.body) {
        document.body.style.overflow = 'inherit';
      }
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      if (this.props.dismissible) {
        this.dismissModal();
      }
    }
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      this.setState({
        isClosing: true
      });

      if (this.state.returnFocusTo && this.state.returnFocusTo.focus) {
        this.state.returnFocusTo.focus();
      }

      if (this.props.onRequestClose) {
        this.props.onRequestClose();
      }
    }
  }, {
    key: "dismissModalOnClickOutside",
    value: function dismissModalOnClickOutside() {
      // if dismissOnClickOutside is not set, default its value to dismissible
      var dismissOnClickOutside = isBoolean(this.props.dismissOnClickOutside) ? this.props.dismissOnClickOutside : this.props.dismissible;

      if (dismissOnClickOutside) {
        this.dismissModal();
      }
    }
  }, {
    key: "footerComponent",
    value: function footerComponent() {
      var footer = null;
      var hasFooter = this.props.footer;
      var footerClass = {
        'slds-modal__footer': true,
        'slds-modal__footer--directional': this.props.directional,
        'slds-theme--default': this.isPrompt()
      };

      if (hasFooter) {
        footer = // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-element-interactions
        React.createElement("footer", {
          className: classNames(footerClass, this.props.footerClassNames),
          onClick: this.handleModalClick
        }, this.props.footer);
      }

      return footer;
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "handleModalClick",
    value: function handleModalClick(event) {
      if (event && event.stopPropagation) {
        event.stopPropagation();
      }
    }
  }, {
    key: "handleSubmitModal",
    value: function handleSubmitModal() {
      this.closeModal();
    }
  }, {
    key: "headerComponent",
    value: function headerComponent() {
      var _classNames;

      var headerContent = this.props.header;
      var headerEmpty = !headerContent && !this.props.title && !this.props.tagline;

      var assistiveText = _objectSpread({}, defaultProps.assistiveText, this.props.assistiveText);

      var closeButtonAssistiveText = this.props.closeButtonAssistiveText || assistiveText.closeButton;
      var closeButton = React.createElement(Button, {
        assistiveText: closeButtonAssistiveText,
        iconCategory: "utility",
        iconName: "close",
        iconSize: "large",
        inverse: true,
        className: "slds-modal__close",
        onClick: this.closeModal,
        title: closeButtonAssistiveText,
        variant: "icon"
      });

      if (!headerContent && this.props.title || this.props.tagline) {
        headerContent = React.createElement("div", null, this.props.toast, React.createElement("h2", {
          className: classNames({
            'slds-text-heading--small': this.isPrompt(),
            'slds-text-heading--medium': !this.isPrompt()
          }),
          id: this.getId()
        }, this.props.title), this.props.tagline ? React.createElement("p", {
          className: "slds-m-top--x-small"
        }, this.props.tagline) : null);
      }

      return (// eslint-disable-next-line jsx-a11y/no-static-element-interactions
        React.createElement("header", {
          className: classNames('slds-modal__header', (_classNames = {
            'slds-modal__header--empty': headerEmpty
          }, _defineProperty(_classNames, "slds-theme--".concat(this.props.prompt), this.isPrompt()), _defineProperty(_classNames, 'slds-theme--alert-texture', this.isPrompt()), _classNames), this.props.headerClassName),
          onClick: this.handleModalClick
        }, this.props.dismissible ? closeButton : null, headerContent)
      );
    }
  }, {
    key: "isPrompt",
    value: function isPrompt() {
      return this.props.prompt !== undefined;
    }
  }, {
    key: "updateBodyScroll",
    value: function updateBodyScroll() {
      if (window && document && document.body) {
        if (this.props.isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'inherit';
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var customStyles = {
        content: {
          position: 'default',
          top: 'default',
          left: 'default',
          right: 'default',
          bottom: 'default',
          border: 'default',
          background: 'default',
          overflow: 'default',
          WebkitOverflowScrolling: 'default',
          borderRadius: 'default',
          outline: 'default',
          padding: 'default'
        },
        overlay: {
          zIndex: 8000,
          // following SLDS guideline for z-index overlay
          backgroundColor: 'default'
        }
      };
      return React.createElement(ReactModal, {
        contentLabel: "Modal",
        isOpen: this.props.isOpen,
        onRequestClose: this.closeModal,
        style: customStyles,
        parentSelector: this.props.parentSelector,
        portalClassName: classNames('ReactModalPortal', this.props.portalClassName)
      }, this.getModal(), React.createElement("div", {
        className: "slds-backdrop slds-backdrop--open"
      }));
    }
  }]);

  return Modal;
}(React.Component);

Modal.displayName = MODAL;
Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
export default Modal;
//# sourceMappingURL=index.js.map