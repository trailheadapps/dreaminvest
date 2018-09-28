"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _chaiEnzyme = require("chai-enzyme");

var _chaiEnzyme2 = _interopRequireDefault(_chaiEnzyme);

var _enzyme = require("enzyme");

var _sinon = require("sinon");

var _sinon2 = _interopRequireDefault(_sinon);

var _iconSettings = require("../../../components/icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

var _listbox = require("../../../components/split-view/listbox");

var _listbox2 = _interopRequireDefault(_listbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use((0, _chaiEnzyme2.default)());

var listOptions = [{
  id: 'option1',
  label: 'Riley Shultz',
  topRightText: '99',
  bottomLeftText: 'Biotech, Inc.',
  bottomRightText: 'Nurturing'
}, {
  id: 'option2',
  label: 'Jason A. - VP of Sales',
  topRightText: '92',
  bottomLeftText: 'Case Management Solutions',
  bottomRightText: 'Contacted'
}, {
  id: 'option3',
  label: 'Josh Smith',
  topRightText: '90',
  bottomLeftText: 'Acme, Inc.',
  bottomRightText: 'Contacted'
}, {
  id: 'option4',
  label: 'Bobby Tree',
  topRightText: '89',
  bottomLeftText: 'Salesforce, Inc.',
  bottomRightText: 'Closing'
}];
describe('SLDSSplitView - Listbox header', function () {
  var component;

  var WrappedComponent = function WrappedComponent(props) {
    return _react2.default.createElement(_iconSettings2.default, {
      iconPath: "/assets/icons"
    }, _react2.default.createElement(_listbox2.default, props));
  };

  var mountComponent = function mountComponent(props) {
    return (0, _enzyme.mount)(_react2.default.createElement(WrappedComponent, props));
  };

  var props = {
    options: listOptions,
    unread: [listOptions[1], listOptions[3]],
    labels: {
      header: 'test header'
    },
    assistiveText: {
      sort: {
        sortedBy: 'test sort by',
        descending: 'test descending',
        ascending: 'test ascending'
      },
      unreadItem: 'test unread'
    },
    sortDirection: _listbox.SORT_OPTIONS.DOWN,
    events: {
      onSort: _sinon2.default.spy(),
      onSelect: function onSelect(event, _ref) {
        var selectedItems = _ref.selectedItems;
        component.setProps({
          selection: selectedItems
        });
      }
    }
  };
  beforeEach(function () {
    component = mountComponent(props);
  });
  it('should have unread', function () {
    (0, _chai.expect)(component.find('li').at(0).prop('className')).to.not.contain('slds-is-unread');
    (0, _chai.expect)(component.find('li').at(1).prop('className')).to.contain('slds-is-unread');
    (0, _chai.expect)(component.find('li').at(2).prop('className')).to.not.contain('slds-is-unread');
    (0, _chai.expect)(component.find('li').at(3).prop('className')).to.contain('slds-is-unread');
    (0, _chai.expect)(component.find('.slds-indicator_unread')).to.have.length(2);
  });
  it('should have unread assistive text', function () {
    (0, _chai.expect)(component.find('.slds-indicator_unread').at(0).prop('title')).to.equal('test unread');
    (0, _chai.expect)(component.find('.slds-indicator_unread').at(1).prop('title')).to.equal('test unread');
    (0, _chai.expect)(component.find('.slds-indicator_unread').at(0).prop('aria-label')).to.equal('test unread');
    (0, _chai.expect)(component.find('.slds-indicator_unread').at(1).prop('aria-label')).to.equal('test unread');
  });
});