"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require("lodash.assign");

var _lodash2 = _interopRequireDefault(_lodash);

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _spinner = require("../../spinner");

var _spinner2 = _interopRequireDefault(_spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.should();

describe('Spinner: ', function () {
  // Setup and takedown
  var renderSpinner = function renderSpinner(instance) {
    return function () {
      this.dom = document.createElement('div');
      document.body.appendChild(this.dom);
      this.component = _reactDom2.default.render(instance, this.dom);
    };
  };

  function removeSpinner() {
    _reactDom2.default.unmountComponentAtNode(this.dom);

    document.body.removeChild(this.dom);
  }

  var getSpinner = function getSpinner(dom) {
    return dom.querySelector('.slds-spinner');
  }; // Tests


  describe('Default spinner renders properly', function () {
    before(renderSpinner(_react2.default.createElement(_spinner2.default, null)));
    after(removeSpinner);
    it('Spinner exists', function () {
      var spinner = getSpinner(this.dom);
      spinner.should.not.be.undefined;
    });
    it('renders default classes when no props passed in', function () {
      var spinner = getSpinner(this.dom);
      spinner.className.should.equal('slds-spinner slds-spinner_medium');
    });
  });
  describe('Props render proper css classes', function () {
    beforeEach(renderSpinner(_react2.default.createElement(_spinner2.default, {
      size: "small",
      variant: "brand"
    })));
    afterEach(removeSpinner);
    it('renders correct classes when props passed in', function () {
      var spinner = getSpinner(this.dom);
      spinner.className.should.include('slds-spinner_brand slds-spinner_small');
    });
  });
});