"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_fast_compare_1 = __importDefault(require("react-fast-compare"));
var Checkbox_1 = require("./Checkbox");
var CheckboxListField = (function (_super) {
    __extends(CheckboxListField, _super);
    function CheckboxListField(props) {
        var _this = _super.call(this, props) || this;
        _this.noop = function () { return undefined; };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    CheckboxListField.prototype.render = function () {
        var _this = this;
        var _a = this.props, disabled = _a.disabled, checkboxes = _a.checkboxes, name = _a.name, value = _a.value, className = _a.className;
        var isChecked = function (checkboxValue) {
            if (!value) {
                return false;
            }
            var selectedValues = value;
            return selectedValues.findIndex(function (i) { return react_fast_compare_1.default(i, checkboxValue); }) >= 0;
        };
        return (react_1.default.createElement("ul", { className: "two-state-checkbox-list" + (className ? " " + className : ''), "aria-disabled": disabled }, checkboxes.map(function (c, i) {
            return react_1.default.createElement(Checkbox_1.Checkbox, { key: name + "_" + i, id: name + "_" + i, checked: isChecked(c.value), disabled: disabled, checkbox: c, onChange: !disabled ? _this.handleChange : _this.noop });
        })));
    };
    CheckboxListField.prototype.handleChange = function (value) {
        var currentValues = this.props.value || [];
        var newValues = __spread(currentValues);
        var indexOfValue = newValues.findIndex(function (i) { return react_fast_compare_1.default(i, value); });
        if (indexOfValue === -1) {
            newValues.push(value);
            this.props.onChange(newValues);
            return;
        }
        newValues.splice(indexOfValue, 1);
        this.props.onChange(newValues);
    };
    return CheckboxListField;
}(react_1.Component));
exports.CheckboxListField = CheckboxListField;
//# sourceMappingURL=index.js.map