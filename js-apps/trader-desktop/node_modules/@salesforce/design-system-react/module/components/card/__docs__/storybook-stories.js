function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';
import { storiesOf, action } from '@storybook/react';
import IconSettings from '../../icon-settings';
import { CARD } from '../../../utilities/constants';
import Button from '../../button';
import Card from '../../card';
import CardEmpty from '../../card/empty';
import CardFilter from '../../card/filter';
import DataTable from '../../data-table';
import DataTableColumn from '../../data-table/column';
import DataTableHighlightCell from '../../data-table/highlight-cell';
import Icon from '../../icon';
import MediaObject from '../../media-object';
import InlineEdit from '../../forms/input/inline';
var sampleItems = [{
  name: 'Cloudhub'
}, {
  name: 'Cloudhub + Anypoint Connectors'
}, {
  name: 'Cloud City'
}];
var DemoCard = createReactClass({
  displayName: 'DemoCard',
  propTypes: {
    items: PropTypes.array,
    header: PropTypes.node,
    heading: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
  },
  getInitialState: function getInitialState() {
    return {
      filter: null,
      items: this.props.items
    };
  },
  handleFilterChange: function handleFilterChange(event) {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    action('filter').apply(void 0, [event].concat(rest));
    var filter = event.target.value !== '' ? RegExp(event.target.value, 'i') : null;
    this.setState({
      filter: filter
    });
  },
  handleDeleteAllItems: function handleDeleteAllItems() {
    action('delete all').apply(void 0, arguments);
    this.setState({
      filter: null,
      items: []
    });
  },
  handleAddItem: function handleAddItem() {
    action('add').apply(void 0, arguments);
    this.setState({
      items: [{
        name: uniqueId('New item #')
      }].concat(_toConsumableArray(this.state.items))
    });
  },
  render: function render() {
    var _this = this;

    var items = this.state.items;

    if (this.state.filter) {
      items = items.filter(function (item) {
        return _this.state.filter.test(item.name);
      });
    }

    var isEmpty = items.length === 0;
    var heading = this.props.heading;

    if (!this.props.heading) {
      heading = items.length > 0 ? "Related Items (".concat(items.length, ")") : 'Related Items';
    }

    return React.createElement("div", {
      className: "slds-grid slds-grid--vertical"
    }, React.createElement(Card, {
      id: "ExampleCard",
      filter: !isEmpty || this.state.filter ? React.createElement(CardFilter, {
        onChange: this.handleFilterChange
      }) : null,
      header: this.props.header,
      headerActions: !isEmpty ? React.createElement(Button, {
        label: "Delete All Items",
        onClick: this.handleDeleteAllItems
      }) : React.createElement(Button, {
        label: "New",
        onClick: this.handleAddItem
      }),
      footer: "Card Footer",
      heading: heading,
      icon: React.createElement(Icon, {
        category: "standard",
        name: "document",
        size: "small"
      }),
      empty: isEmpty ? React.createElement(CardEmpty, {
        heading: "No Related Items"
      }) : null
    }, React.createElement(DataTable, {
      id: "SLDSDataTableExample-1",
      items: items,
      bordered: true
    }, React.createElement(DataTableColumn, {
      label: "Opportunity Name",
      property: "name",
      truncate: true
    }, React.createElement(DataTableHighlightCell, {
      search: this.state.filter
    })))));
  }
});

var SetHeightCard = function SetHeightCard() {
  return React.createElement(Card, {
    bodyClassName: "slds-grow slds-scrollable--y",
    className: "slds-grid slds-grid--vertical",
    footer: React.createElement("a", {
      href: "javascript:void(0);"
    }, "Footer text") // eslint-disable-line no-script-url
    ,
    heading: "Card with set height",
    icon: React.createElement(Icon, {
      category: "standard",
      name: "document",
      size: "small"
    }),
    style: {
      height: '300px'
    }
  }, React.createElement("div", {
    className: "slds-card__body--inner"
  }, React.createElement("div", null, "asdf"), React.createElement("div", null, "asdf"), React.createElement("div", null, "asdf"), React.createElement("div", null, "asdf"), React.createElement("div", null, "asdf"), React.createElement("div", null, "asdf"), React.createElement("div", null, "asdf"), React.createElement("div", null, "asdf"), React.createElement("div", null, "asdf"), React.createElement("div", null, "asdf"), React.createElement("div", null, "asdf"), React.createElement("div", null, "asdf"), React.createElement("div", null, "asdf")));
};

SetHeightCard.displayName = 'SET_HEIGHT_CARD';
storiesOf(CARD, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('w/ Items', function () {
  return React.createElement(DemoCard, {
    items: sampleItems
  });
}).add('Empty', function () {
  return React.createElement(DemoCard, {
    items: []
  });
}).add('Custom Header', function () {
  return React.createElement(DemoCard, {
    header: React.createElement(MediaObject, {
      body: React.createElement(InlineEdit, {
        className: "slds-text-heading--small slds-truncate",
        name: "inline-edit-standard",
        value: "Write your own heading",
        id: "inline-edit-standard"
      })
    }),
    items: sampleItems
  });
}).add('Custom Heading', function () {
  return React.createElement(DemoCard, {
    items: sampleItems,
    heading: React.createElement("span", {
      style: {
        color: 'red'
      }
    }, "To Wanda! This is custom!")
  });
}).add('Set height card', function () {
  return React.createElement(SetHeightCard, null);
});
//# sourceMappingURL=storybook-stories.js.map