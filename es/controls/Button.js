import React from 'react';
export var Button = function (_a) {
    var onClick = _a.onClick, _b = _a.disabled, disabled = _b === void 0 ? false : _b, children = _a.children, _c = _a.type, type = _c === void 0 ? 'button' : _c, size = _a.size, styleType = _a.styleType, form = _a.form, styles = _a.styles;
    var buttonClasses = "imod-btn imod-btn-" + styleType + " imod-btn-" + size;
    return (React.createElement("button", { onClick: onClick, disabled: disabled, type: type, className: buttonClasses, form: form, style: styles }, children));
};
Button.displayName = 'Button';
//# sourceMappingURL=Button.js.map