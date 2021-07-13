import React from 'react';
export var ErrorMessage = function (_a) {
    var touched = _a.touched, error = _a.error;
    return React.createElement(React.Fragment, null, touched && error && React.createElement("span", { className: "form-error-message" }, error));
};
ErrorMessage.displayName = 'ErrorMessage';
//# sourceMappingURL=ErrorMessage.js.map