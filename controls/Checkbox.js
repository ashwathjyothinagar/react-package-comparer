"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var shortid_1 = __importDefault(require("shortid"));
var react_truncate_1 = __importDefault(require("react-truncate"));
exports.Checkbox = function (_a) {
    var label = _a.label, checked = _a.checked, onChange = _a.onChange, disabled = _a.disabled, hideLabel = _a.hideLabel, truncateLines = _a.truncateLines, backgroundColor = _a.backgroundColor, id = _a.id;
    id = id ? id : shortid_1.default.generate();
    var checkboxStyle = backgroundColor ?
        {
            backgroundColor: backgroundColor,
        }
        : undefined;
    var labelStyle = hideLabel ?
        {
            fontSize: '1em',
            marginBottom: '-0.275em',
        }
        : undefined;
    return react_1.default.createElement("div", { className: "checkbox" },
        react_1.default.createElement("input", { id: id, type: "checkbox", onChange: onChange, checked: checked, disabled: disabled }),
        react_1.default.createElement("div", { style: checkboxStyle }),
        react_1.default.createElement("label", { className: "checkbox__label", "aria-label": label, htmlFor: id, style: labelStyle },
            react_1.default.createElement("span", { className: "checkbox__truncate" }, !hideLabel && react_1.default.createElement(react_truncate_1.default, { lines: truncateLines || -1 }, label))));
};
exports.Checkbox.displayName = 'Checkbox';
//# sourceMappingURL=Checkbox.js.map