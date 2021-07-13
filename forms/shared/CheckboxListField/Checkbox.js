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
        return (react_1.default.createElement("li", { key: id + "_li", "aria-disabled": this.props.disabled },
            react_1.default.createElement("div", { id: id, tabIndex: 0, role: "checkbox", "aria-checked": checked, "aria-disabled": disabled, "data-value": typeof value === 'object' ? JSON.stringify(value) : value, onClick: this.handleClick, onKeyDown: this.handleKeyDown }, label)));
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
            case ts_keycode_enum_1.Key.Space:
            case ts_keycode_enum_1.Key.Enter:
                this.callOnChange(value);
                event.preventDefault();
                event.stopPropagation();
                return;
        }
    };
    return Checkbox;
}(react_2.Component));
exports.Checkbox = Checkbox;
//# sourceMappingURL=Checkbox.js.map