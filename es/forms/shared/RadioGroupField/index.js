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
import React from 'react';
import { Component } from 'react';
import { RadioButton } from './RadioButton';
import { Key as keyCodes } from 'ts-keycode-enum';
var RadioGroupField = (function (_super) {
    __extends(RadioGroupField, _super);
    function RadioGroupField(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hasFocus: false,
        };
        _this.handleFocus = function (event) {
            event.persist();
            _this.setState({ hasFocus: true }, function () { return _this.props.onFocus(event); });
        };
        _this.handleBlur = function (event) {
            event.persist();
            _this.setState({ hasFocus: false }, function () { return _this.props.onBlur(event); });
        };
        _this.handleItemChange = _this.handleItemChange.bind(_this);
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        return _this;
    }
    RadioGroupField.prototype.handleItemChange = function (value) {
        this.props.onChange(value);
    };
    RadioGroupField.prototype.handleKeyDown = function (event) {
        var _a = this.props, buttons = _a.buttons, value = _a.value, onChange = _a.onChange;
        var index = this.getActiveIndex(value, buttons);
        switch (event.keyCode) {
            case keyCodes.Space:
            case keyCodes.Enter:
                this.callOnChange(buttons[index].value, event, onChange);
                return;
            case keyCodes.UpArrow:
            case keyCodes.LeftArrow:
                this.callOnChange(buttons[this.getWrappingIndex(index - 1, buttons)].value, event, onChange);
                return;
            case keyCodes.DownArrow:
            case keyCodes.RightArrow:
                this.callOnChange(buttons[this.getWrappingIndex(index + 1, buttons)].value, event, onChange);
                return;
        }
    };
    RadioGroupField.prototype.render = function () {
        var _this = this;
        var _a = this.props, buttons = _a.buttons, required = _a.required, name = _a.name, value = _a.value, error = _a.error, touched = _a.touched;
        var activeIndex = this.getActiveIndex(value, buttons);
        var activedescendant = name + "_" + activeIndex;
        return (React.createElement("ul", { role: "radiogroup", className: "radiogroup", tabIndex: 0, "aria-activedescendant": activedescendant, id: name, "aria-disabled": this.props.disabled, "aria-labelledby": name + "_label", "aria-required": required, "aria-invalid": touched && (error && Object.keys(error).length > 0 || error && error.length > 0), onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown }, buttons.map(function (b, i) {
            return React.createElement(RadioButton, { key: i, button: b, checked: value === b.value, disabled: _this.props.disabled, hasFocus: _this.state.hasFocus && i === activeIndex, id: name + "_" + i, onClick: !_this.props.disabled ? _this.handleItemChange : function () { return ({}); } });
        })));
    };
    RadioGroupField.prototype.callOnChange = function (value, event, onChange) {
        event.preventDefault();
        event.stopPropagation();
        onChange(value);
    };
    RadioGroupField.prototype.getActiveIndex = function (value, buttons) {
        var selectedIndex = 0;
        buttons.forEach(function (b, i) {
            if (b.value === value) {
                selectedIndex = i;
                return;
            }
        });
        return selectedIndex;
    };
    RadioGroupField.prototype.getWrappingIndex = function (index, buttons) {
        if (index < 0) {
            return buttons.length - 1;
        }
        if (index >= buttons.length) {
            return 0;
        }
        return index;
    };
    RadioGroupField.defaultProps = {
        disabled: false,
        onFocus: function () { return; },
    };
    return RadioGroupField;
}(Component));
export { RadioGroupField };
//# sourceMappingURL=index.js.map