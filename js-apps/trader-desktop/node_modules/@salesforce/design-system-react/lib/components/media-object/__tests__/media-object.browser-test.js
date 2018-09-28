"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _chaiEnzyme = require("chai-enzyme");

var _chaiEnzyme2 = _interopRequireDefault(_chaiEnzyme);

var _enzymeHelpers = require("../../../tests/enzyme-helpers");

var _mediaObject = require("../../media-object");

var _mediaObject2 = _interopRequireDefault(_mediaObject);

var _icon = require("../../icon");

var _icon2 = _interopRequireDefault(_icon);

var _iconSettings = require("../../icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

var _constants = require("../../../utilities/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// `this.wrapper` and `this.dom` is set in the helpers file
_chai2.default.use((0, _chaiEnzyme2.default)());

var COMPONENT_CSS_CLASSES = {
  base: 'slds-media',
  figure: 'slds-media__figure',
  body: 'slds-media__body'
};

var DemoComponent = function DemoComponent(props) {
  return _react2.default.createElement(_iconSettings2.default, {
    iconPath: "/assets/icons"
  }, _react2.default.createElement(_mediaObject2.default, props));
};

DemoComponent.displayName = 'DemoMediaObject';
describe("".concat(_constants.MEDIA_OBJECT, ": "), function () {
  /*
  	Tests
   */
  describe('Default Structure and CSS', function () {
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, {
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda.",
      className: "this-is-a-container-test",
      figure: _react2.default.createElement(_icon2.default, {
        category: "standard",
        name: "user",
        size: "medium"
      })
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('has container class, body and figure', function () {
      var container = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.base));
      (0, _chai.expect)(container.hasClass('this-is-a-container-test')).to.be.true;
      var body = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.body));
      console.log(body.text());
      var bodyText = body.text();
      (0, _chai.expect)(bodyText).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda.');
      var figure = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.figure));
      var icon = figure.find('.slds-icon-standard-user');
      (0, _chai.expect)(icon.hasClass('slds-icon-standard-user')).to.be.true;
    });
  });
  describe('Additional Structure', function () {
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(DemoComponent, {
      figure: _react2.default.createElement(_icon2.default, {
        category: "standard",
        name: "user",
        size: "medium"
      }),
      verticalCenter: true,
      canTruncate: true
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('has media vertical center class', function () {
      var container = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.base));
      (0, _chai.expect)(container.hasClass('slds-media--center')).to.be.true;
    });
    it('can truncate within Flexbox layout', function () {
      var container = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.base));
      (0, _chai.expect)(container.hasClass('slds-has-flexi-truncate')).to.be.true;
    });
  });
});