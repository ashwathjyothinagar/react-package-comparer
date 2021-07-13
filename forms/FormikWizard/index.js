"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_albus_1 = require("react-albus");
var formik_1 = require("formik");
var yup = __importStar(require("yup"));
var warning_1 = __importDefault(require("warning"));
var Buttons_1 = require("./Buttons");
var FormikWizard = (function (_super) {
    __extends(FormikWizard, _super);
    function FormikWizard(props) {
        var _this = _super.call(this, props) || this;
        _this.validate = function (wc) { return function (values) {
            if (_this.props.validate) {
                return _this.props.validate(values);
            }
            else if (_this.props.validationSchema) {
                if (_this.state.isSubmitting) {
                    var combined = _this.getCombinedSchema();
                    return _this.validateSchema(values, combined);
                }
                else {
                    return _this.validateSchema(values, _this.getStepSchema(wc));
                }
            }
            return new Promise(function (resolve) { return resolve({}); });
        }; };
        _this.handleSubmit = function (wc) { return function (values, bag) {
            var onSubmit = _this.props.onSubmit;
            var isLastPage = _this.isLastPage(wc);
            if (isLastPage) {
                return onSubmit(values, bag);
            }
            else {
                _this.next(wc)(values);
                bag.setTouched({});
                bag.setSubmitting(false);
            }
        }; };
        _this.validateSchema = function (values, schema) {
            return formik_1.validateYupSchema(values, schema)
                .catch(function (err) {
                throw formik_1.yupToFormErrors(err);
            });
        };
        _this.getCombinedSchema = function () {
            var keys = _this.getAllSteps().map(function (i) { return i.props.validationKey; });
            var schemas = keys.map(function (k) { return yup.reach(_this.props.validationSchema, k); });
            return schemas.reduce(function (acc, v) { return acc.concat(v); });
        };
        _this.getStepSchema = function (wc) {
            var currentStep = _this.getCurrentStep(wc);
            return yup.reach(_this.props.validationSchema, currentStep.props.validationKey);
        };
        _this.getAllSteps = function () { return react_1.default.Children.toArray(_this.props.children); };
        _this.getCurrentStep = function (wc) { return react_1.default.Children.toArray(_this.props.children).find(function (i) { return i.props.id === wc.step.id; }); };
        _this.getUrl = function (step) { return _this.props.basePath + "/" + step; };
        _this.isFirstPage = function (wc) { return wc.steps.findIndex(function (i) { return i.id === wc.step.id; }) === 0; };
        _this.isLastPage = function (wc) { return wc.steps.findIndex(function (i) { return i.id === wc.step.id; }) === wc.steps.length - 1; };
        _this.back = function (wc) { return function (values) {
            _this.setState({ values: values });
            var previousPath = wc.steps[wc.steps.findIndex(function (i) { return i.id === wc.step.id; }) - 1].id;
            _this.props.history.push(_this.getUrl(previousPath));
        }; };
        _this.next = function (wc) { return function (values) {
            _this.setState({ values: values });
            var nextStep = wc.steps[wc.steps.findIndex(function (i) { return i.id === wc.step.id; }) + 1].id;
            _this.props.history.push(_this.getUrl(nextStep));
        }; };
        _this.state = {
            values: props.initialValues,
            isSubmitting: false,
        };
        warning_1.default(!(props.validate !== undefined && props.validationSchema !== undefined), 'Passing both validate and validationSchema to FormikWizard is not currently supported. validate will be used instead of validationSchema.');
        return _this;
    }
    FormikWizard.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, _b = _a.isEditMode, isEditMode = _b === void 0 ? false : _b, basePath = _a.basePath, history = _a.history, onCancel = _a.onCancel;
        return react_1.default.createElement(react_albus_1.Wizard, { basename: basePath, history: history, render: function (wc) {
                return react_1.default.createElement(formik_1.Formik, { initialValues: _this.state.values, enableReinitialize: false, validate: _this.validate(wc), onSubmit: _this.handleSubmit(wc), render: function (_a) {
                        var values = _a.values, submitForm = _a.submitForm;
                        return (react_1.default.createElement(formik_1.Form, null,
                            react_1.default.createElement(react_albus_1.Steps, { key: "wizardsteps" }, children),
                            react_1.default.createElement(Buttons_1.Buttons, { displayBackButton: !_this.isFirstPage(wc), displayNextButton: !_this.isLastPage(wc), displaySaveButton: _this.isLastPage(wc) || isEditMode, onBack: function () { return _this.back(wc)(values); }, onCancel: onCancel, onNext: function () { _this.setState({ isSubmitting: false }, submitForm); }, onSubmit: function () { _this.setState({ isSubmitting: true }, submitForm); } })));
                    } });
            } });
    };
    FormikWizard.Step = react_albus_1.Step;
    return FormikWizard;
}(react_1.default.Component));
exports.FormikWizard = FormikWizard;
//# sourceMappingURL=index.js.map