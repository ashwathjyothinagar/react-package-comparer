import React from 'react';
export var GlobalBreadcrumbs = function (_a) {
    var links = _a.links;
    return React.createElement("div", { className: "global-breadcrumbs" }, links.map(function (link) { return React.createElement("a", { key: link.text, href: link.url }, link.text); }));
};
GlobalBreadcrumbs.displayName = 'GlobalBreadcrumbs';
//# sourceMappingURL=GlobalBreadcrumbs.js.map