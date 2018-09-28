"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsTestUtils = require("react-addons-test-utils");

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _inline = require("../../../forms/input/inline");

var _inline2 = _interopRequireDefault(_inline);

var _iconSettings = require("../../../icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var should = _chai2.default.should();

var Simulate = _reactAddonsTestUtils2.default.Simulate;
describe('Inline Edit: ', function () {
  var sampleValue = 'Sample value';

  var renderInlineEdit = function renderInlineEdit(instance) {
    return function () {
      this.dom = document.createElement('div');
      document.body.appendChild(this.dom);
      this.component = _reactDom2.default.render(_react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, instance), this.dom);
    };
  };

  function removeInlineEdit() {
    _reactDom2.default.unmountComponentAtNode(this.dom);

    document.body.removeChild(this.dom);
  }

  var getWrapper = function getWrapper(dom) {
    return dom.querySelector('.slds-form-element');
  };

  var getInput = function getInput(dom) {
    return dom.querySelector('.slds-input');
  };

  var getStatic = function getStatic(dom) {
    return dom.querySelector('.slds-form-element__static');
  };

  var getTrigger = function getTrigger(dom) {
    return getStatic(dom).querySelector('.slds-button');
  };

  describe('Structure', function () {
    beforeEach(renderInlineEdit(_react2.default.createElement(_inline2.default, {
      id: "inline-edit-standard",
      value: sampleValue
    })));
    afterEach(removeInlineEdit);
    it('renders static by default', function () {
      var wrapper = getWrapper(this.dom);
      var input = getInput(this.dom);
      var staticElement = getStatic(this.dom);
      var trigger = getTrigger(this.dom);
      should.exist(wrapper);
      should.not.exist(input);
      should.exist(staticElement);
      should.exist(trigger);
    });
    it('renders the correct value', function () {
      var staticElement = getStatic(this.dom);
      var value = staticElement.textContent;
      value.should.equal('Sample valueEdit text');
    });
  }); // describe('Editable', function () {
  // 	beforeEach(renderInlineEdit(
  // 		<InlineEdit id="inline-edit-standard" value={sampleValue} />
  // 	));
  // 	afterEach(removeInlineEdit);
  // 	it('becomes editable on click', function () {
  // 		const trigger = getTrigger(this.dom);
  // 		should.exist(trigger);
  // 		Simulate.click(trigger, {});
  // 		setTimeout(() => {
  // 			const input = getInput(this.dom);
  // 			const staticElement = getStatic(this.dom);
  // 			should.exist(input);
  // 			should.not.exist(staticElement);
  // 		}, 100);
  // 	});
  // });
  // describe('Custom Handler Function', function () {
  // 	const enterEditModeHanlder = sinon.spy();
  // 	const leaveEditModeHanlder = sinon.spy();
  // 	const keyDownHandler = sinon.spy();
  // 	const keyUpHandler = sinon.spy();
  // 	beforeEach(renderInlineEdit(<InlineEdit id="inline-edit-standard" value={sampleValue} onEnterEditMode={enterEditModeHanlder} onLeaveEditMode={leaveEditModeHanlder} onKeyDown={keyDownHandler} onKeyUp={keyUpHandler} />
  // 	));
  // 	afterEach(removeInlineEdit);
  // 	it('enterEditMode and leaveEditMode handler get called', function () {
  // 		const trigger = getTrigger(this.dom);
  // 		should.exist(trigger);
  // 		Simulate.click(trigger, {});
  // 		setTimeout(() => {
  // 			const input = getInput(this.dom);
  // 			should.exist(input);
  // 			expect(enterEditModeHanlder.callCount).to.equal(1);
  // 			Simulate.keyDown(input, { key: 'Escape', keyCode: 27, which: 27 });
  // 			setTimeout(() => {
  // 				const input2 = getInput(this.dom);
  // 				should.not.exist(input2);
  // 				expect(leaveEditModeHanlder.callCount).to.equal(1);
  // 				expect(leaveEditModeHanlder).to.have.been.called.with(undefined, { cancel: true });
  // 			}, 100);
  // 		}, 100);
  // 	});
  // 	it('keyup and keydown handler get called', function () {
  // 		const trigger = getTrigger(this.dom);
  // 		should.exist(trigger);
  // 		Simulate.click(trigger, {});
  // 		setTimeout(() => {
  // 			const input = getInput(this.dom);
  // 			should.exist(input);
  // 			input.value = '1';
  // 			Simulate.change(input);
  // 			Simulate.keyDown(input, { key: 'Enter', keyCode: 13, which: 13 });
  // 			setTimeout(() => {
  // 				const input2 = getInput(this.dom);
  // 				should.not.exist(input2);
  // 				expect(keyUpHandler.callCount).to.equal(1);
  // 				expect(keyDownHandler.callCount).to.equal(1);
  // 			}, 100);
  // 		}, 100);
  // 	});
  // });
});