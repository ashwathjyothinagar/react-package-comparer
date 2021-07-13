"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var StatusMessages_1 = require("./StatusMessages");
var react_redux_1 = require("react-redux");
var selectors_1 = require("./selectors");
var controls_1 = require("../controls");
exports.ToastStatusComponent = function (_a) {
    var isInBlockingCall = _a.isInBlockingCall, hasSpinners = _a.hasSpinners;
    return React.createElement("div", { className: "toast-container" },
        React.createElement(StatusMessages_1.StatusMessages, null),
        React.createElement(controls_1.Async, { spinnerContext: "page", isLoading: isInBlockingCall || hasSpinners },
            React.createElement(React.Fragment, null)));
};
exports.mapStateToProps = function (state) { return ({
    isInBlockingCall: state.status.blockingCalls > 0,
    hasSpinners: selectors_1.getActiveSpinners(state).length > 0,
}); };
exports.ToastStatus = react_redux_1.connect(exports.mapStateToProps)(exports.ToastStatusComponent);
//# sourceMappingURL=ToastStatus.js.map