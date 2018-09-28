"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _chaiEnzyme = require("chai-enzyme");

var _chaiEnzyme2 = _interopRequireDefault(_chaiEnzyme);

var _enzymeHelpers = require("../../../tests/enzyme-helpers");

var _avatar = require("../../avatar");

var _avatar2 = _interopRequireDefault(_avatar);

var _iconSettings = require("../../icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-render-return-value */

/* eslint-disable react/no-find-dom-node */
_chai2.default.use((0, _chaiEnzyme2.default)());

describe('SLDSAvatar: ', function () {
  var _this2 = this;

  var mountNode;
  var wrapper;
  describe('Default Structure', function () {
    var _this = this;

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
    it('avatar renders with image', function () {
      var expectedSrc = 'success';
      wrapper = (0, _enzyme.mount)(_react2.default.createElement(_avatar2.default, {
        imgSrc: expectedSrc
      }), {
        attachTo: mountNode
      });
      var img = wrapper.find('img');
      var src = img.prop('src');
      (0, _chai.expect)(src).to.equal(expectedSrc);
    });
    it('renders proper icon size class', function () {
      wrapper = (0, _enzyme.mount)(_react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, _react2.default.createElement(_avatar2.default, {
        size: "large"
      })), {
        attachTo: mountNode
      });
      var avatar = wrapper.find('.slds-avatar_large');
      (0, _chai.expect)(avatar.node).to.not.be.undefined;
    });
    describe('variant is a user', function () {
      beforeEach(function () {
        wrapper = (0, _enzyme.mount)(_react2.default.createElement(_iconSettings2.default, {
          iconPath: "/assets/icons"
        }, _react2.default.createElement(_avatar2.default, {
          variant: "user"
        })), {
          attachTo: mountNode
        });
      });
      it('displays as a circle', function () {
        var circleClass = !!wrapper.find('.slds-avatar_circle');
        (0, _chai.expect)(circleClass).to.be.true;
      });
    });
    describe('variant is an entity', function () {
      beforeEach(function () {
        wrapper = (0, _enzyme.mount)(_react2.default.createElement(_iconSettings2.default, {
          iconPath: "/assets/icons"
        }, _react2.default.createElement(_avatar2.default, {
          variant: "entity"
        })), {
          attachTo: mountNode
        });
      });
      it('displays as a square (no circle class)', function () {
        var avatar = wrapper.find('.slds-avatar_circle');
        (0, _chai.expect)(avatar.node).to.be.undefined;
      });
    });
  });
  describe('Initials avatar fallback check', function () {
    beforeEach(function () {
      mountNode = (0, _enzymeHelpers.createMountNode)({
        context: _this2
      });
    });
    afterEach(function () {
      (0, _enzymeHelpers.destroyMountNode)({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('renders "iniitals prop" initials if they are passed in directly', function () {
      var avatar = (0, _enzyme.mount)(_react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, _react2.default.createElement(_avatar2.default, {
        initials: "AW"
      })), {
        attachTo: mountNode
      });
      var abbr = avatar.find('abbr');
      (0, _chai.expect)(abbr.node.textContent).to.equal('AW');
    });
    it('renders fallback initials abbr node if initials or label prop exists', function () {
      var avatar = (0, _enzyme.mount)(_react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, _react2.default.createElement(_avatar2.default, {
        label: "test"
      })), {
        attachTo: mountNode
      });
      var abbr = !!avatar.find('abbr');
      (0, _chai.expect)(abbr).to.be.true;
    });
    it('calls buildInitials in abbr node if no initials prop', function () {
      var avatar = (0, _enzyme.mount)(_react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, _react2.default.createElement(_avatar2.default, {
        label: "Jane Doe"
      })), {
        attachTo: mountNode
      });
      var abbr = avatar.find('abbr');
      (0, _chai.expect)(abbr.node.textContent).to.equal('JD');
    });
    it('renders first two letters of one word if label is one word', function () {
      var avatar = (0, _enzyme.mount)(_react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, _react2.default.createElement(_avatar2.default, {
        label: "Acme"
      })), {
        attachTo: mountNode
      });
      var abbr = avatar.find('abbr');
      (0, _chai.expect)(abbr.node.textContent).to.equal('Ac');
    });
    it('renders first letters of each word if label is two words', function () {
      var avatar = (0, _enzyme.mount)(_react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, _react2.default.createElement(_avatar2.default, {
        label: "Acme Communications"
      })), {
        attachTo: mountNode
      });
      var abbr = avatar.find('abbr');
      (0, _chai.expect)(abbr.node.textContent).to.equal('AC');
    });
    it('renders first letters of first and last word if label is more than two words', function () {
      var avatar = (0, _enzyme.mount)(_react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, _react2.default.createElement(_avatar2.default, {
        label: "Acme Communications Inc."
      })), {
        attachTo: mountNode
      });
      var abbr = avatar.find('abbr');
      (0, _chai.expect)(abbr.node.textContent).to.equal('AI');
    });
  });
  describe('Icon avatar fallback check', function () {
    beforeEach(function () {
      mountNode = (0, _enzymeHelpers.createMountNode)({
        context: _this2
      });
    });
    afterEach(function () {
      (0, _enzymeHelpers.destroyMountNode)({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('renders expected assistiveText', function () {
      var avatar = (0, _enzyme.mount)(_react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, _react2.default.createElement(_avatar2.default, {
        variant: "entity",
        assistiveText: "entity icon avatar"
      })), {
        attachTo: mountNode
      });
      var span = avatar.find('.slds-assistive-text');
      (0, _chai.expect)(span.node.innerHTML).to.equal('entity icon avatar');
    });
    it('renders account icon', function () {
      var avatar = (0, _enzyme.mount)(_react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, _react2.default.createElement(_avatar2.default, {
        variant: "entity"
      })), {
        attachTo: mountNode
      });
      var span = !!avatar.find('.slds-icon-standard-account').node;
      (0, _chai.expect)(span).to.be.true;
    });
    it('renders user icon', function () {
      var avatar = (0, _enzyme.mount)(_react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, _react2.default.createElement(_avatar2.default, {
        variant: "user"
      })), {
        attachTo: mountNode
      });
      var span = !!avatar.find('.slds-icon-standard-user').node;
      (0, _chai.expect)(span).to.be.true;
    });
  });
});