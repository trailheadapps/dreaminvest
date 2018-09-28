/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable consistent-return */
import React from 'react';
/**
 * Traverse all children
 */

function flatMapChildren(children, iterator) {
  var result = [];

  function go(xs) {
    return React.Children.map(xs, function (child) {
      result.push(iterator(child));
      if (child.type) go(child.props.children);
    });
  }

  go(children);
  return result;
}
/**
 * Perhaps there's a more pragmatic way to do this. Eventually, I suspect we'll have some utils to help find children.
 */


function hasChild(children, name) {
  var flag = false;
  flatMapChildren(children, function (child) {
    flag = flag || child.type && child.type.name === name;
  });
  return flag;
} // findDOMNode complains so filter out strings from virtual dom


function textContent(children) {
  return flatMapChildren(children, function (child) {
    // eslint-disable-line consistent-return
    if (typeof child === 'string') return child;
  }).join(' ');
}

var helpers = {
  textContent: textContent,
  hasChild: hasChild
};
export default helpers;
//# sourceMappingURL=dom.js.map