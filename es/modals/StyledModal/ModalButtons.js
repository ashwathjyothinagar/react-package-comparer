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
import { Button } from '../../controls/Button';
export var ModalButtons = function (_a) {
    var _b = _a.additionalButtons, additionalButtons = _b === void 0 ? [] : _b, closeCallback = _a.closeCallback;
    return React.createElement("div", { className: "buttons" },
        React.createElement(Button, { styleType: "basic", onClick: closeCallback, size: 'large' }, "Close"),
        additionalButtons.map(function (button) {
            return React.createElement(Button, __assign({ key: button.text }, button), button.text);
        }));
};
ModalButtons.displayName = 'ModalButtons';
//# sourceMappingURL=ModalButtons.js.map