import React from 'react';
import shortId from 'shortid';
import Truncate from 'react-truncate';
export var Checkbox = function (_a) {
    var label = _a.label, checked = _a.checked, onChange = _a.onChange, disabled = _a.disabled, hideLabel = _a.hideLabel, truncateLines = _a.truncateLines, backgroundColor = _a.backgroundColor, id = _a.id;
    id = id ? id : shortId.generate();
    var checkboxStyle = backgroundColor ?
        {
            backgroundColor: backgroundColor,
        }
        : undefined;
    var labelStyle = hideLabel ?
        {
            fontSize: '1em',
            marginBottom: '-0.275em',
        }
        : undefined;
    return React.createElement("div", { className: "checkbox" },
        React.createElement("input", { id: id, type: "checkbox", onChange: onChange, checked: checked, disabled: disabled }),
        React.createElement("div", { style: checkboxStyle }),
        React.createElement("label", { className: "checkbox__label", "aria-label": label, htmlFor: id, style: labelStyle },
            React.createElement("span", { className: "checkbox__truncate" }, !hideLabel && React.createElement(Truncate, { lines: truncateLines || -1 }, label))));
};
Checkbox.displayName = 'Checkbox';
//# sourceMappingURL=Checkbox.js.map