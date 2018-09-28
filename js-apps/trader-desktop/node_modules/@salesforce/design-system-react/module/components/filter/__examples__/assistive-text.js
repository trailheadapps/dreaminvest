function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import IconSettings from "../../../../components/icon-settings";
import Panel from "../../../../components/panel"; // `~` is replaced with design-system-react at runtime

import FilterGroup from "../../../../components/panel/filtering/group";
import FilterList from "../../../../components/panel/filtering/list";
import FilterListHeading from "../../../../components/panel/filtering/list-heading";
import Filter from "../../../../components/filter";
import Combobox from "../../../../components/combobox";
var options = {
  'show-me': [{
    id: 1,
    label: 'All Products',
    value: 'all-products'
  }, {
    id: 2,
    label: 'All Wackamoles',
    value: 'all-Wackamoles'
  }]
};
var Example = createReactClass({
  displayName: 'FilterExample',
  propTypes: function propTypes() {
    return {
      align: PropTypes.string
    };
  },
  getInitialState: function getInitialState() {
    return {
      'show-me': {
        selectedItem: options['show-me'][0],
        isActive: true,
        comboboxSelection: [options['show-me'][0]]
      }
    };
  },
  onChangePredicate: function onChangePredicate(event, _ref) {
    var id = _ref.id;
    var idSuffix = id.split('sample-panel-filtering-')[1];
    this.setState(_defineProperty({}, idSuffix, _objectSpread({}, this.state[idSuffix], {
      selectedItem: this.state[idSuffix].comboboxSelection[0]
    })));
  },
  onRemove: function onRemove(event, _ref2) {
    var id = _ref2.id;
    var idSuffix = id.split('sample-panel-filtering-')[1];
    this.setState(_defineProperty({}, idSuffix, _objectSpread({}, this.state[idSuffix], {
      isActive: false
    })));
  },
  render: function render() {
    var _this = this;

    return this.state['show-me'].isActive && React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(Filter, _extends({
      assistiveText: {
        editFilter: 'editFilter-TEST',
        editFilterHeading: 'editFilterHeading-TEST',
        removeFilter: 'removeFilter-TEST'
      },
      align: this.props.align,
      id: "sample-panel-filtering-show-me",
      onChange: this.onChangePredicate,
      onRemove: this.onRemove,
      property: "Show Me",
      predicate: this.state['show-me'].selectedItem.label
    }, this.props), React.createElement(Combobox, {
      events: {
        onSelect: function onSelect(event, data) {
          _this.setState({
            'show-me': _objectSpread({}, _this.state['show-me'], {
              comboboxSelection: data.selection
            })
          });
        }
      },
      labels: {
        label: 'Show Me',
        placeholder: 'Select record type'
      },
      menuPosition: "relative",
      options: options['show-me'],
      selection: this.state['show-me'].comboboxSelection,
      variant: "readonly"
    })));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=assistive-text.js.map