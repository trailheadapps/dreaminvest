import React from 'react';
import createReactClass from 'create-react-class';
import Slider from "../../../../components/slider";
var Example = createReactClass({
  displayName: 'SliderExample',
  render: function render() {
    return React.createElement(Slider, {
      id: "disabled-id",
      label: "Slider Label",
      disabled: true
    });
  }
});
export default Example;
//# sourceMappingURL=disabled.js.map