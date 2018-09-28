/* eslint-disable indent */

/* eslint-disable react/display-name */
import React from 'react';
import createReactClass from 'create-react-class';
import { storiesOf, action } from '@storybook/react';
import IconSettings from '../../icon-settings';
import { MENU_PICKLIST } from '../../../utilities/constants';
import Picklist from '../../menu-picklist';
var options = [{
  label: 'An option that is Super Super Long',
  value: 'A0'
}, {
  label: 'Another option',
  value: 'B0'
}, {
  label: 'C Option',
  value: 'C0'
}, {
  label: 'D Option',
  value: 'D0'
}, {
  label: 'E Option',
  value: 'E0'
}, {
  label: 'A1 Option',
  value: 'A1'
}, {
  label: 'B2 Option',
  value: 'B1'
}, {
  label: 'C2 Option',
  value: 'C1'
}, {
  label: 'D2 Option',
  value: 'D1'
}, {
  label: 'E2 Option Super Super Long',
  value: 'E1'
}];

var getPicklist = function getPicklist(props) {
  return React.createElement("div", null, React.createElement(Picklist, props), React.createElement("button", {
    style: {
      padding: '10px',
      margin: '50px'
    }
  }, "test"));
};

var MultipleExample = createReactClass({
  displayName: 'MultiplePicklistExample',
  getInitialState: function getInitialState() {
    return {
      selectedIndexes: new Set()
    };
  },
  handleSelect: function handleSelect(selectedItem, data) {
    this.setState(function (prevState, props) {
      return {
        selectedItems: prevState.selectedIndexes.has(data.optionIndex) ? Array.from(prevState.selectedIndexes.delete(data.optionIndex)) : Array.from(prevState.selectedIndexes.add(data.optionIndex))
      };
    });
  },
  render: function render() {
    var _this = this;

    console.log(this.state.selectedIndexes);
    return React.createElement(Picklist, {
      label: "Contacts",
      labels: {
        multipleOptionsSelected: "".concat(this.state.selectedIndexes.size, " Contacts Selected")
      },
      multiple: true,
      onSelect: this.handleSelect,
      options: options,
      onPillRemove: function onPillRemove(removedItem, data) {
        console.log("data.option.label: '".concat(data.option.label, "' data.option.value: '").concat(data.option.value, "'"));

        _this.handleSelect(removedItem, data);
      }
    });
  }
});
storiesOf(MENU_PICKLIST, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Modal', function () {
  return getPicklist({
    label: 'Contacts',
    placeholder: 'Select a contact',
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    options: options
  });
}).add('Non-modal', function () {
  return getPicklist({
    label: 'Contacts',
    isInline: true,
    onClick: function onClick(event) {
      console.log('clicked', event.target);
    },
    placeholder: 'Select a contact',
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    options: options
  });
}).add('Error state', function () {
  return getPicklist({
    errorText: 'This field is required',
    label: 'Contacts',
    placeholder: 'Select a contact',
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    options: options,
    required: true
  });
}).add('Multiselect', function () {
  return React.createElement(MultipleExample, null);
});
//# sourceMappingURL=storybook-stories.js.map