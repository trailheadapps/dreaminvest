/* eslint-disable indent, jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import createReactClass from 'create-react-class';
import { storiesOf, action } from '@storybook/react';
import { PAGE_HEADER } from '../../../utilities/constants';
import IconSettings from '../../icon-settings';
import SLDSPageHeader from '../../page-header';
import SLDSButtonStateful from '../../button-stateful';
import SLDSButtonGroup from '../../button-group';
import SLDSButton from '../../button';
import SLDSMenuDropdown from '../../menu-dropdown';
import PopoverTooltip from '../../popover-tooltip';
import ObjectHome from '../__examples__/object-home';
var recordHomeDetails1 = [{
  label: 'Field 1',
  content: 'Description that demonstrates truncation with content. Description that demonstrates truncation with content.',
  flavor: '1-of-4',
  truncate: true
}, {
  label: 'Field 2',
  content: 'Multiple Values'
}, {
  label: 'Field 3',
  content: 'Description (2-line truncation)'
}];
var recordHomeDetails2 = [{
  label: 'Field 1',
  content: 'hi',
  flavor: '1-of-4',
  truncate: true
}, {
  label: 'Field 2',
  content: 'Multiple Values'
}, {
  label: 'Field 3',
  content: 'Description (2-line truncation)'
}];
var DemoPageHeader = createReactClass({
  displayName: 'DemoPageHeader',
  getInitialState: function getInitialState() {
    return {
      recordHomeDetails: recordHomeDetails2
    };
  },
  changeDescription: function changeDescription() {
    if (this.state.recordHomeDetails[0].content === 'hi') {
      this.setState({
        recordHomeDetails: recordHomeDetails1
      });
    } else {
      this.setState({
        recordHomeDetails: recordHomeDetails2
      });
    }
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
    var defaultProps = {
      iconAssistiveText: 'User',
      iconCategory: 'standard',
      iconName: 'user',
      label: 'Record Type',
      title: 'Record Title',
      variant: 'recordHome',
      details: this.state.recordHomeDetails
    };
    return React.createElement("div", null, React.createElement(SLDSButton, {
      onClick: this.changeDescription
    }, "Change Description"), React.createElement(SLDSPageHeader, defaultProps));
  }
});

var getPageHeader = function getPageHeader(props) {
  return React.createElement(SLDSPageHeader, props);
};

var recordHomeContentRight = React.createElement("div", null, React.createElement(SLDSButtonStateful, {
  key: "PageHeaderFollowButton",
  disabled: false,
  iconSize: "medium",
  responsive: false,
  stateOne: {
    iconName: 'add',
    label: 'Follow'
  },
  stateTwo: {
    iconName: 'check',
    label: 'Following'
  },
  stateThree: {
    iconName: 'close',
    label: 'Unfollow'
  }
}), React.createElement(SLDSButtonGroup, {
  key: ""
}, React.createElement(SLDSButton, {
  label: "Edit"
}), React.createElement(SLDSButton, {
  label: "Delete"
}), React.createElement(SLDSButton, {
  label: "Clone"
}), React.createElement(SLDSMenuDropdown, {
  assistiveText: "More Options",
  buttonVariant: "icon",
  iconCategory: "utility",
  iconName: "down",
  iconVariant: "border-filled",
  onSelect: action('select'),
  openOn: "click",
  align: "right",
  options: [{
    label: 'Disable',
    value: 'A0'
  }, {
    label: 'Promote',
    value: 'C0'
  }]
})));

var customTooltip = function customTooltip() {
  var content = 'here is a super long description that will truncate and the rest of it will show in the tooltip.';
  return React.createElement(PopoverTooltip, {
    align: "top",
    content: content
  }, React.createElement("p", {
    tabIndex: "0",
    className: "slds-truncate"
  }, content));
};

var recordHomeDetails = [{
  label: 'Field 1',
  content: 'Description that demonstrates truncation with content. Description that demonstrates truncation with content.',
  flavor: '1-of-4',
  truncate: true
}, {
  label: 'Field 2',
  content: 'Multiple Values'
}, {
  label: 'Field 3',
  content: customTooltip(),
  flavor: '1-of-4'
}, {
  label: 'Field 4',
  content: 'Description (2-line truncation)'
}];
var objectHomeContentRight = React.createElement("div", null, React.createElement(SLDSButton, {
  iconCategory: "utility",
  iconName: "settings",
  variant: "icon",
  iconVariant: "more",
  className: "slds-m-left--xx-small",
  assistiveText: "Settings"
}), React.createElement(SLDSButton, {
  iconCategory: "utility",
  iconName: "table",
  variant: "icon",
  iconVariant: "more",
  className: "slds-m-left--xx-small",
  assistiveText: "Table"
}), React.createElement(SLDSButtonGroup, null, React.createElement(SLDSButton, {
  iconCategory: "utility",
  iconName: "chart",
  variant: "icon",
  iconVariant: "border",
  assistiveText: "Chart"
}), React.createElement(SLDSButton, {
  iconCategory: "utility",
  iconName: "filterList",
  variant: "icon",
  iconVariant: "border",
  className: "slds-m-left--xx-small",
  assistiveText: "Filter List"
}), React.createElement(SLDSMenuDropdown, {
  assistiveText: "Sort",
  buttonVariant: "icon",
  iconName: "sort",
  iconVariant: "more",
  onSelect: action('select'),
  openOn: "click",
  align: "right",
  options: [{
    label: 'Last Name (ascending)',
    value: 'LNA'
  }, {
    label: 'Last Name (descending)',
    value: 'LND'
  }, {
    label: 'Last Contacted (descending)',
    value: 'LCD'
  }, {
    label: 'Last Contacted (ascending)',
    value: 'LCA'
  }]
})));
var objectHomeNavRight = React.createElement(SLDSButtonGroup, null, React.createElement(SLDSButton, {
  label: "New Lead",
  variant: "neutral"
}), React.createElement(SLDSMenuDropdown, {
  align: "right",
  assistiveText: "More Options",
  iconCategory: "utility",
  iconName: "down",
  iconVariant: "border-filled",
  onSelect: action('select'),
  options: [{
    label: 'Refresh List',
    value: 'A0'
  }, {
    label: 'Duplicate Selected Leads',
    value: 'B0'
  }, {
    label: 'Disabled Selected Leads',
    value: 'C0'
  }]
}));
var relatedListContentRight = React.createElement("div", null, React.createElement(SLDSButton, {
  iconCategory: "utility",
  iconName: "table",
  variant: "icon",
  iconVariant: "more",
  className: "slds-m-left--xx-small",
  assistiveText: "Table"
}), React.createElement(SLDSButtonGroup, null, React.createElement(SLDSButton, {
  iconCategory: "utility",
  iconName: "chart",
  variant: "icon",
  iconVariant: "border",
  className: "slds-m-left--xx-small",
  assistiveText: "Chart"
}), React.createElement(SLDSButton, {
  iconCategory: "utility",
  iconName: "filterList",
  variant: "icon",
  iconVariant: "border",
  className: "slds-m-left--xx-small",
  assistiveText: "Filter List"
}), React.createElement(SLDSMenuDropdown, {
  assistiveText: "Sort",
  buttonVariant: "icon",
  iconName: "sort",
  iconVariant: "more",
  onSelect: action('select'),
  openOn: "click",
  align: "right",
  options: [{
    label: 'Last Name (ascending)',
    value: 'LNA'
  }, {
    label: 'Last Name (descending)',
    value: 'LND'
  }, {
    label: 'Last Contacted (descending)',
    value: 'LCD'
  }, {
    label: 'Last Contacted (ascending)',
    value: 'LCA'
  }]
})));
var relatedListNavRight = React.createElement(SLDSButtonGroup, null, React.createElement(SLDSButton, {
  label: "Add Contact",
  variant: "neutral"
}), React.createElement(SLDSMenuDropdown, {
  assistiveText: "More Options",
  buttonVariant: "icon",
  iconCategory: "utility",
  iconName: "down",
  iconVariant: "border-filled",
  onSelect: action('select'),
  openOn: "click",
  align: "right",
  options: [{
    label: 'Refresh List',
    value: 'A0'
  }, {
    label: 'Duplicate Selected Leads',
    value: 'B0'
  }, {
    label: 'Disabled Selected Leads',
    value: 'C0'
  }]
}));
var relatedListTrail = [React.createElement("a", {
  href: "javascript:void(0);"
}, "Accounts"), React.createElement("a", {
  href: "javascript:void(0);"
}, "Company One")];
storiesOf(PAGE_HEADER, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base', function () {
  return getPageHeader({
    iconAssistiveText: 'Opportunity',
    iconCategory: 'standard',
    iconName: 'opportunity',
    title: 'Rohde Corp - 80,000 Widgets',
    info: 'Mark Jaeckal • Unlimited Customer • 11/13/15'
  });
}).add('Record Home (truncates)', function () {
  return getPageHeader({
    iconAssistiveText: 'User',
    iconCategory: 'standard',
    iconName: 'user',
    label: 'Record Type',
    title: 'Record Title',
    variant: 'recordHome',
    contentRight: recordHomeContentRight,
    details: recordHomeDetails
  });
}).add('Object Home', function () {
  return React.createElement(ObjectHome, null);
}).add('Related List', function () {
  return getPageHeader({
    title: 'Contacts',
    variant: 'objectHome',
    info: '10 items • sorted by name',
    contentRight: relatedListContentRight,
    navRight: relatedListNavRight,
    trail: relatedListTrail
  });
}).add('Record Home (field updates)', function () {
  return React.createElement(DemoPageHeader, null);
});
//# sourceMappingURL=storybook-stories.js.map