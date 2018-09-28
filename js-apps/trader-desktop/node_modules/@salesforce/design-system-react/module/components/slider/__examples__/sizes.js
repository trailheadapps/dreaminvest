import React from 'react';
import createReactClass from 'create-react-class';
import Slider from "../../../../components/slider";
var Example = createReactClass({
  displayName: 'SliderExample',
  render: function render() {
    return React.createElement("div", {
      className: "slds-grid slds-grid--pull-padded slds-grid--vertical-align-center"
    }, React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Slider, {
      id: "x-small-id",
      label: "Slider Label",
      size: "x-small"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Slider, {
      id: "small-id",
      label: "Slider Label",
      size: "small"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Slider, {
      id: "medium-id",
      label: "Slider Label",
      size: "medium"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Slider, {
      id: "large-id",
      label: "Slider Label",
      size: "large"
    })));
  }
});
export default Example;
//# sourceMappingURL=sizes.js.map