/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable import/no-mutable-exports */
import deprecatedProperty from '../../utilities/warning/deprecated-property';
import oneOfComponent from '../../utilities/warning/one-of-component';

var checkProps = function checkProps() {};

if (process.env.NODE_ENV !== 'production') {
  checkProps = function checkProps(COMPONENT, props) {
    if (props.modalHeaderButton !== undefined) {
      oneOfComponent(COMPONENT, props, 'modalHeaderButton', ['SLDSButton']);
    }

    deprecatedProperty(COMPONENT, props.triggerAssistiveText, 'triggerAssistiveText', "assistiveText['trigger']");
  };
}

export default checkProps;
//# sourceMappingURL=check-props.js.map