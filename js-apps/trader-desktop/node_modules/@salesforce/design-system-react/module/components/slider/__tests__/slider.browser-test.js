/* eslint-disable react/no-render-return-value */
import React from 'react';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import assign from 'lodash.assign';
import TestUtils from 'react-addons-test-utils';
import { mount } from 'enzyme';
/* Enzyme Helpers that can mount and unmount React component instances to
 * the DOM and set `this.wrapper` and `this.dom` within Mocha's `this`
 * context [full source here](tests/enzyme-helpers.js). `this` can
 * only be referenced if inside `function () {}`.
 */

import { createMountNode, destroyMountNode } from '../../../tests/enzyme-helpers';
import Slider from '../../slider';
/* Set Chai to use chaiEnzyme for enzyme compatible assertions:
 * https://github.com/producthunt/chai-enzyme
 */

chai.use(chaiEnzyme());
var findRenderedDOMComponentWithTag = TestUtils.findRenderedDOMComponentWithTag,
    scryRenderedDOMComponentsWithTag = TestUtils.scryRenderedDOMComponentsWithTag,
    findRenderedDOMComponentWithClass = TestUtils.findRenderedDOMComponentWithClass;
describe('SLDSSlider', function () {
  var defaultProps = {};
  var body;
  var body2;

  var renderSlider = function renderSlider(instance) {
    body = document.createElement('div');
    document.body.appendChild(body);
    return ReactDOM.render(instance, body);
  };

  var renderSecondSlider = function renderSecondSlider(instance) {
    body2 = document.createElement('div');
    document.body.appendChild(body2);
    return ReactDOM.render(instance, body2);
  };

  function removeSlider() {
    ReactDOM.unmountComponentAtNode(body);
    document.body.removeChild(body);

    if (body2 && body2.firstChild) {
      ReactDOM.unmountComponentAtNode(body2);
      document.body.removeChild(body2);
    }
  }

  var createSlider = function createSlider(props) {
    return React.createElement(Slider, assign({}, defaultProps, props));
  };

  var getSlider = function getSlider(props) {
    return renderSlider(createSlider(props));
  };

  var getSecondSlider = function getSecondSlider(props) {
    return renderSecondSlider(createSlider(props));
  };

  describe('Standard Slider with Label', function () {
    var component;
    var wrapper;
    var slider;
    var label;
    var labelText;
    beforeEach(function () {
      component = getSlider({
        label: 'Slider Label',
        id: 'custom-id'
      });
      wrapper = findRenderedDOMComponentWithClass(component, 'slds-form-element');
      slider = findRenderedDOMComponentWithTag(component, 'input');
      label = findRenderedDOMComponentWithClass(component, 'slds-form-element__label');
      labelText = findRenderedDOMComponentWithClass(component, 'slds-slider-label__label');
    });
    afterEach(function () {
      removeSlider();
    });
    it('has type of "range"', function () {
      expect(slider.getAttribute('type')).to.equal('range');
    });
    it('is wrapped in div with class "slds-form-element"', function () {
      expect(wrapper.className).to.include('slds-form-element');
    });
    it('renders label', function () {
      expect(labelText.textContent).to.equal('Slider Label');
    });
    it('renders slider element with class "slds-slider"', function () {
      expect(slider.className).to.include('slds-slider');
    });
    it('has an id', function () {
      expect(slider.getAttribute('id')).to.be.ok;
    });
    it('can pass custom id', function () {
      expect(slider.getAttribute('id')).to.equal('custom-id');
    });
    it('has associated label for tag pointing to id of slider', function () {
      var labelForTag = label.getAttribute('for');
      var sliderId = slider.getAttribute('id');
      expect(labelForTag).to.equal(sliderId);
    });
  });
  describe('Component basic props', function () {
    var component;
    var slider;
    var labelRange;
    var sliderValue;
    beforeEach(function () {
      component = getSlider({
        label: 'Slider Label',
        id: 'custom-id',
        defaultValue: 200,
        min: 0,
        max: 400,
        step: 100
      });
      slider = findRenderedDOMComponentWithTag(component, 'input');
      labelRange = findRenderedDOMComponentWithClass(component, 'slds-slider-label__range');
      sliderValue = findRenderedDOMComponentWithClass(component, 'slds-slider__value');
    });
    afterEach(function () {
      removeSlider();
    });
    it('has min', function () {
      expect(slider.getAttribute('min')).to.equal('0');
    });
    it('has max', function () {
      expect(slider.getAttribute('max')).to.equal('400');
    });
    it('min/max matches label range', function () {
      expect(labelRange.textContent).to.equal('0 - 400');
    });
    it('has step', function () {
      expect(slider.getAttribute('step')).to.equal('100');
    });
    it('has value', function () {
      expect(slider.getAttribute('value')).to.equal('200');
    });
    it('value matches slider value label', function () {
      expect(slider.value).to.equal(sliderValue.textContent);
    });
  });
  describe('onInput, onChange callbacks are set', function () {
    var _this = this;

    var mountNode;
    var wrapper;
    beforeEach(function () {
      mountNode = createMountNode({
        context: _this
      });
    });
    afterEach(function () {
      destroyMountNode({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('onChange trigged callback', function (done) {
      wrapper = mount(React.createElement(Slider, {
        defaultValue: 200,
        min: 0,
        max: 400,
        step: 100,
        onChange: function onChange(e, _ref) {
          var value = _ref.value;
          expect(value).to.equal('300');
          done();
        }
      }), {
        attachTo: mountNode
      });
      var trigger = wrapper.find('input');
      trigger.simulate('change', {
        target: {
          value: '300'
        }
      });
    });
    it('onInput trigged callback', function (done) {
      wrapper = mount(React.createElement(Slider, {
        defaultValue: 200,
        min: 0,
        max: 400,
        step: 100,
        onInput: function onInput(e, _ref2) {
          var value = _ref2.value;
          expect(value).to.equal('300');
          done();
        }
      }), {
        attachTo: mountNode
      });
      var trigger = wrapper.find('input');
      trigger.simulate('input', {
        target: {
          value: '300'
        }
      });
    });
  });
  describe('Slider with Assistive Text Label', function () {
    var component;
    var slider;
    var label;
    var labelText;
    beforeEach(function () {
      component = getSlider({
        assistiveText: {
          label: 'Assistive Label'
        }
      });
      slider = findRenderedDOMComponentWithTag(component, 'input');
      label = findRenderedDOMComponentWithClass(component, 'slds-form-element__label');
      labelText = findRenderedDOMComponentWithClass(component, 'slds-slider-label__label');
    });
    afterEach(function () {
      removeSlider();
    });
    it('renders label (assitive)', function () {
      expect(labelText.textContent).to.equal('Assistive Label');
    });
    it('label has class "slds-assistive-text"', function () {
      expect(label.className).to.include('slds-assistive-text');
    });
    it('has associated label for tag pointing to id of slider', function () {
      var labelForTag = label.getAttribute('for');
      var sliderId = slider.getAttribute('id');
      expect(labelForTag).to.equal(sliderId);
    });
  });
  describe('Disabled slider', function () {
    var component;
    var slider;
    beforeEach(function () {
      component = getSlider({
        label: 'Slider Label',
        disabled: true
      });
      slider = findRenderedDOMComponentWithTag(component, 'input');
    });
    afterEach(function () {
      removeSlider();
    });
    it('slider has attribute "disabled"', function () {
      expect(slider.getAttribute('disabled')).to.exist;
    });
  });
  describe('Slider size', function () {
    var component;
    var container;
    beforeEach(function () {
      component = getSlider({
        id: 'custom-id',
        label: 'Slider Label',
        size: 'medium'
      });
      container = findRenderedDOMComponentWithClass(component, 'slds-slider');
    });
    afterEach(function () {
      removeSlider();
    });
    it('renders size class', function () {
      expect(container.className).to.include('slds-size_medium');
    });
  });
  describe('Multiple sliders', function () {
    var component1;
    var component2;
    var slider1;
    var slider2;
    beforeEach(function () {
      component1 = getSlider({
        label: 'Slider One'
      });
      component2 = getSecondSlider({
        label: 'Slider Two'
      });
      slider1 = findRenderedDOMComponentWithTag(component1, 'input');
      slider2 = findRenderedDOMComponentWithTag(component2, 'input');
    });
    afterEach(function () {
      removeSlider();
    });
    it('each slider has unique generated id', function () {
      expect(slider1.getAttribute('id')).to.not.equal(slider2.getAttribute('id'));
    });
  });
  describe('Required slider in Error State', function () {
    var component;
    var wrapper;
    var error;
    var slider;
    beforeEach(function () {
      component = getSlider({
        label: 'Slider Label',
        required: true,
        errorText: 'Error Message'
      });
      wrapper = findRenderedDOMComponentWithClass(component, 'slds-form-element');
      error = findRenderedDOMComponentWithClass(component, 'slds-form-element__help');
      slider = findRenderedDOMComponentWithTag(component, 'input');
    });
    afterEach(function () {
      removeSlider();
    });
    it('slider wrapper has class "slds-has-error"', function () {
      expect(wrapper.className).to.include('slds-has-error');
    });
    it('renders error message', function () {
      expect(error.textContent).to.equal('Error Message');
    });
    it('has associated aria-describedby pointing to id of error message', function () {
      var sliderDescribedBy = slider.getAttribute('aria-describedby');
      var errorId = error.getAttribute('id');
      expect(sliderDescribedBy).to.equal(errorId);
    });
  });
  describe('Vertical slider', function () {
    var component;
    var container;
    beforeEach(function () {
      component = getSlider({
        label: 'Slider Label',
        vertical: true
      });
      container = findRenderedDOMComponentWithClass(component, 'slds-slider');
    });
    afterEach(function () {
      removeSlider();
    });
    it('slider has class "slds-slider_vertical"', function () {
      expect(container.className).to.include('slds-slider_vertical');
    });
  });
});
//# sourceMappingURL=slider.browser-test.js.map