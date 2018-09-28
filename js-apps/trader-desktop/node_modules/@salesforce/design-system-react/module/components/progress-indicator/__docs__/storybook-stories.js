import React from 'react';
import createReactClass from 'create-react-class';
import { storiesOf } from '@storybook/react';
import IconSettings from '../../icon-settings';
import ProgressIndicator from '../../../components/progress-indicator';
import { PROGRESS_INDICATOR } from '../../../utilities/constants';
import Default from '../__examples__/default';
import Modal from '../__examples__/modal';
import StepError from '../__examples__/step-error';
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
var stepsDisabled = [{
  id: 3,
  label: 'tooltip label #4'
}, {
  id: 4,
  label: 'tooltip label #5'
}];
var manySteps = [{
  id: 'a',
  label: 'tooltip label #1'
}, {
  id: 'b',
  label: 'tooltip label #2'
}, {
  id: 'c',
  label: 'tooltip label #3'
}, {
  id: 'd',
  label: 'tooltip label #4'
}, {
  id: 'e',
  label: 'tooltip label #5'
}, {
  id: 'f',
  label: 'tooltip label #6'
}, {
  id: 'g',
  label: 'tooltip label #7'
}, {
  id: 'h',
  label: 'tooltip label #8'
}, {
  id: 'i',
  label: 'tooltip label #9'
}];
var ExampleProgressIndicator = createReactClass({
  displayName: 'ProgressIndicatorDefault',
  render: function render() {
    return React.createElement("div", {
      style: {
        padding: '2rem 1rem 0px'
      }
    }, React.createElement(ProgressIndicator, {
      steps: this.props.steps,
      selectedStep: this.props.selectedStep,
      onStepClick: function onStepClick(event, data) {
        console.log(data);
      }
    }));
  }
});
storiesOf(PROGRESS_INDICATOR, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base', function () {
  return React.createElement(Default, null);
}).add('Base With Many Steps', function () {
  return React.createElement(ExampleProgressIndicator, {
    steps: manySteps,
    selectedStep: manySteps[4],
    completedSteps: manySteps.slice(0, 4) // tooltipIsOpenSteps={stepsBasic.slice(0, 2)}

  });
}).add('Base With Disabled Steps', function () {
  return React.createElement(ExampleProgressIndicator, {
    steps: steps,
    disabledSteps: stepsDisabled,
    selectedStep: steps[2],
    completedSteps: steps.slice(0, 2)
  });
}).add('Step Error', function () {
  return React.createElement(StepError, {
    steps: steps,
    selectedStep: steps[1],
    completedSteps: steps.slice(0, 1),
    errorSteps: steps.slice(1, 2)
  });
}).add('In A Modal (With Step Error)', function () {
  return React.createElement(Modal, null);
});
//# sourceMappingURL=storybook-stories.js.map