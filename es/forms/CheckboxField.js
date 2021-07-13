import { withFieldContainer, thirdPartyChangeHandler } from './shared';
import { CheckboxField as SharedCheckboxField } from './shared';
export var CheckboxField = withFieldContainer(SharedCheckboxField, function (props) { return ({
    onChange: thirdPartyChangeHandler(props),
    showContainerLabel: false,
}); });
//# sourceMappingURL=CheckboxField.js.map