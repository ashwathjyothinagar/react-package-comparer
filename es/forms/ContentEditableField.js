import { withFieldContainer, thirdPartyChangeHandler } from './shared';
import { ContentEditableField as SharedContentEditableField } from './shared';
export var ContentEditableField = withFieldContainer(SharedContentEditableField, function (props) { return ({
    onChange: thirdPartyChangeHandler(props),
}); });
//# sourceMappingURL=ContentEditableField.js.map