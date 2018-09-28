/* eslint-disable react/no-find-dom-node */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import SLDSPill from "../../../../components/pill";
import SLDSIcon from "../../../../components/icon";
import SLDSAvatar from "../../../../components/avatar";
import { mountComponent, unmountComponent } from "../../../../tests/enzyme-helpers";
import { expect } from 'chai';
var Simulate = TestUtils.Simulate;
describe('SLDSPill', function () {
  var LABEL = 'Pill Label';
  var LABEL_TITLE = 'Full pill label verbiage mirrored here';
  describe('Linked', function () {
    var onClick = sinon.stub();
    var onRemove = sinon.stub();
    var onFocus = sinon.stub();
    var onBlur = sinon.stub();
    beforeEach(mountComponent(React.createElement(SLDSPill, {
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
    afterEach(unmountComponent);
    it('has correct style and attributes', function () {
      expect(this.wrapper.hasClass('slds-pill')).to.be.true;
      expect(this.wrapper.hasClass('slds-pill_link')).to.be.true;
      expect(this.wrapper.hasClass('extra-class')).to.be.true;
      expect(this.wrapper.find('.slds-pill[role="button"]').exists());
    });
    it('renders label as a link', function () {
      var anchor = this.wrapper.find('.slds-pill__action');
      expect(anchor.exists()).to.be.true;
      expect(anchor.prop('title')).to.equal(LABEL_TITLE);
      var label = this.wrapper.find('.slds-pill__label');
      expect(label.text()).to.equal(LABEL);
    });
    it('renders remove button', function () {
      var removeButton = this.wrapper.find('.slds-pill__remove');
      expect(removeButton.exists()).to.be.true;
    });
    it('renders assistive text in remove button', function () {
      var removeButton = this.wrapper.find('.slds-pill__remove');
      expect(removeButton.exists()).to.be.true;
      var assistiveText = removeButton.find('.slds-assistive-text');
      expect(assistiveText.exists()).to.be.true;
      expect(assistiveText.text()).to.equal('Remove assistive text');
    });
    it('focuses and blurs', function () {
      this.wrapper.instance().focus();
      var pill = this.wrapper.find('.slds-pill');
      expect(pill.matchesElement(document.activeElement)).to.be.equal(true, 'Pill was not focused');
      expect(onFocus.calledOnce).to.be.true;
      this.wrapper.instance().blur();
      expect(pill.matchesElement(document.activeElement)).to.be.equal(false, 'Pill was not blurred');
      expect(onBlur.calledOnce).to.be.true;
    });
    it('reponds to link clicks', function () {
      var pillLink = this.wrapper.find('.slds-pill__action');
      expect(pillLink.getNode()).to.exist;
      Simulate.click(pillLink.getNode());
      expect(onClick.calledOnce).to.be.true;
    });
    it('responds to remove clicks', function () {
      var removeButton = this.wrapper.find('.slds-pill__remove');
      expect(removeButton.getNode()).to.exist;
      Simulate.click(removeButton.getNode());
      expect(onRemove.calledOnce).to.be.true;
    });
  });
  describe('Linked With Href', function () {
    var HREF = 'https://www.salesforce.com';
    beforeEach(mountComponent(React.createElement(SLDSPill, {
      labels: {
        label: LABEL
      },
      href: HREF
    })));
    afterEach(unmountComponent);
    it('uses href', function () {
      expect(this.wrapper.hasClass('slds-pill_link')).to.be.true;
      var anchor = this.wrapper.find('.slds-pill__action');
      expect(anchor.exists()).to.be.true;
      expect(anchor.prop('href')).to.equal(HREF);
    });
  });
  describe('Link style on', function () {
    beforeEach(mountComponent(React.createElement(SLDSPill, {
      labels: {
        label: LABEL
      }
    })));
    afterEach(unmountComponent);
    it('forces link style', function () {
      expect(this.wrapper.hasClass('slds-pill_link')).to.be.true;
      var anchor = this.wrapper.find('.slds-pill__action');
      expect(anchor.exists()).to.be.true;
    });
  });
  describe('Bare Linked With Role', function () {
    beforeEach(mountComponent(React.createElement(SLDSPill, {
      labels: {
        label: LABEL
      },
      bare: true
    })));
    afterEach(unmountComponent);
    it('has correct style and attributes', function () {
      expect(this.wrapper.hasClass('slds-pill')).to.be.true;
      expect(this.wrapper.hasClass('slds-pill_bare')).to.be.true;
      expect(this.wrapper.find('.slds-pill[role="button"]').exists()).to.be.true;
    });
  });
  describe('Linked With Error', function () {
    beforeEach(mountComponent(React.createElement(SLDSPill, {
      labels: {
        label: LABEL
      },
      hasError: true
    })));
    afterEach(unmountComponent);
    it('has correct style and attributes', function () {
      expect(this.wrapper.hasClass('slds-has-error')).to.be.true;
    });
  });
  describe('Linked With Icon', function () {
    var onClick = sinon.stub();
    beforeEach(mountComponent(React.createElement(SLDSPill, {
      labels: {
        label: LABEL
      },
      onClick: onClick,
      icon: React.createElement(SLDSIcon, {
        title: "Account",
        category: "standard",
        name: "account"
      })
    })));
    afterEach(unmountComponent);
    it('renders icon to the left from label', function () {
      var icon = this.wrapper.find(SLDSIcon);
      expect(icon.exists()).to.be.true;
      expect(icon.prop('title')).to.equal('Account');
      expect(icon.prop('category')).to.equal('standard');
      expect(icon.prop('name')).to.equal('account');
    });
  });
  describe('Linked With Avatar', function () {
    beforeEach(mountComponent(React.createElement(SLDSPill, {
      labels: {
        label: LABEL
      },
      avatar: React.createElement(SLDSAvatar, {
        variant: "user",
        title: "User avatar",
        imgSrc: "https://lightningdesignsystem.com/assets/images/avatar2.jpg"
      })
    })));
    afterEach(unmountComponent);
    it('renders icon to the left from label', function () {
      var avatar = this.wrapper.find(SLDSAvatar);
      expect(avatar.exists()).to.be.true;
      expect(avatar.prop('title')).to.equal('User avatar');
      expect(avatar.prop('variant')).to.equal('user');
      expect(avatar.prop('imgSrc')).to.equal('https://lightningdesignsystem.com/assets/images/avatar2.jpg');
    });
  });
  describe('Option', function () {
    var onRemove = sinon.stub();
    beforeEach(mountComponent(React.createElement(SLDSPill, {
      labels: {
        label: LABEL,
        title: LABEL_TITLE
      },
      variant: "option",
      removeTitle: "Remove",
      onRemove: onRemove
    })));
    afterEach(unmountComponent);
    it('has correct style', function () {
      expect(this.wrapper.hasClass('slds-pill')).to.be.true;
      expect(this.wrapper.hasClass('slds-pill_link')).to.be.false;
      var anchor = this.wrapper.find('.slds-pill__action');
      expect(anchor.exists()).to.be.false;
    });
  });
  describe('Linked Custom', function () {
    var onClick = sinon.stub();
    var onRemove = sinon.stub();
    beforeEach(mountComponent(React.createElement(SLDSPill, {
      onClick: onClick,
      onRemove: onRemove
    }, React.createElement("div", {
      className: "abc"
    }, "this is a custom label"))));
    afterEach(unmountComponent);
    it('has correct style', function () {
      expect(this.wrapper.hasClass('slds-pill')).to.be.true;
      expect(this.wrapper.hasClass('slds-pill_link')).to.be.true;
      var child = this.wrapper.find('.abc');
      expect(child.exists()).to.be.true;
      expect(child.text()).to.equal('this is a custom label');
    });
    it('renders remove button', function () {
      var removeButton = this.wrapper.find('.slds-pill__remove');
      expect(removeButton.exists()).to.be.true;
    });
    it('reponds to link clicks', function () {
      var pillLink = this.wrapper.find('.slds-pill');
      expect(pillLink.getNode()).to.exist;
      Simulate.click(pillLink.getNode());
      expect(onClick.calledOnce).to.be.true;
    });
    it('responds to remove clicks', function () {
      var removeButton = this.wrapper.find('.slds-pill__remove');
      expect(removeButton.getNode()).to.exist;
      Simulate.click(removeButton.getNode());
      expect(onRemove.calledOnce).to.be.true;
    });
  });
});
//# sourceMappingURL=pill.browser-test.js.map