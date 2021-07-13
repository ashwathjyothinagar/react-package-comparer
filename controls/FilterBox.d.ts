import React, { SFC } from 'react';
export interface FilterBoxProps {
    onFilter: React.FormEventHandler<any>;
    placeholder: string;
    value?: string;
}
export declare const FilterBox: SFC<FilterBoxProps>;
