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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
import React, { Component } from 'react';
import * as functions from './functions';
import { Key as keyCodes } from 'ts-keycode-enum';
var MultiSelectBox = (function (_super) {
    __extends(MultiSelectBox, _super);
    function MultiSelectBox(props) {
        var _this = _super.call(this, props) || this;
        _this.ulRef = null;
        _this.liRefs = [];
        _this.handleItemClick = _this.handleItemClick.bind(_this);
        _this.isSelected = _this.isSelected.bind(_this);
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        _this.handleKeyPress = _this.handleKeyPress.bind(_this);
        _this.pageSize = props.pageSize || 8;
        _this.state = { singleClick: false, rangeFromId: 0, rangeToId: 0, searchTerm: '' };
        return _this;
    }
    MultiSelectBox.prototype.isSelected = function (id) {
        return this.props.selectedIds &&
            this.props.selectedIds.indexOf(id) >= 0;
    };
    MultiSelectBox.prototype.render = function () {
        var _this = this;
        var handleOnClick = function (id) {
            return function (event) { _this.handleItemClick(event, id); };
        };
        return (React.createElement("div", { className: "multi-select-box" },
            React.createElement("ul", { tabIndex: 0, onKeyDown: this.handleKeyDown, onKeyPress: this.handleKeyPress, ref: function (el) { return _this.ulRef = el; } }, this.props.selectItems.map(function (selectItem) {
                return React.createElement("li", { key: selectItem.id, tabIndex: 0, className: _this.isSelected(selectItem.id) ? 'selected' : '', onClick: handleOnClick(selectItem.id), ref: function (el) {
                        if (el !== null) {
                            _this.liRefs[selectItem.id] = el;
                        }
                    } }, selectItem.name);
            }))));
    };
    MultiSelectBox.prototype.handleKeyPress = function (event) {
        var _this = this;
        this.navigateToItem(false, function (currentIndex) {
            var searchTerm = _this.state.searchTerm + event.key;
            _this.setState({ searchTerm: searchTerm });
            setTimeout(function () { return _this.setState({ searchTerm: '' }); }, 300);
            var searchStart = searchTerm.length > 1 ? currentIndex : currentIndex + 1;
            for (var i = searchStart; i < _this.props.selectItems.length; i++) {
                if (_this.props.selectItems[i].name.toLowerCase().indexOf(searchTerm) === 0) {
                    return i;
                }
            }
            for (var i = 0; i < currentIndex; i++) {
                if (_this.props.selectItems[i].name.toLowerCase().indexOf(searchTerm) === 0) {
                    return i;
                }
            }
            return currentIndex;
        });
    };
    MultiSelectBox.prototype.handleKeyDown = function (event) {
        var _this = this;
        var ctrlKey = event.ctrlKey || event.metaKey;
        switch (event.keyCode) {
            case keyCodes.DownArrow:
                event.preventDefault();
                this.navigateToItem(event.shiftKey, function (ind) { return ind + 1; });
                break;
            case keyCodes.UpArrow:
                event.preventDefault();
                this.navigateToItem(event.shiftKey, function (ind) { return ind - 1; });
                break;
            case keyCodes.Home:
                event.preventDefault();
                this.navigateToItem(event.shiftKey, function () { return 0; });
                break;
            case keyCodes.End:
                event.preventDefault();
                this.navigateToItem(event.shiftKey, function () { return _this.props.selectItems.length - 1; });
                break;
            case keyCodes.PageDown:
                event.preventDefault();
                this.navigateToItem(event.shiftKey, function (ind) { return ind + _this.pageSize; });
                break;
            case keyCodes.PageUp:
                event.preventDefault();
                this.navigateToItem(event.shiftKey, function (ind) { return ind - _this.pageSize; });
                break;
        }
        if (event.keyCode === keyCodes.A && ctrlKey) {
            event.preventDefault();
            var onChange = this.props.onChange;
            onChange(this.props.selectItems.map(function (item) { return item.id; }));
            this.setState({ rangeFromId: this.props.selectItems[0].id, rangeToId: this.props.selectItems[this.props.selectItems.length - 1].id });
        }
    };
    MultiSelectBox.prototype.handleItemClick = function (event, id) {
        var _this = this;
        if (this.state.singleClick && this.state.rangeFromId === id) {
            this.props.onDoubleClick(event);
            this.setState({ singleClick: false });
            return;
        }
        setTimeout(function () { return _this.setState({ singleClick: false }); }, 300);
        if (event.shiftKey && this.state.rangeFromId) {
            var rangeSelection = this.getRangeSelection(this.state.rangeFromId, id);
            if (rangeSelection.length > 0) {
                this.props.onChange(rangeSelection);
                this.setState({ rangeToId: id });
                return;
            }
        }
        this.setState({ singleClick: true, rangeFromId: id, rangeToId: id });
        var ctrlKey = event.metaKey || event.ctrlKey;
        if (ctrlKey && this.props.selectedIds) {
            if (this.isSelected(id)) {
                this.props.onChange(this.props.selectedIds.filter(function (item) { return item !== id; }));
            }
            else {
                this.props.onChange(__spread(this.props.selectedIds, [id]));
            }
        }
        else {
            this.props.onChange([id]);
        }
    };
    MultiSelectBox.prototype.navigateToItem = function (shouldExtendSelection, getSelectedIndex) {
        var _this = this;
        var onChange = this.props.onChange;
        var currentIndex = this.props.selectItems.findIndex(function (item) { return item.id === _this.state.rangeToId; });
        var selectedIndex = getSelectedIndex(currentIndex);
        if (selectedIndex < 0) {
            selectedIndex = 0;
        }
        else if (selectedIndex >= this.props.selectItems.length) {
            selectedIndex = this.props.selectItems.length - 1;
        }
        if (selectedIndex === currentIndex) {
            return;
        }
        var newId = this.props.selectItems[selectedIndex].id;
        if (shouldExtendSelection) {
            onChange(this.getRangeSelection(this.state.rangeFromId, newId));
            this.setState({ rangeToId: newId });
        }
        else {
            onChange([newId]);
            this.setState({ rangeFromId: newId, rangeToId: newId });
        }
        functions.scrollToElement(this.liRefs[newId]);
    };
    MultiSelectBox.prototype.getRangeSelection = function (fromId, toId) {
        var startIndex = this.props.selectItems.findIndex(function (item) { return item.id === fromId || item.id === toId; });
        var lastId = this.props.selectItems[startIndex].id === fromId ? toId : fromId;
        var result = [];
        var index = startIndex - 1;
        do {
            index++;
            if (index >= this.props.selectItems.length) {
                return [];
            }
            result.push(this.props.selectItems[index].id);
        } while (this.props.selectItems[index].id !== lastId);
        return result;
    };
    return MultiSelectBox;
}(Component));
export { MultiSelectBox };
//# sourceMappingURL=MultiSelectBox.js.map