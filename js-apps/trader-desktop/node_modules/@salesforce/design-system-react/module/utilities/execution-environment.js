/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var canUseEventListeners = canUseDOM && !!(window.addEventListener || window.attachEvent);
var canUseViewport = canUseDOM && !!window.screen;
export { canUseDOM, canUseEventListeners, canUseViewport };
//# sourceMappingURL=execution-environment.js.map