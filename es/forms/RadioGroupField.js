import { withFieldContainer, thirdPartyChangeHandler, isReduxField } from './shared';
import { RadioGroupField as SharedRadioGroupField } from './shared';
export var RadioGroupField = withFieldContainer(SharedRadioGroupField, function (props) { return ({
    active: props.meta && props.meta.active,
    onChange: thirdPartyChangeHandler(props),
    touched: isReduxField(props) ? props.meta.touched : props.touched,
}); });
//# sourceMappingURL=RadioGroupField.js.map