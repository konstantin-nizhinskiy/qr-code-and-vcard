/**
 * Get formatted address
 * @param  address {object}                address
 * @param  encodingPrefix {object}         encoding prefix
 * @param  majorVersion {string}           version vCard
 * @return {String}         Formatted address
 */
function getFormattedAddress(encodingPrefix, address,majorVersion) {

    var formattedAddress = '';

    if (address.details.label ||
        address.details.street ||
        address.details.city ||
        address.details.stateProvince ||
        address.details.postalCode ||
        address.details.countryRegion) {

        if (majorVersion >= 4) {
            formattedAddress = 'ADR' + encodingPrefix + ';TYPE=' + address.type +
                (address.details.label ? ';LABEL="' + e(address.details.label) + '"' : '') + ':;;' +
                e(address.details.street) + ';' +
                e(address.details.city) + ';' +
                e(address.details.stateProvince) + ';' +
                e(address.details.postalCode) + ';' +
                e(address.details.countryRegion) + nl();
        } else {
            if (address.details.label) {
                formattedAddress = 'LABEL' + encodingPrefix + ';TYPE=' + address.type + ':' + e(address.details.label) + nl();
            }
            formattedAddress += 'ADR' + encodingPrefix + ';TYPE=' + address.type + ':;;' +
                e(address.details.street) + ';' +
                e(address.details.city) + ';' +
                e(address.details.stateProvince) + ';' +
                e(address.details.postalCode) + ';' +
                e(address.details.countryRegion) + nl();

        }
    }

    return formattedAddress;
};
