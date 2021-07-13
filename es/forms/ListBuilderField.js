import { ListBuilderField as SharedListBuilderField } from './shared';
import { withFieldContainer, thirdPartyChangeHandler, isReduxField } from './shared';
import * as yup from 'yup';
export var listBuilderSchema = function (schema, label) { return yup.array().label(label).of(yup.string().test({
    name: label + "_listbuilderschema",
    test: function (value) { return schema.isValid(value); },
    message: function (params) { return ({ invalidItems: params.value, message: label + " has invalid items." }); },
})); };
var isSchemaError = function (arr) { return Array.isArray(arr); };
var asReduceableError = function (error) { return error; };
var reduceErrors = function (arr) {
    if (isSchemaError(arr)) {
        var initialValue = { invalidItems: [], message: '' };
        return arr.reduce(function (acc, value) {
            var newItems = acc.invalidItems.concat(value.invalidItems);
            return { message: value.message, invalidItems: newItems };
        }, initialValue);
    }
    else {
        return { invalidItems: [], message: arr };
    }
};
export var getInvalidItemsErrorMessage = function (props) {
    return isReduxField(props)
        ? props.meta.error && props.meta.error.message
        : props.form.errors[props.field.name] && reduceErrors(asReduceableError(props.form.errors[props.field.name])).message;
};
export var getInvalidItems = function (props) {
    return isReduxField(props)
        ? props.meta.error && props.meta.error.invalidItems
        : props.form.errors[props.field.name] && reduceErrors(asReduceableError(props.form.errors[props.field.name])).invalidItems;
};
export var ListBuilderField = withFieldContainer(SharedListBuilderField, function (props) { return ({
    invalidItems: getInvalidItems(props),
    onChange: thirdPartyChangeHandler(props),
    error: getInvalidItemsErrorMessage(props),
}); });
//# sourceMappingURL=ListBuilderField.js.map