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
import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';
var ContentEditableControl = (function (_super) {
    __extends(ContentEditableControl, _super);
    function ContentEditableControl(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleOnBlur = _this.handleOnBlur.bind(_this);
        return _this;
    }
    ContentEditableControl.prototype.render = function () {
        var _a = this.props, _b = _a.disabled, disabled = _b === void 0 ? false : _b, elementType = _a.elementType, value = _a.value, name = _a.name, className = _a.className, innerRef = _a.innerRef;
        return React.createElement(ContentEditable, { innerRef: innerRef, id: name, html: value || '', tagName: elementType, className: className, disabled: disabled, onChange: this.handleChange, onBlur: this.handleOnBlur });
    };
    ContentEditableControl.prototype.handleChange = function (event) {
        if (this.props.onChange) {
            this.props.onChange(event.target.innerHTML);
        }
    };
    ContentEditableControl.prototype.handleOnBlur = function (event) {
        if (this.props.onLeave) {
            this.props.onLeave(event.target.innerHTML);
        }
    };
    return ContentEditableControl;
}(Component));
export { ContentEditableControl };
//# sourceMappingURL=ContentEditableControl.js.map