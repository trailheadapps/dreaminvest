import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import ButtonStateful from "../../../../components/button-stateful"; // `~` is replaced with design-system-react at runtime

var Example = createReactClass({
  displayName: 'ButtonStatefulExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", {
      className: "slds-x-small-buttons--horizontal"
    }, React.createElement(ButtonStateful, null), React.createElement("div", {
      style: {
        backgroundColor: '#16325c',
        padding: '10px',
        display: 'inline-block'
      },
      className: "slds-m-horizontal--small"
    }, React.createElement(ButtonStateful, {
      inverse: true,
      stateOne: {
        iconName: 'add',
        label: 'Join'
      },
      stateTwo: {
        iconName: 'check',
        label: 'Member'
      },
      stateThree: {
        iconName: 'close',
        label: 'Leave'
      }
    }))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=icon-text.js.map