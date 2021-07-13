"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_switch_1 = __importDefault(require("react-switch"));
exports.SwitchField = function (props) {
    return react_1.default.createElement(react_switch_1.default, { id: props.name, onChange: props.onChange, checked: props.value || false, onColor: '#87d068', offColor: props.offColor ? props.offColor : '#ccc', checkedIcon: false, uncheckedIcon: false, height: 22, width: 44, disabled: props.disabled, handleDiameter: 18 });
};
exports.SwitchField.displayName = 'SwitchField';
//# sourceMappingURL=SwitchField.js.map