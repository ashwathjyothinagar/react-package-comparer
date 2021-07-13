import React from 'react';
export var OrderButtons = function (props) {
    return React.createElement("div", { className: "buttons-order" },
        React.createElement("button", { className: "move-top", type: "button", "aria-label": "Move Item to Top", disabled: props.disableMoveUp, onClick: props.onMoveToTop }),
        React.createElement("button", { className: "move-up", type: "button", "aria-label": "Move Item Up", disabled: props.disableMoveUp, onClick: props.onMoveUp }),
        React.createElement("button", { className: "move-down", type: "button", "aria-label": "Move Item Down", disabled: props.disableMoveDown, onClick: props.onMoveDown }),
        React.createElement("button", { className: "move-bottom", type: "button", "aria-label": "Move Item to Bottom", disabled: props.disableMoveDown, onClick: props.onMoveToBottom }));
};
OrderButtons.displayName = 'OrderButtons';
//# sourceMappingURL=OrderButtons.js.map