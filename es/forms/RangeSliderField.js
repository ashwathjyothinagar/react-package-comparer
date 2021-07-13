import { withFieldContainer, thirdPartyChangeHandler } from './shared';
import { RangeSliderField as SharedRangeSliderField } from './shared';
export var RangeSliderField = withFieldContainer(SharedRangeSliderField, function (props) { return ({
    onChange: thirdPartyChangeHandler(props),
}); });
//# sourceMappingURL=RangeSliderField.js.map