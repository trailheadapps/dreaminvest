/* eslint-disable no-console, react/prop-types */
import React from 'react';
import createReactClass from 'create-react-class';
import Datepicker from "../../../../components/date-picker";
var Example = createReactClass({
  displayName: 'DatepickerExample',
  render: function render() {
    return React.createElement(Datepicker, {
      dateDisabled: function dateDisabled(_ref) {
        var date = _ref.date;
        return date.getDay() > 5 || date.getDay() < 1;
      }
    });
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=weekday-picker.js.map