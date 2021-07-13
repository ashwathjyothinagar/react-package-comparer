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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var ts_keycode_enum_1 = require("ts-keycode-enum");
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
        return (react_1.default.createElement("div", { className: "two-state-checkbox" },
            react_1.default.createElement("div", { id: name + "_checkbox", tabIndex: 0, role: "checkbox", "aria-checked": Boolean(value), "aria-disabled": disabled, "data-value": Boolean(value), onClick: this.handleClick, onKeyDown: this.handleKeyDown }, label)));
    };
    CheckboxField.prototype.handleClick = function () {
        var _a = this.props, value = _a.value, onChange = _a.onChange;
        onChange(!Boolean(value));
    };
    CheckboxField.prototype.handleKeyDown = function (event) {
        switch (event.keyCode) {
            case ts_keycode_enum_1.Key.Space:
            case ts_keycode_enum_1.Key.Enter:
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
}(react_2.Component));
exports.CheckboxField = CheckboxField;
//# sourceMappingURL=CheckboxField.js.map