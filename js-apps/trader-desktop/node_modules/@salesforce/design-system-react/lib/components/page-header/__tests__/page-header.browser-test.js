"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _chaiEnzyme = require("chai-enzyme");

var _chaiEnzyme2 = _interopRequireDefault(_chaiEnzyme);

var _iconSettings = require("../../icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

var _pageHeader = require("../../page-header");

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _buttonStateful = require("../../button-stateful");

var _buttonStateful2 = _interopRequireDefault(_buttonStateful);

var _buttonGroup = require("../../button-group");

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _button = require("../../button");

var _button2 = _interopRequireDefault(_button);

var _menuDropdown = require("../../menu-dropdown");

var _menuDropdown2 = _interopRequireDefault(_menuDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use((0, _chaiEnzyme2.default)());

var recordHomeContentRight = _react2.default.createElement("div", null, _react2.default.createElement(_buttonStateful2.default, {
  key: "PageHeaderFollowButton",
  disabled: false,
  iconSize: "medium",
  responsive: false,
  stateOne: {
    iconCategory: 'utility',
    iconName: 'add',
    label: 'Follow'
  },
  stateTwo: {
    iconCategory: 'utility',
    iconName: 'check',
    label: 'Following'
  },
  stateThree: {
    iconCategory: 'utility',
    iconName: 'close',
    label: 'Unfollow'
  }
}), _react2.default.createElement(_buttonGroup2.default, {
  key: ""
}, _react2.default.createElement(_button2.default, {
  label: "Edit"
}), _react2.default.createElement(_button2.default, {
  label: "Delete"
}), _react2.default.createElement(_button2.default, {
  label: "Clone"
}), _react2.default.createElement(_menuDropdown2.default, {
  assistiveText: "More Options",
  buttonVariant: "icon",
  iconCategory: "utility",
  iconName: "down",
  iconVariant: "border-filled",
  onSelect: function onSelect() {
    console.log('selected');
  },
  openOn: "click",
  align: "right",
  options: [{
    label: 'Disable',
    value: 'A0'
  }, {
    label: 'Promote',
    value: 'C0'
  }]
})));

var recordHomeDetails = [{
  label: 'Description',
  content: 'Description that demonstrates truncation with content. Description that demonstrates truncation with content.',
  flavor: '1-of-4',
  truncate: true
}, {
  label: 'Last Modified',
  content: 'August 31, 2016 2:01PM PST'
}, {
  label: 'Status',
  content: 'Status of thing you wanna know'
}];
describe('PageHeader: ', function () {
  var defaultPropsRecordHome = {
    iconAssistiveText: 'User',
    iconCategory: 'standard',
    iconName: 'user',
    label: 'Record Type',
    title: 'Record Title',
    variant: 'recordHome',
    contentRight: recordHomeContentRight,
    details: recordHomeDetails
  };
  describe('Renders basic props', function () {
    it('renders correct Icon prop', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, _react2.default.createElement(_pageHeader2.default, defaultPropsRecordHome)));
      var svg = wrapper.find('.slds-media__figure .slds-icon-standard-user');
      (0, _chai.expect)(svg).to.exist;
    });
    it('renders correct Label prop', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, _react2.default.createElement(_pageHeader2.default, defaultPropsRecordHome))); // Need to find the prop this way because PageHeader is being rendered inside of the IconSettings

      var childrenProps = wrapper.component.props.props.children.props;
      (0, _chai.expect)(childrenProps.label).to.equal('Record Type');
    });
    it('renders correct Title prop', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, _react2.default.createElement(_pageHeader2.default, defaultPropsRecordHome))); // Need to find the prop this way because PageHeader is being rendered inside of the IconSettings

      var childrenProps = wrapper.component.props.props.children.props;
      (0, _chai.expect)(childrenProps.title).to.equal('Record Title');
    });
    it('renders ContentRight prop', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, _react2.default.createElement(_pageHeader2.default, defaultPropsRecordHome)));
      var statefulBtn = wrapper.find('.slds-not-selected');
      var buttonGroup = wrapper.find('.slds-button-group');
      (0, _chai.expect)(statefulBtn).to.have.length(1);
      (0, _chai.expect)(buttonGroup).to.have.length(1);
    });
    it('renders Fields prop', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, _react2.default.createElement(_pageHeader2.default, defaultPropsRecordHome)));
      var field1Title = wrapper.find('.slds-text-title').first();
      var field1Content = wrapper.find('.slds-text-body--regular').first();
      (0, _chai.expect)(field1Title.text()).to.equal('Description');
      (0, _chai.expect)(field1Content.text()).to.equal('Description that demonstrates truncation with content. Description that demonstrates truncation with content.');
    });
  });
  describe('Truncation works in all the ways Donielle can think of', function () {
    it('field content truncates if this.props.truncate is true', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, _react2.default.createElement(_pageHeader2.default, defaultPropsRecordHome)));
      var field1Content = wrapper.find('.slds-text-body--regular').first();
      (0, _chai.expect)(field1Content.hasClass('slds-truncate')).to.equal(true);
    });
    /*
    it('field content does NOT show PopoverTooltip if text is NOT truncated', () => {
    	const wrapper = mount(<IconSettings iconPath="/assets/icons"><PageHeader {...defaultPropsRecordHome} />)
    	wrapper.update();
    	const nonTruncatedText = wrapper.find('.slds-text-body--regular').at(1);
    	expect(nonTruncatedText.node.tabIndex).to.equal(-1);
    });
    	it('field content shows PopoverTooltip if text truncates', () => {
    	const wrapper = mount(<IconSettings iconPath="/assets/icons"><PageHeader {...defaultPropsRecordHome} />)
    	wrapper.update();
    	const truncatedText = wrapper.find('.slds-text-body--regular').first();
    	expect(truncatedText.node.tabIndex).to.equal(0);
    });
    */
  });
});