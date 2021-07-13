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
import React from 'react';
import { Link } from 'react-router-dom';
export var ContextMenu = function (_a) {
    var menuItemGroups = _a.menuItemGroups;
    return React.createElement("ul", null, menuItemGroups.map(function (menuItemGroup, groupIndex) { return (__spread(menuItemGroup.map(function (menuItem, itemIndex) {
        switch (menuItem.item.kind) {
            case 'link':
                return (React.createElement("li", { key: itemIndex },
                    React.createElement(Link, { to: menuItem.item.link }, menuItem.text)));
            case 'button':
                return (React.createElement("li", { key: itemIndex },
                    React.createElement("button", { type: "button", onClick: menuItem.item.onClick }, menuItem.text)));
        }
    }), [groupIndex < menuItemGroups.length - 1 ? React.createElement("li", { className: "separator" },
            React.createElement("hr", null)) : ''])); }));
};
ContextMenu.displayName = 'ContextMenu';
//# sourceMappingURL=ContextMenu.js.map