/**
 * Create vCard (https://en.wikipedia.org/wiki/VCard)
 *
 * @param vCard {object}
 * @param vCard.version {string} - The version of the vCard specification. In versions 3.0 and 4.0, this must come right after the BEGIN property.
 * @param vCard.formattedName {string} - Customize contact name
 * @param vCard.firstName {string} - First name contact
 * @param vCard.middleName {string} - Middle name contact
 * @param vCard.lastName {string} - Last name contact
 * @param vCard.namePrefix {string} - Add prefix name
 * @param vCard.nameSuffix {string} - Add suffix name
 * @param vCard.nickname {string} - One or more descriptive/familiar names for the object represented by this vCard.
 * @param vCard.gender {string} - Defines the person's gender.
 * @param vCard.birthday {string} - Date of birth of the individual associated with the vCard.
 * @param vCard.anniversary {string} - Defines the person's anniversary.
 * @param vCard.email {array|string} - HOME The address for electronic mail communication with the vCard object.
 * @param vCard.workEmail {array|string} - WORK The address for electronic mail communication with the vCard object.
 * @param vCard.otherEmail {array|string} -OTHER The address for electronic mail communication with the vCard object.
 * @param vCard.logo {object} - An image or graphic of the logo of the organization that is associated with the individual to which the vCard belongs.
 * @param vCard.logo.url {string} - Url to img
 * @param vCard.logo.mediaType {string} - type
 * @param vCard.logo.base64 {boolean} - format img
 * @param vCard.photo {object} - An image or photograph of the individual associated with the vCard.
 * @param vCard.photo.url {string} -  Url to img
 * @param vCard.photo.mediaType {string} - type
 * @param vCard.photo.base64 {boolean} - format img
 * @param vCard.cellPhone {array|string} - Phone cellular
 * @param vCard.pagerPhone {array|string} - Phone to send messages to a pager
 * @param vCard.homePhone {array|string} - Phone home
 * @param vCard.workPhone {array|string} - Phone work
 * @param vCard.homeFax {array|string} - Fax home
 * @param vCard.workFax {array|string} - Fax work
 * @param vCard.otherPhone {array|string} - Other phone
 *
 * @param vCard.homeAddress {object} - Home address
 * @param vCard.homeAddress.label {string} - Represents the actual text that should be put on the mailing label when delivering a physical package to the person/object associated with the vCard (related to the ADR property).
 * @param vCard.homeAddress.street {string} - Home street
 * @param vCard.homeAddress.city {string} - Home city
 * @param vCard.homeAddress.stateProvince {string} - Home stateProvince
 * @param vCard.homeAddress.postalCode {string} - Home postalCode
 * @param vCard.homeAddress.countryRegion {string} - Home countryRegion
 * @param vCard.workAddress {object} - Home workAddress
 * @param vCard.workAddress.label {string} -  Represents the actual text that should be put on the mailing label when delivering a physical package to the person/object associated with the vCard (related to the ADR property).
 * @param vCard.workAddress.street {string} - Work street
 * @param vCard.workAddress.city {string} - Work city
 * @param vCard.workAddress.stateProvince {string} - Work stateProvince
 * @param vCard.workAddress.postalCode {string} - Work postalCode
 * @param vCard.workAddress.countryRegion {string} - Work countryRegion
 * @param vCard.title {string} - Specifies the job title, functional position or function of the individual associated with the vCard object within an organization.
 * @param vCard.role {string} - The role, occupation, or business category of the vCard object within an organization.
 * @param vCard.organization {string} - The name and optionally the unit(s) of the organization associated with the vCard object. This property is based on the X.520 Organization Name attribute and the X.520 Organization Unit attribute.
 * @param vCard.url {string} - A URL pointing to a website that represents the person in some way.
 * @param vCard.workUrl {string} - Work URL pointing to a website that represents the person in some way.
 * @param vCard.note {string} - Specifies supplemental information or a comment that is associated with the vCard.
 * @param vCard.socialUrls {object} - Social contact
 * @param vCard.socialUrls.facebook {string} - facebook
 * @param vCard.socialUrls.linkedIn {string} - linkedIn
 * @param vCard.socialUrls.twitter {string} - twitter
 * @param vCard.socialUrls.flickr {string} - flickr
 * @param vCard.socialUrls.skype {string} - skype
 * @param vCard.socialUrls.[custom] {string} - Other social
 * @param vCard.source {string} - By default, if this property is not grouped with other properties it specifies the pronunciation of the FN property of the vCard object
 * @param vCard.rev {string} - A timestamp for the last time the vCard was updated.
 *
 * @return {string}
 *
 *
 */

QrCode.prototype.createVCard = function (vCard) {

    var majorVersion = getMajorVersion(vCard.version),
        formattedVCardString='',
        encodingPrefix = majorVersion >= 4 ? '' : ';CHARSET=UTF-8';
    encodingPrefix='';
    if(!vCard.version){
        vCard.version='4.0';
    }
    formattedVCardString += 'BEGIN:VCARD' + nl();
    formattedVCardString += 'VERSION:' + vCard.version + nl();

    var formattedName = vCard.formattedName;

    if (!formattedName) {
        formattedName = '';

        [vCard.firstName, vCard.middleName, vCard.lastName]
            .forEach(function (name) {
                if (name) {
                    if (formattedName) {
                        formattedName += ' ';
                    }
                }
                formattedName += name;
            });
    }

    formattedVCardString += 'FN' + encodingPrefix + ':' + e(formattedName) + nl();
    formattedVCardString += 'N' + encodingPrefix + ':' +
        e(vCard.lastName) + ';' +
        e(vCard.firstName) + ';' +
        e(vCard.middleName) + ';' +
        e(vCard.namePrefix) + ';' +
        e(vCard.nameSuffix) + nl();

    if (vCard.nickname && majorVersion >= 3) {
        formattedVCardString += 'NICKNAME' + encodingPrefix + ':' + e(vCard.nickname) + nl();
    }

    if (vCard.gender) {
        formattedVCardString += 'GENDER:' + e(vCard.gender) + nl();
    }

    if (vCard.birthday) {
        formattedVCardString += 'BDAY:' + vCard.birthday + nl();
    }

    if (vCard.anniversary) {
        formattedVCardString += 'ANNIVERSARY:' + vCard.anniversary + nl();
    }

    if (vCard.email) {
        if (!Array.isArray(vCard.email)) {
            vCard.email = new Array(vCard.email);
        }
        vCard.email.forEach(
            function (address) {
                if (majorVersion >= 4) {
                    formattedVCardString += 'EMAIL' + encodingPrefix + ';type=HOME:' + e(address) + nl();
                } else if (majorVersion >= 3 && majorVersion < 4) {
                    formattedVCardString += 'EMAIL' + encodingPrefix + ';type=HOME,INTERNET:' + e(address) + nl();
                } else {
                    formattedVCardString += 'EMAIL' + encodingPrefix + ';HOME;INTERNET:' + e(address) + nl();
                }
            }
        );
    }

    if (vCard.workEmail) {
        if (!Array.isArray(vCard.workEmail)) {
            vCard.workEmail = new Array(vCard.workEmail);
        }
        vCard.workEmail.forEach(
            function (address) {
                if (majorVersion >= 4) {
                    formattedVCardString += 'EMAIL' + encodingPrefix + ';type=WORK:' + e(address) + nl();
                } else if (majorVersion >= 3 && majorVersion < 4) {
                    formattedVCardString += 'EMAIL' + encodingPrefix + ';type=WORK,INTERNET:' + e(address) + nl();
                } else {
                    formattedVCardString += 'EMAIL' + encodingPrefix + ';WORK;INTERNET:' + e(address) + nl();
                }
            }
        );
    }

    if (vCard.otherEmail) {
        if (!Array.isArray(vCard.otherEmail)) {
            vCard.otherEmail = new Array(vCard.otherEmail);
        }
        vCard.otherEmail.forEach(
            function (address) {
                if (majorVersion >= 4) {
                    formattedVCardString += 'EMAIL' + encodingPrefix + ';type=OTHER:' + e(address) + nl();
                } else if (majorVersion >= 3 && majorVersion < 4) {
                    formattedVCardString += 'EMAIL' + encodingPrefix + ';type=OTHER,INTERNET:' + e(address) + nl();
                } else {
                    formattedVCardString += 'EMAIL' + encodingPrefix + ';OTHER;INTERNET:' + e(address) + nl();
                }
            }
        );
    }

    if (vCard.logo && vCard.logo.url) {
        formattedVCardString += getFormattedPhoto('LOGO', vCard.logo.url, vCard.logo.mediaType, vCard.logo.base64,majorVersion);
    }

    if (vCard.photo && vCard.photo.url) {
        formattedVCardString += getFormattedPhoto('PHOTO', vCard.photo.url, vCard.photo.mediaType, vCard.photo.base64,majorVersion);
    }

    if (vCard.cellPhone) {
        if (!Array.isArray(vCard.cellPhone)) {
            vCard.cellPhone = new Array(vCard.cellPhone);
        }
        vCard.cellPhone.forEach(
            function (number) {
                if (majorVersion >= 4) {
                    formattedVCardString += 'TEL;VALUE=uri;TYPE="voice,cell":tel:' + e(number) + nl();
                } else {
                    formattedVCardString += 'TEL;TYPE=CELL:' + e(number) + nl();
                }
            }
        );
    }

    if (vCard.pagerPhone) {
        if (!Array.isArray(vCard.pagerPhone)) {
            vCard.pagerPhone = new Array(vCard.pagerPhone);
        }
        vCard.pagerPhone.forEach(
            function (number) {
                if (majorVersion >= 4) {
                    formattedVCardString += 'TEL;VALUE=uri;TYPE="pager,cell":tel:' + e(number) + nl();
                } else {
                    formattedVCardString += 'TEL;TYPE=PAGER:' + e(number) + nl();
                }
            }
        );
    }

    if (vCard.homePhone) {
        if (!Array.isArray(vCard.homePhone)) {
            vCard.homePhone = new Array(vCard.homePhone);
        }
        vCard.homePhone.forEach(
            function (number) {
                if (majorVersion >= 4) {
                    formattedVCardString += 'TEL;VALUE=uri;TYPE="voice,home":tel:' + e(number) + nl();
                } else {
                    formattedVCardString += 'TEL;TYPE=HOME,VOICE:' + e(number) + nl();
                }
            }
        );
    }

    if (vCard.workPhone) {
        if (!Array.isArray(vCard.workPhone)) {
            vCard.workPhone = new Array(vCard.workPhone);
        }
        vCard.workPhone.forEach(
            function (number) {
                if (majorVersion >= 4) {
                    formattedVCardString += 'TEL;VALUE=uri;TYPE="voice,work":tel:' + e(vCard.workPhone) + nl();

                } else {
                    formattedVCardString += 'TEL;TYPE=WORK,VOICE:' + e(vCard.workPhone) + nl();
                }
            }
        );
    }

    if (vCard.homeFax) {
        if (!Array.isArray(vCard.homeFax)) {
            vCard.homeFax = new Array(vCard.homeFax);
        }
        vCard.homeFax.forEach(
            function (number) {
                if (majorVersion >= 4) {
                    formattedVCardString += 'TEL;VALUE=uri;TYPE="fax,home":tel:' + e(number) + nl();

                } else {
                    formattedVCardString += 'TEL;TYPE=HOME,FAX:' + e(number) + nl();
                }
            }
        );
    }

    if (vCard.workFax) {
        if (!Array.isArray(vCard.workFax)) {
            vCard.workFax = new Array(vCard.workFax);
        }
        vCard.workFax.forEach(
            function (number) {
                if (majorVersion >= 4) {
                    formattedVCardString += 'TEL;VALUE=uri;TYPE="fax,work":tel:' + e(number) + nl();

                } else {
                    formattedVCardString += 'TEL;TYPE=WORK,FAX:' + e(number) + nl();
                }
            }
        );
    }

    if (vCard.otherPhone) {
        if (!Array.isArray(vCard.otherPhone)) {
            vCard.otherPhone = new Array(vCard.otherPhone);
        }
        vCard.otherPhone.forEach(
            function (number) {
                if (majorVersion >= 4) {
                    formattedVCardString += 'TEL;VALUE=uri;TYPE="voice,other":tel:' + e(number) + nl();

                } else {
                    formattedVCardString += 'TEL;TYPE=OTHER:' + e(number) + nl();
                }
            }
        );
    }

    [{
        details: vCard.homeAddress||{},
        type: 'HOME'
    }, {
        details: vCard.workAddress||{},
        type: 'WORK'
    }].forEach(
        function (address) {
            formattedVCardString += getFormattedAddress(encodingPrefix, address,majorVersion);
        }
    );

    if (vCard.title) {
        formattedVCardString += 'TITLE' + encodingPrefix + ':' + e(vCard.title) + nl();
    }

    if (vCard.role) {
        formattedVCardString += 'ROLE' + encodingPrefix + ':' + e(vCard.role) + nl();
    }

    if (vCard.organization) {
        formattedVCardString += 'ORG' + encodingPrefix + ':' + e(vCard.organization) + nl();
    }

    if (vCard.url) {
        formattedVCardString += 'URL' + encodingPrefix + ':' + e(vCard.url) + nl();
    }

    if (vCard.workUrl) {
        formattedVCardString += 'URL;type=WORK' + encodingPrefix + ':' + e(vCard.workUrl) + nl();
    }

    if (vCard.note) {
        formattedVCardString += 'NOTE' + encodingPrefix + ':' + e(vCard.note) + nl();
    }

    if (vCard.socialUrls) {
        for (var key in vCard.socialUrls) {
            if (vCard.socialUrls.hasOwnProperty(key) &&
                vCard.socialUrls[key]) {
                formattedVCardString += 'X-SOCIALPROFILE' + encodingPrefix + ';TYPE=' + key + ';x-user=' + e(vCard.socialUrls[key])+":"+getSocialUrls(key,vCard.socialUrls[key]) + nl();
            }
        }
    }
    if (vCard.source) {
        formattedVCardString += 'SOURCE' + encodingPrefix + ':' + e(vCard.source) + nl();
    }
    if (vCard.rev) {
        formattedVCardString += 'REV:' + e(vCard.REV) + nl();
    }
    formattedVCardString += 'END:VCARD' + nl();
    return formattedVCardString;
}
