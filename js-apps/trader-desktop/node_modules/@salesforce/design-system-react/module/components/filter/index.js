/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable no-script-url */
// # Filter
// Implements part of the [Panel design pattern](https://www.lightningdesignsystem.com/components/panels) in React.
// Based on SLDS v2.2.0-rc.1
// ## Dependencies
// ### React
import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types'; // ### assign

import assign from 'lodash.assign'; // ### classNames

import classNames from 'classnames'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid'; // This component's `checkProps` which issues warnings to developers about properties when in development mode (similar to React's built in development tools)

import checkProps from './check-props';
import Button from '../button';
import Popover from '../popover'; // ## Constants

import { FILTER } from '../../utilities/constants';
/**
 * A Filter is a popover with custom trigger. It can be used by [Panel Filtering](/components/panels/). Menus within a Filter Popover will need to not have "portal mounts" and be inline.
 */

var Filter = createReactClass({
  displayName: FILTER,
  propTypes: {
    /**
     * Aligns the popover with the respective side of the trigger. That is `left` will place the `Popover` to the left of the Filter.
     */
    align: PropTypes.oneOf(['left', 'right']),

    /**
     * **Assistive text for accessibility**
     * * `removeFilter`: Assistive text for removing a filter. The default is `Remove Filter: this.props.property this.props.predicate`.
     * * `editFilter`: Assistive text for changing a filter.
     * * `editFilterHeading`: Assistive text for Popover heading.
     */
    assistiveText: PropTypes.shape({
      editFilter: PropTypes.string,
      editFilterHeading: PropTypes.string,
      removeFilter: PropTypes.string
    }),

    /**
     * Contents of popover. That is the dropdowns and inputs that set the filter criteria.
     */
    children: PropTypes.node,

    /**
     * Custom CSS classes for `slds-filters__item` node. Uses `classNames` [API](https://github.com/JedWatson/classnames).
     */
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

    /**
     * Applies error state styling. Per filter error messages are outside this components.
     */
    isError: PropTypes.bool,

    /**
     * A unique ID is needed in order to support keyboard navigation, ARIA support, and connect the dropdown to the triggering button. An `id` will be generated if none is supplied.
     */
    id: PropTypes.string,

    /**
     * If true, the filter will not display an editing popover when clicked.
     */
    isLocked: PropTypes.bool,

    /**
     * Applies new filter styling.
     */
    isNew: PropTypes.bool,

    /**
     * If true, the filter will not include a remove button.
     */
    isPermanent: PropTypes.bool,

    /**
     * Will be triggered when Done within the Popover is clicked. This is the place to update the filter props displayed. Callback will recieve parameters: `clickEvent, { id }`. An index into your store may be a good setting for `id`, so that it will be passed back here.
     */
    onChange: PropTypes.func,

    /**
     * Will be triggered when "Remove Filter" button is clicked. Callback will recieve parameters: `clickEvent, { id }`. An index into your store may be a good setting for `id`, so that it will be passed back here.
     */
    onRemove: PropTypes.func,

    /**
     * Will be triggered when Filter is clicked. This is the place to close/open popover if a custom popover is passed in
     */
    onClick: PropTypes.func,

    /**
     * A `Popover` component. The props from this popover will be merged and override any default props. This also allows a Filter's Popover dialog to be a controlled component. _Tested with Mocha framework._
     */
    popover: PropTypes.node,

    /**
     * The criteria you are filtering for. For instance, if "Hair Color is PURPLE" is your filter, "is PURPLE" is your filter predicate.
     */
    predicate: PropTypes.node,

    /**
     * The property you are filtering. For instance, if "Hair Color is PURPLE" is your filter, "Hair Color" is your filter property.
     */
    property: PropTypes.node
  },
  getDefaultProps: function getDefaultProps() {
    return {
      align: 'left',
      assistiveText: {
        editFilter: 'Edit filter:',
        editFilterHeading: 'Choose filter criteria'
      },
      predicate: 'New Filter'
    };
  },
  getInitialState: function getInitialState() {
    return {
      popoverIsOpen: this.props.popover ? this.props.popover.props.isOpen : false
    };
  },
  componentWillMount: function componentWillMount() {
    this.generatedId = shortid.generate();
    checkProps(FILTER);
  },
  getId: function getId() {
    return this.props.id || this.generatedId;
  },
  getCustomPopoverProps: function getCustomPopoverProps(_ref) {
    var assistiveText = _ref.assistiveText;

    /*
     * Generate the popover props based on passed in popover props. Using the default behavior if not provided by passed in popover
     */
    var popoverBody = React.createElement("div", null, React.createElement("h4", {
      className: "slds-assistive-text",
      id: "".concat(this.getId(), "-popover-heading")
    }, assistiveText.editFilterHeading), this.props.children, React.createElement("div", {
      className: "slds-m-top--small slds-text-align--right"
    }, React.createElement(Button, {
      className: "slds-col--bump-left",
      label: "Done",
      onClick: this.handleChange
    })));
    var defaultPopoverProps = {
      ariaLabelledby: "".concat(this.getId(), "-popover-heading"),
      align: this.props.align,
      body: popoverBody,
      heading: '',
      id: this.getId(),
      isOpen: this.state.popoverIsOpen,
      // MAGIC NUMBERS - REMOVE/REDESIGN WHEN DESIGN FOR RIGHT-ALIGNED FILTERS ARE ADDED TO SLDS
      offset: this.props.align === 'right' ? '0px -35px' : undefined,
      onClose: this.handleClose,
      onRequestClose: this.handleClose,
      position: 'overflowBoundaryElement',
      triggerClassName: 'slds-grow'
    };
    /* Mixin passed popover's props if there is any to override the default popover props */

    var popoverProps = assign(defaultPopoverProps, this.props.popover ? this.props.popover.props : {});
    delete popoverProps.children;
    return popoverProps;
  },
  handleFilterClick: function handleFilterClick() {
    this.setState({
      popoverIsOpen: true
    });

    if (this.props.onClick) {
      this.props.onClick();
    }
  },
  handleClose: function handleClose() {
    this.setState({
      popoverIsOpen: false
    });
  },
  handleChange: function handleChange(event) {
    this.setState({
      popoverIsOpen: false
    });

    if (this.props.onChange) {
      this.props.onChange(event, {
        id: this.getId()
      });
    }
  },
  handleRemove: function handleRemove(event) {
    if (this.props.onRemove) {
      this.props.onRemove(event, {
        id: this.getId()
      });
    }
  },
  render: function render() {
    /* Remove at next breaking change */
    var assistiveText = {
      editFilter: this.props.assistiveTextEditFilter || // eslint-disable-line react/prop-types
      this.props.assistiveText.editFilter,
      editFilterHeading: this.props.assistiveTextEditFilterHeading || // eslint-disable-line react/prop-types
      this.props.assistiveText.editFilterHeading,
      removeFilter: this.props.assistiveTextRemoveFilter || // eslint-disable-line react/prop-types
      this.props.assistiveText.removeFilter || "Remove Filter: ".concat(this.props.property, " ").concat(this.props.predicate)
    };
    /* TODO: Button wrapper for property and predictate should be transitioned to `Button` component. `Button` needs to take custom children first though. */

    var popoverProps = this.getCustomPopoverProps({
      assistiveText: assistiveText
    });
    return React.createElement("div", {
      className: classNames('slds-filters__item', 'slds-grid', 'slds-grid--vertical-align-center', {
        'slds-is-locked': this.props.isLocked,
        'slds-is-new': this.props.isNew,
        'slds-has-error': this.props.isError
      }, this.props.className)
    }, !this.props.isLocked && (this.props.children || this.props.popover) ? React.createElement(Popover, popoverProps, React.createElement("button", {
      className: "slds-button--reset slds-grow slds-has-blur-focus",
      onClick: this.handleFilterClick,
      "aria-describedby": this.props.isError ? "".concat(this.getId(), "-error") : undefined
    }, React.createElement("span", {
      className: "slds-assistive-text"
    }, assistiveText.editFilter), this.props.property ? React.createElement("p", {
      className: "slds-text-body--small"
    }, this.props.property) : null, React.createElement("p", null, this.props.predicate))) : React.createElement("button", {
      "aria-describedby": this.props.isError ? "".concat(this.getId(), "-error") : undefined,
      className: "slds-button--reset slds-grow slds-has-blur-focus",
      disabled: true
    }, React.createElement("p", {
      className: "slds-text-body--small"
    }, this.props.property), React.createElement("p", null, this.props.predicate)), // Remove button
    !this.props.isPermanent && !this.props.isLocked ? React.createElement(Button, {
      assistiveText: assistiveText.removeFilter,
      hint: true,
      iconCategory: "utility",
      iconName: "close",
      iconSize: "small",
      iconVariant: "bare",
      onClick: this.handleRemove,
      title: assistiveText.removeFilter,
      variant: "icon"
    }) : null);
  }
});
export default Filter;
//# sourceMappingURL=index.js.map