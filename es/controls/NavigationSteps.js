var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { NavigationStep } from './NavigationStep';
export var NavigationSteps = function (_a) {
    var steps = _a.steps;
    return React.createElement("ul", { className: "nav-steps" }, steps.map(function (step, index) {
        return React.createElement(NavigationStep, __assign({ key: index }, step));
    }));
};
NavigationSteps.displayName = 'NavigationSteps';
//# sourceMappingURL=NavigationSteps.js.map