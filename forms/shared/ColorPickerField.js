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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_color_1 = require("react-color");
exports.toHslValue = function (value) { return (value * 100).toFixed(0); };
exports.toHslaString = function (color) { return color ? "hsla(" + color.h.toFixed(2) + "," + exports.toHslValue(color.s) + "%," + exports.toHslValue(color.l) + "%," + (color.a !== undefined ? color.a : 1) + ")" : undefined; };
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
        return react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "color-picker-button-container" },
                react_1.default.createElement("button", { type: "button", className: "color-picker-button", style: { backgroundColor: exports.toHslaString(value) }, onClick: this.handleButtonClick })),
            react_1.default.createElement("div", { className: "picker-container" },
                this.state.isOpen && react_1.default.createElement("div", { style: {
                        position: 'fixed',
                        top: '0px',
                        right: '0px',
                        bottom: '0px',
                        left: '0px',
                    }, onClick: this.closePicker }),
                this.state.isOpen && react_1.default.createElement(react_color_1.SketchPicker, { color: value, onChangeComplete: this.props.onChange })));
    };
    return ColorPickerField;
}(react_1.Component));
exports.ColorPickerField = ColorPickerField;
//# sourceMappingURL=ColorPickerField.js.map