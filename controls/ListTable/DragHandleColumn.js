"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ListTableColumn_1 = require("./ListTableColumn");
exports.DragHandleColumn = function () {
    return react_1.default.createElement(ListTableColumn_1.ListTableColumn, { style: { maxWidth: '30px' }, isDragHandle: true },
        react_1.default.createElement("span", { className: "fa fa-bars", style: { maxWidth: '30px', opacity: .8 } }));
};
exports.DragHandleColumn.displayName = 'DragHandleColumn';
//# sourceMappingURL=DragHandleColumn.js.map