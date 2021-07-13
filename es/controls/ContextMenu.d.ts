import React, { SFC } from 'react';
export interface LinkItem {
    kind: 'link';
    link: string;
}
export interface ButtonItem {
    kind: 'button';
    onClick: React.MouseEventHandler<any>;
}
export interface MenuItem {
    text: string;
    item: LinkItem | ButtonItem;
}
export interface ContextMenuProps {
    menuItemGroups: MenuItem[][];
}
export declare const ContextMenu: SFC<ContextMenuProps>;
