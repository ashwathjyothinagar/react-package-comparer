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
var CheckboxField = (function (_super) {
    __extends(CheckboxField, _super);
    function CheckboxField(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        return _this;
    }
    CheckboxField.prototype.render = function () {
        var _a = this.props, name = _a.name, label = _a.label, value = _a.value, disabled = _a.disabled;
        return (React.createElement("div", { className: "two-state-checkbox" },
            React.createElement("div", { id: name + "_checkbox", tabIndex: 0, role: "checkbox", "aria-checked": Boolean(value), "aria-disabled": disabled, "data-value": Boolean(value), onClick: this.handleClick, onKeyDown: this.handleKeyDown }, label)));
    };
    CheckboxField.prototype.handleClick = function () {
        var _a = this.props, value = _a.value, onChange = _a.onChange;
        onChange(!Boolean(value));
    };
    CheckboxField.prototype.handleKeyDown = function (event) {
        switch (event.keyCode) {
            case keyCodes.Space:
            case keyCodes.Enter:
                this.handleClick();
                event.preventDefault();
                event.stopPropagation();
                return;
        }
    };
    CheckboxField.defaultProps = {
        value: false,
        disabled: false,
    };
    return CheckboxField;
}(Component));
export { CheckboxField };
//# sourceMappingURL=CheckboxField.js.map