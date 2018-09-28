/* eslint-disable react/no-render-return-value */
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import assign from 'lodash.assign';
import SLDSButton from '../../button';
import IconSettings from '../../icon-settings';
var Simulate = TestUtils.Simulate,
    findRenderedDOMComponentWithTag = TestUtils.findRenderedDOMComponentWithTag,
    findRenderedDOMComponentWithClass = TestUtils.findRenderedDOMComponentWithClass;
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
    return ReactDOM.render(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, inst), body);
  };

  function removeButton() {
    ReactDOM.unmountComponentAtNode(body);
    document.body.removeChild(body);
  }

  var createButton = function createButton(props) {
    return React.createElement(SLDSButton, assign({}, defaultProps, props));
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
      expect(btn.textContent).to.equal('Neutral');
    });
    it('renders correct variant styles', function () {
      expect(btn.className).to.include('slds-button--neutral');
    });
    it('renders custom id', function () {
      expect(btn.getAttribute('id')).to.equal('custom-id');
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
      expect(btn.textContent).to.equal('Neutral with Icon');
    });
    it('renders icon', function () {
      expect(svg.className.baseVal).to.include('slds-button__icon--right');
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
      expect(asstText.textContent).to.equal('my settings');
    });
    it('renders icon styles', function () {
      expect(svg.className.baseVal).to.include('slds-button__icon');
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
      expect(asstText.textContent).to.equal('News');
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
      expect(svgHref).to.equal('/assets/icons/utility-sprite/svg/symbols.svg#announcement');
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
      expect(clicked).to.be.false;
      Simulate.click(btn, {});
      expect(clicked).to.be.true;
      /* eslint-enable no-unused-expressions */
    });
  });
});
//# sourceMappingURL=button.browser-test.js.map