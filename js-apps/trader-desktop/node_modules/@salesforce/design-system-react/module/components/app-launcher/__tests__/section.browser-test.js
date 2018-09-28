import React from 'react';
import { mount } from 'enzyme';
import chai from 'chai';
import assign from 'lodash.assign';
import TestUtils from 'react-addons-test-utils';
import IconSettings from '../../icon-settings';
import AppLauncherTile from '../../app-launcher/tile';
import AppLauncherSection from '../../app-launcher/section';
var expect = chai.expect;
var should = chai.should();
var Simulate = TestUtils.Simulate;
describe('SLDS APP LAUNCHER SECTION *******************************************', function () {
  var handles = {
    section: null
  };
  var defaultSectionProps = {
    title: 'All Items'
  };
  var defaultChildren = [React.createElement(AppLauncherTile, {
    key: "asdf",
    title: "Marketing Cloud"
  }), React.createElement(AppLauncherTile, {
    key: "qwer",
    title: "Support Cloud"
  })];

  var createSection = function createSection(props, children) {
    return React.createElement(AppLauncherSection, assign({}, defaultSectionProps, props), children);
  };

  function mountSection(props) {
    var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultChildren;
    handles.section = mount(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, createSection(props, children)));
  }

  describe('App Launcher Section (toggleable)', function () {
    var onToggleClick;
    beforeEach(function () {
      onToggleClick = sinon.spy();
      mountSection({
        collapseSectionAssistiveText: 'Collapse Section',
        onToggleClick: onToggleClick,
        title: 'ALL THE ITEMS!',
        toggleable: true
      });
    });
    it('modal section exists', function () {
      should.exist(handles.section);
    });
    it('modal section has "slds-is-open" class when open', function () {
      expect(handles.section.find('.slds-section').node.className).to.include('slds-is-open');
    });
    it('section has a title', function () {
      should.exist(handles.section.find('.slds-section__title'));
    });
    it('ul has proper classes', function () {
      should.exist(handles.section.find('ul.slds-grid.slds-grid--pull-padded.slds-wrap'));
    });
    it('li exists', function () {
      expect(handles.section.find('li').length).to.equal(2);
    });
    it('renders li with proper classes', function () {
      expect(handles.section.find('li').at(0).node.className).to.include('slds-col--padded slds-grow-none slds-size--1-of-1 slds-medium-size--1-of-3');
    });
    it('renders custom section title', function () {
      expect(handles.section.find('h3').text()).to.equal('ALL THE ITEMS!');
    });
    it('renders custom toggle assistve text', function () {
      expect(handles.section.find('.slds-assistive-text').text()).to.equal('Collapse Section');
    });
    it('toggling section fires callback', function () {
      Simulate.click(handles.section.find('.slds-button').node);
      expect(onToggleClick.calledOnce).to.be.true; // eslint-disable-line no-unused-expressions
    });
  });
  describe('App Launcher Section (not toggleable)', function () {
    beforeEach(function () {
      mountSection();
    });
    it('does not render toggle if toggleable is false', function () {
      should.not.exist(handles.section.find('.slds-button .slds-button--icon .slds-m-right--small'));
    });
  });
  describe('App Launcher Section (closed)', function () {
    beforeEach(function () {
      mountSection({
        toggleable: true,
        isOpen: false
      });
    });
    it('modal section has "slds-is-close" class when closed', function () {
      should.exist(handles.section.find('.slds-is-close'));
    });
  });
  describe('App Launcher Section (small)', function () {
    beforeEach(function () {
      mountSection({}, React.createElement(AppLauncherTile, {
        size: "small",
        title: "Marketing Clout"
      }));
    });
    it('renders li with proper classes for small tiles', function () {
      should.exist(handles.section.find('.slds-col--padded .slds-grow-none .slds-size--xx-small'));
    });
  });
});
//# sourceMappingURL=section.browser-test.js.map