import { withFieldContainer, thirdPartyChangeHandler } from './shared';
import { SliderField as SharedSliderField } from './shared';
export var SliderField = withFieldContainer(SharedSliderField, function (props) { return ({
    onChange: thirdPartyChangeHandler(props),
}); });
//# sourceMappingURL=SliderField.js.map