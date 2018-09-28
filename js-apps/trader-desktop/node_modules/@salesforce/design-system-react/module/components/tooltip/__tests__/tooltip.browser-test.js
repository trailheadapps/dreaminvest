function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/no-render-return-value */
import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import SLDSPopoverTooltip from '../../popover-tooltip';
import SLDSButton from '../../button';
var Simulate = TestUtils.Simulate,
    findRenderedDOMComponentWithTag = TestUtils.findRenderedDOMComponentWithTag,
    findRenderedDOMComponentWithClass = TestUtils.findRenderedDOMComponentWithClass;
describe('SLDSTooltip: ', function () {
  var _this = this;

  var body;
  var defaultTrigger = React.createElement(SLDSButton, {
    label: "Hover me for tooltip"
  });
  var defaultTextContent = 'This is more info. blah blah.';
  var defaultProps = {
    content: React.createElement("span", {
      className: "tooltip-content",
      style: {
        width: 30
      }
    }, defaultTextContent),
    hasStaticAlignment: true,
    id: 'myTooltip123'
  };
  afterEach(function () {
    try {
      Array.prototype.forEach.call(document.body.querySelectorAll('.drop'), function (component) {
        return document.body.removeChild(component);
      });

      if (body) {
        document.body.removeChild(body);
      }
    } catch (e) {
      /* empty */
    }
  });

  var createBody = function createBody() {
    var target = document.createElement('h1');
    target.textContent = 'Tooltip Tip Target';
    body = document.createElement('div');
    body.style.height = '300px';
    body.style.width = '300px';
    body.appendChild(target);
    document.body.appendChild(body);
  };

  var renderTooltip = function renderTooltip(inst) {
    return ReactDOM.render(inst, body);
  };

  var createTooltip = function createTooltip(props, kids) {
    return React.createElement(SLDSPopoverTooltip, props, kids);
  };

  var generateTooltip = function generateTooltip(props, kids) {
    return renderTooltip(createTooltip(props, kids));
  };

  var getTip = function getTip(dom) {
    return dom.querySelector('.slds-popover--tooltip');
  };

  describe('component basic props render', function () {
    var rootNode;
    beforeEach(function () {
      createBody();
      rootNode = generateTooltip(_objectSpread({}, defaultProps, {
        align: 'top'
      }), defaultTrigger);
    });
    it('is not open', function () {
      expect(getTip(document.body)).to.equal(null);
    });
    describe('expanded', function () {
      var tip;
      var trigger;
      beforeEach(function (done) {
        trigger = findRenderedDOMComponentWithTag(rootNode, 'button');
        Simulate.mouseEnter(trigger, {});
        setTimeout(function () {
          tip = getTip(document.body);
          done();
        }, 0);
      });
      it('places bottom aligned tooltip at the trigger if no target', function (done) {
        // "Magic Number" in pixels, based on size of trigger, CSS, and DropJS offset
        var tooltipOffset = 46;
        var tipBounds = tip.getBoundingClientRect();
        var triggerBounds = trigger.getBoundingClientRect();
        expect(tipBounds.top).to.be.within(triggerBounds.top - tooltipOffset, triggerBounds.top);
        done();
      });
      it('adds nubbin', function () {
        expect(tip.className).to.include('slds-nubbin--bottom');
      });
      it('closes', function (done) {
        Simulate.mouseLeave(trigger, {});
        setTimeout(function () {
          expect(getTip(document.body)).to.be.null;
          done();
        }, 600);
      });
    });
  });
  describe('Custom props work as expected', function () {
    it('isOpen is false', function (done) {
      var rootNode = generateTooltip(_objectSpread({}, defaultProps, {
        isOpen: false
      }), defaultTrigger);
      setTimeout(function () {
        var trigger = findRenderedDOMComponentWithTag(rootNode, 'button');
        Simulate.mouseEnter(trigger, {});
        setTimeout(function () {
          expect(getTip(document.body)).to.be.null;
          done();
        }, 0);
      }, 0);
    });
    it('isOpen is true', function (done) {
      var contentRendered;

      var tooltipContentRendered = function tooltipContentRendered(component) {
        _this.tip = getTip(document.body);

        if (!contentRendered) {
          expect(component).to.not.be.null;
          contentRendered = true;
          done();
        }
      };

      generateTooltip(_objectSpread({}, defaultProps, {
        // overwrite default content
        content: React.createElement("span", {
          ref: tooltipContentRendered,
          className: "tooltip-content",
          style: {
            width: 30
          }
        }, defaultTextContent),
        isOpen: true
      }), defaultTrigger);
    });
  });
  /*
  // Commented out until fully understood.
  describe('using target', () => {
  	let rootNode, trigger;
  		beforeEach(() => {
  		const content = (<span style={{width: 30}}>This is more info. blah blah.</span>);
  		createBody();
  		rootNode = generateTooltip({
  			align: 'bottom',
  			content: content,
  			target: body.firstChild
  		}, React.createElement(SLDSButton, {}), ['Hover me for tooltip']);
  		trigger = document.body.querySelector('[role=tooltip]').firstChild;
  	})
  		describe('expanded', () => {
  		let tip;
  			beforeEach((done) => {
  			expect(getTip(document.body)).to.equal(null);
  				setTimeout(() => {
  				Simulate.mouseEnter(trigger, {})
  				setTimeout(() => {
  					tip = getTip(document.body);
  					done();
  				}, 200);
  			}, 200);
  		});
  			it('sets the tooltip close to the target, not the trigger', () => {
  			// "Magic Number" in pixels, based on size of trigger and CSS
  			const tooltipOffset = 40;
  			const tipBounds = tip.getBoundingClientRect();
  			const targetBounds = body.firstChild.getBoundingClientRect();
  			console.log(tipBounds);
  			console.log(targetBounds);
  			expect(tipBounds.bottom).to.be.within(targetBounds.bottom, targetBounds.bottom + tooltipOffset);
  		})
  	})
  })
  */
});
//# sourceMappingURL=tooltip.browser-test.js.map