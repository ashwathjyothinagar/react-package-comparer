var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { HelpText } from './HelpText';
import { ErrorMessage } from './ErrorMessage';
import { Label } from './Label';
export var FieldContainer = function (_a) {
    var touched = _a.touched, name = _a.name, error = _a.error, children = _a.children, required = _a.required, label = _a.label, helpText = _a.helpText, _b = _a.elementType, elementType = _b === void 0 ? 'div' : _b, _c = _a.showContainerLabel, showContainerLabel = _c === void 0 ? true : _c;
    var ElementInstance = elementType;
    return React.createElement(ElementInstance, { className: 'form-group input-field-container' + (touched && error ? ' field-error' : '') },
        showContainerLabel && React.createElement(Label, { parentElementType: elementType, name: name, required: required, text: label }),
        children,
        React.createElement(HelpText, { helpText: helpText }),
        React.createElement(ErrorMessage, { touched: touched, error: error }));
};
FieldContainer.displayName = 'FieldContainer';
var getFormikProps = function (props) {
    var _a = props, field = _a.field, form = _a.form, rest = __rest(_a, ["field", "form"]);
    var name = field.name, value = field.value, onChange = field.onChange, onBlur = field.onBlur;
    var touched = form.touched[name];
    var error = form.errors[name];
    return {
        name: name, touched: touched, error: error, value: value, otherProps: rest, onChange: onChange, onBlur: onBlur, onFocus: rest.onFocus, form: form,
    };
};
var getReduxFormProps = function (props) {
    var input = props.input, meta = props.meta, rest = __rest(props, ["input", "meta"]);
    return __assign({}, props.input, props.meta, { otherProps: rest });
};
var getValue = function (obj, key) { return key ? obj[key] : obj; };
export var thirdPartyChangeHandler = function (props, key) {
    return isReduxField(props)
        ? function (value) { return props.input.onChange(getValue(value, key)); }
        : function (value) { return props.form.setFieldValue(props.field.name, getValue(value, key)); };
};
export var isReduxField = function (props) { return 'input' in props; };
export var withFieldContainer = function (Component, propsOverrides) {
    if (propsOverrides === void 0) { propsOverrides = function (_) { return ({}); }; }
    var componentDisplayName = Component.displayName ||
        Component.name ||
        (Component.constructor && Component.constructor.name) ||
        'Component';
    var C = (function (_super) {
        __extends(C, _super);
        function C() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        C.prototype.render = function () {
            var props = isReduxField(this.props) ? getReduxFormProps(this.props) : getFormikProps(this.props);
            var _a = propsOverrides(this.props), elementType = _a.elementType, showContainerLabel = _a.showContainerLabel, overrides = __rest(_a, ["elementType", "showContainerLabel"]);
            return React.createElement(FieldContainer, __assign({ showContainerLabel: showContainerLabel, elementType: elementType, error: props.error, helpText: this.props.helpText, name: props.name, required: this.props.required, label: this.props.label, touched: props.touched }, overrides),
                React.createElement(Component, __assign({}, props.otherProps, { error: props.error, onFocus: props.onFocus, onBlur: props.onBlur, onChange: props.onChange, value: props.value, name: props.name }, overrides)));
        };
        C.displayName = "" + componentDisplayName;
        return C;
    }(React.Component));
    return hoistNonReactStatics(C, Component);
};
//# sourceMappingURL=FieldContainer.js.map