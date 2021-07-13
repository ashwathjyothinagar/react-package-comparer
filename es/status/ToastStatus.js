import * as React from 'react';
import { StatusMessages } from './StatusMessages';
import { connect } from 'react-redux';
import { getActiveSpinners } from './selectors';
import { Async } from '../controls';
export var ToastStatusComponent = function (_a) {
    var isInBlockingCall = _a.isInBlockingCall, hasSpinners = _a.hasSpinners;
    return React.createElement("div", { className: "toast-container" },
        React.createElement(StatusMessages, null),
        React.createElement(Async, { spinnerContext: "page", isLoading: isInBlockingCall || hasSpinners },
            React.createElement(React.Fragment, null)));
};
export var mapStateToProps = function (state) { return ({
    isInBlockingCall: state.status.blockingCalls > 0,
    hasSpinners: getActiveSpinners(state).length > 0,
}); };
export var ToastStatus = connect(mapStateToProps)(ToastStatusComponent);
//# sourceMappingURL=ToastStatus.js.map