"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("./shared");
var shared_2 = require("./shared");
exports.CheckboxField = shared_1.withFieldContainer(shared_2.CheckboxField, function (props) { return ({
    onChange: shared_1.thirdPartyChangeHandler(props),
    showContainerLabel: false,
}); });
//# sourceMappingURL=CheckboxField.js.map