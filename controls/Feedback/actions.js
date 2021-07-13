"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var t = __importStar(require("./actionTypes"));
var redux_actions_1 = require("redux-actions");
exports.capturePage = redux_actions_1.createAction(t.CAPTURE_PAGE);
//# sourceMappingURL=actions.js.map