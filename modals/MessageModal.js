"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var StyledModal_1 = require("./StyledModal");
exports.MessageModal = function (_a) {
    var closeCallback = _a.closeCallback, isOpen = _a.isOpen, contentLabel = _a.contentLabel, iconType = _a.iconType, message = _a.message, additionalButtons = _a.additionalButtons, OptionalComponent = _a.OptionalComponent;
    return react_1.default.createElement(StyledModal_1.StyledModal, { className: "message-modal", closeCallback: closeCallback, isOpen: isOpen, contentLabel: contentLabel, additionalButtons: additionalButtons },
        react_1.default.createElement("div", { className: "content" },
            react_1.default.createElement(exports.ModalIcon, { iconType: iconType }),
            OptionalComponent ? react_1.default.createElement(OptionalComponent, null) : react_1.default.createElement("div", { className: "message" }, message)));
};
exports.MessageModal.displayName = 'MessageModal';
exports.ModalIcon = function (props) {
    var icon;
    switch (props.iconType) {
        case 'warning': {
            icon = react_1.default.createElement("i", { className: 'modal-warning fa fa-exclamation-triangle fa-4x' });
            break;
        }
        case 'information': {
            icon = react_1.default.createElement("i", { className: 'modal-information fa fa-info-circle fa-4x' });
            break;
        }
        case 'error': {
            icon = react_1.default.createElement("i", { className: 'modal-error fa fa-exclamation-circle fa-4x' });
            break;
        }
        case 'success': {
            icon = react_1.default.createElement("i", { className: 'modal-success fa fa-check-circle fa-4x' });
            break;
        }
        default: {
            icon = null;
            break;
        }
    }
    return icon ? react_1.default.createElement("div", { className: "modal-icon" }, icon) : icon;
};
exports.ModalIcon.displayName = 'ModalIcon';
//# sourceMappingURL=MessageModal.js.map