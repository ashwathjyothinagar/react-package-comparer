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
var react_redux_1 = require("react-redux");
var actions_1 = require("../actions");
var PropTypes = __importStar(require("prop-types"));
exports.FeedbackComponent = function (props) { return (React.createElement("div", { className: "imod-admin-feedback", "data-html2canvas-ignore": true },
    React.createElement("div", { className: "imod-admin-feedback-background" }),
    React.createElement("div", { className: "imod-admin-feedback-buttons" },
        props.displayProvideFeedbackUrl && React.createElement("a", { id: "aProvideFeedback", target: "_blank", href: props.provideFeedbackUrl, className: "imod-primary-action" }, "Provide Feedback"),
        props.displayReportIssueUrl && React.createElement("a", { id: "aReportIssue", target: "_blank", href: props.reportIssueUrl }, "Report Issue"),
        props.displayHelpUrl && React.createElement("a", { id: "aHelp", target: "_blank", href: props.helpUrl }, "Help / FAQ"),
        props.displayOnCapturePage && React.createElement("button", { id: "aCapturePage", onClick: props.onCapturePage })))); };
exports.mapDispatchToProps = function (dispatch, ownProps) {
    var captureName = ownProps.captureName, captureElementId = ownProps.captureElementId;
    return {
        onCapturePage: function () { return dispatch(actions_1.capturePage({ name: captureName, selectorId: captureElementId })); },
    };
};
exports.Feedback = react_redux_1.connect(null, exports.mapDispatchToProps)(exports.FeedbackComponent);
exports.Feedback.propTypes = {
    captureName: PropTypes.string.isRequired,
    captureElementId: PropTypes.string.isRequired,
    provideFeedbackUrl: PropTypes.string.isRequired,
    reportIssueUrl: PropTypes.string.isRequired,
    helpUrl: PropTypes.string.isRequired,
    displayProvideFeedbackUrl: PropTypes.bool.isRequired,
    displayReportIssueUrl: PropTypes.bool.isRequired,
    displayHelpUrl: PropTypes.bool.isRequired,
    displayOnCapturePage: PropTypes.bool.isRequired,
};
//# sourceMappingURL=Feedback.js.map