"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("./shared");
var shared_2 = require("./shared");
exports.RadioGroupField = shared_1.withFieldContainer(shared_2.RadioGroupField, function (props) { return ({
    active: props.meta && props.meta.active,
    onChange: shared_1.thirdPartyChangeHandler(props),
    touched: shared_1.isReduxField(props) ? props.meta.touched : props.touched,
}); });
//# sourceMappingURL=RadioGroupField.js.map