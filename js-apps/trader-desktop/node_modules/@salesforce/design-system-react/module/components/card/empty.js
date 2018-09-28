/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// ### React
// React is an external dependency of the project.
import React from 'react';
import PropTypes from 'prop-types';
import { CARD_EMPTY } from '../../utilities/constants';
/**
 * A default empty state for Cards.
 */

var CardEmpty = function CardEmpty(props) {
  return React.createElement("div", {
    className: "slds-p-horizontal--small"
  }, React.createElement("div", {
    className: "slds-text-align--center slds-m-bottom--x-large"
  }, React.createElement("h3", {
    className: "slds-text-heading--small slds-p-top--large slds-p-bottom--large"
  }, props.heading), props.children));
}; // ### Display Name
// Always use the canonical component name as the React display name.


CardEmpty.displayName = CARD_EMPTY; // ### Prop Types

CardEmpty.propTypes = {
  /**
   * Additional call to actions that will render under the heading. Often this is an "Add Item" button.
   */
  children: PropTypes.node,

  /**
   * Primary text for an Empty Card.
   */
  heading: PropTypes.string
};
CardEmpty.defaultProps = {
  heading: 'No Related Items'
};
export default CardEmpty;
//# sourceMappingURL=empty.js.map