function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable jsx-a11y/no-redundant-roles */
// # Page Header Component
// Implements the [Page Header design pattern](https://www.lightningdesignsystem.com/components/page-headers) in React.
// Based on SLDS v2.2.1
// ## Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Info from './private/info';
import Title from './private/title';
import DetailRow from './private/detail-row';
import DetailBlock from './private/detail-block';
import Base from './private/base';
import RecordHome from './private/record-home';
import ObjectHome from './private/object-home';
import RelatedList from './private/related-list';
import Icon from '../icon';
import Breadcrumb from '../breadcrumb'; // ## Constants

import { PAGE_HEADER } from '../../utilities/constants';
var displayName = PAGE_HEADER;
var propTypes = {
  /**
   * Optional class name
   */
  className: PropTypes.string,

  /**
   * The type of component
   */
  variant: PropTypes.string,

  /**
   * The info property can be a string or a React element
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * The title property can be a string or a React element
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * The info property can be a string or a React element
   */
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * The page header icon
   */
  icon: PropTypes.element,

  /**
   * Name of the icon. Visit <a href="http://www.lightningdesignsystem.com/resources/icons">Lightning Design System Icons</a> to reference icon names.
   */
  iconName: PropTypes.string,

  /**
   * The icons category
   */
  iconCategory: PropTypes.oneOf(['action', 'custom', 'doctype', 'standard', 'utility']),

  /**
   * If omitted, icon position is centered.
   */
  iconPosition: PropTypes.oneOf(['left', 'right']),

  /**
   * Determines the size of the icon.
   */
  iconSize: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),

  /**
   * For icon variants, please reference <a href='http://www.lightningdesignsystem.com/components/buttons/#icon'>Lightning Design System Icons</a>.
   */
  iconVariant: PropTypes.oneOf(['container', 'border', 'border-filled', 'small', 'more']),

  /**
   * Content to appear on the right hand side of the page header
   */
  contentRight: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * An array of buttons which appear on the component's right hand side.
   */
  details: PropTypes.array,

  /**
   * Nav content which appears in the upper right hand corner.
   */
  navRight: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * An array of react elements presumably anchor <a> elements.
   */
  trail: PropTypes.array
};
var defaultProps = {
  className: '',
  variant: 'base',
  navRight: '',
  contentRight: '',
  details: [],
  trail: []
};
/**
 * The PageHeader component adds PageHeader, PageHeader.Info, PageHeader.Title, PageHeader.DetailRow, and PageHeader.DetailBlock.
 */

var PageHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(PageHeader, _Component);

  function PageHeader() {
    _classCallCheck(this, PageHeader);

    return _possibleConstructorReturn(this, (PageHeader.__proto__ || Object.getPrototypeOf(PageHeader)).apply(this, arguments));
  }

  _createClass(PageHeader, [{
    key: "_getClassNames",
    value: function _getClassNames(className) {
      return classnames('slds-page-header', {
        'slds-page-header--object-home': this.props.variant === 'objectHome'
      }, className);
    }
  }, {
    key: "render",
    value: function render() {
      /**
       * OPTIMIZE ES7 style object destructuring removes the need for _.omit.
       * Example: const {foo, ...bar} = this.props;
       */
      var _props = this.props,
          className = _props.className,
          contentRight = _props.contentRight,
          details = _props.details,
          icon = _props.icon,
          iconCategory = _props.iconCategory,
          iconName = _props.iconName,
          iconPosition = _props.iconPosition,
          iconSize = _props.iconSize,
          iconVariant = _props.iconVariant,
          info = _props.info,
          label = _props.label,
          navRight = _props.navRight,
          title = _props.title,
          trail = _props.trail,
          variant = _props.variant;

      var classes = this._getClassNames(className);
      /**
       * Render the icon
       */


      var renderIcon = function renderIcon() {
        if (iconName) {
          return React.createElement(Icon, {
            name: iconName,
            category: iconCategory,
            position: iconPosition,
            size: iconSize,
            variant: iconVariant
          });
        }

        return icon;
      };
      /**
       * Render the label
       */


      var renderLabel = function renderLabel() {
        var type = _typeof(label);

        if (trail.length > 0) {
          return React.createElement("nav", {
            className: "slds-m-bottom--xx-small",
            role: "navigation"
          }, React.createElement(Breadcrumb, {
            trail: trail
          }));
        }

        if (type === 'string') {
          return React.createElement("p", {
            className: "slds-text-title--caps slds-line-height--reset"
          }, label);
        }

        return label;
      };
      /**
       * Render the title
       */


      var renderTitle = function renderTitle() {
        var type = _typeof(title);

        if (type === 'string') {
          return React.createElement(Title, {
            title: title
          });
        }

        return title;
      };
      /**
       * Render info
       */


      var renderInfo = function renderInfo() {
        var type = _typeof(info);

        if (type === 'string') {
          return React.createElement(Info, null, info);
        }

        return info;
      };
      /**
       * Steal contentRight's children
       */


      var renderNavRight = function renderNavRight() {
        var type = _typeof(navRight);

        if (type !== 'string') {
          return React.createElement("div", _extends({
            className: "slds-col slds-no-flex slds-grid slds-align-top"
          }, navRight.props));
        }

        return navRight;
      };
      /**
       * Steal contentRight's children
       */


      var renderContentRight = function renderContentRight() {
        var type = _typeof(contentRight);

        if (type !== 'string') {
          return React.createElement("div", _extends({
            className: "slds-grid"
          }, contentRight.props));
        }

        return contentRight;
      };

      var Variant;

      switch (variant) {
        case 'objectHome':
          Variant = ObjectHome;
          break;

        case 'recordHome':
          Variant = RecordHome;
          break;

        case 'relatedList':
          Variant = RelatedList;
          break;

        default:
          Variant = Base;
      }

      return React.createElement("div", {
        className: classes
      }, React.createElement(Variant, {
        label: renderLabel(),
        icon: renderIcon(),
        title: renderTitle(),
        info: renderInfo(),
        contentRight: renderContentRight(),
        navRight: renderNavRight(),
        details: details
      }));
    }
  }]);

  return PageHeader;
}(Component);

PageHeader.displayName = displayName;
PageHeader.propTypes = propTypes;
PageHeader.defaultProps = defaultProps;
export default PageHeader;
export { Info, Title, DetailRow, DetailBlock };
//# sourceMappingURL=index.js.map