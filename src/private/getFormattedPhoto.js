/**
 * Get formatted photo
 * @param  {String} photoType       Photo type (PHOTO, LOGO)
 * @param  {String} url             URL to attach photo from
 * @param  {String} mediaType       Media-type of photo (JPEG, PNG, GIF)
 * @param  {boolean} base64         base64 true/false
 * @param  {String} majorVersion    version vCard
 * @return {String}                 Formatted photo
 */
var getFormattedPhoto = function (photoType, url, mediaType, base64,majorVersion) {

    var params;

    if (majorVersion >= 4) {
        params = base64 ? ';ENCODING=b;MEDIATYPE=image/' : ';MEDIATYPE=image/';
    } else if (majorVersion === 3) {
        params = base64 ? ';ENCODING=b;TYPE=' : ';TYPE=';
    } else {
        params = base64 ? ';ENCODING=BASE64;' : ';';
    }

    return photoType + params + mediaType + ':' + e(url) + nl();
};
