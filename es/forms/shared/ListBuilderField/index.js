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
import { Set } from 'immutable';
import { PillListBox } from '../../../controls/PillListBox';
import { TextBoxWithAdd } from './TextBoxWithAdd';
var emptyArray = [];
var stringToPillItem = function (s) { return ({ label: s }); };
var ListBuilderField = (function (_super) {
    __extends(ListBuilderField, _super);
    function ListBuilderField(props) {
        var _this = _super.call(this, props) || this;
        _this.handleRemove = _this.handleRemove.bind(_this);
        _this.handleAdd = _this.handleAdd.bind(_this);
        return _this;
    }
    ListBuilderField.prototype.render = function () {
        var _a = this.props, maxItems = _a.maxItems, value = _a.value, invalidItems = _a.invalidItems;
        var pillListItems = value ? value.map(stringToPillItem) : emptyArray;
        var invalidPillListItems = invalidItems.map(stringToPillItem);
        return (React.createElement("div", { className: "list-builder" },
            React.createElement(TextBoxWithAdd, { onAdd: this.handleAdd }),
            React.createElement(PillListBox, { items: pillListItems, invalidItems: invalidPillListItems, onRemove: this.handleRemove, maxItems: maxItems })));
    };
    ListBuilderField.prototype.handleRemove = function (item) {
        var _a = this.props, onChange = _a.onChange, value = _a.value;
        onChange(value.filter(function (x) { return x !== item.label; }));
    };
    ListBuilderField.prototype.handleAdd = function (item) {
        var _a = this.props, onChange = _a.onChange, value = _a.value;
        var newSet = Set(item.split(/[\s,;]+/)
            .filter(function (i) { return i.length > 0; }));
        if (newSet.size === 0) {
            return;
        }
        if (!value) {
            onChange(newSet.toJS());
            return;
        }
        var finalSet = newSet.filter(function (i) { return value.indexOf(i) < 0; });
        if (finalSet.size === 0) {
            return;
        }
        onChange(value.concat(finalSet.toJS()));
    };
    ListBuilderField.defaultProps = {
        invalidItems: [],
    };
    return ListBuilderField;
}(Component));
export { ListBuilderField };
//# sourceMappingURL=index.js.map