import React from 'react';
import ReactSwitch from 'react-switch';
export var SwitchField = function (props) {
    return React.createElement(ReactSwitch, { id: props.name, onChange: props.onChange, checked: props.value || false, onColor: '#87d068', offColor: props.offColor ? props.offColor : '#ccc', checkedIcon: false, uncheckedIcon: false, height: 22, width: 44, disabled: props.disabled, handleDiameter: 18 });
};
SwitchField.displayName = 'SwitchField';
//# sourceMappingURL=SwitchField.js.map