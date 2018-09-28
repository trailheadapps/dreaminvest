import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, render } from 'enzyme';
import sinon from 'sinon';
import IconSettings from '../../../components/icon-settings';
import SplitViewListbox from '../../../components/split-view/listbox';
chai.use(chaiEnzyme());
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
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(SplitViewListbox, props));
  };

  var mountComponent = function mountComponent(props) {
    return mount(React.createElement(WrappedComponent, props));
  };

  var expectItemFocused = function expectItemFocused(value) {
    var anchors = component.find('li > a');
    listOptions.forEach(function (item, index) {
      expect(anchors.get(index).tabIndex).to.equal(index === value ? 0 : -1);
    });
  };

  var expectItemSelected = function expectItemSelected(value) {
    var itemIndex = Array.isArray(value) ? value : [value];
    var anchors = component.find('li > a');
    listOptions.forEach(function (item, index) {
      itemIndex.includes(index) ? expect(anchors.at(index).prop('aria-selected')).to.be.true : expect(anchors.at(index).prop('aria-selected')).to.be.false;
    });
  };

  describe('When the component is mounted', function () {
    it('should focus the first selected item', function () {
      component = mountComponent({
        options: listOptions,
        selection: [listOptions[1]],
        events: {
          onSelect: sinon.spy()
        }
      });
      expectItemFocused(1);
    });
    it('should focus the first item when there is no selection', function () {
      component = mountComponent({
        options: listOptions,
        events: {
          onSelect: sinon.spy()
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
//# sourceMappingURL=split-view.listbox.browser-test.js.map