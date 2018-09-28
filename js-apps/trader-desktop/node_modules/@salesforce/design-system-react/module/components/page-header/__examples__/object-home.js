import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import PageHeader from "../../../../components/page-header"; // `~` is replaced with design-system-react at runtime

import Button from "../../../../components/button";
import ButtonGroup from "../../../../components/button-group";
import Dropdown from "../../../../components/menu-dropdown";
import DropdownTrigger from "../../../../components/menu-dropdown/button-trigger";
var Example = createReactClass({
  displayName: 'PageHeaderExample',
  render: function render() {
    var navRight = React.createElement("div", null, React.createElement(ButtonGroup, null, React.createElement(Button, {
      label: "New Lead"
    }), React.createElement(Button, {
      label: "Import Leads"
    }), React.createElement(Dropdown, {
      align: "right",
      assistiveText: "More Options",
      iconCategory: "utility",
      iconName: "down",
      iconVariant: "border-filled",
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
    var contentRight = React.createElement("div", null, React.createElement(Dropdown, {
      align: "right",
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
      assistiveText: "List View Controls",
      className: "slds-m-right--xx-small",
      iconCategory: "utility",
      iconName: "settings",
      iconVariant: "more"
    }))), React.createElement(Dropdown, {
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
    }))), React.createElement(Button, {
      assistiveText: "Edit List",
      iconCategory: "utility",
      iconName: "edit",
      iconVariant: "border",
      variant: "icon"
    }), React.createElement(Button, {
      assistiveText: "Refresh",
      iconCategory: "utility",
      iconName: "refresh",
      iconVariant: "border",
      variant: "icon"
    }), React.createElement("div", null, React.createElement(ButtonGroup, null, React.createElement(Button, {
      assistiveText: "Charts",
      iconCategory: "utility",
      iconName: "chart",
      iconVariant: "border",
      variant: "icon"
    }), React.createElement(Button, {
      assistiveText: "Filters",
      iconCategory: "utility",
      iconName: "filterList",
      iconVariant: "border",
      variant: "icon"
    }))));
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(PageHeader, {
      contentRight: contentRight,
      iconAssistiveText: "User",
      iconCategory: "standard",
      iconName: "lead",
      info: "10 items \u2022 sorted by name",
      label: "Leads",
      navRight: navRight,
      title: React.createElement("h1", {
        className: "slds-page-header__title slds-p-right--x-small"
      }, React.createElement(Dropdown, {
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
        className: "slds-button--reset slds-type-focus",
        iconCategory: "utility",
        iconName: "down",
        iconPosition: "right",
        label: "Dropdown",
        responsive: true,
        variant: "base"
      })))),
      truncate: true,
      variant: "objectHome"
    }));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=object-home.js.map