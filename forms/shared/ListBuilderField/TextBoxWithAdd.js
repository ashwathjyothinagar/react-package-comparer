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
var TextBoxWithAdd = (function (_super) {
    __extends(TextBoxWithAdd, _super);
    function TextBoxWithAdd(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { textValue: '' };
        _this.handleAdd = _this.handleAdd.bind(_this);
        _this.handleTextValueChange = _this.handleTextValueChange.bind(_this);
        _this.handleKeyPress = _this.handleKeyPress.bind(_this);
        return _this;
    }
    TextBoxWithAdd.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "text-add-field input-group" },
            react_1.default.createElement("input", { type: "text", value: this.state.textValue, onChange: this.handleTextValueChange, onKeyPress: this.handleKeyPress, className: "form-control" }),
            react_1.default.createElement("span", { className: "input-group-btn" },
                react_1.default.createElement("button", { onClick: this.handleAdd, className: "btn btn-primary", type: "button" }, "Add"))));
    };
    TextBoxWithAdd.prototype.handleAdd = function (e) {
        e.preventDefault();
        if (this.state.textValue) {
            this.props.onAdd(this.state.textValue);
            this.setState({ textValue: '' });
        }
    };
    TextBoxWithAdd.prototype.handleTextValueChange = function (e) {
        this.setState({ textValue: e.currentTarget.value });
    };
    TextBoxWithAdd.prototype.handleKeyPress = function (e) {
        if (e.charCode === 13) {
            this.handleAdd(e);
        }
    };
    return TextBoxWithAdd;
}(react_2.Component));
exports.TextBoxWithAdd = TextBoxWithAdd;
//# sourceMappingURL=TextBoxWithAdd.js.map