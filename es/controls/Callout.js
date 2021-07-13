import React from 'react';
export var Callout = function (_a) {
    var type = _a.type, leadInText = _a.leadInText, onClose = _a.onClose, children = _a.children, className = _a.className;
    return React.createElement("div", { className: "callout-" + type + " callout" + (className ? " " + className : '') },
        leadInText && React.createElement("span", { className: "lead-in" + (className ? " " + className + "__lead-in" : '') }, leadInText),
        React.createElement("div", { className: "callout-content" + (className ? " " + className + "__content" : '') }, children),
        onClose && React.createElement("button", { onClick: onClose, className: "close" + (className ? " " + className + "__close" : '') }, "\u2573"));
};
Callout.displayName = 'Callout';
//# sourceMappingURL=Callout.js.map