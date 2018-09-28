/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Picklist Component
// Implements the [Picklist design pattern](https://www.lightningdesignsystem.com/components/menus/#flavor-picklist) in React.
// Based on SLDS v2.1.0-rc.2
// ### React
import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types'; // ### classNames
// [github.com/JedWatson/classnames](https://github.com/JedWatson/classnames)
// This project uses `classnames`, "a simple javascript utility for conditionally
// joining classNames together."

import classNames from 'classnames'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid'; // This component's `checkProps` which issues warnings to developers about properties
// when in development mode (similar to React's built in development tools)

import checkProps from './check-props'; // ### Children

import Dialog from '../utilities/dialog';
import Icon from '../icon';
import List from '../utilities/menu-list';
import ListItemLabel from '../utilities/menu-list/item-label';
import Pill from '../utilities/pill'; // ### Traits
// #### KeyboardNavigable

import KeyboardNavigable from '../../utilities/keyboard-navigable-menu';
import EventUtil from '../../utilities/event';
import KEYS from '../../utilities/key-code';
import { MENU_PICKLIST } from '../../utilities/constants';
/**
 * ** MenuPicklist is deprecated. Please use a read-only Combobox instead.**
 *
 * The MenuPicklist component is a variant of the Lightning Design System Menu component.
 */

var MenuPicklist = createReactClass({
  // ### Display Name
  // Always use the canonical component name as the React display name.
  displayName: MENU_PICKLIST,
  // ### Prop Types
  propTypes: {
    /**
     * Callback that passes in the DOM reference of the `<button>` DOM node within this component. Primary use is to allow `focus` to be called. You should still test if the node exists, since rendering is asynchronous. `buttonRef={(component) => { if(component) console.log(component); }}`
     */
    buttonRef: PropTypes.func,
    className: PropTypes.string,

    /**
     * If true, renders checkmark icon on the selected Menu Item.
     */
    checkmark: PropTypes.bool,
    disabled: PropTypes.bool,

    /**
     * Message to display when the input is in an error state. When this is present, also visually highlights the component as in error.
     */
    errorText: PropTypes.string,

    /**
     * A unique ID is needed in order to support keyboard navigation, ARIA support, and connect the dropdown to the triggering button.
     */
    id: PropTypes.string,

    /**
     * Renders menu within the wrapping trigger as a sibling of the button. By default, you will have an absolutely positioned container at an elevated z-index.
     */
    isInline: PropTypes.bool,

    /**
     * Form element label
     */
    label: PropTypes.string,

    /**
     * **Text labels for internationalization**
     * This object is merged with the default props object on every render.
     * * `multipleOptionsSelected`: Text to be used when multiple items are selected. "2 Options Selected" is a good pattern to use.
     */
    labels: PropTypes.shape({
      multipleOptionsSelected: PropTypes.string
    }),

    /**
     * Custom element that overrides the default Menu Item component.
     */
    listItemRenderer: PropTypes.func,

    /**
     * Allows multiple items to be selected. Items will be shown in pills. Clicking the item does not close the menu.
     */
    multiple: PropTypes.bool,

    /**
     * Triggered when the trigger button is clicked to open.
     */
    onClick: PropTypes.func,

    /**
     * Triggered when an item is selected. Passes in the option object that has been selected and a data object in the format: `{ option, optionIndex }`. The first parameter may be deprecated in the future and changed to an event for consistency. Please use the data object.
     */
    onSelect: PropTypes.func,

    /**
     * Triggered when a pill is removed. Passes in the option object that has been removed and a data object in the format: `{ option, optionIndex }`. The first parameter may be deprecated in the future and changed to an event for consistency. Please use the data object.
     */
    onPillRemove: PropTypes.func,

    /**
     * Menu item data.
     */
    options: PropTypes.array.isRequired,

    /**
     * Text present in trigger button if no items are selected.
     */
    placeholder: PropTypes.string,

    /**
     * Add styling of a required form element.
     */
    required: PropTypes.bool,

    /**
     * Current selected item.
     */
    value: PropTypes.node,

    /**
     * Initial selected item index.
     */
    initValueIndex: PropTypes.number
  },
  mixins: [KeyboardNavigable],
  getDefaultProps: function getDefaultProps() {
    return {
      inheritTargetWidth: true,
      placeholder: 'Select an Option',
      checkmark: true,
      labels: {
        multipleOptionsSelected: 'Multiple Options Selected'
      },
      menuPosition: 'absolute'
    };
  },
  getInitialState: function getInitialState() {
    return {
      focusedIndex: this.props.initValueIndex ? this.props.initValueIndex : -1,
      selectedIndex: this.props.initValueIndex ? this.props.initValueIndex : -1,
      selectedIndices: [],
      currentPillLabel: ''
    };
  },
  componentWillMount: function componentWillMount() {
    // `checkProps` issues warnings to developers about properties (similar to React's built in development tools)
    checkProps(MENU_PICKLIST, this.props);
    this.generatedId = shortid.generate();

    if (this.props.errorText) {
      this.generatedErrorId = shortid.generate();
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('click', this.closeOnClick, false);
    }

    if (!this.props.multiple) {
      this.setState({
        selectedIndex: this.getIndexByValue(this.props)
      });
    } else {
      var currentSelectedIndex = this.getIndexByValue(this.props);
      var currentIndices = this.state.selectedIndices;

      if (currentSelectedIndex !== -1) {
        currentIndices.push(currentSelectedIndex);
      }

      this.setState({
        selectedIndices: currentIndices
      });
    }
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value || this.props.options.length !== nextProps.length) {
      if (this.props.multiple !== true) {
        this.setState({
          selectedIndex: this.getIndexByValue(nextProps)
        });
      } else {
        var currentSelectedIndex = this.getIndexByValue(nextProps);

        if (currentSelectedIndex !== -1) {
          var currentIndices = this.state.selectedIndices.concat(currentSelectedIndex);
          this.setState({
            selectedIndices: currentIndices
          });
        }
      }
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    this.isUnmounting = true;
    window.removeEventListener('click', this.closeOnClick, false);
  },
  getId: function getId() {
    return this.props.id || this.generatedId;
  },
  getErrorId: function getErrorId() {
    return this.props['aria-describedby'] || this.generatedErrorId;
  },
  getClickEventName: function getClickEventName() {
    return "SLDS".concat(this.getId(), "ClickEvent");
  },
  getIndexByValue: function getIndexByValue() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props,
        value = _ref.value,
        options = _ref.options;

    var foundIndex = -1;

    if (options && options.length) {
      options.some(function (element, index) {
        if (element && element.value === value) {
          foundIndex = index;
          return true;
        }

        return false;
      });
    }

    return foundIndex;
  },
  getValueByIndex: function getValueByIndex(index) {
    return this.props.options[index];
  },
  getListItemRenderer: function getListItemRenderer() {
    return this.props.listItemRenderer ? this.props.listItemRenderer : ListItemLabel;
  },
  setFocus: function setFocus() {
    if (!this.isUnmounting && this.button) {
      this.button.focus();
    }
  },
  handleSelect: function handleSelect(index) {
    if (!this.props.multiple) {
      this.setState({
        selectedIndex: index
      });
      this.handleClose();
      this.setFocus();
    } else {
      var currentIndices;

      if (this.state.selectedIndices.indexOf(index) === -1) {
        currentIndices = this.state.selectedIndices.concat(index);
      } else {
        var deselectIndex = this.state.selectedIndices.indexOf(index);
        currentIndices = this.state.selectedIndices;
        currentIndices.splice(deselectIndex, 1);
      }

      this.setState({
        selectedIndices: currentIndices
      });
    }

    if (this.props.onSelect) {
      var option = this.getValueByIndex(index);
      this.props.onSelect(option, {
        option: option,
        optionIndex: index
      });
    }
  },
  handleClose: function handleClose() {
    this.setState({
      isOpen: false
    });
  },
  handleClick: function handleClick(event) {
    if (event) {
      event.nativeEvent[this.getClickEventName()] = true;
    }

    if (!this.state.isOpen) {
      this.setState({
        isOpen: true
      });
      this.setFocus();

      if (this.props.onClick) {
        this.props.onClick(event);
      }
    } else {
      this.handleClose();
    }
  },
  handleMouseDown: function handleMouseDown(event) {
    if (event) {
      EventUtil.trapImmediate(event);
      event.nativeEvent[this.getClickEventName()] = true;
    }
  },
  handleKeyDown: function handleKeyDown(event) {
    if (event.keyCode) {
      if (event.keyCode === KEYS.ENTER || event.keyCode === KEYS.SPACE || event.keyCode === KEYS.DOWN || event.keyCode === KEYS.UP) {
        EventUtil.trap(event);
      }

      if (event.keyCode !== KEYS.TAB) {
        // The outer div with onKeyDown is overriding button onClick so we need to add it here.
        var openMenuKeys = event.keyCode === KEYS.ENTER || event.keyCode === KEYS.DOWN || event.keyCode === KEYS.UP;
        var isTrigger = event.target.tagName === 'BUTTON';

        if (openMenuKeys && isTrigger && this.props.onClick) {
          this.props.onClick(event);
        }

        this.handleKeyboardNavigate({
          isOpen: this.state.isOpen || false,
          keyCode: event.keyCode,
          onSelect: this.handleSelect,
          toggleOpen: this.toggleOpen
        });
      } else {
        this.handleCancel();
      }
    }
  },
  handleCancel: function handleCancel() {
    this.setFocus();
    this.handleClose();
  },
  closeOnClick: function closeOnClick(event) {
    if (!event[this.getClickEventName()] && this.state.isOpen) {
      this.handleClose();
    }
  },
  toggleOpen: function toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  },
  saveRefToList: function saveRefToList(list) {
    this.list = list;
  },
  saveRefToListItem: function saveRefToListItem(listItem, index) {
    if (!this.listItems) {
      this.listItems = {};
    }

    this.listItems[index] = listItem;

    if (index === this.state.focusedIndex) {
      this.handleKeyboardFocus(this.state.focusedIndex);
    }
  },
  // Trigger opens, closes, and recieves focus on close
  saveRefToTrigger: function saveRefToTrigger(trigger) {
    this.button = trigger;

    if (this.props.buttonRef) {
      this.props.buttonRef(this.button);
    }

    if (!this.state.triggerRendered) {
      this.setState({
        triggerRendered: true
      });
    }
  },
  renderMenuContent: function renderMenuContent() {
    return React.createElement(List, {
      checkmark: this.props.checkmark,
      getListItemId: this.getListItemId,
      itemRefs: this.saveRefToListItem,
      itemRenderer: this.getListItemRenderer(),
      onCancel: this.handleCancel,
      onSelect: this.handleSelect,
      options: this.props.options,
      ref: this.saveRefToList,
      selectedIndex: !this.props.multiple ? this.state.selectedIndex : undefined,
      selectedIndices: this.props.multiple ? this.state.selectedIndices : undefined,
      triggerId: this.getId()
    });
  },
  renderInlineMenu: function renderInlineMenu() {
    return !this.props.disabled && this.state.isOpen ? React.createElement("div", {
      className: "slds-dropdown slds-dropdown--left" // inline style override
      ,
      style: {
        maxHeight: '20em',
        overflowX: 'hidden',
        minWidth: '100%'
      }
    }, this.renderMenuContent()) : null;
  },
  renderDialog: function renderDialog() {
    var _this = this;

    return !this.props.disabled && this.state.isOpen ? React.createElement(Dialog, {
      closeOnTabKey: true,
      constrainToScrollParent: this.props.constrainToScrollParent,
      contentsClassName: "slds-dropdown slds-dropdown--left",
      context: this.context,
      flippable: true,
      onClose: this.handleCancel,
      onKeyDown: this.handleKeyDown,
      onRequestTargetElement: function onRequestTargetElement() {
        return _this.button;
      },
      inheritWidthOf: this.props.inheritTargetWidth ? 'target' : 'none',
      position: this.props.menuPosition
    }, this.renderMenuContent()) : null;
  },
  renderTrigger: function renderTrigger() {
    var isInline;
    /* eslint-disable react/prop-types */

    if (this.props.isInline) {
      isInline = true;
    } else if (this.props.modal !== undefined) {
      isInline = !this.props.modal;
    }
    /* eslint-enable react/prop-types */


    var inputValue;

    if (this.props.multiple && this.state.selectedIndices.length === 0) {
      inputValue = this.props.placeholder;
    } else if (this.props.multiple && this.state.selectedIndices.length === 1) {
      var option = this.props.options[this.state.selectedIndices];
      inputValue = option.label;
    } else if (this.props.multiple && this.state.selectedIndices.length > 1) {
      inputValue = this.props.labels.multipleOptionsSelected;
    } else {
      var _option = this.props.options[this.state.selectedIndex];
      inputValue = _option && _option.label ? _option.label : this.props.placeholder;
    } // TODO: make use of <Button>


    return (// eslint-disable-next-line jsx-a11y/no-static-element-interactions
      React.createElement("div", {
        className: classNames('slds-picklist slds-dropdown-trigger slds-dropdown-trigger--click', {
          'slds-is-open': this.state.isOpen
        }, this.props.className),
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMouseDown
      }, React.createElement("button", {
        "aria-describedby": this.getErrorId(),
        "aria-expanded": this.state.isOpen,
        "aria-haspopup": "true",
        className: "slds-button slds-button--neutral slds-picklist__label",
        disabled: this.props.disabled,
        id: this.getId(),
        onClick: !this.props.disabled && this.handleClick,
        ref: this.saveRefToTrigger,
        tabIndex: this.state.isOpen ? -1 : 0,
        type: "button"
      }, React.createElement("span", {
        className: "slds-truncate"
      }, inputValue), React.createElement(Icon, {
        name: "down",
        category: "utility"
      })), isInline ? this.renderInlineMenu() : this.renderDialog())
    );
  },
  renderPills: function renderPills() {
    var _this2 = this;

    var selectedPills = this.state.selectedIndices.map(function (selectedPill) {
      var pillLabel = _this2.getValueByIndex(selectedPill).label;

      return React.createElement("li", {
        className: "slds-listbox__item",
        key: "pill-".concat(selectedPill),
        role: "presentation"
      }, React.createElement(Pill, {
        eventData: {
          item: _this2.props.options[selectedPill],
          index: selectedPill
        },
        events: {
          onRequestRemove: function onRequestRemove(event, data) {
            var newData = _this2.state.selectedIndices;
            var index = data.index;
            newData.splice(_this2.state.selectedIndices.indexOf(index), 1);

            _this2.setState({
              selectedIndices: newData
            });

            if (_this2.props.onPillRemove) {
              var option = _this2.getValueByIndex(index);

              _this2.props.onPillRemove(option, {
                option: option,
                optionIndex: index
              });
            }
          }
        },
        labels: {
          label: pillLabel
        }
      }));
    });
    return React.createElement("div", {
      id: "listbox-selections-unique-id",
      orientation: "horizontal",
      role: "listbox"
    }, React.createElement("ul", {
      className: "slds-listbox slds-listbox_inline slds-p-top_xxx-small",
      role: "group",
      "aria-label": "Selected Options:"
    }, selectedPills));
  },
  render: function render() {
    var _props = this.props,
        className = _props.className,
        errorText = _props.errorText,
        label = _props.label,
        required = _props.required;
    var requiredElem = required ? React.createElement("span", {
      style: {
        color: 'red'
      }
    }, "* ") : null;
    return React.createElement("div", {
      className: classNames('slds-form-element', {
        'slds-has-error': errorText
      }, className)
    }, this.props.label ? React.createElement("label", {
      className: "slds-form-element__label",
      htmlFor: this.getId() // inline style override
      ,
      style: {
        width: '100%'
      }
    }, requiredElem, label) : null, this.renderTrigger(), this.renderPills(), errorText && React.createElement("div", {
      id: this.getErrorId(),
      className: "slds-form-element__help"
    }, errorText));
  }
});
MenuPicklist.contextTypes = {
  iconPath: PropTypes.string
};
export default MenuPicklist;
export { ListItemLabel };
//# sourceMappingURL=index.js.map