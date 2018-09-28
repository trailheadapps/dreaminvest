function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/display-name, jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconSettings from '../../icon-settings';
import { POPOVER_TOOLTIP } from '../../../utilities/constants';
import PopoverTooltip from '../../popover-tooltip';
import ButtonGroupExample from '../__examples__/button-group';
import ButtonExample from '../__examples__/button';
import LearnMoreExample from '../__examples__/learn-more';
import Icon from '../../icon';
import Button from '../../button';

var getPopoverTooltip = function getPopoverTooltip(props) {
  return React.createElement(PopoverTooltip, props, React.createElement(Button, {
    label: "Trigger Tooltip"
  }));
};

var getPopoverTooltipAlign = function getPopoverTooltipAlign(props) {
  /* eslint-disable react/prop-types */
  var children = [];
  var align = ['top', 'top left', 'top right', 'right', 'right top', 'right bottom', 'bottom', 'bottom left', 'bottom right', 'left', 'left top', 'left bottom'];
  align.forEach(function (value) {
    children.push(React.createElement("div", {
      key: value,
      style: {
        margin: '100px auto'
      }
    }, React.createElement(PopoverTooltip, _extends({}, props, {
      align: value
    }), props.trigger)));
  });
  return React.createElement("div", {
    key: "container"
  }, children);
};

storiesOf(POPOVER_TOOLTIP, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium slds-m-horizontal--x-large",
    style: {
      margin: '150px auto',
      width: '500px'
    }
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base', function () {
  return getPopoverTooltip({
    align: 'bottom',
    id: 'myPopoverId',
    content: 'wjeifowejfiwoefjweoifjweiofjweiofwjefiowejfiowejfiowefjweiofjweiofjweiofjiwoefjowiefjoiwejfiowejfoie'
  });
}).add('Learn More', function () {
  return React.createElement(LearnMoreExample, null);
}).add('Button Group', function () {
  return React.createElement(ButtonGroupExample, null);
}).add('Button', function () {
  return React.createElement(ButtonExample, null);
}).add('Open', function () {
  return getPopoverTooltip({
    align: 'bottom',
    isOpen: true,
    id: 'myPopoverId',
    content: 'wjeifowejfiwoefjweoifjweiofjweiofwjefiowejfiowejfiowefjweiofjweiofjweiofjiwoefjowiefjoiwejfiowejfoie'
  });
}).add('Alignment (Button)', function () {
  return getPopoverTooltipAlign({
    id: 'myPopoverId',
    isOpen: true,
    content: 'wjeifowejfiwoefjweoifjweiofjweiofwjefiowejfiowejfiowefjweiofjweiofjweiofjiwoefjowiefjoiwejfiowejfoie',
    trigger: React.createElement(Button, {
      label: "Trigger Tooltip"
    })
  });
}).add('Alignment (span)', function () {
  return getPopoverTooltipAlign({
    id: 'myPopoverId',
    isOpen: true,
    content: 'wjeifowejfiwoefjweoifjweiofjweiofwjefiowejfiowejfiowefjweiofjweiofjweiofjiwoefjowiefjoiwejfiowejfoie',
    trigger: React.createElement("span", {
      tabIndex: "0",
      key: "trigger"
    }, "Trigger Tooltip")
  });
}).add('Alignment (icon)', function () {
  return getPopoverTooltipAlign({
    id: 'myPopoverId',
    isOpen: true,
    content: React.createElement("span", null, React.createElement(Icon, {
      category: "utility",
      inverse: true,
      name: "close",
      size: "x-small"
    }), "wjeifowejfiwoefjweoifjweiofjweiofwjefiowejfiowejfiowefjweiofjweiofjweiofjiwoefjowiefjoiwejfiowejfoie"),
    // react/no-unescaped-entities
    trigger: React.createElement(Icon, {
      assistiveText: "Case Icon",
      category: "standard",
      name: "case",
      size: "small",
      tabIndex: "0"
    })
  });
});
//# sourceMappingURL=storybook-stories.js.map