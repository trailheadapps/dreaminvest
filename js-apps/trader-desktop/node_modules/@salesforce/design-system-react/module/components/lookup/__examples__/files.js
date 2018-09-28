import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import Lookup from "../../../../components/lookup"; // `~` is replaced with design-system-react at runtime

var Example = createReactClass({
  displayName: 'LookupExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(Lookup, {
      emptyMessage: "No Files found",
      hasError: false,
      iconCategory: "utility",
      iconInverse: false,
      iconName: "open_folder",
      label: "Files",
      onSelect: function onSelect(item) {
        console.log(item, ' Selected');
      },
      options: [{
        label: 'File 1'
      }, {
        label: 'File 2'
      }, {
        label: 'File 3'
      }, {
        label: 'File 4'
      }]
    }));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=files.js.map