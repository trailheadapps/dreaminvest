function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable no-console, react/prop-types */
import React from 'react';
import createReactClass from 'create-react-class'; // Higher Order Components such as `react-onclickoutside` use the DOM and Jest snapshot testing must be DOMless

import Navigation from "../../../../components/navigation";
import IconSettings from "../../../../components/icon-settings";
import { sampleReportCategories } from "../../../../utilities/sample-data/navigation";
var Example = createReactClass({
  displayName: 'NavigationExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(Navigation, _extends({
      id: "sample-navigation",
      categories: sampleReportCategories
    }, this.props)));
  }
});
export default Example;
//# sourceMappingURL=snapshot-default.js.map