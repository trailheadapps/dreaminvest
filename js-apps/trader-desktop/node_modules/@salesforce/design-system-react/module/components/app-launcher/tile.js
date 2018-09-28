/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import PropTypes from 'prop-types';
import isFunction from 'lodash.isfunction';
import classNames from 'classnames';
import Truncate from '../utilities/truncate'; // ## Children

import Highlighter from '../utilities/highlighter';
import PopoverTooltip from '../popover-tooltip';
import { APP_LAUNCHER_TILE } from '../../utilities/constants';

var handleClick = function handleClick(event, href, onClick) {
  event.preventDefault();
  onClick(event, {
    href: href
  });
};
/**
 * App Launcher Tiles provide information and links to a user's apps
 */


var AppLauncherTile = function AppLauncherTile(props) {
  var smallTile = props.size === 'small' || false;
  return React.createElement("a", {
    href: props.href // eslint-disable-line no-script-url
    ,
    onClick: isFunction(props.onClick) ? function (event) {
      return handleClick(event, props.href, props.onClick);
    } : null,
    className: classNames('slds-app-launcher__tile slds-text-link--reset', {
      'slds-app-launcher__tile--small': smallTile
    }, props.className)
  }, React.createElement("div", {
    className: classNames('slds-app-launcher__tile-figure', {
      'slds-app-launcher__tile-figure--small': smallTile
    })
  }, props.iconNode || React.createElement("span", {
    className: "slds-avatar slds-avatar--large slds-align--absolute-center slds-icon-custom-27"
  }, props.iconText)), smallTile ? React.createElement("div", {
    className: "slds-app-launcher__tile-body slds-app-launcher__tile-body--small"
  }, React.createElement("p", {
    className: "slds-truncate"
  }, React.createElement(Highlighter, {
    className: "slds-text-link",
    search: props.search
  }, props.title))) : React.createElement("div", {
    className: "slds-app-launcher__tile-body"
  }, React.createElement(Highlighter, {
    className: "slds-text-link",
    search: props.search
  }, props.title), React.createElement(Truncate, {
    line: 2,
    prefix: props.descriptionHeading && props.descriptionHeading.toUpperCase(),
    suffix: props.moreLabel,
    text: props.description,
    textTruncateChild: React.createElement(PopoverTooltip, {
      align: "bottom",
      content: React.createElement(Highlighter, {
        search: props.search
      }, props.description),
      isOpen: props.isOpenTooltip
    }, React.createElement("span", {
      className: "slds-app-launcher__tile-more slds-text-link",
      tabIndex: "0"
    }, props.moreLabel)),
    wrapper: function wrapper(text, textTruncateChild) {
      return React.createElement("div", null, props.descriptionHeading && // inline style override
      React.createElement("span", {
        className: "slds-text-heading--label",
        style: {
          letterSpacing: '0.025rem'
        }
      }, props.descriptionHeading, ' '), React.createElement(Highlighter, {
        search: props.search
      }, text), textTruncateChild && ' ', textTruncateChild);
    }
  })));
}; // ### Display Name
// Always use the canonical component name as the React display name.


AppLauncherTile.displayName = APP_LAUNCHER_TILE;
AppLauncherTile.defaultProps = {
  href: 'javascript:void(0);',
  // eslint-disable-line no-script-url
  size: 'default',
  moreLabel: ' More'
}; // ### Prop Types

AppLauncherTile.propTypes = {
  /**
   * App name for the tile's title.
   */
  title: PropTypes.string.isRequired,

  /**
   * Size of the rendered tile.
   */
  size: PropTypes.oneOf(['default', 'small']),

  /**
   * The description of the app. Not visible on small tiles.
   */
  description: PropTypes.string,

  /**
   * Heading for app description
   */
  descriptionHeading: PropTypes.string,

  /**
   * The `href` attribute of the tile. Please pass in bookmarkable URLs from your routing library. If the `onClick` callback is specified this URL will be prevented from changing the browser's location.
   */
  href: PropTypes.string,

  /**
   * Open the More Tooltip
   */
  isOpenTooltip: PropTypes.bool,

  /**
   * The localized text for the "More information" tooltip.
   */
  moreLabel: PropTypes.string,

  /**
   * Class names to be added to the tile.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Function that will be executed when clicking on a tile
   */
  onClick: PropTypes.func,

  /**
   * Icon node for app tile. Takes priority over `iconText`
   */
  iconNode: PropTypes.node,

  /**
   * Text to be used as an icon. Only renders if iconNode is undefined
   */
  iconText: PropTypes.string,

  /**
   * Text used to highlight content in app tiles
   */
  search: PropTypes.string // TODO: allow for passing iconBackgroundColor
  // TODO: add Highlighter to Truncate text (https://github.com/ShinyChang/React-Text-Truncate/issues/32)

};
export default AppLauncherTile;
//# sourceMappingURL=tile.js.map