import React from 'react';
import { Link } from 'react-router-dom';
export var NavigationStep = function (_a) {
    var label = _a.label, link = _a.link, type = _a.type;
    var className;
    switch (type) {
        case 'active':
            className = 'active';
            break;
        case 'past':
            className = '';
            break;
        case 'future':
            className = 'disabled';
            break;
    }
    return React.createElement("li", { className: className }, type === 'past' ? React.createElement(Link, { to: link }, label) : label);
};
NavigationStep.displayName = 'NavigationStep';
//# sourceMappingURL=NavigationStep.js.map