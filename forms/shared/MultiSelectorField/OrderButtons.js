"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.OrderButtons = function (props) {
    return react_1.default.createElement("div", { className: "buttons-order" },
        react_1.default.createElement("button", { className: "move-top", type: "button", "aria-label": "Move Item to Top", disabled: props.disableMoveUp, onClick: props.onMoveToTop }),
        react_1.default.createElement("button", { className: "move-up", type: "button", "aria-label": "Move Item Up", disabled: props.disableMoveUp, onClick: props.onMoveUp }),
        react_1.default.createElement("button", { className: "move-down", type: "button", "aria-label": "Move Item Down", disabled: props.disableMoveDown, onClick: props.onMoveDown }),
        react_1.default.createElement("button", { className: "move-bottom", type: "button", "aria-label": "Move Item to Bottom", disabled: props.disableMoveDown, onClick: props.onMoveToBottom }));
};
exports.OrderButtons.displayName = 'OrderButtons';
//# sourceMappingURL=OrderButtons.js.map