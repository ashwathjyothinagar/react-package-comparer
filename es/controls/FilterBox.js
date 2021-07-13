import React from 'react';
export var FilterBox = function (_a) {
    var onFilter = _a.onFilter, placeholder = _a.placeholder, value = _a.value;
    return React.createElement("div", { className: "input-group search-box-group" },
        React.createElement("span", { className: "input-group-addon" },
            React.createElement("i", { className: "fa fa-search" })),
        React.createElement("input", { className: "form-control", placeholder: placeholder, onInput: onFilter, type: "search", value: value }));
};
FilterBox.displayName = 'FilterBox';
//# sourceMappingURL=FilterBox.js.map