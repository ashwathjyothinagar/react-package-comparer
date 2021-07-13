"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var controls_1 = require("../../controls");
exports.Buttons = function (props) {
    return react_1.default.createElement("div", { className: "form-row" },
        props.displayBackButton && react_1.default.createElement(controls_1.Button, { size: "large", styleType: "basic", onClick: props.onBack }, "Back"),
        props.displayNextButton && react_1.default.createElement(controls_1.Button, { size: "large", styleType: "primary", onClick: props.onNext }, "Next"),
        props.displaySaveButton && react_1.default.createElement(controls_1.Button, { size: "large", styleType: "success", onClick: props.onSubmit }, "Save"),
        react_1.default.createElement(controls_1.Button, { size: "large", styleType: "danger", onClick: props.onCancel }, "Cancel"));
};
exports.Buttons.displayName = 'Buttons';
//# sourceMappingURL=Buttons.js.map