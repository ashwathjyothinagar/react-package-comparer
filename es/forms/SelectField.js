import { withFieldContainer, thirdPartyChangeHandler } from './shared';
import { SelectField as SharedSelectField } from './shared';
export var SelectField = withFieldContainer(SharedSelectField, function (props) { return ({
    onChange: thirdPartyChangeHandler(props),
}); });
//# sourceMappingURL=SelectField.js.map