import React from 'react';
import ProgressRing, { THEME_OPTIONS } from '../../../components/progress-ring';
import Icon from '../../../components/icon';
export var BASE_0 = function BASE_0() {
  return React.createElement(ProgressRing, {
    value: 0
  });
};
export var BASE_PARTIAL = function BASE_PARTIAL() {
  return React.createElement(ProgressRing, {
    value: 20
  });
};
export var BASE_100 = function BASE_100() {
  return React.createElement(ProgressRing, {
    value: 100
  });
};
export var COMPLETE_100 = function COMPLETE_100() {
  return React.createElement(ProgressRing, {
    value: 100,
    theme: THEME_OPTIONS.COMPLETE
  });
};
export var COMPLETE_WITH_ICON = function COMPLETE_WITH_ICON() {
  return React.createElement(ProgressRing, {
    value: 100,
    theme: THEME_OPTIONS.COMPLETE,
    hasIcon: true
  });
};
export var WARNING_PARTIAL = function WARNING_PARTIAL() {
  return React.createElement(ProgressRing, {
    value: 20,
    theme: THEME_OPTIONS.WARNING
  });
};
export var WARNING_WITH_ICON = function WARNING_WITH_ICON() {
  return React.createElement(ProgressRing, {
    value: 20,
    theme: THEME_OPTIONS.WARNING,
    hasIcon: true
  });
};
export var WARNING_100 = function WARNING_100() {
  return React.createElement(ProgressRing, {
    value: 100,
    theme: THEME_OPTIONS.WARNING
  });
};
export var EXPIRED_PARTIAL = function EXPIRED_PARTIAL() {
  return React.createElement(ProgressRing, {
    value: 20,
    theme: THEME_OPTIONS.EXPIRED
  });
};
export var EXPIRED_WITH_ICON = function EXPIRED_WITH_ICON() {
  return React.createElement(ProgressRing, {
    value: 20,
    theme: THEME_OPTIONS.EXPIRED,
    hasIcon: true
  });
};
export var EXPIRED_WITH_CUSTOM_ICON = function EXPIRED_WITH_CUSTOM_ICON() {
  return React.createElement(ProgressRing, {
    value: 20,
    theme: THEME_OPTIONS.EXPIRED,
    hasIcon: true,
    icon: React.createElement(Icon, {
      category: "utility",
      name: "lock"
    })
  });
};
export var EXPIRED_100 = function EXPIRED_100() {
  return React.createElement(ProgressRing, {
    value: 100,
    theme: THEME_OPTIONS.EXPIRED
  });
};
//# sourceMappingURL=examples.js.map