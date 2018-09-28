import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import PageHeader from "../../../../components/page-header"; // `~` is replaced with design-system-react at runtime

import Button from "../../../../components/button";
import ButtonGroup from "../../../../components/button-group";
import Dropdown from "../../../../components/dropdown";
import DropdownTrigger from "../../../../components/menu-dropdown/button-trigger";
var Example = createReactClass({
  displayName: 'PageHeaderExample',
  render: function render() {
    var navRight = React.createElement("div", {
      className: "slds-button-group",
      role: "group"
    }, React.createElement("button", {
      className: "slds-button slds-button--neutral"
    }, "Add Contact"), React.createElement("div", {
      className: "slds-button--last"
    }, React.createElement(Button, {
      iconCategory: "utility",
      iconName: "down",
      variant: "icon",
      iconVariant: "border-filled",
      assistiveText: "More Actions"
    })));
    var contentRight = React.createElement("div", null, React.createElement(Dropdown, {
      align: "right",
      assistiveText: "Change view",
      iconName: "settings",
      iconVariant: "more",
      options: [{
        label: 'Menu Item One',
        value: 'A0'
      }, {
        label: 'Menu Item Two',
        value: 'B0'
      }, {
        label: 'Menu Item Three',
        value: 'C0'
      }, {
        type: 'divider'
      }, {
        label: 'Menu Item Four',
        value: 'D0'
      }]
    }, React.createElement(DropdownTrigger, null, React.createElement(Button, {
      assistiveText: "Change view",
      className: "slds-m-right--xx-small",
      iconCategory: "utility",
      iconName: "table",
      iconVariant: "more",
      variant: "icon"
    }))), React.createElement(ButtonGroup, null, React.createElement(Button, {
      iconCategory: "utility",
      iconName: "chart",
      variant: "icon",
      iconVariant: "border",
      className: "slds-m-left--xx-small",
      assistiveText: "Chart"
    }), React.createElement(Button, {
      iconCategory: "utility",
      iconName: "filterList",
      variant: "icon",
      iconVariant: "border",
      className: "slds-m-left--xx-small",
      assistiveText: "Filter List"
    }), React.createElement(Dropdown, {
      triggerClassname: true,
      align: "right",
      assistiveText: "List View Controls",
      iconName: "sort",
      iconVariant: "more",
      options: [{
        label: 'Menu Item One',
        value: 'A0'
      }, {
        label: 'Menu Item Two',
        value: 'B0'
      }, {
        label: 'Menu Item Three',
        value: 'C0'
      }, {
        type: 'divider'
      }, {
        label: 'Menu Item Four',
        value: 'D0'
      }]
    })));
    var trail = [React.createElement("a", {
      href: "javascript:void(0);"
    }, "Accounts"), React.createElement("a", {
      href: "javascript:void(0);"
    }, "Company One")];
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(PageHeader, {
      title: "Contacts (will truncate)",
      navRight: navRight,
      contentRight: contentRight,
      variant: "objectHome",
      truncate: true,
      trail: trail,
      info: "10 items \u2022 sorted by name"
    }));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=related-list.js.map