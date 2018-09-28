import React from 'react';
import { storiesOf } from '@storybook/react';
import IconSettings from '../../icon-settings';
import MediaObject from '../../media-object';
import Icon from '../../icon';
import { MEDIA_OBJECT } from '../../../utilities/constants';

var DemoMediaObject = function DemoMediaObject(props) {
  return React.createElement(MediaObject, props);
};

DemoMediaObject.displayName = 'DemoMediaObject';
storiesOf(MEDIA_OBJECT, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base', function () {
  return React.createElement(DemoMediaObject, {
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda.",
    figure: React.createElement(Icon, {
      category: "standard",
      name: "user",
      size: "medium"
    })
  });
}).add('Figure Vertical Center', function () {
  return React.createElement(DemoMediaObject, {
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda.",
    figure: React.createElement(Icon, {
      category: "standard",
      name: "user",
      size: "medium"
    }),
    verticalCenter: true
  });
});
//# sourceMappingURL=storybook-stories.js.map