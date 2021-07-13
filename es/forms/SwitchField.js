import { withFieldContainer, thirdPartyChangeHandler } from './shared';
import { SwitchField as SharedSwitchField } from './shared';
export var SwitchField = withFieldContainer(SharedSwitchField, function (props) { return ({
    onChange: thirdPartyChangeHandler(props),
}); });
//# sourceMappingURL=SwitchField.js.map