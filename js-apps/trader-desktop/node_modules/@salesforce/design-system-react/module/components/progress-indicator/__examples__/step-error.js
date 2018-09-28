import React from 'react';
import createReactClass from 'create-react-class';
import ProgressIndicator from "../../../../components/progress-indicator"; // `~` is replaced with design-system-react at runtime

var Example = createReactClass({
  displayName: 'ProgressIndicatorStepError',
  render: function render() {
    return React.createElement("div", {
      style: {
        padding: '2rem 1rem 0px'
      }
    }, React.createElement(ProgressIndicator, this.props));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=step-error.js.map