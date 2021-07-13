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
var RadioButton_1 = require("./RadioButton");
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
        return (react_1.default.createElement("div", { className: "input-field-container" },
            react_1.default.createElement("label", null, label),
            react_1.default.createElement("div", { className: "radio-group" }, buttons.map(function (button, index) { return react_1.default.createElement(RadioButton_1.RadioButton, { key: index, checked: value === button.value, name: name, value: button.value, label: button.label, description: button.description, onChange: _this.handleChange }); }))));
    };
    return RadioGroup;
}(react_1.Component));
exports.RadioGroup = RadioGroup;
//# sourceMappingURL=RadioGroup.js.map