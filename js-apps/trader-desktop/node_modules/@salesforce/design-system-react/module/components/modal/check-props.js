/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable import/no-mutable-exports */

/* eslint-disable max-len */
import deprecatedProperty from '../../utilities/warning/deprecated-property';

var checkProps = function checkProps() {};

if (process.env.NODE_ENV !== 'production') {
  checkProps = function checkProps(COMPONENT, props) {
    deprecatedProperty(COMPONENT, props.closeButtonAssistiveText, 'closeButtonAssistiveText', "assistiveText['closeButton']");
  };
}

export default checkProps;
//# sourceMappingURL=check-props.js.map