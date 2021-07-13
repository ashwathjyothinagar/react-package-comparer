"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var rc_slider_1 = __importStar(require("rc-slider"));
var SliderWithTooltip = rc_slider_1.createSliderWithTooltip(rc_slider_1.default);
exports.SliderField = function (props) {
    return react_1.default.createElement(SliderWithTooltip, { id: props.name, min: props.min ? props.min : 0, max: props.max ? props.max : 100, onChange: props.onChange, value: props.value ? props.value : 0, disabled: props.disabled, vertical: props.vertical ? props.vertical : false, dots: props.dots, defaultValue: props.defaultValue ? props.defaultValue : 0, tabIndex: props.tabIndex ? props.tabIndex : 0, trackStyle: { backgroundColor: '#87d068', height: 8, borderRadius: 50 }, railStyle: { backgroundColor: '#ccc', height: 8, borderRadius: 50 }, handleStyle: {
            height: 21,
            width: 21,
            borderRadius: 50,
            marginTop: -6,
        } });
};
exports.SliderField.displayName = 'SliderField';
//# sourceMappingURL=SliderField.js.map