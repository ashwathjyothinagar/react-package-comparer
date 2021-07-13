"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.SelectorButtons = function (_a) {
    var onAdd = _a.onAdd, onRemove = _a.onRemove, disableAdd = _a.disableAdd, disableRemove = _a.disableRemove;
    return react_1.default.createElement("div", { className: "select-buttons-add-remove" },
        react_1.default.createElement("div", { className: "select-button-container" },
            react_1.default.createElement("button", { className: "add", type: "button", "aria-label": "Add Item", onClick: onAdd, disabled: disableAdd })),
        react_1.default.createElement("div", { className: "select-button-container" },
            react_1.default.createElement("button", { className: "remove", type: "button", "aria-label": "Remove Item", onClick: onRemove, disabled: disableRemove })));
};
exports.SelectorButtons.displayName = 'SelectorButtons';
//# sourceMappingURL=SelectorButtons.js.map