import React from 'react';
export var AdminBreadcrumbs = function (_a) {
    var breadcrumbs = _a.breadcrumbs;
    return React.createElement("ul", { className: "admin-breadcrumb" }, breadcrumbs.map(function (breadcrumb) { return React.createElement("li", { key: breadcrumb }, breadcrumb); }));
};
AdminBreadcrumbs.displayName = 'AdminBreadcrumbs';
//# sourceMappingURL=AdminBreadcrumbs.js.map