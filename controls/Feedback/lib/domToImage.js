"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var html2canvas_1 = __importDefault(require("html2canvas"));
var moment_1 = __importDefault(require("moment"));
exports.domToImage = function (name, selectorId) {
    var domElement = document.getElementById(selectorId);
    if (!domElement) {
        return;
    }
    html2canvas_1.default(domElement).then(function (canvas) {
        canvas.toBlob(function (blob) {
            downloadUrl(name, blob);
        });
    });
};
var downloadUrl = function (name, blob) {
    var filename = name + "_" + moment_1.default().unix() + ".png";
    if (window.navigator && window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(blob, filename);
    }
    else {
        var dataUrl = window.URL.createObjectURL(blob);
        var link = document.createElement('a');
        if (link.download !== undefined) {
            link.setAttribute('href', dataUrl);
            link.setAttribute('download', filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
};
//# sourceMappingURL=domToImage.js.map