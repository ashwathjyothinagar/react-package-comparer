"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("./shared");
var shared_2 = require("./shared");
var yup = __importStar(require("yup"));
exports.listBuilderSchema = function (schema, label) { return yup.array().label(label).of(yup.string().test({
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
exports.getInvalidItemsErrorMessage = function (props) {
    return shared_2.isReduxField(props)
        ? props.meta.error && props.meta.error.message
        : props.form.errors[props.field.name] && reduceErrors(asReduceableError(props.form.errors[props.field.name])).message;
};
exports.getInvalidItems = function (props) {
    return shared_2.isReduxField(props)
        ? props.meta.error && props.meta.error.invalidItems
        : props.form.errors[props.field.name] && reduceErrors(asReduceableError(props.form.errors[props.field.name])).invalidItems;
};
exports.ListBuilderField = shared_2.withFieldContainer(shared_1.ListBuilderField, function (props) { return ({
    invalidItems: exports.getInvalidItems(props),
    onChange: shared_2.thirdPartyChangeHandler(props),
    error: exports.getInvalidItemsErrorMessage(props),
}); });
//# sourceMappingURL=ListBuilderField.js.map