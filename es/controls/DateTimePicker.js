import React from 'react';
import moment from 'moment';
import ReactDateTimePicker from 'react-datetime';
export var DateTimePicker = function (_a) {
    var label = _a.label, _b = _a.timeFormat, timeFormat = _b === void 0 ? true : _b, placeholder = _a.placeholder, value = _a.value, id = _a.id, onChange = _a.onChange;
    var inputProps = { placeholder: placeholder, id: id };
    var valuePass = value !== undefined && value !== '' ? moment(value).toDate() : undefined;
    return (React.createElement("div", { className: "date-picker-container" },
        React.createElement("label", { htmlFor: id }, label),
        React.createElement(ReactDateTimePicker, { timeFormat: timeFormat, value: valuePass, inputProps: inputProps, onChange: onChange, closeOnSelect: true })));
};
DateTimePicker.displayName = 'DateTimePicker';
//# sourceMappingURL=DateTimePicker.js.map