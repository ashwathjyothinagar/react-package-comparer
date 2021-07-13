var _a;
export var scrollToElement = function (element) {
    element.focus();
};
export var SortType;
(function (SortType) {
    SortType["Unsorted"] = "Unsorted";
    SortType["NameAsc"] = "NameAsc";
    SortType["NameDesc"] = "NameDesc";
    SortType["ValueAsc"] = "ValueAsc";
    SortType["ValueDesc"] = "ValueDesc";
    SortType["Manual"] = "Manual";
})(SortType || (SortType = {}));
export var sortFunctions = (_a = {},
    _a[SortType.NameAsc] = function (a, b) {
        var aName = a.name.toLowerCase();
        var bName = b.name.toLowerCase();
        if (aName === bName) {
            return 0;
        }
        else if (aName > bName) {
            return 1;
        }
        else {
            return -1;
        }
    },
    _a[SortType.NameDesc] = function (a, b) {
        var aName = a.name.toLowerCase();
        var bName = b.name.toLowerCase();
        if (aName === bName) {
            return 0;
        }
        else if (aName > bName) {
            return -1;
        }
        else {
            return 1;
        }
    },
    _a[SortType.ValueAsc] = function (a, b) {
        if (a.id === b.id) {
            return 0;
        }
        else if (a.id > b.id) {
            return 1;
        }
        else {
            return -1;
        }
    },
    _a[SortType.ValueDesc] = function (a, b) {
        if (a.id === b.id) {
            return 0;
        }
        else if (a.id > b.id) {
            return -1;
        }
        else {
            return 1;
        }
    },
    _a[SortType.Manual] = undefined,
    _a[SortType.Unsorted] = undefined,
    _a);
//# sourceMappingURL=functions.js.map