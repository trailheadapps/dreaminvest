import React from 'react';
import createReactClass from 'create-react-class';
import Slider from "../../../../components/slider";
var Example = createReactClass({
  displayName: 'SliderExample',
  render: function render() {
    return React.createElement(Slider, {
      id: "vertical-id",
      label: "Slider Label",
      vertical: true
    });
  }
});
export default Example;
//# sourceMappingURL=vertical.js.map