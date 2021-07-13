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
import React, { Component } from 'react';
import isEqual from 'react-fast-compare';
import { Checkbox } from './Checkbox';
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
            return selectedValues.findIndex(function (i) { return isEqual(i, checkboxValue); }) >= 0;
        };
        return (React.createElement("ul", { className: "two-state-checkbox-list" + (className ? " " + className : ''), "aria-disabled": disabled }, checkboxes.map(function (c, i) {
            return React.createElement(Checkbox, { key: name + "_" + i, id: name + "_" + i, checked: isChecked(c.value), disabled: disabled, checkbox: c, onChange: !disabled ? _this.handleChange : _this.noop });
        })));
    };
    CheckboxListField.prototype.handleChange = function (value) {
        var currentValues = this.props.value || [];
        var newValues = __spread(currentValues);
        var indexOfValue = newValues.findIndex(function (i) { return isEqual(i, value); });
        if (indexOfValue === -1) {
            newValues.push(value);
            this.props.onChange(newValues);
            return;
        }
        newValues.splice(indexOfValue, 1);
        this.props.onChange(newValues);
    };
    return CheckboxListField;
}(Component));
export { CheckboxListField };
//# sourceMappingURL=index.js.map