import React from 'react';
import { PillListBoxItem } from './PillListBoxItem';
export var PillListBox = function (props) {
    var items = props.items, onRemove = props.onRemove, maxItems = props.maxItems, invalidItems = props.invalidItems;
    return React.createElement("div", { className: "list-items-container" },
        React.createElement("ul", null, items && items.map(function (item) { return React.createElement(PillListBoxItem, { key: item.label, isInvalid: invalidItems.map(function (invalidItem) { return invalidItem.label; }).indexOf(item.label) >= 0, item: item, onRemove: onRemove }); })),
        maxItems !== undefined && React.createElement("div", { className: "remaining-items" },
            Math.max(maxItems - items.length, 0),
            " of ",
            maxItems,
            " remaining"));
};
PillListBox.displayName = 'PillListBox';
//# sourceMappingURL=index.js.map