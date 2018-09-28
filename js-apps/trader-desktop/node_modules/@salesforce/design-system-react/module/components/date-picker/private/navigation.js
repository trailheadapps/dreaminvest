/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import YearPicklist from './year-picklist';
import Button from '../../button';
import DateUtil from '../../../utilities/date';
var DatepickerMonthNavigation = createReactClass({
  displayName: 'SLDSDatepickerMonthNavigation',
  propTypes: {
    /**
     * Label for button to go to the next month
     */
    assistiveTextNextMonth: PropTypes.string.isRequired,

    /**
     * Label for button to go to the previous month
     */
    assistiveTextPreviousMonth: PropTypes.string.isRequired,

    /**
     * HTML id for component
     */
    id: PropTypes.string,

    /**
     * Date used to create calendar that is displayed. This is typically the initial day focused when using the keyboard navigation. Focus will be set to this date if available.
     */
    initialDateForCalendarRender: PropTypes.instanceOf(Date).isRequired,

    /**
     * Displayed calendar has changed or re-rendered
     */
    onChangeMonth: PropTypes.func.isRequired,

    /**
     * Names of the months
     */
    monthLabels: PropTypes.array.isRequired,

    /**
     * For keyboard navigation. In order to trap focus within the dialog, the first DOM node with a tab index should be listened to.
     */
    onPreviousMonthKeyDown: PropTypes.func,

    /**
     * Callback that passes in the DOM reference of the `<button>` DOM node within this component. Primary use is to allow `focus` to be called. You should still test if the node exists, since rendering is asynchronous.
     */
    previousMonthRef: PropTypes.func.isRequired,

    /**
     * Offset of year from current year that can be selected in the year selection dropdown. (2017 - 5 = 2012).
     */
    relativeYearFrom: PropTypes.number,

    /**
     * Offset of year from current year that can be selected in the year selection dropdown. (2017 + 5 = 2012).
     */
    relativeYearTo: PropTypes.number
  },
  getMonthLabel: function getMonthLabel() {
    return this.props.monthLabels[new Date(this.props.initialDateForCalendarRender).getMonth()];
  },
  getYearLabel: function getYearLabel() {
    return new Date(this.props.initialDateForCalendarRender).getFullYear();
  },
  handleClick: function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
  },
  handleYearSelect: function handleYearSelect(initialDateForCalendarRender) {
    this.props.onChangeMonth(undefined, initialDateForCalendarRender);
  },
  previousMonthClicked: function previousMonthClicked() {
    this.props.onChangeMonth(undefined, DateUtil.addMonths(this.props.initialDateForCalendarRender, -1));
  },
  nextMonthClicked: function nextMonthClicked() {
    this.props.onChangeMonth(undefined, DateUtil.addMonths(this.props.initialDateForCalendarRender, 1));
  },
  render: function render() {
    var _this = this;

    return React.createElement("div", {
      className: "slds-datepicker__filter slds-grid"
    }, React.createElement("div", {
      className: "slds-datepicker__filter--month slds-grid slds-grid--align-spread slds-grow"
    }, React.createElement("div", {
      className: "slds-align-middle"
    }, React.createElement(Button, {
      assistiveText: this.props.assistiveTextPreviousMonth,
      iconCategory: "utility",
      iconName: "left",
      iconVariant: "container",
      onKeyDown: this.props.onPreviousMonthKeyDown,
      onClick: this.previousMonthClicked,
      buttonRef: function buttonRef(component) {
        _this.props.previousMonthRef(component);
      },
      variant: "icon",
      type: "button"
    })), React.createElement("h2", {
      id: "".concat(this.props.id, "-month"),
      className: "slds-align-middle",
      "aria-live": "assertive",
      "aria-atomic": true
    }, this.getMonthLabel(), ' ', React.createElement("span", {
      className: "slds-assistive-text"
    }, this.getYearLabel())), React.createElement("div", {
      className: "slds-align-middle"
    }, React.createElement(Button, {
      assistiveText: this.props.assistiveTextNextMonth,
      iconCategory: "utility",
      iconName: "right",
      iconVariant: "container",
      onClick: this.nextMonthClicked,
      variant: "icon",
      type: "button"
    }))), React.createElement(YearPicklist, {
      id: this.props.id,
      initialDateForCalendarRender: this.props.initialDateForCalendarRender,
      onChangeMonth: this.handleYearSelect,
      relativeYearFrom: this.props.relativeYearFrom,
      relativeYearTo: this.props.relativeYearTo
    }));
  }
});
export default DatepickerMonthNavigation;
//# sourceMappingURL=navigation.js.map