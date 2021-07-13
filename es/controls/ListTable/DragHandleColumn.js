import React from 'react';
import { ListTableColumn } from './ListTableColumn';
export var DragHandleColumn = function () {
    return React.createElement(ListTableColumn, { style: { maxWidth: '30px' }, isDragHandle: true },
        React.createElement("span", { className: "fa fa-bars", style: { maxWidth: '30px', opacity: .8 } }));
};
DragHandleColumn.displayName = 'DragHandleColumn';
//# sourceMappingURL=DragHandleColumn.js.map