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
import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ListTable } from './';
import warning from 'warning';
import * as lodash from 'lodash';
var reorder = function (list, startIndex, endIndex) {
    var _a = __read(list.splice(startIndex, 1), 1), removed = _a[0];
    list.splice(endIndex, 0, removed);
    return list;
};
var DraggableListTable = (function (_super) {
    __extends(DraggableListTable, _super);
    function DraggableListTable(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            headers: React.Children.toArray(_this.props.children)[0],
            items: React.Children.toArray(_this.props.children).slice(1, -1),
            footers: React.Children.toArray(_this.props.children)[-1],
            isReorder: false,
        };
        _this.onDragStart = function (initial) {
            _this.props.onDragStart ? _this.props.onDragStart(initial) : (function () { return (null); })();
            if (window.navigator.vibrate) {
                window.navigator.vibrate(100);
            }
        };
        _this.onDragEnd = function (result) {
            if (!result.destination) {
                return;
            }
            if (result.destination.index === result.source.index) {
                return;
            }
            var rows = reorder(_this.state.items, result.source.index, result.destination.index);
            var items = rows.map(function (item, index) {
                var payload = { id: item.props.id, index: index };
                if (_this.props.customProps) {
                    _this.props.customProps.forEach(function (p) {
                        payload[p] = item.props[p];
                    });
                }
                return payload;
            });
            var eventResult = __assign({}, result, { destination: __assign({}, result.destination, { draggableId: _this.state.items[result.destination.index].props.id }), items: items });
            _this.props.onDragEnd ? _this.props.onDragEnd(eventResult) : (function () { return (null); })();
            _this.setState({
                items: rows,
                isReorder: true,
            });
        };
        warning(_this.state.items.filter(function (item) { return item.props.id == null; }).length === 0, 'Rows in ListTables marked isDraggable={true} must have IDs or you will be very sorry when your performance is terrible and you can\'t get the value you wanted to be able to get. Good luck.');
        return _this;
    }
    DraggableListTable.getDerivedStateFromProps = function (props, state) {
        var children = React.Children.toArray(props.children);
        var headers = children[0];
        var items = children.slice(1, -1);
        var footers = children[children.length - 1];
        var isReorder = state.isReorder;
        if (state.isReorder) {
            return { state: state.items, isReorder: false };
        }
        if (!lodash.isEqual(state, { headers: headers, items: items, footers: footers, isReorder: isReorder })) {
            return { headers: headers, items: items, footers: footers };
        }
        return null;
    };
    DraggableListTable.prototype.render = function () {
        var rows = this.state.items;
        var headers = this.state.headers;
        var footers = this.state.footers;
        return React.createElement(DragDropContext, { onDragStart: this.onDragStart, onDragEnd: this.onDragEnd },
            React.createElement(Droppable, { droppableId: "draggableListTableDroppable" }, function (droppableProvided, _) { return (React.createElement(ListTable, { forwardRef: droppableProvided.innerRef },
                headers,
                rows.map(function (row, index) {
                    var rowProps = row.props;
                    var itemChildren = React.Children.toArray(rowProps.children);
                    var hasDragHandle = itemChildren.filter(function (i) { return (i.props.isDragHandle); }).length > 0;
                    return React.createElement(Draggable, { key: rowProps.id || index, draggableId: rowProps.id, index: index }, function (draggableProvided, __) {
                        var draggableProps = hasDragHandle ? {} : __assign({}, draggableProvided.dragHandleProps);
                        return React.cloneElement(row, __assign({ ref: draggableProvided.innerRef }, draggableProvided.draggableProps, draggableProps), itemChildren.map(function (Column) {
                            var _a = Column.props, isDragHandle = _a.isDragHandle, columnProps = __rest(_a, ["isDragHandle"]);
                            var drag = isDragHandle ? __assign({}, draggableProvided.dragHandleProps, { value: index }) : {};
                            var props = __assign({}, drag, { key: columnProps.id });
                            return React.cloneElement(Column, props);
                        }));
                    });
                }),
                footers,
                droppableProvided.placeholder)); }));
    };
    return DraggableListTable;
}(Component));
export { DraggableListTable };
//# sourceMappingURL=DraggableListTable.js.map