import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import ProgressIndicator from "../../../../components/progress-indicator"; // `~` is replaced with design-system-react at runtime

var steps = [{
  id: 0,
  label: React.createElement("i", null, "tooltip label #1"),
  assistiveText: 'This is custom text in the assistive text key'
}, {
  id: 1,
  label: 'tooltip label #2'
}, {
  id: 2,
  label: React.createElement("strong", null, "tooltip label #3")
}, {
  id: 3,
  label: 'tooltip label #4'
}, {
  id: 4,
  label: 'tooltip label #5'
}];

var handleStepEvent = function handleStepEvent(event, data) {
  console.log(data);
};

var Example = createReactClass({
  displayName: 'ProgressIndicatorDefault',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", {
      style: {
        padding: '2rem 1rem 0px',
        background: this.props.variant === 'modal' ? 'rgb(244, 246, 249)' : ''
      }
    }, React.createElement(ProgressIndicator, {
      steps: steps,
      selectedStep: steps[0],
      onStepClick: handleStepEvent // tooltipIsOpenSteps={stepsBasic.slice(0, 2)}

    })));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=default.js.map