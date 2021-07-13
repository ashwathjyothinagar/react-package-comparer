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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Component } from 'react';
import { generateId } from './functions';
import DateTimePicker from 'react-datetime';
export var DefaultDateFormat = 'M/D/YYYY';
export var DefaultTimeFormat = 'h:mm A';
export var DefaultDateTimeFormat = DefaultDateFormat + " " + DefaultTimeFormat;
var DateFieldBase = (function (_super) {
    __extends(DateFieldBase, _super);
    function DateFieldBase(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            formatString: (_this.timeFormat()) ? _this.props.dateFormat + " " + _this.timeFormat() : _this.props.dateFormat,
        };
        _this.timeFormat = _this.timeFormat.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    DateFieldBase.prototype.render = function () {
        var _a = this.props, required = _a.required, label = _a.label, placeholder = _a.placeholder, name = _a.name, value = _a.value, isValidDate = _a.isValidDate;
        var id = generateId(name);
        var inputProps = { placeholder: placeholder, id: id, label: label, required: required };
        return (React.createElement(DateTimePicker, { renderInput: this.renderInput, inputProps: inputProps, timeFormat: this.timeFormat(), value: value, onChange: this.handleChange, closeOnSelect: true, isValidDate: isValidDate }));
    };
    DateFieldBase.prototype.timeFormat = function () {
        return false;
    };
    DateFieldBase.prototype.renderInput = function (props, openCalendar) {
        var required = props.required, label = props.label, otherProps = __rest(props, ["required", "label"]);
        return (React.createElement("div", { className: "date-picker-container" },
            React.createElement("div", { className: "input-group" },
                React.createElement("input", __assign({}, otherProps)),
                React.createElement("span", { className: "input-group-btn" },
                    React.createElement("button", { tabIndex: -1, type: "button", className: "btn btn-primary", onClick: openCalendar },
                        React.createElement("i", { className: "fa fa-calendar" }),
                        React.createElement("span", { className: "hidden" }, label || 'label'))))));
    };
    DateFieldBase.prototype.handleChange = function (value) {
        this.props.onChange(value);
        this.props.onBlur(value);
    };
    DateFieldBase.defaultProps = {
        dateFormat: DefaultDateFormat,
    };
    return DateFieldBase;
}(Component));
export { DateFieldBase };
export var DateField = DateFieldBase;
//# sourceMappingURL=DateField.js.map