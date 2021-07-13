import React from 'react';
export var SelectorButtons = function (_a) {
    var onAdd = _a.onAdd, onRemove = _a.onRemove, disableAdd = _a.disableAdd, disableRemove = _a.disableRemove;
    return React.createElement("div", { className: "select-buttons-add-remove" },
        React.createElement("div", { className: "select-button-container" },
            React.createElement("button", { className: "add", type: "button", "aria-label": "Add Item", onClick: onAdd, disabled: disableAdd })),
        React.createElement("div", { className: "select-button-container" },
            React.createElement("button", { className: "remove", type: "button", "aria-label": "Remove Item", onClick: onRemove, disabled: disableRemove })));
};
SelectorButtons.displayName = 'SelectorButtons';
//# sourceMappingURL=SelectorButtons.js.map