import React from 'react';
import { StyledModal } from './StyledModal';
export var MessageModal = function (_a) {
    var closeCallback = _a.closeCallback, isOpen = _a.isOpen, contentLabel = _a.contentLabel, iconType = _a.iconType, message = _a.message, additionalButtons = _a.additionalButtons, OptionalComponent = _a.OptionalComponent;
    return React.createElement(StyledModal, { className: "message-modal", closeCallback: closeCallback, isOpen: isOpen, contentLabel: contentLabel, additionalButtons: additionalButtons },
        React.createElement("div", { className: "content" },
            React.createElement(ModalIcon, { iconType: iconType }),
            OptionalComponent ? React.createElement(OptionalComponent, null) : React.createElement("div", { className: "message" }, message)));
};
MessageModal.displayName = 'MessageModal';
export var ModalIcon = function (props) {
    var icon;
    switch (props.iconType) {
        case 'warning': {
            icon = React.createElement("i", { className: 'modal-warning fa fa-exclamation-triangle fa-4x' });
            break;
        }
        case 'information': {
            icon = React.createElement("i", { className: 'modal-information fa fa-info-circle fa-4x' });
            break;
        }
        case 'error': {
            icon = React.createElement("i", { className: 'modal-error fa fa-exclamation-circle fa-4x' });
            break;
        }
        case 'success': {
            icon = React.createElement("i", { className: 'modal-success fa fa-check-circle fa-4x' });
            break;
        }
        default: {
            icon = null;
            break;
        }
    }
    return icon ? React.createElement("div", { className: "modal-icon" }, icon) : icon;
};
ModalIcon.displayName = 'ModalIcon';
//# sourceMappingURL=MessageModal.js.map