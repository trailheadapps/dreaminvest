/* eslint-disable react/prop-types */

/* eslint-disable react/display-name */
import React from 'react';
import Icon from '../../../components/icon';
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
var propSets = {
  base: {
    props: {},
    primaryRegionProps: {
      appLauncher: {
        assistiveText: 'Open App Launcher',
        id: 'app-launcher-trigger',
        triggerName: 'App Name'
      }
    }
  },
  hybrid: {
    props: {
      openOn: 'hybrid'
    },
    primaryRegionProps: {
      appLauncher: {
        assistiveText: 'Open App Launcher',
        id: 'app-launcher-trigger',
        triggerName: 'App Name'
      }
    }
  },
  customCloud: {
    props: {
      cloud: 'marketing'
    },
    primaryRegionProps: {
      truncate: false,
      appLauncher: {
        assistiveText: 'Open App Launcher',
        id: 'app-launcher-trigger',
        noTruncate: true,
        triggerName: React.createElement("div", {
          className: "slds-grid slds-grid--align-spread"
        }, React.createElement("div", null, "Marketing Cloud"), React.createElement("div", null, React.createElement(Icon, {
          category: "utility",
          className: "slds-m-left--small slds-m-right--small",
          name: "email",
          size: "x-small"
        }), React.createElement("span", {
          className: "context-bar__label-action slds-text-body--regular",
          style: {
            fontWeight: 'normal'
          }
        }, "Email Studio")))
      }
    }
  },
  lightTheme: {
    props: {
      theme: 'light'
    }
  },
  noNav: {
    props: {},
    primaryRegionProps: {
      appLauncher: {
        assistiveText: 'Open App Launcher',
        id: 'app-launcher-trigger',
        triggerName: 'App Name'
      }
    }
  }
};
export { dropdownCollection, propSets };
//# sourceMappingURL=index.js.map