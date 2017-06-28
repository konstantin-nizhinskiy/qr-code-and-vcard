/**
 * Encode string
 * @param  {String}     value to encode
 * @return {String}     encoded string
 */
var e = function(value) {
    if (value) {
        if (typeof(value) !== 'string') {
            value = '' + value;
        }
        return value.replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
    }
    return '';
};
