import html2canvas from 'html2canvas';
import moment from 'moment';
export var domToImage = function (name, selectorId) {
    var domElement = document.getElementById(selectorId);
    if (!domElement) {
        return;
    }
    html2canvas(domElement).then(function (canvas) {
        canvas.toBlob(function (blob) {
            downloadUrl(name, blob);
        });
    });
};
var downloadUrl = function (name, blob) {
    var filename = name + "_" + moment().unix() + ".png";
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