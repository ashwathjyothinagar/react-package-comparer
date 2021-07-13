"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_select_1 = __importDefault(require("react-select"));
var functions_1 = require("./functions");
exports.SelectField = function (props) {
    var options = props.options, placeholder = props.placeholder, searchable = props.searchable, _a = props.labelKey, labelKey = _a === void 0 ? 'label' : _a, _b = props.valueKey, valueKey = _b === void 0 ? 'value' : _b, _c = props.matchProp, matchProp = _c === void 0 ? 'any' : _c, disabled = props.disabled, _d = props.clearable, clearable = _d === void 0 ? true : _d, name = props.name, value = props.value, onChange = props.onChange, _e = props.isMulti, isMulti = _e === void 0 ? false : _e;
    var id = functions_1.generateId(name);
    var handleChange = function (d) { return onChange(d !== null ? d[valueKey] : null); };
    return react_1.default.createElement(react_select_1.default, { name: name, instanceId: id, inputProps: { id: id }, value: value, options: options, onChange: handleChange, searchable: searchable, clearable: clearable, disabled: disabled, placeholder: placeholder, labelKey: labelKey, valueKey: valueKey, matchProp: matchProp, deleteRemoves: clearable, escapeClearsValue: clearable, backspaceRemoves: clearable, multi: isMulti });
};
exports.SelectField.displayName = 'SelectField';
//# sourceMappingURL=SelectField.js.map