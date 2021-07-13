import React from 'react';
import { createSliderWithTooltip, Range } from 'rc-slider';
var RangeWithTooltip = createSliderWithTooltip(Range);
export var RangeSliderField = function (props) {
    return React.createElement(RangeWithTooltip, { id: props.name, min: props.min ? props.min : 0, max: props.max ? props.max : 100, onChange: props.onChange, value: props.value ? props.value : 0, disabled: props.disabled, vertical: props.vertical ? props.vertical : false, dots: props.dots, defaultValue: props.defaultValue ? props.defaultValue : 0, tabIndex: props.tabIndex ? props.tabIndex : 0, trackStyle: { backgroundColor: '#87d068', height: 8, borderRadius: 50 }, railStyle: { backgroundColor: '#ccc', height: 8, borderRadius: 50 }, handleStyle: {
            height: 21,
            width: 21,
            borderRadius: 50,
            marginTop: -6,
        }, pushable: props.pushable, allowCross: props.allowCross, count: props.count });
};
RangeSliderField.displayName = 'RangeSliderField';
//# sourceMappingURL=RangeSliderField.js.map