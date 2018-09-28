"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require("lodash.assign");

var _lodash2 = _interopRequireDefault(_lodash);

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _iconSettings = require("../../icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

var _icon = require("../../icon");

var _icon2 = _interopRequireDefault(_icon);

var _buttonStateful = require("../../button-stateful");

var _buttonStateful2 = _interopRequireDefault(_buttonStateful);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.should();

describe('Button Stateful: ', function () {
  // Base defaults
  var requiredProps = {
    assistiveText: 'like',
    iconName: 'like',
    iconSize: 'large',
    variant: 'icon'
  }; // Setup and takedown

  var renderButton = function renderButton(instance) {
    return function () {
      this.dom = document.createElement('div');
      document.body.appendChild(this.dom);
      this.component = _reactDom2.default.render(_react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, instance), this.dom);
    };
  };

  function removeButton() {
    _reactDom2.default.unmountComponentAtNode(this.dom);

    document.body.removeChild(this.dom);
  }

  var getButton = function getButton(dom) {
    return dom.querySelector('.slds-button');
  }; // Tests


  describe('Default Structure', function () {
    beforeEach(renderButton(_react2.default.createElement(_buttonStateful2.default, requiredProps)));
    afterEach(removeButton);
    it('button exists - is not undefined', function () {
      var button = getButton(this.dom);
      button.should.not.be.undefined;
    });
    it('if no active prop, is not active', function () {
      var button = getButton(this.dom);
      button.className.should.include('slds-not-selected');
    });
  });
  describe('External active props works', function () {
    var propsWithActive = (0, _lodash2.default)(requiredProps, {
      active: true
    });
    beforeEach(renderButton(_react2.default.createElement(_buttonStateful2.default, propsWithActive)));
    afterEach(removeButton);
    it('renders active prop', function () {
      var button = getButton(this.dom);
      button.className.should.include('slds-is-selected');
    });
  }); // TODO: Write more tests for custom renderers
});