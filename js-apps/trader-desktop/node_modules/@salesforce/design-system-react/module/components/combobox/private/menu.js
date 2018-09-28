/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';
import classNames from 'classnames';
import Icon from '../../icon';
var propTypes = {
  /*
   * Active descendant in menu
   */
  activeOption: PropTypes.object,

  /*
   * Index of active descendant in menu
   */
  activeOptionIndex: PropTypes.number,

  /**
   * CSS classes to be added to container `div` tag. Uses `classNames` [API](https://github.com/JedWatson/classnames).
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * CSS classes to be added to tag with `.slds-dropdown`. Uses `classNames` [API](https://github.com/JedWatson/classnames).
   */
  classNameMenu: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * CSS classes to be added to menu sub header `span` tag. Uses `classNames` [API](https://github.com/JedWatson/classnames).
   */
  classNameMenuSubHeader: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Sets the dialog width to the width of one of the following:
   * `target`: (Menus attached to `input` typically follow this UX pattern),
   *  `menu`: Consider setting a menuMaxWidth if using this value. If not, width will be set to width of largest menu item.
   *  'none'
   */
  inheritWidthOf: PropTypes.oneOf(['target', 'menu', 'none']),

  /*
   * Id used for assistive technology
   */
  inputId: PropTypes.string,

  /**
   * Determines the height of the menu based on SLDS CSS classes.
   */
  itemVisibleLength: PropTypes.oneOf([5, 7, 10]),

  /**
   * **Text labels for internationalization**
   * This object is merged with the default props object on every render.
   * * `noOptionsFound`: Custom message that renders when no matches found. The default empty state is just text that says, 'No matches found.'.
   */
  labels: PropTypes.shape({
    noOptionsFound: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
  }),

  /**
   * Accepts a custom menu item rendering function that becomes a custom component and is passed in the following props:
   * * `assistiveText`: Object, `assistiveText` prop that is passed into Combobox
   * * `option`: Object, option data for item being rendered that is passed into Combobox
   * * `selected`: Boolean, allows rendering of `assistiveText.optionSelectedInMenu` in Readonly Combobox
   *
   * _Tested with snapshot testing._
   */
  menuItem: PropTypes.func,

  /*
   * Sets a maximum width that the menu will be if `inheritWidthOf` is menu.
   */
  maxWidth: PropTypes.string,

  /*
   * Menu options
   */
  options: PropTypes.array,

  /*
   * Callback to remove active descendent
   */
  resetActiveOption: PropTypes.func,

  /*
   * Callback when option is selected with keyboard or mouse
   */
  onSelect: PropTypes.func,

  /*
   * Selected options
   */
  selection: PropTypes.array,

  /**
   * Changes styles of the menu option
   */
  variant: PropTypes.oneOf(['icon-title-subtitle', 'checkbox']),
  isSelected: PropTypes.func,
  assistiveText: PropTypes.object
};
var defaultProps = {};

var Menu = function Menu(props) {
  var style = props.inheritWidthOf === 'menu' ? {
    width: 'auto',
    maxWidth: props.maxWidth ? props.maxWidth : 'inherit'
  } : undefined;
  var menuOptions = props.options.map(function (optionData, index) {
    var active = index === props.activeOptionIndex && isEqual(optionData, props.activeOption);
    var selected = props.isSelected({
      selection: props.selection,
      option: optionData
    });
    var MenuItem = props.menuItem;

    if (optionData.type === 'separator') {
      return optionData.label ? React.createElement("li", {
        className: "slds-dropdown__header slds-truncate",
        title: optionData.label,
        role: "separator",
        key: "menu-separator-".concat(optionData.id)
      }, React.createElement("span", {
        className: classNames('slds-text-title_caps', props.classNameMenuSubHeader)
      }, optionData.label)) : React.createElement("li", {
        className: "slds-has-divider_top-space",
        role: "separator",
        key: "menu-separator-".concat(optionData.id)
      });
    }

    return React.createElement("li", {
      className: "slds-listbox__item",
      key: "menu-option-".concat(optionData.id),
      role: "presentation"
    }, {
      'icon-title-subtitle': React.createElement("span", {
        // eslint-disable-line jsx-a11y/no-static-element-interactions
        "aria-selected": active,
        id: "".concat(props.inputId, "-listbox-option-").concat(optionData.id),
        className: classNames('slds-media slds-listbox__option', 'slds-listbox__option_entity slds-listbox__option_has-meta', {
          'slds-has-focus': active
        }),
        onClick: function onClick(event) {
          props.onSelect(event, {
            option: optionData
          });
        },
        role: "option"
      }, optionData.icon && !props.menuItem ? React.createElement("span", {
        className: "slds-media__figure"
      }, optionData.icon) : null, props.menuItem ? React.createElement(MenuItem, {
        assistiveText: props.assistiveText,
        selected: selected,
        option: optionData
      }) : React.createElement("span", {
        className: "slds-media__body"
      }, React.createElement("span", {
        className: "slds-listbox__option-text slds-listbox__option-text_entity"
      }, optionData.label), React.createElement("span", {
        className: "slds-listbox__option-meta slds-listbox__option-meta_entity"
      }, optionData.subTitle))),
      checkbox: React.createElement("span", {
        // eslint-disable-line jsx-a11y/no-static-element-interactions
        "aria-selected": selected,
        id: "".concat(props.inputId, "-listbox-option-").concat(optionData.id),
        className: classNames('slds-media slds-listbox__option', ' slds-listbox__option_plain slds-media_small slds-media_center', {
          'slds-has-focus': active,
          'slds-is-selected': selected
        }),
        onClick: function onClick(event) {
          props.onSelect(event, {
            selection: props.selection,
            option: optionData
          });
        },
        role: "option"
      }, React.createElement("span", {
        className: "slds-media__figure"
      }, React.createElement(Icon, {
        className: "slds-listbox__icon-selected",
        category: "utility",
        name: "check",
        size: "x-small"
      })), React.createElement("span", {
        className: "slds-media__body"
      }, props.menuItem ? React.createElement(MenuItem, {
        assistiveText: props.assistiveText,
        selected: selected,
        option: optionData
      }) : React.createElement("span", {
        className: "slds-truncate",
        title: optionData.label
      }, selected ? React.createElement("span", {
        className: "slds-assistive-text"
      }, props.assistiveText.optionSelectedInMenu) : null, ' ', optionData.label)))
    }[props.variant]);
  });
  return React.createElement("ul", {
    className: classNames('slds-listbox slds-listbox_vertical slds-dropdown slds-dropdown_fluid', {
      'slds-dropdown_length-with-icon-5': props.itemVisibleLength === 5,
      'slds-dropdown_length-with-icon-7': props.itemVisibleLength === 7,
      'slds-dropdown_length-with-icon-10': props.itemVisibleLength === 10
    }, props.classNameMenu),
    role: "presentation",
    style: style
  }, menuOptions.length ? menuOptions : React.createElement("li", {
    className: "slds-listbox__item slds-listbox__status",
    role: "status",
    "aria-live": "polite"
  }, React.createElement("span", {
    className: "slds-m-left--x-large slds-p-vertical--medium"
  }, props.labels.noOptionsFound)));
};

Menu.displayName = 'Menu';
Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
export default Menu;
//# sourceMappingURL=menu.js.map