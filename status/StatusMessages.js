"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var controls_1 = require("../controls");
var react_redux_1 = require("react-redux");
var actions_1 = require("./actions");
var react_transition_group_1 = require("react-transition-group");
var StatusMessage = (function (_super) {
    __extends(StatusMessage, _super);
    function StatusMessage(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClose = _this.handleClose.bind(_this);
        return _this;
    }
    StatusMessage.prototype.render = function () {
        var _a = this.props, message = _a.message, type = _a.type;
        return React.createElement(controls_1.Callout, { type: type, onClose: this.handleClose }, message);
    };
    StatusMessage.prototype.handleClose = function () {
        var _a = this.props, onClose = _a.onClose, id = _a.id;
        onClose(id);
    };
    return StatusMessage;
}(react_1.Component));
exports.StatusMessage = StatusMessage;
exports.StatusMessagesComponent = function (_a) {
    var messages = _a.messages, onClose = _a.onClose;
    return React.createElement(react_transition_group_1.TransitionGroup, { className: "status-messages" }, messages && messages.map(function (message) {
        return React.createElement(react_transition_group_1.CSSTransition, { key: message.id, classNames: "status-message", timeout: 250 },
            React.createElement(StatusMessage, __assign({}, message, { onClose: onClose })));
    }));
};
exports.mapStateToProps = function (state) { return ({
    messages: state.status.messages,
}); };
exports.mapDispatchToProps = function (dispatch) { return ({
    onClose: function (id) { return dispatch(actions_1.hideMessage({ id: id })); },
}); };
exports.StatusMessages = react_redux_1.connect(exports.mapStateToProps, exports.mapDispatchToProps)(exports.StatusMessagesComponent);
//# sourceMappingURL=StatusMessages.js.map