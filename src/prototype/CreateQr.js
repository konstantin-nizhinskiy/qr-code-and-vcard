/**
 * Create QR code
 *
 * @param options {string|object}
 * @param options.typeNumber {number} - Type number (1 ~ 40)
 * @param options.typeElement {string} - Type element create QR ('createImg','createSvg','createTable')
 * @param options.errorCorrectionLevel {string} - Error correction level ('L', 'M', 'Q', 'H')
 * @param options.data {string} - Data for qr
 * @param options.mode {string} - Mode ('Numeric', 'Alphanumeric', 'Byte'(default), 'Kanji')
 * @param options.cellSize {number} - Size qr default: 2
 * @param options.margin {number} - Margin qr default: cellSize * 4
 * @return {string}
 */
QrCode.prototype.createQr = function (options) {

    if('string'===typeof options){
        options = {
            data:options
        }
    }
    if(!options.typeNumber){
        options.typeNumber=4;
    }
    if(!options.typeElement){
        options.typeElement='createImg';
    }
    if(!options.errorCorrectionLevel){
        options.errorCorrectionLevel='L';
    }
    if(!options.mode){
        options.mode='Byte';
    }
    if(!options.cellSize){
        options.cellSize=2;
    }
    if(!options.margin){
        options.margin=options.cellSize*4;
    }
    console.log(options)
    var qr = qrcode(options.typeNumber, options.errorCorrectionLevel);
    qr.addData(options.data,options.mode);
    qr.make();
    switch (options.typeElement){
        case 'createImg':
            return qr.createImgTag(options.cellSize,options.margin);
        case 'createSvg':
            return qr.createSvgTag(options.cellSize,options.margin);
        case 'createTable':
            return qr.createTableTag(options.cellSize,options.margin);
        default:
            throw new Error('Not found typeElement ['+options.typeElement+'}')
    }
};
