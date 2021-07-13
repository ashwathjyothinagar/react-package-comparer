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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Frame = (function (_super) {
    __extends(Frame, _super);
    function Frame(props) {
        var _this = _super.call(this, props) || this;
        _this.postMessage = _this.postMessage.bind(_this);
        _this.messageListeners = props.messageListeners || [];
        return _this;
    }
    Frame.prototype.componentDidMount = function () {
        this.messageListeners.forEach(function (messageListener) {
            window.addEventListener('message', messageListener, false);
        });
    };
    Frame.prototype.componentWillUnmount = function () {
        this.messageListeners.forEach(function (messageListener) {
            window.removeEventListener('message', messageListener, false);
        });
    };
    Frame.prototype.postMessage = function (message, origin) {
        if (this.iframeRef) {
            if (this.iframeRef.contentWindow) {
                this.iframeRef.contentWindow.postMessage(message, origin);
            }
            else {
                throw Error('iframe reference doesn\'t have content window. Something serious is wrong.');
            }
        }
    };
    Frame.prototype.render = function () {
        var _this = this;
        var _a = this.props, url = _a.url, messageListeners = _a.messageListeners, newProps = __rest(_a, ["url", "messageListeners"]);
        return (react_1.default.createElement("iframe", __assign({}, newProps, { src: url, ref: function (iframeRef) { _this.iframeRef = iframeRef; } })));
    };
    return Frame;
}(react_1.Component));
exports.Frame = Frame;
//# sourceMappingURL=Frame.js.map