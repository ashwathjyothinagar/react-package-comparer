"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var PillListBoxItem_1 = require("./PillListBoxItem");
exports.PillListBox = function (props) {
    var items = props.items, onRemove = props.onRemove, maxItems = props.maxItems, invalidItems = props.invalidItems;
    return react_1.default.createElement("div", { className: "list-items-container" },
        react_1.default.createElement("ul", null, items && items.map(function (item) { return react_1.default.createElement(PillListBoxItem_1.PillListBoxItem, { key: item.label, isInvalid: invalidItems.map(function (invalidItem) { return invalidItem.label; }).indexOf(item.label) >= 0, item: item, onRemove: onRemove }); })),
        maxItems !== undefined && react_1.default.createElement("div", { className: "remaining-items" },
            Math.max(maxItems - items.length, 0),
            " of ",
            maxItems,
            " remaining"));
};
exports.PillListBox.displayName = 'PillListBox';
//# sourceMappingURL=index.js.map