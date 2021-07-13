"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_csv_1 = require("react-csv");
exports.ExportButton = function (_a) {
    var data = _a.data, _b = _a.fileName, fileName = _b === void 0 ? 'File' : _b, onClick = _a.onClick, _c = _a.disabled, disabled = _c === void 0 ? false : _c, children = _a.children, _d = _a.type, type = _d === void 0 ? 'button' : _d, size = _a.size, styleType = _a.styleType, form = _a.form, styles = _a.styles;
    var buttonClasses = "imod-btn imod-btn-" + styleType + " imod-btn-" + size;
    return (react_1.default.createElement("button", { onClick: onClick, disabled: disabled, type: type, className: buttonClasses, form: form, style: styles },
        react_1.default.createElement(react_csv_1.CSVLink, { data: data, className: "imod-btn-export", filename: fileName }, children)));
};
exports.ExportButton.displayName = 'ExportButton';
//# sourceMappingURL=ExportButton.js.map