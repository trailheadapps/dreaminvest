/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './index'; // This component should be deprecated and appears to have
// been created in order to do modals in portals.

var ModalTrigger = {
  open: function open(cfg) {
    var el = document.createElement('span');
    el.setAttribute('data-slds-modal', true);
    document.body.appendChild(el);
    var comp = React.createElement(Modal, {
      title: cfg.title,
      footer: cfg.footer,
      isOpen: true
    }, cfg.content);
    ReactDOM.render(comp, el);
  }
};
export default ModalTrigger;
//# sourceMappingURL=trigger.js.map