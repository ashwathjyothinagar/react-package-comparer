"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("./shared");
var shared_2 = require("./shared");
exports.SelectField = shared_1.withFieldContainer(shared_2.SelectField, function (props) { return ({
    onChange: shared_1.thirdPartyChangeHandler(props),
}); });
//# sourceMappingURL=SelectField.js.map