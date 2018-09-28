import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme'; // `this.wrapper` and `this.dom` is set in the helpers file

import { mountComponent, unmountComponent } from '../../../tests/enzyme-helpers';
import MediaObject from '../../media-object';
import Icon from '../../icon';
import IconSettings from '../../icon-settings';
import { MEDIA_OBJECT } from '../../../utilities/constants';
chai.use(chaiEnzyme());
var COMPONENT_CSS_CLASSES = {
  base: 'slds-media',
  figure: 'slds-media__figure',
  body: 'slds-media__body'
};

var DemoComponent = function DemoComponent(props) {
  return React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, React.createElement(MediaObject, props));
};

DemoComponent.displayName = 'DemoMediaObject';
describe("".concat(MEDIA_OBJECT, ": "), function () {
  /*
  	Tests
   */
  describe('Default Structure and CSS', function () {
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda.",
      className: "this-is-a-container-test",
      figure: React.createElement(Icon, {
        category: "standard",
        name: "user",
        size: "medium"
      })
    })));
    afterEach(unmountComponent);
    it('has container class, body and figure', function () {
      var container = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.base));
      expect(container.hasClass('this-is-a-container-test')).to.be.true;
      var body = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.body));
      console.log(body.text());
      var bodyText = body.text();
      expect(bodyText).to.equal('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda.');
      var figure = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.figure));
      var icon = figure.find('.slds-icon-standard-user');
      expect(icon.hasClass('slds-icon-standard-user')).to.be.true;
    });
  });
  describe('Additional Structure', function () {
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      figure: React.createElement(Icon, {
        category: "standard",
        name: "user",
        size: "medium"
      }),
      verticalCenter: true,
      canTruncate: true
    })));
    afterEach(unmountComponent);
    it('has media vertical center class', function () {
      var container = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.base));
      expect(container.hasClass('slds-media--center')).to.be.true;
    });
    it('can truncate within Flexbox layout', function () {
      var container = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.base));
      expect(container.hasClass('slds-has-flexi-truncate')).to.be.true;
    });
  });
});
//# sourceMappingURL=media-object.browser-test.js.map