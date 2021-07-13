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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var shortid_1 = __importDefault(require("shortid"));
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
        var id = shortid_1.default.generate();
        return (react_1.default.createElement("div", { className: "radio-container" },
            react_1.default.createElement("input", { id: id, name: name, type: "radio", checked: checked, onChange: this.handleOnChange }),
            react_1.default.createElement("label", { htmlFor: id }, label),
            description && react_1.default.createElement("div", { className: "radio-description" }, description)));
    };
    return RadioButton;
}(react_1.Component));
exports.RadioButton = RadioButton;
//# sourceMappingURL=RadioButton.js.map