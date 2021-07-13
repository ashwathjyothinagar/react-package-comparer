import React from 'react';
import Helmet from 'react-helmet';
export var PageHeader = function (_a) {
    var title = _a.title, className = _a.className;
    return React.createElement("div", null,
        React.createElement(Helmet, { title: title }),
        React.createElement("h1", { className: className }, title));
};
PageHeader.displayName = 'PageHeader';
//# sourceMappingURL=PageHeader.js.map