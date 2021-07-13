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
import shortId from 'shortid';
var RadioButton = (function (_super) {
    __extends(RadioButton, _super);
    function RadioButton(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnChange = _this.handleOnChange.bind(_this);
        return _this;
    }
    RadioButton.prototype.handleOnChange = function () {
        var _a = this.props, value = _a.value, onChange = _a.onChange;
        onChange(value);
    };
    RadioButton.prototype.render = function () {
        var _a = this.props, name = _a.name, label = _a.label, checked = _a.checked, description = _a.description;
        var id = shortId.generate();
        return (React.createElement("div", { className: "radio-container" },
            React.createElement("input", { id: id, name: name, type: "radio", checked: checked, onChange: this.handleOnChange }),
            React.createElement("label", { htmlFor: id }, label),
            description && React.createElement("div", { className: "radio-description" }, description)));
    };
    return RadioButton;
}(Component));
export { RadioButton };
//# sourceMappingURL=RadioButton.js.map