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
      emptyMessage: "No items found",
      hasError: false,
      label: "Account",
      onChange: function onChange(newValue) {
        console.log('New search term: ', newValue);
      },
      onSelect: function onSelect(item) {
        console.log(item, ' Selected');
      },
      options: [{
        type: 'section',
        label: 'SECTION 1'
      }, {
        label: "Paddy's Pub"
      }, {
        label: 'Tyrell Corp'
      }, {
        type: 'section',
        label: 'SECTION 2'
      }, {
        label: 'Paper St. Soap Company'
      }, {
        label: 'Nakatomi Investments'
      }, {
        label: 'Acme Landscaping'
      }, {
        type: 'section',
        label: 'SECTION 3'
      }, {
        label: 'Acme Construction'
      }],
      sectionDividerRenderer: Lookup.DefaultSectionDivider
    }));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=default.js.map