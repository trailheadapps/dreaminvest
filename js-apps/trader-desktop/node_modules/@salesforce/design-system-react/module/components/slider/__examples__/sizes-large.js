import React from 'react';
import createReactClass from 'create-react-class';
import Slider from "../../../../components/slider";
var Example = createReactClass({
  displayName: 'SliderExample',
  render: function render() {
    return React.createElement(Slider, {
      id: "large-id",
      label: "Slider Label",
      size: "large"
    });
  }
});
export default Example;
//# sourceMappingURL=sizes-large.js.map