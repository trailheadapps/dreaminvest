"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _chaiEnzyme = require("chai-enzyme");

var _chaiEnzyme2 = _interopRequireDefault(_chaiEnzyme);

var _enzymeHelpers = require("../../../tests/enzyme-helpers");

var _globalNavigationBar = require("../../../utilities/sample-data/global-navigation-bar");

var _iconSettings = require("../../icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

var _globalNavigationBar2 = require("../../global-navigation-bar");

var _globalNavigationBar3 = _interopRequireDefault(_globalNavigationBar2);

var _region = require("../../global-navigation-bar/region");

var _region2 = _interopRequireDefault(_region);

var _dropdown = require("../../global-navigation-bar/dropdown");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _link = require("../../global-navigation-bar/link");

var _link2 = _interopRequireDefault(_link);

var _label = require("../../global-navigation-bar/label");

var _label2 = _interopRequireDefault(_label);

var _button = require("../../global-navigation-bar/button");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

_chai2.default.use((0, _chaiEnzyme2.default)());

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
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(_iconSettings2.default, {
      iconPath: "/assets/icons"
    }, _react2.default.createElement(_globalNavigationBar3.default, null, _react2.default.createElement(_region2.default, {
      region: "primary"
    })))));
    afterEach(_enzymeHelpers.unmountComponent);
    it('has wrapping div and one primary region', function () {
      var component = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.base));
      (0, _chai.expect)(component).to.have.length(1);
      var primary = this.wrapper.find(".".concat(REGION_CSS_CLASSES.primary));
      (0, _chai.expect)(primary).to.have.length(1);
    });
    it('Primary region DOES not have divider on right', function () {
      var primary = this.wrapper.find(".".concat(REGION_CSS_CLASSES.primary));
      (0, _chai.expect)(primary.nodes[0].className).to.not.include('slds-context-bar__item--divider-right');
    });
  });
  describe('Optional Properties', function () {
    var customCloudProps = _globalNavigationBar.propSets.customCloud.props;
    var customThemeProps = _globalNavigationBar.propSets.lightTheme.props;
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(_iconSettings2.default, {
      iconPath: "/assets/icons"
    }, _react2.default.createElement(_globalNavigationBar3.default, _extends({}, customCloudProps, customThemeProps)))));
    afterEach(_enzymeHelpers.unmountComponent);
    it('has custom cloud and theme CSS', function () {
      var component = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.base));
      (0, _chai.expect)(component.hasClass("".concat(COMPONENT_CSS_CLASSES.themePrefix).concat(customCloudProps.cloud))).to.be.true;
      (0, _chai.expect)(component.hasClass("".concat(COMPONENT_CSS_CLASSES.themePrefix).concat(customThemeProps.theme))).to.be.true;
    });
  });
  describe('Optional Region Structure', function () {
    var props = _globalNavigationBar.propSets.base.props;

    var buttonClicked = function buttonClicked() {};

    var linkClicked = function linkClicked() {};

    var dropdownItemClicked = function dropdownItemClicked() {};

    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(_iconSettings2.default, {
      iconPath: "/assets/icons"
    }, _react2.default.createElement(_globalNavigationBar3.default, props, _react2.default.createElement(_region2.default, {
      region: "primary"
    }), _react2.default.createElement(_region2.default, {
      region: "secondary",
      navigation: true,
      dividerPosition: "right"
    }, _react2.default.createElement(_link2.default, {
      label: "Home",
      id: "home-link",
      onClick: linkClicked('Home link clicked')
    }), _react2.default.createElement(_dropdown2.default, {
      assistiveText: "Open Menu",
      id: "primaryDropdown",
      label: "Global Navigation Menu Item 1",
      onSelect: dropdownItemClicked('Dropdown Menu Item clicked'),
      options: _globalNavigationBar.dropdownCollection
    }), _react2.default.createElement(_link2.default, {
      active: true,
      id: "menu-item-2",
      label: "Global Navigation Menu Item 2",
      onClick: linkClicked('Link clicked')
    }), _react2.default.createElement(_dropdown2.default, {
      active: true,
      assistiveText: "Open Menu",
      id: "primaryDropdownActive",
      label: "Global Navigation Menu Item 3",
      onSelect: dropdownItemClicked('Dropdown Menu Item clicked'),
      options: _globalNavigationBar.dropdownCollection
    })), _react2.default.createElement(_region2.default, {
      region: "tertiary"
    }, _react2.default.createElement(_link2.default, {
      label: "Actions",
      onClick: linkClicked('Link clicked')
    }), _react2.default.createElement(_button2.default, {
      active: true,
      label: "Button",
      id: "global-nav__button",
      onClick: buttonClicked('Button clicked')
    }), _react2.default.createElement(_label2.default, {
      dividerPosition: "left",
      label: "Vandelay Enterprises"
    }))))));
    afterEach(_enzymeHelpers.unmountComponent);
    it('has 1 primary, 1 secondary, and 1 tertiary region', function () {
      var primary = this.wrapper.find(".".concat(REGION_CSS_CLASSES.primary));
      (0, _chai.expect)(primary).to.have.length(1);
      var secondary = this.wrapper.find(".".concat(REGION_CSS_CLASSES.secondary));
      (0, _chai.expect)(secondary).to.have.length(1);
      var tertiary = this.wrapper.find(".".concat(REGION_CSS_CLASSES.tertiary));
      (0, _chai.expect)(tertiary).to.have.length(1);
    });
    it('Primary region has divider on right due to secondary region', function () {
      var primary = this.wrapper.find(".".concat(REGION_CSS_CLASSES.primary));
      (0, _chai.expect)(primary.nodes[0].className).to.include('slds-context-bar__item--divider-right');
    });
    it('Secondary region application is a nav HTML element and has divider on right side', function () {
      var nav = this.wrapper.find(".".concat(REGION_CSS_CLASSES.secondary));
      (0, _chai.expect)(nav.type()).to.equal('nav');
      (0, _chai.expect)(nav.node.className).to.include('slds-context-bar__item--divider-right');
    });
    it('displays active items as active', function () {
      var activeItems = this.wrapper.find('.slds-is-active');
      (0, _chai.expect)(activeItems).to.have.length(3);
    });
  });
  describe('Secondary Region', function () {
    beforeEach((0, _enzymeHelpers.mountComponent)(_react2.default.createElement(_iconSettings2.default, {
      iconPath: "/assets/icons"
    }, _react2.default.createElement(_region2.default, {
      region: "secondary"
    }))));
    afterEach(_enzymeHelpers.unmountComponent);
    it('Secondary region application is div and not a nav', function () {
      var nav = this.wrapper.find(".".concat(REGION_CSS_CLASSES.secondary));
      (0, _chai.expect)(nav.type()).to.equal('div');
    });
  }); // TODO still need Dropdown covered. Should be added to Dropdown tests, once special context bar dropdown features are merged into Dropdown

  describe('GlobalNavigationLink child component', function () {
    var linkClicked;
    var link;
    beforeEach(function () {
      linkClicked = sinon.spy();

      var instance = _react2.default.createElement(_link2.default, {
        href: "http://google.com",
        label: "Home",
        id: "home-link",
        onClick: linkClicked('Home link clicked')
      });

      this.wrapper = (0, _enzyme.mount)(instance, {
        attachTo: document.body.appendChild(document.createElement('div'))
      });
      link = this.wrapper.find('#home-link');
    });
    afterEach(function () {
      this.wrapper.unmount();
    });
    it('GlobalNavigationBarLink has attributes and onClick runs callback', function () {
      (0, _chai.expect)(link.text()).to.equal('Home');
      link.simulate('click');
      (0, _chai.expect)(linkClicked.calledOnce).to.be.true;
    });
    it('renders href if passed', function () {
      (0, _chai.expect)(link.find('a')).to.have.attr('href', 'http://google.com');
    });
  });
  describe('GlobalNavigationButton child component', function () {
    it('GlobalNavigationBarButton has attributes and onClick runs callback', function () {
      var buttonClicked = sinon.spy();

      var instance = _react2.default.createElement(_button2.default, {
        label: "Button",
        id: "global-nav__button",
        onClick: buttonClicked('Button clicked')
      });

      this.wrapper = (0, _enzyme.mount)(instance, {
        attachTo: document.body.appendChild(document.createElement('div'))
      });
      var link = this.wrapper.find('#global-nav__button');
      (0, _chai.expect)(link.text()).to.equal('Button');
      link.simulate('click');
      (0, _chai.expect)(buttonClicked.calledOnce).to.be.true;
      this.wrapper.unmount();
    });
  });
  describe('GlobalNavigationLabel child component', function () {
    it('GlobalNavigationBarLabel has attributes', function () {
      var instance = _react2.default.createElement(_label2.default, {
        label: "Text",
        id: "test-text"
      });

      this.wrapper = (0, _enzyme.mount)(instance, {
        attachTo: document.body.appendChild(document.createElement('div'))
      });
      var item = this.wrapper.find('#test-text');
      (0, _chai.expect)(item.text()).to.equal('Text');
      this.wrapper.unmount();
    });
  });
});