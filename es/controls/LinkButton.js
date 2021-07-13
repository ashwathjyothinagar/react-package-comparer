import React from 'react';
import { NavLink } from 'react-router-dom';
export var LinkButton = function (_a) {
    var children = _a.children, size = _a.size, style = _a.style, to = _a.to, isAbsolute = _a.isAbsolute, styles = _a.styles;
    var buttonClasses = "imod-btn imod-btn-" + style + " imod-btn-" + size;
    return (isAbsolute ?
        React.createElement("a", { href: to, className: buttonClasses, style: styles }, children)
        :
            React.createElement(NavLink, { className: buttonClasses, to: to, activeStyle: styles }, children));
};
LinkButton.displayName = 'LinkButton';
//# sourceMappingURL=LinkButton.js.map