/* eslint-disable react/no-render-return-value */
import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import assign from 'lodash.assign';
import TestUtils from 'react-addons-test-utils';
import Textarea from '../';
var findRenderedDOMComponentWithTag = TestUtils.findRenderedDOMComponentWithTag,
    scryRenderedDOMComponentsWithTag = TestUtils.scryRenderedDOMComponentsWithTag,
    findRenderedDOMComponentWithClass = TestUtils.findRenderedDOMComponentWithClass;
describe('SLDS TEXTAREA **************************************************', function () {
  var defaultProps = {
    placeholder: 'Placeholder Text'
  };
  var body;

  var renderTextarea = function renderTextarea(instance) {
    body = document.createElement('div');
    document.body.appendChild(body);
    return ReactDOM.render(instance, body);
  };

  function removeTextarea() {
    ReactDOM.unmountComponentAtNode(body);
    document.body.removeChild(body);
  }

  var createTextarea = function createTextarea(props) {
    return React.createElement(Textarea, assign({}, defaultProps, props));
  };

  var getTextarea = function getTextarea(props) {
    return renderTextarea(createTextarea(props));
  };

  describe('Standard Textarea with Label', function () {
    var component;
    var wrapper;
    var textarea;
    var label;
    beforeEach(function () {
      component = getTextarea({
        label: 'Textarea Label',
        id: 'custom-id'
      });
      wrapper = findRenderedDOMComponentWithClass(component, 'slds-form-element');
      textarea = findRenderedDOMComponentWithTag(component, 'textarea');
      label = findRenderedDOMComponentWithClass(component, 'slds-form-element__label');
    });
    afterEach(function () {
      removeTextarea();
    });
    it('is wrapped in div with class "slds-form-element"', function () {
      expect(wrapper.className).to.include('slds-form-element');
    });
    it('renders label', function () {
      expect(label.textContent).to.equal('Textarea Label');
    });
    it('renders textarea element with class "slds-textarea"', function () {
      expect(textarea.className).to.include('slds-textarea');
    });
    it('has an id', function () {
      expect(textarea.getAttribute('id')).to.be.ok;
    });
    it('can pass custom id', function () {
      expect(textarea.getAttribute('id')).to.equal('custom-id');
    });
    it('renders placeholder text', function () {
      expect(textarea.getAttribute('placeholder')).to.equal('Placeholder Text');
    });
  });
  describe('Textarea without Label', function () {
    var component;
    var label;
    beforeEach(function () {
      component = getTextarea({
        assistiveText: 'Assistive Label'
      });
      label = findRenderedDOMComponentWithClass(component, 'slds-form-element__label');
    });
    afterEach(function () {
      removeTextarea();
    });
    it('renders label (assitive)', function () {
      expect(label.textContent).to.equal('Assistive Label');
    });
    it('label has class "slds-assistive-text"', function () {
      expect(label.className).to.include('slds-assistive-text');
    });
  });
  describe('Multiple Textareas', function () {
    var component1;
    var component2;
    var textarea1;
    var textarea2;
    beforeEach(function () {
      component1 = getTextarea({
        label: 'Textarea One'
      });
      component2 = getTextarea({
        label: 'Textarea Two'
      });
      textarea1 = findRenderedDOMComponentWithTag(component1, 'textarea');
      textarea2 = findRenderedDOMComponentWithTag(component2, 'textarea');
    });
    afterEach(function () {
      removeTextarea();
    });
    it('each textarea has unique generated id', function () {
      expect(textarea1.getAttribute('id')).to.not.equal(textarea2.getAttribute('id'));
    });
  });
  describe('Required Textarea in Error State', function () {
    var component;
    var wrapper;
    var error;
    beforeEach(function () {
      component = getTextarea({
        label: 'Textarea Label',
        required: true,
        errorText: 'Error Message'
      });
      wrapper = findRenderedDOMComponentWithClass(component, 'slds-form-element');
      error = findRenderedDOMComponentWithClass(component, 'slds-form-element__help');
    });
    afterEach(function () {
      removeTextarea();
    });
    it('textarea wrapper contains an <abbr> that has class "slds-required"', function () {
      expect(findRenderedDOMComponentWithTag(component, 'abbr').className).to.include('slds-required');
    });
    it('textarea wrapper has class "slds-has-error"', function () {
      expect(wrapper.className).to.include('slds-has-error');
    });
    it('renders error message', function () {
      expect(error.textContent).to.equal('Error Message');
    });
  });
});
//# sourceMappingURL=textarea.browser-test.js.map