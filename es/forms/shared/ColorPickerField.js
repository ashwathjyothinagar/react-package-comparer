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
import { SketchPicker } from 'react-color';
export var toHslValue = function (value) { return (value * 100).toFixed(0); };
export var toHslaString = function (color) { return color ? "hsla(" + color.h.toFixed(2) + "," + toHslValue(color.s) + "%," + toHslValue(color.l) + "%," + (color.a !== undefined ? color.a : 1) + ")" : undefined; };
var ColorPickerField = (function (_super) {
    __extends(ColorPickerField, _super);
    function ColorPickerField(props) {
        var _this = _super.call(this, props) || this;
        _this.handleButtonClick = function () {
            _this.setState({ isOpen: !_this.state.isOpen });
        };
        _this.closePicker = function () {
            _this.setState({ isOpen: false });
        };
        _this.state = {
            isOpen: false,
        };
        return _this;
    }
    ColorPickerField.prototype.render = function () {
        var value = this.props.value;
        return React.createElement(React.Fragment, null,
            React.createElement("div", { className: "color-picker-button-container" },
                React.createElement("button", { type: "button", className: "color-picker-button", style: { backgroundColor: toHslaString(value) }, onClick: this.handleButtonClick })),
            React.createElement("div", { className: "picker-container" },
                this.state.isOpen && React.createElement("div", { style: {
                        position: 'fixed',
                        top: '0px',
                        right: '0px',
                        bottom: '0px',
                        left: '0px',
                    }, onClick: this.closePicker }),
                this.state.isOpen && React.createElement(SketchPicker, { color: value, onChangeComplete: this.props.onChange })));
    };
    return ColorPickerField;
}(Component));
export { ColorPickerField };
//# sourceMappingURL=ColorPickerField.js.map