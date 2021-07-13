import { ColorPickerField as SharedColorPickerField } from './shared';
import { withFieldContainer, thirdPartyChangeHandler } from './shared';
export { toHslValue, toHslaString } from './shared';
export var ColorPickerField = withFieldContainer(SharedColorPickerField, function (props) { return ({
    onChange: thirdPartyChangeHandler(props, 'hsl'),
}); });
//# sourceMappingURL=ColorPickerField.js.map