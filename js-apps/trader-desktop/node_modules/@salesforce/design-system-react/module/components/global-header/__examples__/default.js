import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import GlobalHeader from "../../../../components/global-header"; // `~` is replaced with design-system-react at runtime

import GlobalHeaderButton from "../../../../components/global-header/button";
import GlobalHeaderDropdown from "../../../../components/global-header/dropdown";
import GlobalHeaderProfile from "../../../../components/global-header/profile";
import GlobalHeaderSearch from "../../../../components/global-header/search";
var Example = createReactClass({
  displayName: 'GlobalHeaderExample',
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(GlobalHeader, {
      logoSrc: "/images/logo.svg",
      onSkipToContent: function onSkipToContent() {
        console.log('>>> Skip to Content Clicked');
      },
      onSkipToNav: function onSkipToNav() {
        console.log('>>> Skip to Nav Clicked');
      }
    }, React.createElement(GlobalHeaderSearch, {
      placeholder: "Search Salesforce",
      onSelect: function onSelect() {
        console.log('>>> onSelect');
      },
      options: [{
        label: 'Email'
      }, {
        label: 'Mobile'
      }]
    }), React.createElement(GlobalHeaderButton, {
      className: "slds-m-right--small",
      iconVariant: null,
      label: "Feedback",
      onClick: function onClick() {
        console.log('>>> onClick');
      },
      variant: "neutral"
    }), React.createElement(GlobalHeaderDropdown, {
      assistiveText: "Global Actions",
      iconCategory: "utility",
      iconName: "add",
      onSelect: function onSelect() {
        console.log('>>> onSelect');
      },
      options: [{
        label: 'New Note'
      }, {
        label: 'Log a Call'
      }]
    }), React.createElement(GlobalHeaderButton, {
      assistiveText: "Help and Training",
      iconName: "question",
      onClick: function onClick() {
        console.log('>>> onClick');
      }
    }), React.createElement(GlobalHeaderButton, {
      assistiveText: "Setup",
      iconName: "settings",
      onClick: function onClick() {
        console.log('>>> onClick');
      }
    }), React.createElement(GlobalHeaderProfile, {
      avatar: "/images/avatar2.jpg",
      onClick: function onClick() {
        console.log('>>> onClick');
      },
      onSelect: function onSelect() {
        console.log('>>> onSelect');
      },
      options: [{
        label: 'Profile Menu'
      }]
    })));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=default.js.map