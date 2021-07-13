import React from 'react';
import { Button } from '../../controls';
export var Buttons = function (props) {
    return React.createElement("div", { className: "form-row" },
        props.displayBackButton && React.createElement(Button, { size: "large", styleType: "basic", onClick: props.onBack }, "Back"),
        props.displayNextButton && React.createElement(Button, { size: "large", styleType: "primary", onClick: props.onNext }, "Next"),
        props.displaySaveButton && React.createElement(Button, { size: "large", styleType: "success", onClick: props.onSubmit }, "Save"),
        React.createElement(Button, { size: "large", styleType: "danger", onClick: props.onCancel }, "Cancel"));
};
Buttons.displayName = 'Buttons';
//# sourceMappingURL=Buttons.js.map