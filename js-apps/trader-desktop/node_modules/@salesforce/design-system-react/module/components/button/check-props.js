/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable import/no-mutable-exports */
import ifOneThenBothRequiredProperty from '../../utilities/warning/if-one-then-both-required-property';

var checkProps = function checkProps() {};

if (process.env.NODE_ENV !== 'production') {
  checkProps = function checkProps(COMPONENT, props) {
    /* eslint-disable max-len */
    // If iconName is set, iconCategory must also be set.
    ifOneThenBothRequiredProperty(COMPONENT, props, {
      iconName: props.iconName,
      iconCategory: props.iconCategory
    });
  };
}

export default checkProps;
//# sourceMappingURL=check-props.js.map