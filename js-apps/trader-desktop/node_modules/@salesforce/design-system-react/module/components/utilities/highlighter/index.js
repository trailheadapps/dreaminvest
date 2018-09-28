/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### ReactHighlighter

import ReactHighlighter from 'react-highlighter'; // ## Constants

import { HIGHLIGHTER } from '../../../utilities/constants';
/**
 * A utility component that highlights occurrences of a particular pattern in its contents.
 */

var Highlighter = function Highlighter(props) {
  if (props.search) {
    var children;

    if (typeof props.children === 'string') {
      children = React.createElement(ReactHighlighter, {
        className: props.className,
        matchClass: null,
        matchElement: "mark",
        search: props.search,
        title: props.children
      }, props.children);
    } else {
      var findString = function findString(nodeArr) {
        return nodeArr.map(function (element) {
          var newElement;

          if (typeof element === 'string') {
            newElement = React.createElement(ReactHighlighter, {
              key: element,
              className: props.className,
              matchClass: null,
              matchElement: "mark",
              search: props.search,
              title: element
            }, element);
          } else {
            newElement = element;
          }

          return newElement;
        });
      };

      if (props.children.props) {
        var node = props.children.props.children;
        children = node instanceof Array ? findString(node) : node;
      }
    }

    return React.createElement("span", null, children);
  }

  if (typeof props.children === 'string') {
    return React.createElement("span", {
      className: props.className,
      title: props.children
    }, props.children);
  }

  return React.createElement("span", {
    className: props.className
  }, props.children);
}; // ### Display Name


Highlighter.displayName = HIGHLIGHTER; // ### Prop Types

Highlighter.propTypes = {
  /**
   * The full string to display.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.node]),
  className: PropTypes.string,

  /**
   * The string of text (or Regular Expression) to highlight.
   */
  search: PropTypes.any
};
export default Highlighter;
//# sourceMappingURL=index.js.map