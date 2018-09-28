function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import createReactClass from 'create-react-class';
import { storiesOf, action } from '@storybook/react';
import IconSettings from '../../icon-settings';
import { LOOKUP } from '../../../utilities/constants';
import Lookup from '../../lookup';
import Header from '../../lookup/header';
import Footer from '../../lookup/footer';
import SLDSButton from '../../button';
var DemoLookup = createReactClass({
  displayName: 'DemoLookup',
  getInitialState: function getInitialState() {
    return {
      options: [{
        label: 'File 1'
      }, {
        label: 'File 2'
      }, {
        label: 'File 3'
      }, {
        label: 'File 4'
      }]
    };
  },
  clearSelected: function clearSelected() {
    this.setState({
      currentSelected: -1
    });
  },
  handleSelect: function handleSelect(selectedItem) {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    action('select').apply(void 0, [selectedItem].concat(rest));
    this.setState({
      currentSelected: this.state.options.indexOf(selectedItem)
    });
  },
  render: function render() {
    return React.createElement("div", null, React.createElement("div", null, React.createElement(SLDSButton, {
      onClick: this.clearSelected
    }, "Clear Selected")), React.createElement(Lookup, _extends({}, this.props, {
      onChange: action('change'),
      onSelect: this.handleSelect,
      options: this.state.options,
      selectedItem: this.state.currentSelected
    })));
  }
});
var DemoLookupAccounts = createReactClass({
  displayName: 'DemoLookupAccounts',
  getInitialState: function getInitialState() {
    return {
      options: [{
        label: "Paddy's Pub",
        subTitle: 'Boston, MA'
      }, {
        label: 'Tyrell Corp',
        subTitle: 'San Francisco, CA'
      }, {
        label: 'Paper St. Soap Company',
        subTitle: 'Beloit, WI'
      }, {
        label: 'Nakatomi Investments',
        subTitle: 'Chicago, IL'
      }, {
        label: 'Acme Landscaping'
      }, {
        label: 'Acme Construction',
        subTitle: 'Grand Marais, MN'
      }]
    };
  },
  handleSelect: function handleSelect(selectedItem) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      rest[_key2 - 1] = arguments[_key2];
    }

    action('select').apply(void 0, [selectedItem].concat(rest));
    this.setState({
      selectedItem: selectedItem
    });
  },
  render: function render() {
    return React.createElement(Lookup, _extends({}, this.props, {
      footerRenderer: Footer,
      headerRenderer: Header,
      onChange: action('change'),
      onSelect: this.handleSelect,
      options: this.state.options
    }));
  }
});
storiesOf(LOOKUP, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Standard', function () {
  return React.createElement(DemoLookup, {
    emptyMessage: "No Files found",
    hasError: false,
    iconCategory: "utility",
    iconName: "open_folder",
    isInline: true,
    label: "Files"
  });
}).add('Disabled', function () {
  return React.createElement(DemoLookup, {
    disabled: true
  });
}).add('Standard with Accounts', function () {
  return React.createElement(DemoLookupAccounts, {
    emptyMessage: "No Accounts found",
    hasError: false,
    iconCategory: "standard",
    iconName: "account",
    isInline: true,
    label: "Account"
  });
}).add('Custom Empty Message Content', function () {
  return React.createElement(DemoLookup, {
    emptyMessage: React.createElement("span", null, "No matches."),
    isInline: true
  });
});
//# sourceMappingURL=storybook-stories.js.map