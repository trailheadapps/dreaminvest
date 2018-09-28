import React from 'react';
import createReactClass from 'create-react-class';
import Slider from "../../../../components/slider";
var Example = createReactClass({
  displayName: 'SliderExample',
  render: function render() {
    return React.createElement(Slider, {
      id: "error-id",
      label: "Slider Label",
      errorText: "There is a problem with this field",
      "aria-describedby": "error message"
    });
  }
});
export default Example;
//# sourceMappingURL=error.js.map