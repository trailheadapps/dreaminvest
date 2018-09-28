import React from 'react';
import createReactClass from 'create-react-class';
import Icon from "../../../../components/icon"; // `~` is replaced with design-system-react at runtime

import IconSettings from "../../../../components/icon-settings";
import actionSprite from '@salesforce-ux/design-system/assets/icons/action-sprite/svg/symbols.svg';
import customSprite from '@salesforce-ux/design-system/assets/icons/custom-sprite/svg/symbols.svg';
import utilitySprite from '@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg';
import standardSprite from '@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg';
import doctypeSprite from '@salesforce-ux/design-system/assets/icons/doctype-sprite/svg/symbols.svg';
var Example = createReactClass({
  displayName: 'IconSettingsExample',
  render: function render() {
    return React.createElement(IconSettings, {
      standardSprite: standardSprite,
      utilitySprite: utilitySprite,
      actionSprite: actionSprite,
      doctypeSprite: doctypeSprite,
      customSprite: customSprite
    }, React.createElement("div", {
      className: "slds-grid slds-grid--pull-padded slds-grid--vertical-align-center"
    }, React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Icon, {
      assistiveText: "Account",
      category: "standard",
      name: "account",
      size: "small"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Icon, {
      assistiveText: "Announcement",
      category: "utility",
      name: "announcement",
      size: "small"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Icon, {
      assistiveText: "Description",
      category: "action",
      name: "description",
      size: "small"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Icon, {
      assistiveText: "XML",
      category: "doctype",
      name: "xml",
      size: "small"
    })), React.createElement("div", {
      className: "slds-col--padded"
    }, React.createElement(Icon, {
      assistiveText: "custom5",
      category: "custom",
      name: "custom5",
      size: "small"
    }))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=sprite.js.map