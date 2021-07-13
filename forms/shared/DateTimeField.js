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
Object.defineProperty(exports, "__esModule", { value: true });
var DateField_1 = require("./DateField");
var DateTimeField = (function (_super) {
    __extends(DateTimeField, _super);
    function DateTimeField(props) {
        return _super.call(this, props) || this;
    }
    DateTimeField.prototype.timeFormat = function () {
        return this.props.timeFormat;
    };
    DateTimeField.defaultProps = {
        dateFormat: DateField_1.DefaultDateFormat,
        timeFormat: DateField_1.DefaultTimeFormat,
    };
    return DateTimeField;
}(DateField_1.DateFieldBase));
exports.DateTimeField = DateTimeField;
//# sourceMappingURL=DateTimeField.js.map