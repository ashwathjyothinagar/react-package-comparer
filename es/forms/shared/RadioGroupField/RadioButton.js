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
import React, { Component } from 'react';
var RadioButton = (function (_super) {
    __extends(RadioButton, _super);
    function RadioButton(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    RadioButton.prototype.handleClick = function () {
        var _a = this.props, onClick = _a.onClick, _b = _a.button, value = _b.value, disabled = _b.disabled;
        if (!disabled) {
            onClick(value);
        }
    };
    RadioButton.prototype.render = function () {
        var _a = this.props, id = _a.id, _b = _a.button, value = _b.value, label = _b.label, RadioContent = _b.RadioContent, optionDisabled = _b.disabled, checked = _a.checked, disabled = _a.disabled, hasFocus = _a.hasFocus;
        return (React.createElement("li", { key: id, id: id, role: "radio", "aria-checked": checked, "aria-disabled": disabled || optionDisabled, "data-value": value, onClick: this.handleClick, className: hasFocus ? 'radio-focus' : '' },
            React.createElement("span", null, label),
            RadioContent && React.createElement(RadioContent, null)));
    };
    return RadioButton;
}(Component));
export { RadioButton };
//# sourceMappingURL=RadioButton.js.map