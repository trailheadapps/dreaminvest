import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import GlobalNavigationBar from "../../../../components/global-navigation-bar"; // `~` is replaced with design-system-react at runtime

import GlobalNavigationBarRegion from "../../../../components/global-navigation-bar/region";
import GlobalNavigationBarDropdown from "../../../../components/global-navigation-bar/dropdown";
import GlobalNavigationBarLink from "../../../../components/global-navigation-bar/link";
import Button from "../../../../components/button";
import Icon from "../../../../components/icon";
import AppLauncher from "../../../../components/app-launcher";
import AppLauncherSection from "../../../../components/app-launcher/section";
import AppLauncherTile from "../../../../components/app-launcher/tile";
var Example = createReactClass({
  displayName: 'GlobalNavigationBarExample',
  render: function render() {
    var dropdownCollection = [{
      label: 'Menu Item One',
      value: '1',
      iconCategory: 'utility',
      iconName: 'table',
      href: 'http://www.google.com'
    }, {
      label: 'Menu Item Two',
      value: '2',
      iconCategory: 'utility',
      iconName: 'kanban',
      href: 'http://www.google.com'
    }, {
      label: 'Menu Item Three',
      value: '3',
      iconCategory: 'utility',
      iconName: 'side_list',
      href: 'http://www.google.com'
    }];
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(GlobalNavigationBar, null, React.createElement(GlobalNavigationBarRegion, {
      region: "primary"
    }, React.createElement(AppLauncher, {
      triggerName: "App Name",
      onSearch: function onSearch() {
        console.log('Search term:', event.target.value);
      },
      modalHeaderButton: React.createElement(Button, {
        label: "App Exchange"
      })
    }, React.createElement(AppLauncherSection, {
      title: "Tile Section"
    }, React.createElement(AppLauncherTile, {
      title: "Marketing Cloud",
      iconText: "MC",
      description: "Send emails, track emails, read emails! Emails!"
    }), React.createElement(AppLauncherTile, {
      title: "Call Center",
      description: "The key to call center and contact center is not to use too many words!",
      descriptionHeading: "Call Center",
      iconText: "CC"
    })), React.createElement(AppLauncherSection, {
      title: "Small Tile Section"
    }, React.createElement(AppLauncherTile, {
      title: "Journey Builder",
      iconText: "JB",
      size: "small"
    }), React.createElement(AppLauncherTile, {
      title: "Sales Cloud",
      iconNode: React.createElement(Icon, {
        name: "campaign",
        category: "standard",
        size: "large"
      }),
      size: "small"
    })))), React.createElement(GlobalNavigationBarRegion, {
      region: "secondary",
      navigation: true
    }, React.createElement(GlobalNavigationBarLink, {
      href: "javascript:void(0);",
      label: "Home",
      id: "home-link"
    }), React.createElement(GlobalNavigationBarDropdown, {
      id: "primaryDropdown",
      assistiveText: "Context Menu Item 1",
      label: "Context Menu Item",
      options: dropdownCollection
    }), React.createElement(GlobalNavigationBarLink, {
      href: "javascript:void(0);",
      label: "Context Menu Item 2",
      active: true
    })), React.createElement(GlobalNavigationBarRegion, {
      region: "tertiary"
    }, React.createElement(GlobalNavigationBarLink, {
      href: "javascript:void(0);",
      label: "Actions"
    }))));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=default.js.map