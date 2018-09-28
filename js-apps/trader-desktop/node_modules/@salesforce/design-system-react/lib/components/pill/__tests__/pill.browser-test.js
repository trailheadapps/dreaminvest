"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require("react-addons-test-utils");

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _pill = require("../../../../components/pill");

var _pill2 = _interopRequireDefault(_pill);

var _icon = require("../../../../components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _avatar = require("../../../../components/avatar");

var _avatar2 = _interopRequireDefault(_avatar);

var _enzymeHelpers = require("../../../../tests/enzyme-helpers");

var _chai = require("chai");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-find-dom-node */
var Simulate = _reactAddonsTestUtils2.default.Simulate;
describe('SLDSPill', function () {
  var LABEL = 'Pill Label';
  var LABEL_TITLE = 'Full pill label verbiage mirrored here';
  describe('Linked', function () {
    var onClick = sinon.stub();
    var onRemove = sinon.stub();
    var onFocus = sinon.stub();
    var onBlur = sinon.stub();
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(_pill2.default, {
      tabIndex: "0",
      labels: {
        label: LABEL,
        title: LABEL_TITLE,
        removeTitle: 'Remove'
      },
      assistiveText: {
        remove: 'Remove assistive text'
      },
      className: "extra-class",
      onClick: onClick,
      onRemove: onRemove,
      onFocus: onFocus,
      onBlur: onBlur
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('has correct style and attributes', function () {
      (0, _chai.expect)(this.wrapper.hasClass('slds-pill')).to.be.true;
      (0, _chai.expect)(this.wrapper.hasClass('slds-pill_link')).to.be.true;
      (0, _chai.expect)(this.wrapper.hasClass('extra-class')).to.be.true;
      (0, _chai.expect)(this.wrapper.find('.slds-pill[role="button"]').exists());
    });
    it('renders label as a link', function () {
      var anchor = this.wrapper.find('.slds-pill__action');
      (0, _chai.expect)(anchor.exists()).to.be.true;
      (0, _chai.expect)(anchor.prop('title')).to.equal(LABEL_TITLE);
      var label = this.wrapper.find('.slds-pill__label');
      (0, _chai.expect)(label.text()).to.equal(LABEL);
    });
    it('renders remove button', function () {
      var removeButton = this.wrapper.find('.slds-pill__remove');
      (0, _chai.expect)(removeButton.exists()).to.be.true;
    });
    it('renders assistive text in remove button', function () {
      var removeButton = this.wrapper.find('.slds-pill__remove');
      (0, _chai.expect)(removeButton.exists()).to.be.true;
      var assistiveText = removeButton.find('.slds-assistive-text');
      (0, _chai.expect)(assistiveText.exists()).to.be.true;
      (0, _chai.expect)(assistiveText.text()).to.equal('Remove assistive text');
    });
    it('focuses and blurs', function () {
      this.wrapper.instance().focus();
      var pill = this.wrapper.find('.slds-pill');
      (0, _chai.expect)(pill.matchesElement(document.activeElement)).to.be.equal(true, 'Pill was not focused');
      (0, _chai.expect)(onFocus.calledOnce).to.be.true;
      this.wrapper.instance().blur();
      (0, _chai.expect)(pill.matchesElement(document.activeElement)).to.be.equal(false, 'Pill was not blurred');
      (0, _chai.expect)(onBlur.calledOnce).to.be.true;
    });
    it('reponds to link clicks', function () {
      var pillLink = this.wrapper.find('.slds-pill__action');
      (0, _chai.expect)(pillLink.getNode()).to.exist;
      Simulate.click(pillLink.getNode());
      (0, _chai.expect)(onClick.calledOnce).to.be.true;
    });
    it('responds to remove clicks', function () {
      var removeButton = this.wrapper.find('.slds-pill__remove');
      (0, _chai.expect)(removeButton.getNode()).to.exist;
      Simulate.click(removeButton.getNode());
      (0, _chai.expect)(onRemove.calledOnce).to.be.true;
    });
  });
  describe('Linked With Href', function () {
    var HREF = 'https://www.salesforce.com';
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(_pill2.default, {
      labels: {
        label: LABEL
      },
      href: HREF
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('uses href', function () {
      (0, _chai.expect)(this.wrapper.hasClass('slds-pill_link')).to.be.true;
      var anchor = this.wrapper.find('.slds-pill__action');
      (0, _chai.expect)(anchor.exists()).to.be.true;
      (0, _chai.expect)(anchor.prop('href')).to.equal(HREF);
    });
  });
  describe('Link style on', function () {
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(_pill2.default, {
      labels: {
        label: LABEL
      }
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('forces link style', function () {
      (0, _chai.expect)(this.wrapper.hasClass('slds-pill_link')).to.be.true;
      var anchor = this.wrapper.find('.slds-pill__action');
      (0, _chai.expect)(anchor.exists()).to.be.true;
    });
  });
  describe('Bare Linked With Role', function () {
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(_pill2.default, {
      labels: {
        label: LABEL
      },
      bare: true
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('has correct style and attributes', function () {
      (0, _chai.expect)(this.wrapper.hasClass('slds-pill')).to.be.true;
      (0, _chai.expect)(this.wrapper.hasClass('slds-pill_bare')).to.be.true;
      (0, _chai.expect)(this.wrapper.find('.slds-pill[role="button"]').exists()).to.be.true;
    });
  });
  describe('Linked With Error', function () {
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(_pill2.default, {
      labels: {
        label: LABEL
      },
      hasError: true
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('has correct style and attributes', function () {
      (0, _chai.expect)(this.wrapper.hasClass('slds-has-error')).to.be.true;
    });
  });
  describe('Linked With Icon', function () {
    var onClick = sinon.stub();
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(_pill2.default, {
      labels: {
        label: LABEL
      },
      onClick: onClick,
      icon: _react2.default.createElement(_icon2.default, {
        title: "Account",
        category: "standard",
        name: "account"
      })
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('renders icon to the left from label', function () {
      var icon = this.wrapper.find(_icon2.default);
      (0, _chai.expect)(icon.exists()).to.be.true;
      (0, _chai.expect)(icon.prop('title')).to.equal('Account');
      (0, _chai.expect)(icon.prop('category')).to.equal('standard');
      (0, _chai.expect)(icon.prop('name')).to.equal('account');
    });
  });
  describe('Linked With Avatar', function () {
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(_pill2.default, {
      labels: {
        label: LABEL
      },
      avatar: _react2.default.createElement(_avatar2.default, {
        variant: "user",
        title: "User avatar",
        imgSrc: "https://lightningdesignsystem.com/assets/images/avatar2.jpg"
      })
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('renders icon to the left from label', function () {
      var avatar = this.wrapper.find(_avatar2.default);
      (0, _chai.expect)(avatar.exists()).to.be.true;
      (0, _chai.expect)(avatar.prop('title')).to.equal('User avatar');
      (0, _chai.expect)(avatar.prop('variant')).to.equal('user');
      (0, _chai.expect)(avatar.prop('imgSrc')).to.equal('https://lightningdesignsystem.com/assets/images/avatar2.jpg');
    });
  });
  describe('Option', function () {
    var onRemove = sinon.stub();
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(_pill2.default, {
      labels: {
        label: LABEL,
        title: LABEL_TITLE
      },
      variant: "option",
      removeTitle: "Remove",
      onRemove: onRemove
    })));
    afterEach(_enzymeHelpers.unmountComponent);
    it('has correct style', function () {
      (0, _chai.expect)(this.wrapper.hasClass('slds-pill')).to.be.true;
      (0, _chai.expect)(this.wrapper.hasClass('slds-pill_link')).to.be.false;
      var anchor = this.wrapper.find('.slds-pill__action');
      (0, _chai.expect)(anchor.exists()).to.be.false;
    });
  });
  describe('Linked Custom', function () {
    var onClick = sinon.stub();
    var onRemove = sinon.stub();
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(_pill2.default, {
      onClick: onClick,
      onRemove: onRemove
    }, _react2.default.createElement("div", {
      className: "abc"
    }, "this is a custom label"))));
    afterEach(_enzymeHelpers.unmountComponent);
    it('has correct style', function () {
      (0, _chai.expect)(this.wrapper.hasClass('slds-pill')).to.be.true;
      (0, _chai.expect)(this.wrapper.hasClass('slds-pill_link')).to.be.true;
      var child = this.wrapper.find('.abc');
      (0, _chai.expect)(child.exists()).to.be.true;
      (0, _chai.expect)(child.text()).to.equal('this is a custom label');
    });
    it('renders remove button', function () {
      var removeButton = this.wrapper.find('.slds-pill__remove');
      (0, _chai.expect)(removeButton.exists()).to.be.true;
    });
    it('reponds to link clicks', function () {
      var pillLink = this.wrapper.find('.slds-pill');
      (0, _chai.expect)(pillLink.getNode()).to.exist;
      Simulate.click(pillLink.getNode());
      (0, _chai.expect)(onClick.calledOnce).to.be.true;
    });
    it('responds to remove clicks', function () {
      var removeButton = this.wrapper.find('.slds-pill__remove');
      (0, _chai.expect)(removeButton.getNode()).to.exist;
      Simulate.click(removeButton.getNode());
      (0, _chai.expect)(onRemove.calledOnce).to.be.true;
    });
  });
});