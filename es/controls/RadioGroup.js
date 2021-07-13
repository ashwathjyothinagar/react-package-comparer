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
import { RadioButton } from './RadioButton';
var RadioGroup = (function (_super) {
    __extends(RadioGroup, _super);
    function RadioGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    RadioGroup.prototype.handleChange = function (value) {
        var onChange = this.props.onChange;
        onChange(value);
    };
    RadioGroup.prototype.render = function () {
        var _this = this;
        var _a = this.props, name = _a.name, label = _a.label, value = _a.value, buttons = _a.buttons;
        return (React.createElement("div", { className: "input-field-container" },
            React.createElement("label", null, label),
            React.createElement("div", { className: "radio-group" }, buttons.map(function (button, index) { return React.createElement(RadioButton, { key: index, checked: value === button.value, name: name, value: button.value, label: button.label, description: button.description, onChange: _this.handleChange }); }))));
    };
    return RadioGroup;
}(Component));
export { RadioGroup };
//# sourceMappingURL=RadioGroup.js.map