import * as React from 'react';
import { connect } from 'react-redux';
import { capturePage } from '../actions';
import * as PropTypes from 'prop-types';
export var FeedbackComponent = function (props) { return (React.createElement("div", { className: "imod-admin-feedback", "data-html2canvas-ignore": true },
    React.createElement("div", { className: "imod-admin-feedback-background" }),
    React.createElement("div", { className: "imod-admin-feedback-buttons" },
        props.displayProvideFeedbackUrl && React.createElement("a", { id: "aProvideFeedback", target: "_blank", href: props.provideFeedbackUrl, className: "imod-primary-action" }, "Provide Feedback"),
        props.displayReportIssueUrl && React.createElement("a", { id: "aReportIssue", target: "_blank", href: props.reportIssueUrl }, "Report Issue"),
        props.displayHelpUrl && React.createElement("a", { id: "aHelp", target: "_blank", href: props.helpUrl }, "Help / FAQ"),
        props.displayOnCapturePage && React.createElement("button", { id: "aCapturePage", onClick: props.onCapturePage })))); };
export var mapDispatchToProps = function (dispatch, ownProps) {
    var captureName = ownProps.captureName, captureElementId = ownProps.captureElementId;
    return {
        onCapturePage: function () { return dispatch(capturePage({ name: captureName, selectorId: captureElementId })); },
    };
};
export var Feedback = connect(null, mapDispatchToProps)(FeedbackComponent);
Feedback.propTypes = {
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