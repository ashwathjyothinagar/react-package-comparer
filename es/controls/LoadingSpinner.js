import React from 'react';
export var LoadingSpinner = function (_a) {
    var context = _a.context;
    return React.createElement("div", { className: "loading-spinner" + (context === 'page' ? ' loading-spinner--page' : '') },
        React.createElement("i", { className: "fa fa-spinner fa-pulse fa-3x fa-fw" }));
};
LoadingSpinner.displayName = 'LoadingSpinner';
//# sourceMappingURL=LoadingSpinner.js.map