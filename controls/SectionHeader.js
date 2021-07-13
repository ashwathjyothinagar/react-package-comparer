"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.SectionHeader = function (_a) {
    var text = _a.text;
    return react_1.default.createElement("div", { className: "section-header-container" },
        react_1.default.createElement("h2", null, text),
        react_1.default.createElement("div", { className: "section-header-line" }));
};
exports.SectionHeader.displayName = 'SectionHeader';
//# sourceMappingURL=SectionHeader.js.map