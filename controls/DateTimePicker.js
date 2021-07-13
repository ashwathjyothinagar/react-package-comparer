"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var moment_1 = __importDefault(require("moment"));
var react_datetime_1 = __importDefault(require("react-datetime"));
exports.DateTimePicker = function (_a) {
    var label = _a.label, _b = _a.timeFormat, timeFormat = _b === void 0 ? true : _b, placeholder = _a.placeholder, value = _a.value, id = _a.id, onChange = _a.onChange;
    var inputProps = { placeholder: placeholder, id: id };
    var valuePass = value !== undefined && value !== '' ? moment_1.default(value).toDate() : undefined;
    return (react_1.default.createElement("div", { className: "date-picker-container" },
        react_1.default.createElement("label", { htmlFor: id }, label),
        react_1.default.createElement(react_datetime_1.default, { timeFormat: timeFormat, value: valuePass, inputProps: inputProps, onChange: onChange, closeOnSelect: true })));
};
exports.DateTimePicker.displayName = 'DateTimePicker';
//# sourceMappingURL=DateTimePicker.js.map