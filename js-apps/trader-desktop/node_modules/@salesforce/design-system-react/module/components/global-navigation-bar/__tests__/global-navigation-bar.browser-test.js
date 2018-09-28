function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme'; // `this.wrapper` and `this.dom` is set in the helpers file

import { mountComponent, unmountComponent } from '../../../tests/enzyme-helpers'; // sample props and children

import { dropdownCollection, propSets } from '../../../utilities/sample-data/global-navigation-bar';
import IconSettings from '../../icon-settings';
import GlobalNavigationBar from '../../global-navigation-bar';
import GlobalNavigationBarRegion from '../../global-navigation-bar/region';
import GlobalNavigationBarDropdown from '../../global-navigation-bar/dropdown';
import GlobalNavigationBarLink from '../../global-navigation-bar/link';
import GlobalNavigationBarLabel from '../../global-navigation-bar/label';
import GlobalNavigationBarButton from '../../global-navigation-bar/button';
chai.use(chaiEnzyme());
var COMPONENT_CSS_CLASSES = {
  base: 'slds-context-bar',
  themePrefix: 'slds-context-bar--theme-'
};
var REGION_CSS_CLASSES = {
  primary: 'slds-context-bar__primary',
  secondary: 'slds-context-bar__secondary',
  tertiary: 'slds-context-bar__tertiary',
  appName: 'slds-context-bar__app-name'
};
describe('Global Navigation Bar: ', function () {
  // Base defaults
  // no required props

  /*
  	Tests
   */
  describe('Default Structure', function () {
    beforeEach(mountComponent(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(GlobalNavigationBar, null, React.createElement(GlobalNavigationBarRegion, {
      region: "primary"
    })))));
    afterEach(unmountComponent);
    it('has wrapping div and one primary region', function () {
      var component = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.base));
      expect(component).to.have.length(1);
      var primary = this.wrapper.find(".".concat(REGION_CSS_CLASSES.primary));
      expect(primary).to.have.length(1);
    });
    it('Primary region DOES not have divider on right', function () {
      var primary = this.wrapper.find(".".concat(REGION_CSS_CLASSES.primary));
      expect(primary.nodes[0].className).to.not.include('slds-context-bar__item--divider-right');
    });
  });
  describe('Optional Properties', function () {
    var customCloudProps = propSets.customCloud.props;
    var customThemeProps = propSets.lightTheme.props;
    beforeEach(mountComponent(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(GlobalNavigationBar, _extends({}, customCloudProps, customThemeProps)))));
    afterEach(unmountComponent);
    it('has custom cloud and theme CSS', function () {
      var component = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.base));
      expect(component.hasClass("".concat(COMPONENT_CSS_CLASSES.themePrefix).concat(customCloudProps.cloud))).to.be.true;
      expect(component.hasClass("".concat(COMPONENT_CSS_CLASSES.themePrefix).concat(customThemeProps.theme))).to.be.true;
    });
  });
  describe('Optional Region Structure', function () {
    var props = propSets.base.props;

    var buttonClicked = function buttonClicked() {};

    var linkClicked = function linkClicked() {};

    var dropdownItemClicked = function dropdownItemClicked() {};

    beforeEach(mountComponent(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(GlobalNavigationBar, props, React.createElement(GlobalNavigationBarRegion, {
      region: "primary"
    }), React.createElement(GlobalNavigationBarRegion, {
      region: "secondary",
      navigation: true,
      dividerPosition: "right"
    }, React.createElement(GlobalNavigationBarLink, {
      label: "Home",
      id: "home-link",
      onClick: linkClicked('Home link clicked')
    }), React.createElement(GlobalNavigationBarDropdown, {
      assistiveText: "Open Menu",
      id: "primaryDropdown",
      label: "Global Navigation Menu Item 1",
      onSelect: dropdownItemClicked('Dropdown Menu Item clicked'),
      options: dropdownCollection
    }), React.createElement(GlobalNavigationBarLink, {
      active: true,
      id: "menu-item-2",
      label: "Global Navigation Menu Item 2",
      onClick: linkClicked('Link clicked')
    }), React.createElement(GlobalNavigationBarDropdown, {
      active: true,
      assistiveText: "Open Menu",
      id: "primaryDropdownActive",
      label: "Global Navigation Menu Item 3",
      onSelect: dropdownItemClicked('Dropdown Menu Item clicked'),
      options: dropdownCollection
    })), React.createElement(GlobalNavigationBarRegion, {
      region: "tertiary"
    }, React.createElement(GlobalNavigationBarLink, {
      label: "Actions",
      onClick: linkClicked('Link clicked')
    }), React.createElement(GlobalNavigationBarButton, {
      active: true,
      label: "Button",
      id: "global-nav__button",
      onClick: buttonClicked('Button clicked')
    }), React.createElement(GlobalNavigationBarLabel, {
      dividerPosition: "left",
      label: "Vandelay Enterprises"
    }))))));
    afterEach(unmountComponent);
    it('has 1 primary, 1 secondary, and 1 tertiary region', function () {
      var primary = this.wrapper.find(".".concat(REGION_CSS_CLASSES.primary));
      expect(primary).to.have.length(1);
      var secondary = this.wrapper.find(".".concat(REGION_CSS_CLASSES.secondary));
      expect(secondary).to.have.length(1);
      var tertiary = this.wrapper.find(".".concat(REGION_CSS_CLASSES.tertiary));
      expect(tertiary).to.have.length(1);
    });
    it('Primary region has divider on right due to secondary region', function () {
      var primary = this.wrapper.find(".".concat(REGION_CSS_CLASSES.primary));
      expect(primary.nodes[0].className).to.include('slds-context-bar__item--divider-right');
    });
    it('Secondary region application is a nav HTML element and has divider on right side', function () {
      var nav = this.wrapper.find(".".concat(REGION_CSS_CLASSES.secondary));
      expect(nav.type()).to.equal('nav');
      expect(nav.node.className).to.include('slds-context-bar__item--divider-right');
    });
    it('displays active items as active', function () {
      var activeItems = this.wrapper.find('.slds-is-active');
      expect(activeItems).to.have.length(3);
    });
  });
  describe('Secondary Region', function () {
    beforeEach(mountComponent(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(GlobalNavigationBarRegion, {
      region: "secondary"
    }))));
    afterEach(unmountComponent);
    it('Secondary region application is div and not a nav', function () {
      var nav = this.wrapper.find(".".concat(REGION_CSS_CLASSES.secondary));
      expect(nav.type()).to.equal('div');
    });
  }); // TODO still need Dropdown covered. Should be added to Dropdown tests, once special context bar dropdown features are merged into Dropdown

  describe('GlobalNavigationLink child component', function () {
    var linkClicked;
    var link;
    beforeEach(function () {
      linkClicked = sinon.spy();
      var instance = React.createElement(GlobalNavigationBarLink, {
        href: "http://google.com",
        label: "Home",
        id: "home-link",
        onClick: linkClicked('Home link clicked')
      });
      this.wrapper = mount(instance, {
        attachTo: document.body.appendChild(document.createElement('div'))
      });
      link = this.wrapper.find('#home-link');
    });
    afterEach(function () {
      this.wrapper.unmount();
    });
    it('GlobalNavigationBarLink has attributes and onClick runs callback', function () {
      expect(link.text()).to.equal('Home');
      link.simulate('click');
      expect(linkClicked.calledOnce).to.be.true;
    });
    it('renders href if passed', function () {
      expect(link.find('a')).to.have.attr('href', 'http://google.com');
    });
  });
  describe('GlobalNavigationButton child component', function () {
    it('GlobalNavigationBarButton has attributes and onClick runs callback', function () {
      var buttonClicked = sinon.spy();
      var instance = React.createElement(GlobalNavigationBarButton, {
        label: "Button",
        id: "global-nav__button",
        onClick: buttonClicked('Button clicked')
      });
      this.wrapper = mount(instance, {
        attachTo: document.body.appendChild(document.createElement('div'))
      });
      var link = this.wrapper.find('#global-nav__button');
      expect(link.text()).to.equal('Button');
      link.simulate('click');
      expect(buttonClicked.calledOnce).to.be.true;
      this.wrapper.unmount();
    });
  });
  describe('GlobalNavigationLabel child component', function () {
    it('GlobalNavigationBarLabel has attributes', function () {
      var instance = React.createElement(GlobalNavigationBarLabel, {
        label: "Text",
        id: "test-text"
      });
      this.wrapper = mount(instance, {
        attachTo: document.body.appendChild(document.createElement('div'))
      });
      var item = this.wrapper.find('#test-text');
      expect(item.text()).to.equal('Text');
      this.wrapper.unmount();
    });
  });
});
//# sourceMappingURL=global-navigation-bar.browser-test.js.map