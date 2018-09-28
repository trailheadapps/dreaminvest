import React from 'react';
import { storiesOf } from '@storybook/react';
import { AVATAR } from '../../../utilities/constants';
import Base from '../__examples__/base';
import UserIcon from '../__examples__/user-icon.jsx';
import UserInitials from '../__examples__/user-initials.jsx';
import EntityIcon from '../__examples__/entity-icon.jsx';
import EntityInitials from '../__examples__/entity-initials.jsx';
/* eslint-disable react/display-name */

storiesOf(AVATAR, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, getStory());
}).add('Base', function () {
  return React.createElement("div", null, React.createElement("h1", {
    style: {
      marginBottom: '10px'
    }
  }, "Base Avatar"), React.createElement(Base, null));
}).add('Entity Icon', function () {
  return React.createElement("div", null, React.createElement("h1", {
    style: {
      marginBottom: '10px'
    }
  }, "Entity Icon Avatar"), React.createElement(EntityIcon, null));
}).add('Entity Initials', function () {
  return React.createElement("div", null, React.createElement("h1", {
    style: {
      marginBottom: '10px'
    }
  }, "Entity Initials Avatar"), React.createElement(EntityInitials, null));
}).add('User Icon', function () {
  return React.createElement("div", null, React.createElement("h1", {
    style: {
      marginBottom: '10px'
    }
  }, "User Icon Avatar"), React.createElement(UserIcon, null));
}).add('User Initials', function () {
  return React.createElement("div", null, React.createElement("h1", {
    style: {
      marginBottom: '10px'
    }
  }, "User Initials Avatar"), React.createElement(UserInitials, null));
});
//# sourceMappingURL=storybook-stories.js.map