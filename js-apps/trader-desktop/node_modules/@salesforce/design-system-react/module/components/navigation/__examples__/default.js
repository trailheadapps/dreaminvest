function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* eslint-disable no-console, react/prop-types */
import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from "../../../../components/icon-settings";
import Navigation from "../../../../components/navigation";
var sampleReportCategories = [{
  id: 'reports',
  label: 'Reports',
  items: [{
    id: 'recent_reports',
    label: 'Recent'
  }, {
    id: 'my_reports',
    label: 'Created by Me'
  }, {
    id: 'private_reports',
    label: 'Private Reports'
  }, {
    id: 'public_reports',
    label: 'Public Reports'
  }, {
    id: 'all_reports',
    label: 'All Reports'
  }]
}, {
  id: 'folders',
  label: 'Folders',
  items: [{
    id: 'my_folders',
    label: 'Created by Me'
  }, {
    id: 'shared_folders',
    label: 'Shared with Me'
  }, {
    id: 'all_folders',
    label: 'All Folders'
  }]
}];
var Example = createReactClass({
  displayName: 'NavigationExample',
  getInitialState: function getInitialState() {
    return {
      selectedId: 'recent_reports'
    };
  },
  render: function render() {
    var _this = this;

    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", {
      style: {
        width: '320px'
      }
    }, React.createElement(Navigation, {
      id: "sample-navigation",
      categories: sampleReportCategories,
      selectedId: this.state.selectedId,
      onSelect: function onSelect(event, data) {
        _this.setState({
          selectedId: data.item.id
        });

        if (_this.props.action) {
          var dataAsArray = Object.keys(data).map(function (key) {
            return data[key];
          });

          _this.props.action('onSelect').apply(void 0, [event, data].concat(_toConsumableArray(dataAsArray)));
        } else if (console) {
          console.log('[onSelect] (event, data)', event, data);
        }
      }
    })));
  }
});
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=default.js.map