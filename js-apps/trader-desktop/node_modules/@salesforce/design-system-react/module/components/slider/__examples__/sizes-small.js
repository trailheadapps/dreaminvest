import React from 'react';
import createReactClass from 'create-react-class';
import Slider from "../../../../components/slider";
var Example = createReactClass({
  displayName: 'SliderExample',
  render: function render() {
    return React.createElement(Slider, {
      id: "small-id",
      label: "Slider Label",
      size: "small"
    });
  }
});
export default Example;
//# sourceMappingURL=sizes-small.js.map