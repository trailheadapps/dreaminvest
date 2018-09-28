function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf, action } from '@storybook/react';
import IconSettings from '../../icon-settings';
import { GLOBAL_NAVIGATION_BAR } from '../../../utilities/constants';
import { propSets } from '../../../utilities/sample-data/global-navigation-bar';
import GlobalNavigationBar from '../../global-navigation-bar';
import GlobalNavigationBarRegion from '../../global-navigation-bar/region';
import GlobalNavigationBarDropdown from '../../global-navigation-bar/dropdown';
import GlobalNavigationBarLink from '../../global-navigation-bar/link';
import GlobalNavigationBarLabel from '../../global-navigation-bar/label';
import GlobalNavigationBarButton from '../../global-navigation-bar/button';
import AppLauncher from '../../app-launcher';
import AppLauncherSection from '../../app-launcher/section';
import AppLauncherTile from '../../app-launcher/tile'; // aliased to allow copy and paste from component tests

var buttonClicked = action;
var dropdownItemClicked = action;
var linkClicked = action;
var searchClicked = action;
var dropdownCollection = [{
  label: 'Main action',
  value: '0',
  iconCategory: 'utility',
  iconName: 'table',
  href: 'http://www.google.com'
}, {
  label: 'Menu Header',
  type: 'header',
  divider: 'top'
}, {
  label: 'Menu Item One',
  value: '1',
  iconCategory: 'utility',
  iconName: 'kanban',
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
}, {
  label: 'Menu Item Four',
  value: '4',
  iconCategory: 'utility',
  iconName: 'side_list',
  href: 'http://www.google.com'
}, {
  type: 'divider'
}, {
  label: 'Menu Item Five',
  value: '5',
  iconCategory: 'utility',
  iconName: 'side_list',
  href: 'http://www.google.com'
}];
/* eslint-disable react/display-name */

var getGlobalNavigationBar = function getGlobalNavigationBar(props, primaryRegionProps) {
  return React.createElement(GlobalNavigationBar, props, React.createElement(GlobalNavigationBarRegion, _extends({
    region: "primary"
  }, primaryRegionProps), React.createElement(AppLauncher, {
    onSearch: searchClicked('App Launcher searched'),
    assistiveText: "Open App Launcher",
    id: "app-launcher-trigger",
    triggerName: "App Name"
  }, React.createElement(AppLauncherSection, {
    title: "All Items"
  }, React.createElement(AppLauncherTile, {
    title: "Marketing Cloud",
    iconText: "MC",
    description: "Send emails, track emails, read emails! Emails!",
    onClick: action('Tile clicked!')
  })))), React.createElement(GlobalNavigationBarRegion, {
    region: "secondary",
    navigation: true
  }, React.createElement(GlobalNavigationBarLink, {
    href: "https://www.lightningdesignsystem.com/",
    label: "Home",
    id: "home-link",
    onClick: linkClicked('Home link clicked. Actual href should be ignored'),
    onKeyDown: function onKeyDown(e) {
      console.log(e.target);
    }
  }), React.createElement(GlobalNavigationBarDropdown, {
    assistiveText: "Open Menu Item 1",
    id: "primaryDropdown",
    label: "Menu Item",
    openOn: props.openOn || undefined,
    onSelect: dropdownItemClicked('Dropdown Menu Item clicked'),
    options: dropdownCollection
  }), React.createElement(GlobalNavigationBarLink // will actually go to website
  , {
    href: "https://www.lightningdesignsystem.com/",
    label: "Menu Item"
  }), React.createElement(GlobalNavigationBarLink, {
    active: true,
    label: "Menu Item",
    onClick: linkClicked('Link clicked')
  }), React.createElement(GlobalNavigationBarLink, {
    label: "Menu Item",
    onClick: linkClicked('Link clicked')
  })), React.createElement(GlobalNavigationBarRegion, {
    region: "tertiary"
  }, React.createElement(GlobalNavigationBarButton, {
    label: "Button",
    onClick: buttonClicked('Button clicked')
  }), React.createElement(GlobalNavigationBarLink, {
    label: "Actions",
    onClick: buttonClicked('Link clicked')
  }), React.createElement(GlobalNavigationBarLabel, {
    dividerPosition: "left",
    label: "Vandelay Enterprises"
  })));
};

var getGlobalNavigationBarCustomCloud = function getGlobalNavigationBarCustomCloud(props, primaryRegionProps) {
  return React.createElement(GlobalNavigationBar, props, React.createElement(GlobalNavigationBarRegion, _extends({
    region: "primary"
  }, primaryRegionProps), React.createElement(AppLauncher, _extends({
    onSearch: searchClicked('App Launcher searched')
  }, primaryRegionProps.appLauncher), React.createElement(AppLauncherSection, {
    title: "All Items"
  }, React.createElement(AppLauncherTile, {
    title: "Marketing Cloud",
    iconText: "MC",
    description: "Send emails, track emails, read emails! Emails!",
    onClick: action('Tile clicked!')
  })))), React.createElement(GlobalNavigationBarRegion, {
    region: "secondary",
    navigation: true
  }, React.createElement(GlobalNavigationBarLink, {
    label: "Overview",
    id: "overview-link",
    onClick: linkClicked('Overview link clicked')
  }), React.createElement(GlobalNavigationBarDropdown, {
    id: "contentDropdown",
    label: "Content",
    onSelect: dropdownItemClicked('Content Menu Item clicked'),
    options: dropdownCollection
  }), React.createElement(GlobalNavigationBarDropdown, {
    id: "subscribersDropdown",
    label: "Subscribers",
    onSelect: dropdownItemClicked('Subscribers Menu Item clicked'),
    options: dropdownCollection
  }), React.createElement(GlobalNavigationBarDropdown, {
    id: "interactionDropdown",
    label: "Interaction",
    onSelect: dropdownItemClicked('Interaction Menu Item clicked'),
    options: dropdownCollection
  }), React.createElement(GlobalNavigationBarLink, {
    label: "A/B Testing",
    onClick: linkClicked('A/B Testing Link clicked')
  }), React.createElement(GlobalNavigationBarDropdown, {
    id: "trackingDropdown",
    label: "Tracking",
    onSelect: dropdownItemClicked('Tracking Menu Item clicked'),
    options: dropdownCollection
  }), React.createElement(GlobalNavigationBarLink, {
    label: "Admin",
    onClick: linkClicked('Admin Link clicked')
  }), React.createElement(GlobalNavigationBarLink, {
    label: "Audience Builder",
    onClick: linkClicked('Audience Builder Link clicked')
  })), React.createElement(GlobalNavigationBarRegion, {
    region: "tertiary"
  }, React.createElement(GlobalNavigationBarLink, {
    label: "Actions",
    onClick: linkClicked('Link clicked')
  })));
};

var getGlobalNavigationBarCustomCloudOverviewActive = function getGlobalNavigationBarCustomCloudOverviewActive(props, primaryRegionProps) {
  return React.createElement(GlobalNavigationBar, props, React.createElement(GlobalNavigationBarRegion, {
    region: "primary"
  }, React.createElement(AppLauncher, _extends({
    onSearch: searchClicked('App Launcher searched')
  }, primaryRegionProps.appLauncher), React.createElement(AppLauncherSection, {
    title: "All Items"
  }, React.createElement(AppLauncherTile, {
    title: "Marketing Cloud",
    iconText: "MC",
    description: "Send emails, track emails, read emails! Emails!",
    onClick: action('Tile clicked!')
  })))), React.createElement(GlobalNavigationBarRegion, {
    region: "secondary",
    navigation: true
  }, React.createElement(GlobalNavigationBarLink, {
    label: "Overview",
    id: "overview-link",
    active: true,
    activeBackgroundColor: "#ffffff",
    onClick: linkClicked('Overview link clicked')
  }), React.createElement(GlobalNavigationBarDropdown, {
    id: "contentDropdown",
    label: "Content",
    onSelect: dropdownItemClicked('Content Menu Item clicked'),
    options: dropdownCollection
  }), React.createElement(GlobalNavigationBarDropdown, {
    id: "subscribersDropdown",
    label: "Subscribers",
    onSelect: dropdownItemClicked('Subscribers Menu Item clicked'),
    options: dropdownCollection
  }), React.createElement(GlobalNavigationBarDropdown, {
    active: true,
    activeBackgroundColor: "#ffffff",
    id: "interactionDropdown",
    label: "Interaction",
    onSelect: dropdownItemClicked('Interaction Menu Item clicked'),
    options: dropdownCollection
  }), React.createElement(GlobalNavigationBarLink, {
    label: "A/B Testing",
    onClick: linkClicked('A/B Testing Link clicked')
  }), React.createElement(GlobalNavigationBarDropdown, {
    id: "trackingDropdown",
    label: "Tracking",
    onSelect: dropdownItemClicked('Tracking Menu Item clicked'),
    options: dropdownCollection
  }), React.createElement(GlobalNavigationBarLink, {
    label: "Admin",
    onClick: linkClicked('Admin Link clicked')
  }), React.createElement(GlobalNavigationBarLink, {
    label: "Audience Builder",
    onClick: linkClicked('Audience Builder Link clicked')
  })), React.createElement(GlobalNavigationBarRegion, {
    region: "tertiary"
  }, React.createElement(GlobalNavigationBarLink, {
    label: "Actions",
    onClick: linkClicked('Link clicked')
  })));
};

var getGlobalNavigationBarNoNav = function getGlobalNavigationBarNoNav(props, primaryRegionProps) {
  return React.createElement(GlobalNavigationBar, props, React.createElement(GlobalNavigationBarRegion, _extends({
    region: "primary"
  }, primaryRegionProps), React.createElement(AppLauncher, {
    onSearch: searchClicked('App Launcher searched'),
    assistiveText: "Open App Launcher",
    id: "app-launcher-trigger",
    triggerName: "App Name"
  }, React.createElement(AppLauncherSection, {
    title: "All Items"
  }, React.createElement(AppLauncherTile, {
    title: "Marketing Cloud",
    iconText: "MC",
    description: "Send emails, track emails, read emails! Emails!",
    onClick: action('Tile clicked!')
  })))));
};

storiesOf(GLOBAL_NAVIGATION_BAR, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base', function () {
  return getGlobalNavigationBar(propSets.base.props, propSets.base.primaryRegionProps);
}).add('Custom Cloud', function () {
  return getGlobalNavigationBarCustomCloud(propSets.customCloud.props, propSets.customCloud.primaryRegionProps);
}).add('Custom Cloud (Multiple active and white)', function () {
  return getGlobalNavigationBarCustomCloudOverviewActive(propSets.customCloud.props, propSets.customCloud.primaryRegionProps);
}).add('No Secondary Navigation', function () {
  return getGlobalNavigationBarNoNav(propSets.noNav.props, propSets.noNav.primaryRegionProps);
}).add('Hybrid Dropdown', function () {
  return getGlobalNavigationBar(propSets.hybrid.props, propSets.base.primaryRegionProps);
});
export default getGlobalNavigationBar;
//# sourceMappingURL=storybook-stories.js.map