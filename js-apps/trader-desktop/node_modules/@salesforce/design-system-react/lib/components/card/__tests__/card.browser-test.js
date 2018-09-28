"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require("lodash.assign");

var _lodash2 = _interopRequireDefault(_lodash);

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _card = require("../../card");

var _card2 = _interopRequireDefault(_card);

var _filter = require("../../card/filter");

var _filter2 = _interopRequireDefault(_filter);

var _mediaObject = require("../../media-object");

var _icon = require("../../icon");

var _icon2 = _interopRequireDefault(_icon);

var _iconSettings = require("../../icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.should();

var headerIdSuffixes = {
  headerActions: '__header-actions',
  heading: '__heading',
  filter: '__filter-input'
};
var cardIdSuffixes = {
  body: '__body',
  headerActions: '__header-actions',
  heading: '__heading',
  filter: '__filter-input'
};
var cssClasses = {
  base: 'slds-card'
};
var footerCssClasses = {
  base: 'slds-card__footer'
};
var headerCssClasses = {
  base: 'slds-card__header'
};
describe('Card: ', function () {
  // Base defaults
  var requiredProps = {
    id: 'ExampleCard',
    heading: 'Lots of Related Items'
  };

  var renderCard = function renderCard(instance) {
    return function () {
      this.dom = document.createElement('div');
      document.body.appendChild(this.dom);
      this.component = _reactDom2.default.render(_react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, instance), this.dom);
    };
  };

  function removeCard() {
    _reactDom2.default.unmountComponentAtNode(this.dom);

    document.body.removeChild(this.dom);
  } // DOM queries, [0] present due to test framework, not because it returns a DOM collection


  var getCard = function getCard(dom) {
    return dom.querySelector(".".concat(cssClasses.base));
  };

  var getHeader = function getHeader(dom) {
    return getCard(dom).querySelectorAll(".".concat(headerCssClasses.base))[0];
  };

  var getHeaderActions = function getHeaderActions(dom) {
    return getHeader(dom).querySelectorAll("#".concat(requiredProps.id).concat(headerIdSuffixes.headerActions))[0];
  };

  var getFilter = function getFilter(dom) {
    return getHeader(dom).querySelectorAll('.slds-form-element')[0];
  };

  var getBody = function getBody(dom) {
    return getCard(dom).querySelectorAll("#".concat(requiredProps.id).concat(cardIdSuffixes.body))[0];
  };

  var getFooter = function getFooter(dom) {
    return getCard(dom).querySelectorAll(".".concat(footerCssClasses.base))[0];
  };

  var getEmptyBodyHeading = function getEmptyBodyHeading(dom) {
    return getBody(dom).querySelectorAll('h3')[0];
  }; // Tests


  describe('Default Structure', function () {
    beforeEach(renderCard(_react2.default.createElement(_card2.default, requiredProps)));
    afterEach(removeCard);
    it('has a header', function () {
      var header = getHeader(this.dom);
      header.should.not.be.undefined;
    });
    it('has a body', function () {
      var body = getBody(this.dom);
      body.should.not.be.undefined;
    });
    it('has the correct heading text', function () {
      var heading = getHeader(this.dom).querySelectorAll("#".concat(requiredProps.id).concat(cardIdSuffixes.heading))[0];
      heading.textContent = requiredProps.heading;
    });
  }); // Optional props

  var renderFooterContents = _react2.default.createElement('span', {
    id: 'sampleFooter'
  });

  var renderHeaderActions = _react2.default.createElement('span', {
    id: 'sampleHeaderActions'
  });

  var renderFilter = _react2.default.createElement(_filter2.default);

  var renderIcon = _react2.default.createElement(_icon2.default, {
    category: 'standard',
    name: 'default',
    size: 'small'
  });

  var optionalProps = (0, _lodash2.default)(requiredProps, {
    bodyClassName: 'this-is-a-custom-body-class',
    className: 'this-is-a-custom-card-class',
    footer: renderFooterContents,
    headerActions: renderHeaderActions,
    filter: renderFilter,
    icon: renderIcon,
    style: {
      background: 'rgb(18, 49, 35)'
    }
  });
  describe('Optional Structure', function () {
    beforeEach(renderCard(_react2.default.createElement(_card2.default, optionalProps)));
    afterEach(removeCard);
    it('has a header', function () {
      var header = getHeader(this.dom);
      header.should.not.be.undefined;
    });
    it('renders custom styles', function () {
      var card = getCard(this.dom);
      card.style.backgroundColor.should.equal('rgb(18, 49, 35)');
    });
    it('renders custom classes on card', function () {
      var card = getCard(this.dom);
      card.className.should.contain('this-is-a-custom-card-class');
    });
    it('renders custom classes on body', function () {
      var body = getBody(this.dom);
      body.className.should.contain('this-is-a-custom-body-class');
    });
    it('has a body', function () {
      var body = getBody(this.dom);
      body.should.not.be.undefined;
    });
    it('has an icon', function () {
      var header = getHeader(this.dom);
      var icon = header.querySelectorAll(".".concat(_mediaObject.cssClasses.figure))[0];
      icon.should.not.be.undefined;
    });
    it('has the default filter and correct ID', function () {
      var filter = getFilter(this.dom);
      filter.should.not.be.undefined;
    });
    it('has a footer and correct child ID', function () {
      var footer = getFooter(this.dom);
      footer.should.not.be.undefined;
      var footerChildren = footer.querySelectorAll('#sampleFooter')[0];
      footerChildren.should.not.be.undefined;
    });
    it('has header actions and correct child ID', function () {
      var headerActions = getHeaderActions(this.dom);
      headerActions.should.not.be.undefined;
      var headerActionsChildren = headerActions.querySelectorAll('#sampleHeaderActions')[0];
      headerActionsChildren.should.not.be.undefined;
    });
  });
  describe('Accepts a custom node as heading', function () {
    var props = {
      id: 'ExampleCard',
      heading: _react2.default.createElement("span", {
        id: "custom-heading",
        className: "slds-text-heading--small slds-truncate",
        style: {
          color: 'red'
        }
      }, "To Wanda! This is custom!")
    };
    beforeEach(renderCard(_react2.default.createElement(_card2.default, props)));
    afterEach(removeCard);
    it('has header with unique ID', function () {
      var heading = getCard(this.dom).querySelectorAll('#custom-heading')[0];
      heading.id.should.not.be.undefined;
    });
  });
  describe('Empty Structure', function () {
    var props = (0, _lodash2.default)(optionalProps, {
      empty: true
    });
    beforeEach(renderCard(_react2.default.createElement(_card2.default, props)));
    afterEach(removeCard);
    it('has a header', function () {
      var header = getHeader(this.dom);
      header.should.not.be.undefined;
    });
    it('has a body', function () {
      var body = getBody(this.dom);
      body.should.not.be.undefined;
    });
    it('has body heading based on heading of Card', function () {
      var emptyBodyheading = getEmptyBodyHeading(this.dom);
      emptyBodyheading.should.not.be.undefined;
      emptyBodyheading.textContent.should.equal(requiredProps.heading);
    });
  });
});