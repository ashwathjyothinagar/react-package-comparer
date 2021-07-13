"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
exports.NavigationStep = function (_a) {
    var label = _a.label, link = _a.link, type = _a.type;
    var className;
    switch (type) {
        case 'active':
            className = 'active';
            break;
        case 'past':
            className = '';
            break;
        case 'future':
            className = 'disabled';
            break;
    }
    return react_1.default.createElement("li", { className: className }, type === 'past' ? react_1.default.createElement(react_router_dom_1.Link, { to: link }, label) : label);
};
exports.NavigationStep.displayName = 'NavigationStep';
//# sourceMappingURL=NavigationStep.js.map