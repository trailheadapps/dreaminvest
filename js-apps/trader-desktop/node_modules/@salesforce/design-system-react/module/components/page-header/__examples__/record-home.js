import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import PageHeader from "../../../../components/page-header"; // `~` is replaced with design-system-react at runtime

import Button from "../../../../components/button";
import ButtonGroup from "../../../../components/button-group";
import ButtonStateful from "../../../../components/button-stateful";
import Dropdown from "../../../../components/menu-dropdown";
var Example = createReactClass({
  displayName: 'PageHeaderExample',
  render: function render() {
    var contentRight = React.createElement("div", null, React.createElement(ButtonStateful, {
      key: "PageHeaderFollowButton",
      iconSize: "medium",
      stateOne: {
        iconName: 'add',
        label: 'Follow'
      },
      stateTwo: {
        iconName: 'check',
        label: 'Following'
      },
      stateThree: {
        iconName: 'close',
        label: 'Unfollow'
      }
    }), React.createElement(ButtonGroup, null, React.createElement(Button, {
      label: "Edit"
    }), React.createElement(Button, {
      label: "Delete"
    }), React.createElement(Button, {
      label: "Clone"
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
    var details = [{
      label: 'Field 1',
      content: 'Description that demonstrates truncation with content. Description that demonstrates truncation with content.',
      truncate: true
    }, {
      label: 'Field 2',
      content: 'Multiple Values'
    }, {
      label: 'Field 3',
      content: React.createElement("a", {
        href: "javascript:void(0);"
      }, "Hyperlink")
    }, {
      label: 'Field 4',
      content: 'Description (2-line truncation)',
      truncate: true
    }];
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(PageHeader, {
      contentRight: contentRight,
      details: details,
      iconAssistiveText: "User",
      iconCategory: "standard",
      iconName: "user",
      label: "Record Type",
      title: "Record Title",
      variant: "recordHome"
    }));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=record-home.js.map