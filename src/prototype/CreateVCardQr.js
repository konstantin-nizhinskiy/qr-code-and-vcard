/**
 * Create QR code from vCard
 *
 *
 * @param vCard {object} - object vCard
 * @param options {string|object}
 * @param options.typeNumber {number} - Type number (1 ~ 40)
 * @param options.typeElement {number} - Type element create QR ('createImg','createSvg','createTable')
 * @param options.errorCorrectionLevel {string} - Error correction level ('L', 'M', 'Q', 'H')
 * @param options.data {string} - Error correction level ('L', 'M', 'Q', 'H')
 * @param options.mode {string} - Mode ('Numeric', 'Alphanumeric', 'Byte'(default), 'Kanji')
 * @param options.cellSize {number} - Size qr default: 2
 * @param options.margin {number} - Margin qr default: cellSize * 4
 * @return {string}
 */
QrCode.prototype.createVCardQr = function (vCard,options) {
    options.data=this.createVCard(vCard);
    return this.createQr(options)

};
