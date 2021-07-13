import React from 'react';
export var Label = function (_a) {
    var name = _a.name, required = _a.required, text = _a.text, _b = _a.parentElementType, parentElementType = _b === void 0 ? 'div' : _b;
    return parentElementType === 'fieldset'
        ? React.createElement(React.Fragment, null, text && React.createElement("legend", { className: "form-group-label", id: name + "_label" },
            text,
            required && React.createElement("span", { className: "required-message" }, "* required")))
        : React.createElement(React.Fragment, null, text && React.createElement("label", { htmlFor: name },
            text,
            required && React.createElement("span", { className: "required-message" }, "* required")));
};
Label.displayName = 'Label';
//# sourceMappingURL=Label.js.map