(function (root, factory) {
    if(typeof define === "function" && define.amd) {
        // the AMD loader.
        define([], function(){
            return (root.qrCode = factory());
        });
    } else if(typeof module === "object" && module.exports) {
        // the CommonJS loader.
        module.exports = (root.qrCode = factory());
    } else {
        root.qrCode = factory();
    }
}(this, function () {
    /**
     *
     * @constructor
     */
    var QrCode = function () {
        },
        majorVersion= '3.0';
    // <%= lib %>

    // <%= prototype %>
    return new QrCode();
}));