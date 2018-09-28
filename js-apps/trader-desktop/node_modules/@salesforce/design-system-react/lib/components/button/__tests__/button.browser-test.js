"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsTestUtils = require("react-addons-test-utils");

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _chai = require("chai");

var _lodash = require("lodash.assign");

var _lodash2 = _interopRequireDefault(_lodash);

var _button = require("../../button");

var _button2 = _interopRequireDefault(_button);

var _iconSettings = require("../../icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-render-return-value */
var Simulate = _reactAddonsTestUtils2.default.Simulate,
    findRenderedDOMComponentWithTag = _reactAddonsTestUtils2.default.findRenderedDOMComponentWithTag,
    findRenderedDOMComponentWithClass = _reactAddonsTestUtils2.default.findRenderedDOMComponentWithClass;
var mockCallback = sinon.spy();
describe('SLDSButton: ', function () {
  var body;
  var defaultProps = {
    label: 'Neutral',
    onClick: mockCallback,
    variant: 'neutral'
  };

  var renderButton = function renderButton(inst) {
    body = document.createElement('div');
    document.body.appendChild(body);
    return _reactDom2.default.render(_react2.default.createElement(_iconSettings2.default, {
      iconPath: "/assets/icons"
    }, inst), body);
  };

  function removeButton() {
    _reactDom2.default.unmountComponentAtNode(body);

    document.body.removeChild(body);
  }

  var createButton = function createButton(props) {
    return _react2.default.createElement(_button2.default, (0, _lodash2.default)({}, defaultProps, props));
  };

  var getButton = function getButton(props) {
    return renderButton(createButton(props));
  };

  describe('Basic Button Props Render', function () {
    var cmp;
    var btn;
    beforeEach(function () {
      cmp = getButton({
        id: 'custom-id',
        text: 'Brand',
        theme: 'brand'
      });
      btn = findRenderedDOMComponentWithClass(cmp, 'slds-button');
    });
    afterEach(function () {
      removeButton(btn);
    });
    it('renders correct label', function () {
      (0, _chai.expect)(btn.textContent).to.equal('Neutral');
    });
    it('renders correct variant styles', function () {
      (0, _chai.expect)(btn.className).to.include('slds-button--neutral');
    });
    it('renders custom id', function () {
      (0, _chai.expect)(btn.getAttribute('id')).to.equal('custom-id');
    });
  });
  describe('Icon with Label Button Props Render', function () {
    var cmp;
    var btn;
    var svg;
    beforeEach(function () {
      cmp = getButton({
        label: 'Neutral with Icon',
        iconName: 'download',
        iconCategory: 'action',
        iconPosition: 'right',
        variant: 'neutral'
      });
      btn = findRenderedDOMComponentWithClass(cmp, 'slds-button');
      svg = findRenderedDOMComponentWithClass(cmp, 'slds-button__icon');
    });
    afterEach(function () {
      removeButton(btn);
    });
    it('renders label', function () {
      (0, _chai.expect)(btn.textContent).to.equal('Neutral with Icon');
    });
    it('renders icon', function () {
      (0, _chai.expect)(svg.className.baseVal).to.include('slds-button__icon--right');
    });
  });
  describe('Icon Button Props render', function () {
    var cmp;
    var btn;
    var asstText;
    var svg;
    beforeEach(function () {
      cmp = getButton({
        assistiveText: 'my settings',
        variant: 'icon',
        iconCategory: 'utility',
        iconName: 'settings',
        iconSize: 'small',
        iconVariant: 'bare'
      });
      btn = findRenderedDOMComponentWithClass(cmp, 'slds-button');
      asstText = findRenderedDOMComponentWithClass(cmp, 'slds-assistive-text');
      svg = findRenderedDOMComponentWithTag(cmp, 'svg');
    });
    afterEach(function () {
      removeButton(btn);
    });
    it('renders label', function () {
      (0, _chai.expect)(asstText.textContent).to.equal('my settings');
    });
    it('renders icon styles', function () {
      (0, _chai.expect)(svg.className.baseVal).to.include('slds-button__icon');
    });
  });
  describe('(icon path) Icon Button renders assistive text', function () {
    var cmp;
    var btn;
    var asstText;
    beforeEach(function () {
      cmp = getButton({
        assistiveText: 'News',
        iconSize: 'large',
        iconPath: '/assets/icons/utility-sprite/svg/symbols.svg#announcement',
        title: 'announcement'
      });
      btn = findRenderedDOMComponentWithClass(cmp, 'slds-button');
      asstText = findRenderedDOMComponentWithClass(cmp, 'slds-assistive-text');
    });
    afterEach(function () {
      removeButton(btn);
    });
    it('renders label', function () {
      (0, _chai.expect)(asstText.textContent).to.equal('News');
    });
  });
  describe('External Path Icon Button renders', function () {
    var cmp;
    var use;
    var svgHref;
    before(function () {
      cmp = getButton({
        assistiveText: 'announcement',
        variant: 'icon',
        iconPath: '/assets/icons/utility-sprite/svg/symbols.svg#announcement',
        iconSize: 'large',
        iconVariant: 'bare'
      });
      use = findRenderedDOMComponentWithTag(cmp, 'use');
      svgHref = use.getAttribute('xlink:href');
    });
    it('renders svg', function () {
      (0, _chai.expect)(svgHref).to.equal('/assets/icons/utility-sprite/svg/symbols.svg#announcement');
    });
  });
  describe('Button Clickable', function () {
    var cmp;
    var btn;
    var clicked;

    function setClick() {
      clicked = true;
    }

    beforeEach(function () {
      clicked = false;
      cmp = getButton({
        label: 'Neutral',
        variant: 'neutral',
        onClick: setClick
      });
      btn = findRenderedDOMComponentWithClass(cmp, 'slds-button');
    });
    afterEach(function () {
      removeButton(btn);
    });
    it('can be clicked', function () {
      /* eslint-disable no-unused-expressions */
      (0, _chai.expect)(clicked).to.be.false;
      Simulate.click(btn, {});
      (0, _chai.expect)(clicked).to.be.true;
      /* eslint-enable no-unused-expressions */
    });
  });
});