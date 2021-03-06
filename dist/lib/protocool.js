"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Builds a default message signature for making the communication trackable
 * @param msg an IProtocoolMessage Object that has a type (default is default)
 * @returns JSON stringifed object
 */
function protocoolMessage(msg = { type: 'DEFAULT' }) {
    if (msg.hasOwnProperty('type') === false && typeof msg === 'object') {
        msg = Object.assign({}, msg, { type: 'DEFAULT' });
    }
    if (typeof msg === 'string') {
        msg = { type: 'DEFAULT', payload: msg };
    }
    return JSON.stringify(msg);
}
exports.default = protocoolMessage;
