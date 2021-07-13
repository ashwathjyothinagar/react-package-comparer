import { withFieldContainer, thirdPartyChangeHandler } from './shared';
import { MultiSelectorField as SharedMultiSelectorField } from './shared';
export { SortType } from './shared';
export var MultiSelectorField = withFieldContainer(SharedMultiSelectorField, function (props) { return ({
    onChange: thirdPartyChangeHandler(props),
}); });
//# sourceMappingURL=MultiSelectorField.js.map