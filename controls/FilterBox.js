"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.FilterBox = function (_a) {
    var onFilter = _a.onFilter, placeholder = _a.placeholder, value = _a.value;
    return react_1.default.createElement("div", { className: "input-group search-box-group" },
        react_1.default.createElement("span", { className: "input-group-addon" },
            react_1.default.createElement("i", { className: "fa fa-search" })),
        react_1.default.createElement("input", { className: "form-control", placeholder: placeholder, onInput: onFilter, type: "search", value: value }));
};
exports.FilterBox.displayName = 'FilterBox';
//# sourceMappingURL=FilterBox.js.map