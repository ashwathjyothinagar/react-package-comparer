import React from 'react';
import ReactSelect from 'react-select';
import { generateId } from './functions';
export var SelectField = function (props) {
    var options = props.options, placeholder = props.placeholder, searchable = props.searchable, _a = props.labelKey, labelKey = _a === void 0 ? 'label' : _a, _b = props.valueKey, valueKey = _b === void 0 ? 'value' : _b, _c = props.matchProp, matchProp = _c === void 0 ? 'any' : _c, disabled = props.disabled, _d = props.clearable, clearable = _d === void 0 ? true : _d, name = props.name, value = props.value, onChange = props.onChange, _e = props.isMulti, isMulti = _e === void 0 ? false : _e;
    var id = generateId(name);
    var handleChange = function (d) { return onChange(d !== null ? d[valueKey] : null); };
    return React.createElement(ReactSelect, { name: name, instanceId: id, inputProps: { id: id }, value: value, options: options, onChange: handleChange, searchable: searchable, clearable: clearable, disabled: disabled, placeholder: placeholder, labelKey: labelKey, valueKey: valueKey, matchProp: matchProp, deleteRemoves: clearable, escapeClearsValue: clearable, backspaceRemoves: clearable, multi: isMulti });
};
SelectField.displayName = 'SelectField';
//# sourceMappingURL=SelectField.js.map