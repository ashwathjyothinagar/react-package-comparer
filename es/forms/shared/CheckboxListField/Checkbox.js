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
import React from 'react';
import { Component } from 'react';
import { Key as keyCodes } from 'ts-keycode-enum';
var Checkbox = (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { active: false };
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        return _this;
    }
    Checkbox.prototype.render = function () {
        var _a = this.props, id = _a.id, _b = _a.checkbox, label = _b.label, value = _b.value, checked = _a.checked, disabled = _a.disabled;
        return (React.createElement("li", { key: id + "_li", "aria-disabled": this.props.disabled },
            React.createElement("div", { id: id, tabIndex: 0, role: "checkbox", "aria-checked": checked, "aria-disabled": disabled, "data-value": typeof value === 'object' ? JSON.stringify(value) : value, onClick: this.handleClick, onKeyDown: this.handleKeyDown }, label)));
    };
    Checkbox.prototype.callOnChange = function (value) {
        var onChange = this.props.onChange;
        onChange(value);
    };
    Checkbox.prototype.handleClick = function () {
        var value = this.props.checkbox.value;
        this.callOnChange(value);
    };
    Checkbox.prototype.handleKeyDown = function (event) {
        var value = this.props.checkbox.value;
        switch (event.keyCode) {
            case keyCodes.Space:
            case keyCodes.Enter:
                this.callOnChange(value);
                event.preventDefault();
                event.stopPropagation();
                return;
        }
    };
    return Checkbox;
}(Component));
export { Checkbox };
//# sourceMappingURL=Checkbox.js.map