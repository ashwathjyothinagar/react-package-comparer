var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { Component } from 'react';
import { Callout } from '../controls';
import { connect } from 'react-redux';
import { hideMessage } from './actions';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
var StatusMessage = (function (_super) {
    __extends(StatusMessage, _super);
    function StatusMessage(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClose = _this.handleClose.bind(_this);
        return _this;
    }
    StatusMessage.prototype.render = function () {
        var _a = this.props, message = _a.message, type = _a.type;
        return React.createElement(Callout, { type: type, onClose: this.handleClose }, message);
    };
    StatusMessage.prototype.handleClose = function () {
        var _a = this.props, onClose = _a.onClose, id = _a.id;
        onClose(id);
    };
    return StatusMessage;
}(Component));
export { StatusMessage };
export var StatusMessagesComponent = function (_a) {
    var messages = _a.messages, onClose = _a.onClose;
    return React.createElement(TransitionGroup, { className: "status-messages" }, messages && messages.map(function (message) {
        return React.createElement(CSSTransition, { key: message.id, classNames: "status-message", timeout: 250 },
            React.createElement(StatusMessage, __assign({}, message, { onClose: onClose })));
    }));
};
export var mapStateToProps = function (state) { return ({
    messages: state.status.messages,
}); };
export var mapDispatchToProps = function (dispatch) { return ({
    onClose: function (id) { return dispatch(hideMessage({ id: id })); },
}); };
export var StatusMessages = connect(mapStateToProps, mapDispatchToProps)(StatusMessagesComponent);
//# sourceMappingURL=StatusMessages.js.map