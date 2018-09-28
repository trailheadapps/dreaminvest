function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import createReactClass from 'create-react-class';
var Svg = createReactClass({
  displayName: 'Svg',
  getPaths: function getPaths(paths) {
    if (paths instanceof Array) {
      return paths.map(function (item) {
        return React.createElement("path", item);
      });
    }

    return React.createElement("path", _extends({
      key: "pathSVG"
    }, paths));
  },
  getCircles: function getCircles(circles) {
    if (circles instanceof Array) {
      return circles.map(function (item) {
        return React.createElement("circle", item);
      });
    }

    return React.createElement("circle", _extends({
      key: "circleSVG"
    }, circles));
  },
  getEllipses: function getEllipses(ellipses) {
    if (ellipses instanceof Array) {
      return ellipses.map(function (item) {
        return React.createElement("ellipse", item);
      });
    }

    return React.createElement("ellipse", _extends({
      key: "ellipseSVG"
    }, ellipses));
  },
  getGroups: function getGroups(groups) {
    var _this = this;

    if (groups instanceof Array) {
      return groups.map(function (item) {
        return React.createElement("g", null, _this.getShapes(item));
      });
    }

    return React.createElement("g", {
      key: "groupsSVG"
    }, this.getShapes(groups));
  },
  getShapes: function getShapes(data) {
    var shapes = [];

    if (data) {
      if (data.g) {
        shapes.push(this.getGroups(data.g));
      }

      if (data.ellipse) {
        shapes.push(this.getEllipses(data.ellipse));
      }

      if (data.circle) {
        shapes.push(this.getCircles(data.circle));
      }

      if (data.path) {
        shapes.push(this.getPaths(data.path));
      }
    }

    return shapes;
  },
  getSVG: function getSVG(_ref, props) {
    var viewBox = _ref.viewBox,
        rest = _objectWithoutProperties(_ref, ["viewBox"]);

    return React.createElement("svg", {
      "aria-hidden": props['aria-hidden'],
      className: props.className,
      viewBox: viewBox,
      name: props.name,
      style: props.style
    }, this.getShapes(rest));
  },
  render: function render() {
    var _props = this.props,
        data = _props.data,
        props = _objectWithoutProperties(_props, ["data"]);

    return data ? this.getSVG(data, props) : null;
  }
});
export default Svg;
//# sourceMappingURL=svg.js.map