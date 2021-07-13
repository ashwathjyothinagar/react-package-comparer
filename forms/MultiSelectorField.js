"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("./shared");
var shared_2 = require("./shared");
var shared_3 = require("./shared");
exports.SortType = shared_3.SortType;
exports.MultiSelectorField = shared_1.withFieldContainer(shared_2.MultiSelectorField, function (props) { return ({
    onChange: shared_1.thirdPartyChangeHandler(props),
}); });
//# sourceMappingURL=MultiSelectorField.js.map