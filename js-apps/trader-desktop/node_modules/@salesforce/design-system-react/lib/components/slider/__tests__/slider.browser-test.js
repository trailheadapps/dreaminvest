"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _chaiEnzyme = require("chai-enzyme");

var _chaiEnzyme2 = _interopRequireDefault(_chaiEnzyme);

var _lodash = require("lodash.assign");

var _lodash2 = _interopRequireDefault(_lodash);

var _reactAddonsTestUtils = require("react-addons-test-utils");

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _enzyme = require("enzyme");

var _enzymeHelpers = require("../../../tests/enzyme-helpers");

var _slider = require("../../slider");

var _slider2 = _interopRequireDefault(_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-render-return-value */

/* Enzyme Helpers that can mount and unmount React component instances to
 * the DOM and set `this.wrapper` and `this.dom` within Mocha's `this`
 * context [full source here](tests/enzyme-helpers.js). `this` can
 * only be referenced if inside `function () {}`.
 */

/* Set Chai to use chaiEnzyme for enzyme compatible assertions:
 * https://github.com/producthunt/chai-enzyme
 */
_chai2.default.use((0, _chaiEnzyme2.default)());

var findRenderedDOMComponentWithTag = _reactAddonsTestUtils2.default.findRenderedDOMComponentWithTag,
    scryRenderedDOMComponentsWithTag = _reactAddonsTestUtils2.default.scryRenderedDOMComponentsWithTag,
    findRenderedDOMComponentWithClass = _reactAddonsTestUtils2.default.findRenderedDOMComponentWithClass;
describe('SLDSSlider', function () {
  var defaultProps = {};
  var body;
  var body2;

  var renderSlider = function renderSlider(instance) {
    body = document.createElement('div');
    document.body.appendChild(body);
    return _reactDom2.default.render(instance, body);
  };

  var renderSecondSlider = function renderSecondSlider(instance) {
    body2 = document.createElement('div');
    document.body.appendChild(body2);
    return _reactDom2.default.render(instance, body2);
  };

  function removeSlider() {
    _reactDom2.default.unmountComponentAtNode(body);

    document.body.removeChild(body);

    if (body2 && body2.firstChild) {
      _reactDom2.default.unmountComponentAtNode(body2);

      document.body.removeChild(body2);
    }
  }

  var createSlider = function createSlider(props) {
    return _react2.default.createElement(_slider2.default, (0, _lodash2.default)({}, defaultProps, props));
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
      (0, _chai.expect)(slider.getAttribute('type')).to.equal('range');
    });
    it('is wrapped in div with class "slds-form-element"', function () {
      (0, _chai.expect)(wrapper.className).to.include('slds-form-element');
    });
    it('renders label', function () {
      (0, _chai.expect)(labelText.textContent).to.equal('Slider Label');
    });
    it('renders slider element with class "slds-slider"', function () {
      (0, _chai.expect)(slider.className).to.include('slds-slider');
    });
    it('has an id', function () {
      (0, _chai.expect)(slider.getAttribute('id')).to.be.ok;
    });
    it('can pass custom id', function () {
      (0, _chai.expect)(slider.getAttribute('id')).to.equal('custom-id');
    });
    it('has associated label for tag pointing to id of slider', function () {
      var labelForTag = label.getAttribute('for');
      var sliderId = slider.getAttribute('id');
      (0, _chai.expect)(labelForTag).to.equal(sliderId);
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
      (0, _chai.expect)(slider.getAttribute('min')).to.equal('0');
    });
    it('has max', function () {
      (0, _chai.expect)(slider.getAttribute('max')).to.equal('400');
    });
    it('min/max matches label range', function () {
      (0, _chai.expect)(labelRange.textContent).to.equal('0 - 400');
    });
    it('has step', function () {
      (0, _chai.expect)(slider.getAttribute('step')).to.equal('100');
    });
    it('has value', function () {
      (0, _chai.expect)(slider.getAttribute('value')).to.equal('200');
    });
    it('value matches slider value label', function () {
      (0, _chai.expect)(slider.value).to.equal(sliderValue.textContent);
    });
  });
  describe('onInput, onChange callbacks are set', function () {
    var _this = this;

    var mountNode;
    var wrapper;
    beforeEach(function () {
      mountNode = (0, _enzymeHelpers.createMountNode)({
        context: _this
      });
    });
    afterEach(function () {
      (0, _enzymeHelpers.destroyMountNode)({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('onChange trigged callback', function (done) {
      wrapper = (0, _enzyme.mount)(_react2.default.createElement(_slider2.default, {
        defaultValue: 200,
        min: 0,
        max: 400,
        step: 100,
        onChange: function onChange(e, _ref) {
          var value = _ref.value;
          (0, _chai.expect)(value).to.equal('300');
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
      wrapper = (0, _enzyme.mount)(_react2.default.createElement(_slider2.default, {
        defaultValue: 200,
        min: 0,
        max: 400,
        step: 100,
        onInput: function onInput(e, _ref2) {
          var value = _ref2.value;
          (0, _chai.expect)(value).to.equal('300');
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
      (0, _chai.expect)(labelText.textContent).to.equal('Assistive Label');
    });
    it('label has class "slds-assistive-text"', function () {
      (0, _chai.expect)(label.className).to.include('slds-assistive-text');
    });
    it('has associated label for tag pointing to id of slider', function () {
      var labelForTag = label.getAttribute('for');
      var sliderId = slider.getAttribute('id');
      (0, _chai.expect)(labelForTag).to.equal(sliderId);
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
      (0, _chai.expect)(slider.getAttribute('disabled')).to.exist;
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
      (0, _chai.expect)(container.className).to.include('slds-size_medium');
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
      (0, _chai.expect)(slider1.getAttribute('id')).to.not.equal(slider2.getAttribute('id'));
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
      (0, _chai.expect)(wrapper.className).to.include('slds-has-error');
    });
    it('renders error message', function () {
      (0, _chai.expect)(error.textContent).to.equal('Error Message');
    });
    it('has associated aria-describedby pointing to id of error message', function () {
      var sliderDescribedBy = slider.getAttribute('aria-describedby');
      var errorId = error.getAttribute('id');
      (0, _chai.expect)(sliderDescribedBy).to.equal(errorId);
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
      (0, _chai.expect)(container.className).to.include('slds-slider_vertical');
    });
  });
});