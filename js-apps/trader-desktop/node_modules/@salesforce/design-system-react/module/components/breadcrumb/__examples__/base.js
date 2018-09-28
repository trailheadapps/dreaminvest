import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import BreadCrumb from "../../../../components/breadcrumb"; // `~` is replaced with design-system-react at runtime

var Example = createReactClass({
  displayName: 'BreadCrumbExample',
  render: function render() {
    var trail = [React.createElement("a", {
      id: "parent-entity",
      href: "javascript:void(0);"
    }, "Parent Entity"), React.createElement("a", {
      href: "javascript:void(0);"
    }, "Parent Record Name")];
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(BreadCrumb, {
      trail: trail
    }));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=base.js.map