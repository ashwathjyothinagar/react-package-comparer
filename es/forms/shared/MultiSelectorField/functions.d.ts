import { SelectItem } from './MultiSelectBox';
export declare const scrollToElement: (element: {
    focus: () => void;
}) => void;
export declare type SortFunction = (a: SelectItem, b: SelectItem) => number;
export declare type SortFunctionsMap = {
    [key in SortType]: SortFunction | undefined;
};
export declare enum SortType {
    Unsorted = "Unsorted",
    NameAsc = "NameAsc",
    NameDesc = "NameDesc",
    ValueAsc = "ValueAsc",
    ValueDesc = "ValueDesc",
    Manual = "Manual"
}
export declare const sortFunctions: SortFunctionsMap;
