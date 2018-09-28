function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import createReactClass from 'create-react-class';
import Slider from "../../../../components/slider";
var DemoSlider = createReactClass({
  displayName: 'DemoSlider',
  getInitialState: function getInitialState() {
    return {
      value: this.props.defaultValue
    };
  },
  handleChange: function handleChange(event, _ref) {
    var value = _ref.value;
    this.setState({
      value: value
    });
  },
  render: function render() {
    return React.createElement(Slider, _extends({}, this.props, {
      value: this.state.value,
      onChange: this.handleChange
    }));
  }
});
var Example = createReactClass({
  displayName: 'SliderExample',
  render: function render() {
    return React.createElement("section", null, React.createElement("ol", null, React.createElement("li", {
      className: "slds-p-bottom--large"
    }, React.createElement("h1", {
      className: "slds-text-title_caps slds-p-vertical--medium"
    }, "1. Base Input with label"), React.createElement(DemoSlider, {
      id: "base-id",
      label: "My Label"
    })), React.createElement("li", {
      className: "slds-p-bottom--large"
    }, React.createElement("h1", {
      className: "slds-text-title_caps slds-p-vertical--medium"
    }, "2. Base Input with no label (assistive text)"), React.createElement(DemoSlider, {
      id: "assistiveText-id",
      assistiveText: {
        label: 'My Label'
      }
    })), React.createElement("li", {
      className: "slds-p-bottom--large"
    }, React.createElement("h1", {
      className: "slds-text-title_caps slds-p-vertical--medium"
    }, "3. Base Input with min and max."), React.createElement(DemoSlider, {
      id: "min-max-id",
      label: "My Label",
      min: 0,
      max: 400,
      defaultValue: 200
    })), React.createElement("li", {
      className: "slds-p-bottom--large"
    }, React.createElement("h1", {
      className: "slds-text-title_caps slds-p-vertical--medium"
    }, "4. Base Input with min, max and step."), React.createElement(DemoSlider, {
      id: "min-max-step-id",
      label: "My Label",
      min: 0,
      max: 400,
      step: 100,
      defaultValue: 200
    }))));
  }
});
export default Example;
//# sourceMappingURL=base.js.map