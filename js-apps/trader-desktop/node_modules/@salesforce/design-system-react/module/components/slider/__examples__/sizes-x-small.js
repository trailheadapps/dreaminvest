import React from 'react';
import createReactClass from 'create-react-class';
import Slider from "../../../../components/slider";
var Example = createReactClass({
  displayName: 'SliderExample',
  render: function render() {
    return React.createElement(Slider, {
      id: "x-small-id",
      label: "Slider Label",
      size: "x-small"
    });
  }
});
export default Example;
//# sourceMappingURL=sizes-x-small.js.map