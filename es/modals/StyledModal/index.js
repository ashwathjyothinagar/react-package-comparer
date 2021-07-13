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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from 'react';
import Modal from 'react-modal';
import shortId from 'shortid';
import { ModalButtons } from './ModalButtons';
var customStyles = {
    overlay: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,10,.5)',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 5,
    },
    content: {
        background: '#fff',
        bottom: '',
        borderRadius: '6px',
        boxShadow: '0 0 20px 5px rgba(0, 0, 0, .2)',
        display: 'flex',
        flexDirection: 'column',
        left: '0',
        padding: '0',
        position: 'relative',
        right: '0',
        top: '',
        transform: '',
        maxHeight: '100%',
    },
};
export var StyledModal = function (_a) {
    var isOpen = _a.isOpen, closeCallback = _a.closeCallback, children = _a.children, contentLabel = _a.contentLabel, _b = _a.additionalButtons, additionalButtons = _b === void 0 ? [] : _b, _c = _a.styles, styles = _c === void 0 ? customStyles : _c, otherProps = __rest(_a, ["isOpen", "closeCallback", "children", "contentLabel", "additionalButtons", "styles"]);
    var headerId = shortId.generate();
    return React.createElement(Modal, __assign({ portalClassName: 'imod-react-container' }, otherProps, { isOpen: isOpen, style: styles, "aria-labelledby": headerId }),
        React.createElement("div", { className: "modal-header" },
            React.createElement("h3", { id: headerId }, contentLabel),
            React.createElement("button", { className: "modal-close", onClick: closeCallback }, "\u2573")),
        React.createElement("div", { className: "modal-body" }, children),
        React.createElement("div", { className: "modal-footer" },
            React.createElement(ModalButtons, { closeCallback: closeCallback, additionalButtons: additionalButtons })));
};
StyledModal.displayName = 'StyledModal';
//# sourceMappingURL=index.js.map