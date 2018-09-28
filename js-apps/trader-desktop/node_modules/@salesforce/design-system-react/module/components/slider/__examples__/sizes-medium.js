import React from 'react';
import createReactClass from 'create-react-class';
import Slider from "../../../../components/slider";
var Example = createReactClass({
  displayName: 'SliderExample',
  render: function render() {
    return React.createElement(Slider, {
      id: "medium-id",
      label: "Slider Label",
      size: "medium"
    });
  }
});
export default Example;
//# sourceMappingURL=sizes-medium.js.map