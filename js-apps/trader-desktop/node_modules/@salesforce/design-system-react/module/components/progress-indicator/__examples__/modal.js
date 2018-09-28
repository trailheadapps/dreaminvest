import React from 'react';
import createReactClass from 'create-react-class';
import { storiesOf, action } from '@storybook/react';
import ProgressIndicator from "../../../../components/progress-indicator"; // `~` is replaced with design-system-react at runtime

import Modal from "../../../../components/modal";
import Button from "../../../../components/button";
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

var getModal = function getModal(props) {
  return React.createElement(Modal, props);
};

var modalFooter = function modalFooter(props) {
  return [React.createElement(Button, {
    key: "modalBCancel",
    label: "Cancel"
  }), React.createElement(ProgressIndicator, {
    key: "modal-progress-indicator",
    variant: "modal",
    steps: steps,
    selectedStep: steps[2],
    completedSteps: steps.slice(0, 2),
    errorSteps: steps.slice(2, 3),
    onStepClick: handleStepEvent
  }), React.createElement(Button, {
    key: "modalBSave",
    label: "Save",
    variant: "brand"
  })];
};

var modalContent = React.createElement("div", {
  className: "slds-modal__content slds-grow slds-p-around_medium",
  id: "modal-content-id-1",
  style: {
    height: '640px'
  }
});
var Example = createReactClass({
  displayName: 'ProgressIndicatorModal',
  render: function render() {
    return React.createElement("div", {
      style: {
        height: '640px'
      }
    }, getModal({
      isOpen: true,
      title: 'Modal Header',
      children: modalContent,
      onRequestClose: action('modal closed'),
      footer: modalFooter(this.props),
      size: 'large',
      footerClassNames: 'slds-grid slds-grid_align-spread'
    }));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=modal.js.map