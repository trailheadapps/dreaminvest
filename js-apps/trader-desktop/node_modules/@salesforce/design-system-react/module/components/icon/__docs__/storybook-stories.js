import React from 'react';
import { storiesOf } from '@storybook/react';
import { ICON } from '../../../utilities/constants';
import Icon from '../../icon';
import IconSettings from '../../icon-settings';
import download from '../../../icons/utility/download';
import Standard from '../__examples__/standard';
import Utility from '../__examples__/utility';
import Action from '../__examples__/action';
import Doctype from '../__examples__/doctype';
import Custom from '../__examples__/custom';
import ExternalPath from '../__examples__/external-path';
import ColorBase from '../__examples__/color-base';
import ColorDefault from '../__examples__/color-default';
import ColorError from '../__examples__/color-error';
import ColorWarning from '../__examples__/color-warning';
import SizesExtraSmall from '../__examples__/sizes-extra-small';
import SizesSmall from '../__examples__/sizes-small';
import SizesMedium from '../__examples__/sizes-medium';
import SizesLarge from '../__examples__/sizes-large';
storiesOf(ICON, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Category: Standard', function () {
  return React.createElement(Standard, null);
}).add('Category: Utility', function () {
  return React.createElement(Utility, null);
}).add('Category: Action', function () {
  return React.createElement(Action, null);
}).add('Category: Doctype', function () {
  return React.createElement(Doctype, null);
}).add('Category: Custom', function () {
  return React.createElement(Custom, null);
}).add('Category: External Path', function () {
  return React.createElement(ExternalPath, null);
}).add('Size: X-Small', function () {
  return React.createElement(SizesExtraSmall, null);
}).add('Size: Small', function () {
  return React.createElement(SizesSmall, null);
}).add('Size: Medium (default)', function () {
  return React.createElement(SizesMedium, null);
}).add('Size: Large', function () {
  return React.createElement(SizesLarge, null);
}).add('Color: Base', function () {
  return React.createElement("div", {
    style: {
      backgroundColor: 'goldenrod',
      padding: '10px'
    }
  }, React.createElement(ColorBase, null));
}).add('Color: Default', function () {
  return React.createElement(ColorDefault, null);
}).add('Base: Standard (custom styles)', function () {
  return React.createElement(Icon, {
    assistiveText: "Account",
    category: "standard",
    name: "account",
    style: {
      backgroundColor: '#aceace',
      fill: 'orangered'
    },
    title: "This is a title"
  });
}).add('Base: Imported', function () {
  return React.createElement(Icon, {
    assistiveText: "Download",
    category: "utility",
    icon: download
  });
});
//# sourceMappingURL=storybook-stories.js.map