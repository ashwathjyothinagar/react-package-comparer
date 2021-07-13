"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.LoadingSpinner = function (_a) {
    var context = _a.context;
    return react_1.default.createElement("div", { className: "loading-spinner" + (context === 'page' ? ' loading-spinner--page' : '') },
        react_1.default.createElement("i", { className: "fa fa-spinner fa-pulse fa-3x fa-fw" }));
};
exports.LoadingSpinner.displayName = 'LoadingSpinner';
//# sourceMappingURL=LoadingSpinner.js.map