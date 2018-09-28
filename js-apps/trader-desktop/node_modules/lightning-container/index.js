/*
Copyright 2016 salesforce.com, inc. All rights reserved. 

Use of this software is subject to the salesforce.com Developerforce Terms of Use and other
applicable terms that salesforce.com may make available, as may be amended from time to time.
You may not decompile, reverse engineer, disassemble, attempt to derive the source code of,
decrypt, modify, or create derivative works of this software, updates thereto, or any part
thereof. You may not use the software to engage in any development activity that interferes
with, disrupts, damages, or accesses in an unauthorized manner the servers, networks, or
other properties or services of salesforce.com or any third party.

WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, THE SOFTWARE IS PROVIDED "AS IS", WITHOUT
WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. IN NO EVENT SHALL SALESFORCE.COM HAVE ANY LIABILITY
FOR ANY DAMAGES, INCLUDING BUT NOT LIMITED TO, DIRECT, INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE,
OR CONSEQUENTIAL DAMAGES, OR DAMAGES BASED ON LOST PROFITS, DATA OR USE, IN CONNECTION WITH THE
SOFTWARE, HOWEVER CAUSED AND, WHETHER IN CONTRACT, TORT OR UNDER ANY OTHER THEORY OF LIABILITY,
WHETHER OR NOT YOU HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
*/

'use strict';

module.exports.sendMessage = function(userMessage) {
    if (typeof LCC !== "undefined" && typeof LCC.onlineSupport !== "undefined") {
        LCC.onlineSupport.sendMessage("containerUserMessage", {payload: userMessage});
    }
    else {
        // TODO: offline
    }
}

module.exports.addErrorHandler = function(handler) {
    if (typeof LCC !== "undefined" && typeof LCC.onlineSupport !== "undefined") {
        LCC.onlineSupport.addErrorHandler(handler);
    }
    else {
        // TODO: offline
    }
}

module.exports.removeErrorHandler = function(handler) {
    if (typeof LCC !== "undefined" && typeof LCC.onlineSupport !== "undefined") {
        LCC.onlineSupport.removeErrorHandler(handler);
    }
    else {
        // TODO: offline
    }
}

module.exports.addMessageHandler = function(handler) {
    if (typeof LCC !== "undefined" && typeof LCC.onlineSupport !== "undefined") {
        LCC.onlineSupport.addMessageHandler(handler);
    }
    else {
        // TODO: offline
    }
}

module.exports.removeMessageHandler = function(handler) {
    if (typeof LCC !== "undefined" && typeof LCC.onlineSupport !== "undefined") {
        LCC.onlineSupport.removeMessageHandler(handler);
    }
    else {
        // TODO: offline
    }
}

module.exports.getRESTAPISessionKey = function() {
    if (typeof LCC !== "undefined" && typeof LCC.onlineSupport !== "undefined") {
        return LCC.onlineSupport.getRESTAPISessionKey();
    }
    else {
        // TODO: offline
        return "";
    }
}

module.exports.callApex = function(fullyQualifiedApexMethodName,
                                   apexMethodParameters,
                                   callbackFunction,
                                   apexCallConfiguration) {
    if (typeof Visualforce !== "undefined" && 
        typeof Visualforce.remoting !== "undefined" &&
        typeof Visualforce.remoting.Manager !== "undefined") {

            Visualforce.remoting.Manager.invokeAction(fullyQualifiedApexMethodName,
                                                      apexMethodParameters,
                                                      callbackFunction,
                                                      apexCallConfiguration);
    }
    else {
        // TODO: offline
    }
}