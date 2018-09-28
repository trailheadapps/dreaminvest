/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable import/no-mutable-exports */
import urlExists from '../../../utilities/warning/url-exists';

var checkProps = function checkProps() {};

if (process.env.NODE_ENV !== 'production') {
  checkProps = function checkProps(COMPONENT, props) {
    if (!props.context["".concat(props.category, "Sprite")]) {
      var modifiedPath = props.path || props.context.iconPath;
      urlExists(COMPONENT, "".concat(modifiedPath, "/").concat(props.category, "-sprite/svg/symbols.svg#").concat(props.name));
    }
  };
}

export default checkProps;
//# sourceMappingURL=check-props.js.map