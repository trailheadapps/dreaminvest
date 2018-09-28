"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _lodash = require("lodash.assign");

var _lodash2 = _interopRequireDefault(_lodash);

var _reactAddonsTestUtils = require("react-addons-test-utils");

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _iconSettings = require("../../icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

var _tile = require("../../app-launcher/tile");

var _tile2 = _interopRequireDefault(_tile);

var _section = require("../../app-launcher/section");

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;

var should = _chai2.default.should();

var Simulate = _reactAddonsTestUtils2.default.Simulate;
describe('SLDS APP LAUNCHER SECTION *******************************************', function () {
  var handles = {
    section: null
  };
  var defaultSectionProps = {
    title: 'All Items'
  };
  var defaultChildren = [_react2.default.createElement(_tile2.default, {
    key: "asdf",
    title: "Marketing Cloud"
  }), _react2.default.createElement(_tile2.default, {
    key: "qwer",
    title: "Support Cloud"
  })];

  var createSection = function createSection(props, children) {
    return _react2.default.createElement(_section2.default, (0, _lodash2.default)({}, defaultSectionProps, props), children);
  };

  function mountSection(props) {
    var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultChildren;
    handles.section = (0, _enzyme.mount)(_react2.default.createElement(_iconSettings2.default, {
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
      mountSection({}, _react2.default.createElement(_tile2.default, {
        size: "small",
        title: "Marketing Clout"
      }));
    });
    it('renders li with proper classes for small tiles', function () {
      should.exist(handles.section.find('.slds-col--padded .slds-grow-none .slds-size--xx-small'));
    });
  });
});