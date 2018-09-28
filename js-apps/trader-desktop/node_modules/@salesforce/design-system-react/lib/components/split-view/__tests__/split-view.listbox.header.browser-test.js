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
    labels: {
      header: 'test header'
    },
    assistiveText: {
      sort: {
        sortedBy: 'test sort by',
        descending: 'test descending',
        ascending: 'test ascending'
      }
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
  it('should have a header', function () {
    (0, _chai.expect)(component.find('.slds-split-view__list-header')).to.have.length(1);
  });
  it('should not have a header when no label specified', function () {
    component.setProps({
      labels: {}
    });
    (0, _chai.expect)(component.find('.slds-split-view__list-header')).to.have.length(0);
  });
  it('should have test label', function () {
    (0, _chai.expect)(component.find('.slds-split-view__list-header > span > span').at(1).text()).to.equal('test header');
  });
  it('should have sort by assistive text', function () {
    (0, _chai.expect)(component.find('.slds-split-view__list-header > span > span').at(0).text()).to.equal('test sort by:');
  });
  describe('sort', function () {
    describe('direction', function () {
      it('should have a sort direction down icon', function () {
        (0, _chai.expect)(component.find('.slds-split-view__list-header svg > use').prop('xlinkHref')).to.have.string('arrowdown');
      });
      it('should have sort descending assistive text', function () {
        (0, _chai.expect)(component.find('.slds-split-view__list-header > span > span').at(2).text()).to.equal('- test descending');
      });
      it('should have a sort direction up icon', function () {
        component.setProps({
          sortDirection: _listbox.SORT_OPTIONS.UP
        });
        (0, _chai.expect)(component.find('.slds-split-view__list-header svg > use').prop('xlinkHref')).to.have.string('arrowup');
      });
      it('should have sort ascending assistive text', function () {
        component.setProps({
          sortDirection: _listbox.SORT_OPTIONS.UP
        });
        (0, _chai.expect)(component.find('.slds-split-view__list-header > span > span').at(2).text()).to.equal('- test ascending');
      });
      it('should not have a sort direction when no direction specified', function () {
        component.setProps({
          sortDirection: undefined
        });
        (0, _chai.expect)(component.find('.slds-split-view__list-header svg')).to.have.length(0);
      });
      it('should call onSort when the header is clicked', function () {
        component.find('.slds-split-view__list-header a').simulate('click');
        (0, _chai.expect)(props.events.onSort.called).to.be.true;
      });
      it('should not be clickable when onSort not specified', function () {
        component.setProps({
          events: {
            onSelect: _sinon2.default.spy()
          }
        });
        (0, _chai.expect)(component.find('.slds-split-view__list-header a')).to.be.length(0);
      });
    });
  });
});