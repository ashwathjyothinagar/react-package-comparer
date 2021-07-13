import React from 'react';
import { CSVLink } from 'react-csv';
export var ExportButton = function (_a) {
    var data = _a.data, _b = _a.fileName, fileName = _b === void 0 ? 'File' : _b, onClick = _a.onClick, _c = _a.disabled, disabled = _c === void 0 ? false : _c, children = _a.children, _d = _a.type, type = _d === void 0 ? 'button' : _d, size = _a.size, styleType = _a.styleType, form = _a.form, styles = _a.styles;
    var buttonClasses = "imod-btn imod-btn-" + styleType + " imod-btn-" + size;
    return (React.createElement("button", { onClick: onClick, disabled: disabled, type: type, className: buttonClasses, form: form, style: styles },
        React.createElement(CSVLink, { data: data, className: "imod-btn-export", filename: fileName }, children)));
};
ExportButton.displayName = 'ExportButton';
//# sourceMappingURL=ExportButton.js.map