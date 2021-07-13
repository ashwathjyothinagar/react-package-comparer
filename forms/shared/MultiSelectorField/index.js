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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var lodash_isequal_1 = __importDefault(require("lodash.isequal"));
var MultiSelectBox_1 = require("./MultiSelectBox");
var SelectorButtons_1 = require("./SelectorButtons");
var OrderButtons_1 = require("./OrderButtons");
var FilterBox_1 = require("../../../controls/FilterBox");
var functions_1 = require("./functions");
var functions_2 = require("./functions");
exports.SortType = functions_2.SortType;
var MultiSelectorField = (function (_super) {
    __extends(MultiSelectorField, _super);
    function MultiSelectorField(props) {
        var _this = _super.call(this, props) || this;
        _this.handleLeftSelectionChange = function (leftHighlightedIds) {
            _this.setState({ leftHighlightedIds: leftHighlightedIds });
        };
        _this.handleRightSelectionChange = function (rightHighlightedIds) {
            _this.setState({ rightHighlightedIds: rightHighlightedIds });
        };
        _this.handleAdd = function (event) {
            if (event) {
                event.preventDefault();
            }
            var onChange = _this.props.onChange;
            var rightItemIds = _this.state.rightItems.map(function (item) { return item.id; });
            var leftHighlightedIds = _this.state.leftHighlightedIds;
            var newRightItemIds = rightItemIds.concat(leftHighlightedIds);
            onChange(newRightItemIds);
            var rightItems = _this.convertRightItemIdsToSelectItems(newRightItemIds);
            var leftItems = _this.state.leftItems.filter(function (i) { return !rightItems.includes(i); });
            _this.setState({ leftHighlightedIds: [], rightItems: rightItems, leftItems: leftItems });
        };
        _this.handleRemove = function (event) {
            if (event) {
                event.preventDefault();
            }
            var onChange = _this.props.onChange;
            var rightItemIds = _this.state.rightItems.map(function (i) { return i.id; });
            var rightHighlightedIds = _this.state.rightHighlightedIds;
            var newRightItemIds = rightItemIds.filter(function (id) { return rightHighlightedIds.indexOf(id) < 0; });
            onChange(newRightItemIds);
            var leftItems = _this.props.items.filter(function (i) { return !newRightItemIds.includes(i.id); });
            var rightItems = _this.convertRightItemIdsToSelectItems(newRightItemIds);
            _this.setState({ rightHighlightedIds: [], leftItems: leftItems, rightItems: rightItems });
        };
        _this.handleMoveDown = function (event) {
            if (event) {
                event.preventDefault();
            }
            var newRightItemIds = _this.state.rightItems.map(function (i) { return i.id; });
            var rightHighlightedIds = _this.state.rightHighlightedIds;
            for (var itemIndex = newRightItemIds.length - 1; itemIndex > 0; itemIndex--) {
                var currentId = newRightItemIds[itemIndex];
                var nextId = newRightItemIds[itemIndex - 1];
                if (rightHighlightedIds.indexOf(nextId) < 0) {
                    continue;
                }
                newRightItemIds[itemIndex] = nextId;
                newRightItemIds[itemIndex - 1] = currentId;
            }
            _this.props.onChange(newRightItemIds);
            var rightItems = _this.convertRightItemIdsToSelectItems(newRightItemIds);
            _this.setState({ rightItems: rightItems });
        };
        _this.handleMoveToBottom = function (event) {
            if (event) {
                event.preventDefault();
            }
            var rightHighlightedIds = _this.state.rightHighlightedIds;
            var items = _this.state.rightItems.filter(function (i) { return rightHighlightedIds.includes(i.id); });
            var newRightItemIds = _this.state.rightItems
                .map(function (i) { return i.id; })
                .filter(function (id) { return rightHighlightedIds.indexOf(id) < 0; })
                .concat(items.map(function (i) { return i.id; }));
            _this.props.onChange(newRightItemIds);
            var rightItems = _this.convertRightItemIdsToSelectItems(newRightItemIds);
            _this.setState({ rightItems: rightItems });
        };
        _this.handleMoveUp = function (event) {
            if (event) {
                event.preventDefault();
            }
            var newRightItemIds = _this.state.rightItems.map(function (i) { return i.id; });
            var rightHighlightedIds = _this.state.rightHighlightedIds;
            for (var itemIndex = 0; itemIndex < newRightItemIds.length - 1; itemIndex++) {
                var currentId = newRightItemIds[itemIndex];
                var nextId = newRightItemIds[itemIndex + 1];
                if (rightHighlightedIds.indexOf(nextId) < 0) {
                    continue;
                }
                newRightItemIds[itemIndex] = nextId;
                newRightItemIds[itemIndex + 1] = currentId;
            }
            _this.props.onChange(newRightItemIds);
            var rightItems = _this.convertRightItemIdsToSelectItems(newRightItemIds);
            _this.setState({ rightItems: rightItems });
        };
        _this.handleMoveToTop = function (event) {
            if (event) {
                event.preventDefault();
            }
            var rightHighlightedIds = _this.state.rightHighlightedIds;
            var items = _this.state.rightItems.filter(function (i) { return rightHighlightedIds.includes(i.id); });
            var newRightItemIds = __spread(items.map(function (i) { return i.id; }), _this.state.rightItems
                .map(function (i) { return i.id; })
                .filter(function (id) { return rightHighlightedIds.indexOf(id) < 0; }));
            _this.props.onChange(newRightItemIds);
            var rightItems = _this.convertRightItemIdsToSelectItems(newRightItemIds);
            _this.setState({ rightItems: rightItems });
        };
        _this.handleFilter = function (event) {
            _this.setState({ filterText: event.currentTarget.value });
        };
        _this.filterItem = function (item, filter) {
            return item.name.toLowerCase().includes(filter.toLowerCase());
        };
        _this.convertRightItemIdsToSelectItems = function (newRightItemIds) {
            if (_this.sortFunction) {
                return newRightItemIds.map(function (itemId) { return _this.props.items.find(function (item) { return item.id === itemId; }); }).sort(_this.sortFunction);
            }
            return newRightItemIds.map(function (itemId) { return _this.props.items.find(function (item) { return item.id === itemId; }); });
        };
        var selectedIds = props.value;
        var leftItems = [];
        var rightItems = [];
        props.items.forEach(function (item) {
            selectedIds.includes(item.id) ? rightItems.push(item) : leftItems.push(item);
        });
        _this.state = { leftHighlightedIds: [], rightHighlightedIds: [], leftItems: leftItems, rightItems: rightItems, filterText: '', sortable: props.sort === functions_1.SortType.Manual };
        _this.reset = _this.reset.bind(_this);
        _this.filterItem = props.onFilter ? props.onFilter.bind(_this) : _this.filterItem;
        _this.isMoveDownDisabled = _this.isMoveDownDisabled.bind(_this);
        _this.isMoveUpDisabled = _this.isMoveUpDisabled.bind(_this);
        _this.sortFunction = _this.props.sort && functions_1.sortFunctions[_this.props.sort];
        return _this;
    }
    MultiSelectorField.prototype.render = function () {
        var _a = this.state, filterText = _a.filterText, leftItems = _a.leftItems, rightItems = _a.rightItems, leftHighlightedIds = _a.leftHighlightedIds, rightHighlightedIds = _a.rightHighlightedIds;
        var filterItem = this.filterItem;
        var leftDisplayItems = leftItems.filter(function (i) { return filterItem(i, filterText); });
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "multi-select-filter-container" },
                react_1.default.createElement("div", { className: "multi-select-filter" },
                    react_1.default.createElement(FilterBox_1.FilterBox, { placeholder: "Search...", onFilter: this.handleFilter }))),
            react_1.default.createElement("div", { className: "multi-select" },
                react_1.default.createElement(MultiSelectBox_1.MultiSelectBox, { selectItems: leftDisplayItems, onChange: this.handleLeftSelectionChange, onDoubleClick: this.handleAdd, selectedIds: leftHighlightedIds }),
                react_1.default.createElement(SelectorButtons_1.SelectorButtons, { onAdd: this.handleAdd, onRemove: this.handleRemove, disableAdd: leftHighlightedIds.length <= 0, disableRemove: rightHighlightedIds.length <= 0 }),
                react_1.default.createElement(MultiSelectBox_1.MultiSelectBox, { selectItems: rightItems, onChange: this.handleRightSelectionChange, onDoubleClick: this.handleRemove, selectedIds: rightHighlightedIds }),
                this.state.sortable && react_1.default.createElement(OrderButtons_1.OrderButtons, { disableMoveDown: this.isMoveDownDisabled(), disableMoveUp: this.isMoveUpDisabled(), onMoveDown: this.handleMoveDown, onMoveUp: this.handleMoveUp, onMoveToBottom: this.handleMoveToBottom, onMoveToTop: this.handleMoveToTop }))));
    };
    MultiSelectorField.prototype.componentWillReceiveProps = function (nextProps) {
        if (!lodash_isequal_1.default(this.props.items, nextProps.items) || !lodash_isequal_1.default(this.props.value, nextProps.value)) {
            this.reset(nextProps.items, nextProps.value);
        }
    };
    MultiSelectorField.prototype.reset = function (items, selectedIds) {
        var rightItems = [];
        var leftItems = [];
        items.forEach(function (item) {
            selectedIds.includes(item.id) ? rightItems.push(item) : leftItems.push(item);
        });
        this.setState({ rightItems: rightItems, leftItems: leftItems, rightHighlightedIds: [], leftHighlightedIds: [] });
    };
    MultiSelectorField.prototype.isMoveUpDisabled = function () {
        var _a = this.state, rightHighlightedIds = _a.rightHighlightedIds, rightItems = _a.rightItems;
        return rightHighlightedIds.length === 0 || rightHighlightedIds.indexOf(rightItems[0].id) !== -1;
    };
    MultiSelectorField.prototype.isMoveDownDisabled = function () {
        var _a = this.state, rightHighlightedIds = _a.rightHighlightedIds, rightItems = _a.rightItems;
        return rightHighlightedIds.length === 0 || rightHighlightedIds.indexOf(rightItems[rightItems.length - 1].id) !== -1;
    };
    MultiSelectorField.defaultProps = {
        sort: functions_1.SortType.Manual,
        items: [],
    };
    return MultiSelectorField;
}(react_1.Component));
exports.MultiSelectorField = MultiSelectorField;
//# sourceMappingURL=index.js.map