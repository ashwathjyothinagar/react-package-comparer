"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("./shared");
var shared_2 = require("./shared");
var shared_3 = require("./shared");
exports.toHslValue = shared_3.toHslValue;
exports.toHslaString = shared_3.toHslaString;
exports.ColorPickerField = shared_2.withFieldContainer(shared_1.ColorPickerField, function (props) { return ({
    onChange: shared_2.thirdPartyChangeHandler(props, 'hsl'),
}); });
//# sourceMappingURL=ColorPickerField.js.map