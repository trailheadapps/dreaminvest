import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import Timepicker from "../../../../components/time-picker"; // `~` is replaced with design-system-react at runtime

var Example = createReactClass({
  displayName: 'TimepickerExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(Timepicker, {
      placeholder: "Select a time",
      stepInMinutes: 30,
      onDateChange: function onDateChange(date, inputStr) {
        console.log('onDateChange ', date, ' inputStr: ', inputStr);
      }
    }));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=default.js.map