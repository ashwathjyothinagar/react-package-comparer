"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
exports.ContextMenu = function (_a) {
    var menuItemGroups = _a.menuItemGroups;
    return react_1.default.createElement("ul", null, menuItemGroups.map(function (menuItemGroup, groupIndex) { return (__spread(menuItemGroup.map(function (menuItem, itemIndex) {
        switch (menuItem.item.kind) {
            case 'link':
                return (react_1.default.createElement("li", { key: itemIndex },
                    react_1.default.createElement(react_router_dom_1.Link, { to: menuItem.item.link }, menuItem.text)));
            case 'button':
                return (react_1.default.createElement("li", { key: itemIndex },
                    react_1.default.createElement("button", { type: "button", onClick: menuItem.item.onClick }, menuItem.text)));
        }
    }), [groupIndex < menuItemGroups.length - 1 ? react_1.default.createElement("li", { className: "separator" },
            react_1.default.createElement("hr", null)) : ''])); }));
};
exports.ContextMenu.displayName = 'ContextMenu';
//# sourceMappingURL=ContextMenu.js.map