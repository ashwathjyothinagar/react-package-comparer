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
var Select = (function (_super) {
    __extends(Select, _super);
    function Select(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    Select.prototype.handleChange = function (e) {
        var onChange = this.props.onChange;
        onChange(e.currentTarget.value);
    };
    Select.prototype.render = function () {
        var _a = this.props, value = _a.value, children = _a.children;
        return (react_1.default.createElement("select", { value: value, onChange: this.handleChange, className: "form-control" }, children));
    };
    return Select;
}(react_1.Component));
exports.Select = Select;
//# sourceMappingURL=Select.js.map