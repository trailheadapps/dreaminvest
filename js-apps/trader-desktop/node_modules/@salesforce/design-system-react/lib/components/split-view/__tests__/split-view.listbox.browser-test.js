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
describe('SLDSSplitView - Listbox', function () {
  var component;

  var WrappedComponent = function WrappedComponent(props) {
    return _react2.default.createElement(_iconSettings2.default, {
      iconPath: "/assets/icons"
    }, _react2.default.createElement(_listbox2.default, props));
  };

  var mountComponent = function mountComponent(props) {
    return (0, _enzyme.mount)(_react2.default.createElement(WrappedComponent, props));
  };

  var expectItemFocused = function expectItemFocused(value) {
    var anchors = component.find('li > a');
    listOptions.forEach(function (item, index) {
      (0, _chai.expect)(anchors.get(index).tabIndex).to.equal(index === value ? 0 : -1);
    });
  };

  var expectItemSelected = function expectItemSelected(value) {
    var itemIndex = Array.isArray(value) ? value : [value];
    var anchors = component.find('li > a');
    listOptions.forEach(function (item, index) {
      itemIndex.includes(index) ? (0, _chai.expect)(anchors.at(index).prop('aria-selected')).to.be.true : (0, _chai.expect)(anchors.at(index).prop('aria-selected')).to.be.false;
    });
  };

  describe('When the component is mounted', function () {
    it('should focus the first selected item', function () {
      component = mountComponent({
        options: listOptions,
        selection: [listOptions[1]],
        events: {
          onSelect: _sinon2.default.spy()
        }
      });
      expectItemFocused(1);
    });
    it('should focus the first item when there is no selection', function () {
      component = mountComponent({
        options: listOptions,
        events: {
          onSelect: _sinon2.default.spy()
        }
      });
      expectItemFocused(0);
    });
  });
  describe('When a list item is selected', function () {
    describe('and single select only', function () {
      it('should focus the item that is clicked', function () {
        component = mountComponent({
          options: listOptions,
          events: {
            onSelect: function onSelect() {}
          }
        });
        component.find('li > a').at(2).simulate('click');
        expectItemFocused(2);
      });
      it('should select the item that is clicked', function () {
        component = mountComponent({
          options: listOptions,
          events: {
            onSelect: function onSelect(event, _ref) {
              var selectedItems = _ref.selectedItems;
              component.setProps({
                selection: selectedItems
              });
            }
          }
        });
        component.find('li > a').at(2).simulate('click');
        expectItemSelected(2);
      });
      describe('and using the keyboard', function () {
        beforeEach(function () {
          component = mountComponent({
            options: listOptions,
            selection: [listOptions[1]],
            events: {
              onSelect: function onSelect(event, _ref2) {
                var selectedItems = _ref2.selectedItems;
                component.setProps({
                  selection: selectedItems
                });
              }
            }
          });
        });
        describe('and "ctrl a" keyed', function () {
          it('should not select all list items', function () {
            component.find('ul').simulate('keyDown', {
              key: 'a',
              ctrlKey: true
            });
            expectItemSelected([1]);
          });
        });
        it('and arrow key up it should focus the previous item', function () {
          component.find('ul').simulate('keyDown', {
            key: 'ArrowUp'
          });
          expectItemFocused(0);
        });
        it('and arrow key down it should focus the next item', function () {
          component.find('ul').simulate('keyDown', {
            key: 'ArrowDown'
          });
          expectItemFocused(2);
        });
        it('and arrow key up it should select the previous item', function () {
          component.find('ul').simulate('keyDown', {
            key: 'ArrowUp'
          });
          expectItemSelected(0);
        });
        it('and arrow key down it should select the next item', function () {
          component.find('ul').simulate('keyDown', {
            key: 'ArrowDown'
          });
          expectItemSelected(2);
        });
      });
    });
    describe('and multiple select enabled', function () {
      beforeEach(function () {
        component = mountComponent({
          multiple: true,
          options: listOptions,
          events: {
            onSelect: function onSelect(event, _ref3) {
              var selectedItems = _ref3.selectedItems;
              component.setProps({
                selection: selectedItems
              });
            }
          }
        });
      });
      it('should select multiple items when clicked and the metaKey is pressed', function () {
        var anchors = component.find('li > a');
        anchors.at(2).simulate('click');
        anchors.at(3).simulate('click', {
          metaKey: true
        });
        expectItemSelected([2, 3]);
      });
      it('should select multiple items when clicked and the shiftKey is pressed', function () {
        var anchors = component.find('li > a');
        anchors.at(1).simulate('click');
        anchors.at(3).simulate('click', {
          shiftKey: true
        });
        expectItemSelected([1, 2, 3]);
      });
      describe('and "ctrl a" keyed', function () {
        it('should select all list items', function () {
          component.find('ul').simulate('keyDown', {
            key: 'a',
            ctrlKey: true
          });
          expectItemSelected([0, 1, 2, 3]);
        });
        it('should de-select all list items when all the list items are already selected', function () {
          component.setProps({
            selection: listOptions
          });
          component.find('ul').simulate('keyDown', {
            key: 'a',
            ctrlKey: true
          });
          expectItemSelected([]);
        });
      });
    });
  });
});