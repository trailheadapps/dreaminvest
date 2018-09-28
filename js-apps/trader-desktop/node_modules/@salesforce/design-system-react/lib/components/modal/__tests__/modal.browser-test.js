"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require("lodash.assign");

var _lodash2 = _interopRequireDefault(_lodash);

var _reactAddonsTestUtils = require("react-addons-test-utils");

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _chai = require("chai");

var _modal = require("../../modal");

var _modal2 = _interopRequireDefault(_modal);

var _iconSettings = require("../../icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-find-dom-node */
var Simulate = _reactAddonsTestUtils2.default.Simulate;
describe('SLDSModal: ', function () {
  var container;
  var renderedNode;
  afterEach(function () {
    _reactDom2.default.unmountComponentAtNode(container);

    document.body.removeChild(container);
    container = null;
  });
  var defaultProps = {
    align: 'top',
    children: _react2.default.createElement("div", null, "hello")
  };

  var renderModal = function renderModal(modalInstance) {
    container = document.createElement('div');

    var opener = _react2.default.createElement("button", null, _react2.default.createElement(_iconSettings2.default, {
      iconPath: "/assets/icons"
    }, modalInstance));

    document.body.appendChild(container);
    renderedNode = _reactDom2.default.render(opener, container);
    return renderedNode;
  };

  var createModal = function createModal(props) {
    return _react2.default.createElement(_modal2.default, (0, _lodash2.default)({}, defaultProps, props));
  };

  var getModal = function getModal(props) {
    return renderModal(createModal(props));
  };

  var getModalNode = function getModalNode(dom) {
    return dom.querySelector('.slds-modal');
  };

  describe('Styling', function () {
    beforeEach(function () {
      getModal({
        containerClassName: 'container-class-name-test',
        contentClassName: 'content-class-name-test',
        contentStyle: {
          height: '500px'
        },
        isOpen: true,
        portalClassName: 'portal-class-name-test'
      });
    });
    it('has correct containerClassName, contentClassName, contentStyle, and portalClassName', function () {
      var modalContainer = getModalNode(document.body).querySelector('.slds-modal__container.container-class-name-test');
      (0, _chai.expect)(modalContainer).to.exist;
      var modalContent = getModalNode(document.body).querySelector('.slds-modal__content.content-class-name-test');
      (0, _chai.expect)(modalContent).to.exist;
      (0, _chai.expect)(modalContent.style.height).to.equal('500px');
      var modalPortal = document.querySelector('body > .portal-class-name-test');
      (0, _chai.expect)(modalPortal).to.exist;
    });
  });
  describe('Closed modal', function () {
    beforeEach(function () {
      getModal({
        isOpen: false
      });
    });
    it('updates the overflow', function () {
      (0, _chai.expect)(document.body.style.overflow).to.equal('inherit');
    });
    it('does not render to the body', function () {
      (0, _chai.expect)(getModalNode(document.body)).to.be.null;
    });
  });
  describe('Open modal', function () {
    var cmp;
    var closed;
    var modal;
    beforeEach(function () {
      closed = false;
      cmp = getModal({
        assistiveText: {
          closeButton: 'Exit'
        },
        isOpen: true,
        size: 'large',
        containerClassName: 'my-custom-class',
        onRequestClose: function onRequestClose() {
          closed = true;
        }
      });
      modal = getModalNode(document.body);
    });
    it('adds the large class', function () {
      (0, _chai.expect)(modal.className).to.include('slds-modal--large');
    });
    it('adds custom classname from modal container prop', function () {
      (0, _chai.expect)(modal.firstChild.className).to.include('my-custom-class');
    });
    it('renders correct assistive text/title for close button', function () {
      var closeBtn = modal.querySelector('.slds-modal__close');
      (0, _chai.expect)(closeBtn.title).to.equal('Exit');
    });
    it('calls onRequestClose', function () {
      var closeBtn = modal.querySelector('.slds-modal__close');
      (0, _chai.expect)(closed).to.be.false;
      Simulate.click(closeBtn, {});
      (0, _chai.expect)(closed).to.be.true;
    });
  });
  describe('Proper HTML markup', function () {
    it('dismissible modal has role=dialog', function () {
      var cmp = getModal({
        isOpen: true
      });
      var modal = getModalNode(document.body);
      var role = modal.getAttribute('role');
      (0, _chai.expect)(role).to.equal('dialog');
    });
    it('non-dismissible modal has role=alertdialog', function () {
      var cmp = getModal({
        isOpen: true,
        dismissible: false
      });
      var modal = getModalNode(document.body);
      var role = modal.getAttribute('role');
      (0, _chai.expect)(role).to.equal('alertdialog');
    });
  });
  describe('Open with custom header and header className', function () {
    var modal;
    beforeEach(function () {
      getModal({
        header: _react2.default.createElement("div", {
          id: "art-vandelay"
        }, "Art vandelay"),
        headerClassName: 'art-vandelay',
        isOpen: true
      });
      modal = getModalNode(document.body);
    });
    it('adds the header', function () {
      var customHeader = modal.querySelector('#art-vandelay');
      (0, _chai.expect)(customHeader).to.not.be.null;
    });
    it('adds the custom header class', function () {
      (0, _chai.expect)(modal.querySelector('.slds-modal__header').className).to.include('art-vandelay');
    });
  });
  describe('Open with Prompt and Footer', function () {
    var modal;
    beforeEach(function () {
      var feet = _react2.default.createElement("div", {
        className: "toes"
      }, "Toes");

      getModal({
        isOpen: true,
        prompt: 'warning',
        title: 'are you sure?',
        footer: feet
      });
      modal = getModalNode(document.body);
    });
    it('adds the footer', function () {
      var footer = modal.querySelector('.slds-modal__footer');
      (0, _chai.expect)(footer.className).to.include('slds-theme--default');
    });
    it('adds the prompt class', function () {
      (0, _chai.expect)(modal.className).to.include('slds-modal--prompt');
    });
    it('adds the prompt theme class', function () {
      (0, _chai.expect)(modal.querySelector('.slds-modal__header').className).to.include('slds-theme--warning');
    });
    it('adds the footer html content', function () {
      (0, _chai.expect)(modal.querySelector('.toes').innerHTML).to.equal('Toes');
    });
  });
  describe('Open Directional', function () {
    var modal;
    beforeEach(function () {
      var feet = [_react2.default.createElement("div", {
        className: "toes"
      }, "Toe 1"), _react2.default.createElement("div", {
        className: "toes"
      }, "Toe 2")];
      getModal({
        isOpen: true,
        directional: true,
        footer: feet
      });
      modal = getModalNode(document.body);
    });
    it('adds the footer', function () {
      var footer = modal.querySelector('.slds-modal__footer--directional');
      (0, _chai.expect)(footer.className).to.include('slds-modal__footer');
    });
  });
  describe('Keyboard behavior', function () {
    var modal;
    beforeEach(function () {
      var feet = [_react2.default.createElement("button", {
        className: "cancel"
      }, "Cancel"), _react2.default.createElement("button", {
        className: "save"
      }, "Save")];
      getModal({
        isOpen: true,
        directional: true,
        footer: feet
      });
      modal = getModalNode(document.body);
    });
    it('first tab focuses close button', function () {// There an issue with this test, functionality works fine.
      // setTimeout(() => {
      // 	Simulate.keyDown(modal, {
      // 		key: 'Tab',
      // 		keyCode: 9,
      // 		which: 9,
      // 	});
      // 	setTimeout(() => {
      // 		expect(document.activeElement.className).to.include(
      // 			'slds-modal__close'
      // 		);
      // 		done();
      // 	}, 200);
      // }, 200);
    });
    it('enter on close button works', function () {// TODO: simulate enter on close button and modal is undefined
    });
    it('traps focus inside Modal', function () {// TODO: simulate tabbing around inside of Modal
    });
  });
});