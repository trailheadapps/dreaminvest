function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable no-console, react/prop-types */
import React from 'react';
import createReactClass from 'create-react-class'; // Higher Order Components such as `react-onclickoutside` use the DOM and Jest snapshot testing must be DOMless

import Datepicker from "../../../../components/date-picker/date-picker";
import IconSettings from "../../../../components/icon-settings";
var Example = createReactClass({
  displayName: 'DatepickerExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(Datepicker, _extends({
      id: "sample-datepicker",
      isOpen: true,
      menuPosition: "relative",
      value: new Date(2014, 6, 23)
    }, this.props)));
  }
});
export default Example;
//# sourceMappingURL=snapshot-default.js.map