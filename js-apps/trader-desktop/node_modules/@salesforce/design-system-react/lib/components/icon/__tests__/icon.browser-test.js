"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require("create-react-class");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _chaiEnzyme = require("chai-enzyme");

var _chaiEnzyme2 = _interopRequireDefault(_chaiEnzyme);

var _enzymeHelpers = require("../../../tests/enzyme-helpers");

var _icon = require("../../icon");

var _icon2 = _interopRequireDefault(_icon);

var _iconSettings = require("../../icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */

/* global sinon */

/* eslint-disable prefer-arrow-callback */

/* eslint-disable no-unused-expressions */
// `this.wrapper` and `this.dom` is set in the helpers file
_chai2.default.use((0, _chaiEnzyme2.default)());

var DemoIcon = (0, _createReactClass2.default)({
  displayName: 'DemoIcon',
  render: function render() {
    return _react2.default.createElement(_icon2.default, this.props);
  }
});
describe('SLDSIcon: ', function () {
  describe('Standard Icon Props Render', function () {
    var component;
    var svg;
    var iconContainer;
    var asstText;
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(_iconSettings2.default, {
      iconPath: "/assets/icons"
    }, _react2.default.createElement(DemoIcon, {
      assistiveText: "Log a Call",
      category: "standard",
      name: "log_a_call",
      style: {
        backgroundColor: 'rgb(218, 165, 32)'
      },
      size: "large"
    }))));
    afterEach(_enzymeHelpers.unmountComponent);
    it('renders container class', function () {
      (0, _chai.expect)(this.wrapper.hasClass('slds-icon_container')).to.be.true;
    });
    it('renders assistive text', function () {
      asstText = this.wrapper.find('.slds-assistive-text');
      (0, _chai.expect)(asstText.text()).to.equal('Log a Call');
    });
    it('renders icon name class on svg', function () {
      // also tests that all '_' are replaced with '-'
      (0, _chai.expect)(this.wrapper.hasClass('slds-icon-standard-log-a-call')).to.be.true;
    });
    it('renders custom background color', function () {
      svg = this.wrapper.find('svg');
      (0, _chai.expect)(svg).to.have.style('backgroundColor', 'rgb(218, 165, 32)');
    });
    it('renders icon size class', function () {
      svg = this.wrapper.find('svg');
      (0, _chai.expect)(svg.hasClass('slds-icon--large')).to.be.true;
    });
  });
  describe('Custom Icon Props Render', function () {
    var component;
    var svg;
    var iconContainer;
    var asstText;
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(_iconSettings2.default, {
      iconPath: "/assets/icons"
    }, _react2.default.createElement(DemoIcon, {
      assistiveText: "Heart",
      category: "custom",
      name: "custom1",
      size: "small"
    }))));
    afterEach(_enzymeHelpers.unmountComponent);
    it('renders container class', function () {
      (0, _chai.expect)(this.wrapper.hasClass('slds-icon_container')).to.be.true;
    });
    it('renders assistive text', function () {
      asstText = this.wrapper.find('.slds-assistive-text');
      (0, _chai.expect)(asstText.text()).to.equal('Heart');
    });
    it('renders icon name class on svg', function () {
      // also tests that all '_' are replaced with '-'
      (0, _chai.expect)(this.wrapper.hasClass('slds-icon-custom-custom1')).to.be.true;
    });
    it('renders icon size class', function () {
      svg = this.wrapper.find('svg');
      (0, _chai.expect)(svg.hasClass('slds-icon--small')).to.be.true;
    });
  });
  describe('Action Icon Props Render', function () {
    var component;
    var svg;
    var iconContainer;
    var asstText;
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(_iconSettings2.default, {
      iconPath: "/assets/icons"
    }, _react2.default.createElement(DemoIcon, {
      assistiveText: "Announcements",
      category: "action",
      name: "announcement",
      size: "large",
      title: "custom title",
      className: "slds-m-around--x-small"
    }))));
    afterEach(_enzymeHelpers.unmountComponent);
    it('renders container class', function () {
      (0, _chai.expect)(this.wrapper.hasClass('slds-icon_container')).to.be.true;
    });
    it('renders assistive text', function () {
      asstText = this.wrapper.find('.slds-assistive-text');
      (0, _chai.expect)(asstText.text()).to.equal('Announcements');
    });
    it('renders round container', function () {
      (0, _chai.expect)(this.wrapper.hasClass('slds-icon_container--circle')).to.be.true;
    });
    it('renders icon name class on svg', function () {
      // also tests that all '_' are replaced with '-'
      (0, _chai.expect)(this.wrapper.hasClass('slds-icon-action-announcement')).to.be.true;
    });
    it('renders icon size class', function () {
      svg = this.wrapper.find('svg');
      (0, _chai.expect)(svg.hasClass('slds-icon--large')).to.be.true;
    });
    it('renders title', function () {
      (0, _chai.expect)(this.wrapper.find('[title="custom title"]')).to.exist;
    });
  });
  describe('Utility Icon Props Render', function () {
    var component;
    var svg;
    var iconContainer;
    var asstText;
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(_iconSettings2.default, {
      iconPath: "/assets/icons"
    }, _react2.default.createElement(DemoIcon, {
      category: "utility",
      name: "open_folder",
      size: "medium"
    }))));
    afterEach(_enzymeHelpers.unmountComponent);
    it('does NOT render container class', function () {
      (0, _chai.expect)(this.wrapper.hasClass('slds-icon_container')).to.be.false;
    });
    it('medium size does not render size class', function () {
      // also tests that all '_' are replaced with '-'
      (0, _chai.expect)(this.wrapper.hasClass('slds-icon--medium')).to.be.false;
    });
    it('utility icons do not render name class on svg', function () {
      // also tests that all '_' are replaced with '-'
      (0, _chai.expect)(this.wrapper.hasClass('slds-icon-text-default')).to.be.false;
    });
  });
  describe('Icon with external path renders', function () {
    var asstText;
    var component;
    var iconContainer;
    var use;
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(_iconSettings2.default, {
      iconPath: "/assets/icons"
    }, _react2.default.createElement(DemoIcon, {
      assistiveText: "New stuff!",
      inverse: true,
      path: "/assets/icons/utility-sprite/svg/symbols.svg#announcement",
      size: "medium"
    }))));
    afterEach(_enzymeHelpers.unmountComponent);
    it('does NOT render slds-icon-standard class', function () {
      (0, _chai.expect)(this.wrapper.hasClass('slds-icon-standard-')).to.be.false;
    });
    it('path prop is passed to svg', function () {
      use = this.wrapper.find('svg').node.firstChild.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
      (0, _chai.expect)(use).to.equal('/assets/icons/utility-sprite/svg/symbols.svg#announcement');
    });
  });
});