import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import Popover from "../../../../components/popover"; // `~` is replaced with design-system-react at runtime

import Button from "../../../../components/button";
import Icon from "../../../../components/icon";
var panelContent = React.createElement("div", null, React.createElement("dl", {
  className: "slds-popover__body-list"
}, React.createElement("dt", {
  className: "slds-m-bottom--small"
}, React.createElement("div", {
  className: "slds-media slds-media--center"
}, React.createElement("div", {
  className: "slds-media__figure"
}, React.createElement(Icon, {
  assistiveText: "Opportunity Icon",
  category: "standard",
  name: "opportunity",
  size: "small",
  tabIndex: "0"
})), React.createElement("div", {
  className: "slds-media__body"
}, React.createElement("p", {
  id: "ALTERNATIVE-HEADING",
  className: "slds-text-heading--small slds-hyphenate"
}, "Opportunities (1+)")))), React.createElement("dd", {
  className: "slds-tile"
}, React.createElement("p", {
  className: "slds-truncate",
  title: "Tesla - Mule ESB"
}, React.createElement("a", {
  href: "javascript:void(0);"
}, "Tesla - Mule ESB")), React.createElement("div", {
  className: "slds-tile__detail"
}, React.createElement("dl", {
  className: "slds-dl--horizontal slds-text-body--small"
}, React.createElement("dt", {
  className: "slds-dl--horizontal__label"
}, React.createElement("p", {
  className: "slds-truncate",
  title: "Value"
}, "Value")), React.createElement("dd", {
  className: "slds-dl--horizontal__detail slds-tile__meta"
}, React.createElement("p", {
  className: "slds-truncate",
  title: "$500,000"
}, "$500,000")), React.createElement("dt", {
  className: "slds-dl--horizontal__label"
}, React.createElement("p", {
  className: "slds-truncate",
  title: "Close Date"
}, "Close Date")), React.createElement("dd", {
  className: "slds-dl--horizontal__detail slds-tile__meta"
}, React.createElement("p", {
  className: "slds-truncate",
  title: "Dec 15, 2015"
}, "Dec 15, 2015"))))), React.createElement("dd", {
  className: "slds-m-top--x-small slds-text-align--right"
}, React.createElement("a", {
  href: "javascript:void(0);",
  title: "View all Opportunities"
}, "View All"))));
var Example = createReactClass({
  displayName: 'PopoverExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", null, React.createElement(Popover, {
      ariaLabelledby: "ALTERNATIVE-HEADING",
      body: panelContent
    }, React.createElement(Button, {
      label: "Trigger Popover"
    }))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=alternative-header.js.map