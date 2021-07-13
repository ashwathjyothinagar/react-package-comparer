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
var PillListBoxItem = (function (_super) {
    __extends(PillListBoxItem, _super);
    function PillListBoxItem(props) {
        var _this = _super.call(this, props) || this;
        _this.handleRemoveClick = _this.handleRemoveClick.bind(_this);
        return _this;
    }
    PillListBoxItem.prototype.render = function () {
        var _a = this.props, isInvalid = _a.isInvalid, item = _a.item;
        return (react_1.default.createElement("li", { className: isInvalid ? 'invalid' : '' },
            react_1.default.createElement("span", null, item.label),
            react_1.default.createElement("button", { type: "button", onClick: this.handleRemoveClick })));
    };
    PillListBoxItem.prototype.handleRemoveClick = function (e) {
        e.preventDefault();
        var _a = this.props, onRemove = _a.onRemove, item = _a.item;
        onRemove(item);
    };
    return PillListBoxItem;
}(react_2.Component));
exports.PillListBoxItem = PillListBoxItem;
//# sourceMappingURL=PillListBoxItem.js.map