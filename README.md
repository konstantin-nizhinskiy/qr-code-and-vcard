QR code and vCard generations 
=============================

This module allows you to generate qr code and vCard format contact. Module support cyrillic (utf-8)

 * [download](#download)
 * [Loader supports](#loader-supports)
 * [methods](#methods)
 * [optionsqr](#optionsqr)
 * [optionsvcard](#optionsvcard)
 * [example](#example)
 
    
## Download
```sh
  $ bower install qr-code-and-vcard --save;
  $ git clone https://github.com/konstantin-nizhinskiy/qr-code-and-vcard.git;
```

## Loader supports
    * AMD
    * CommonJS

## Methods
 Method               | Arguments                  |  info           
----------------------|----------------------------|--------------------------
 CreateQr             | optionsQr                  | Create qr code
 CreateVCard          | optionsVCard               | Create vCard code
 CreateVCardQr        | optionsVCard,optionsQr     | Create qr code from vCard



## optionsQr
 keys                 | type       |  default  |  info           
----------------------|------------|-----------|------------------------------
typeNumber            | number     | 15        | Type number (1 ~ 40)
typeElement           | string     | createImg | Type element create QR ('createImg','createSvg','createTable')
errorCorrectionLevel  | string     | L         | Error correction level ('L', 'M', 'Q', 'H')
data                  | string     |           | Event error load json translation
cellSize              | number     | 2         | Size qr

## optionsVCard

https://en.wikipedia.org/wiki/VCard

 keys                     | type          |   info           
--------------------------|---------------|------------------------------ 
version                   | string        | The version of the vCard specification. In versions 3.0 and 4.0, this must come right after the BEGIN property.
formattedName             | string        | Customize contact name
firstName                 | string        | First name contact
middleName                | string        | Middle name contact
lastName                  | string        | Last name contact
namePrefix                | string        | Add prefix name
nameSuffix                | string        | Add suffix name
nickname                  | string        | One or more descriptive/familiar names for the object represented by this vCard.
gender                    | string        | Defines the person's gender.
birthday                  | string        | Date of birth of the individual associated with the vCard.
anniversary               | string        | Defines the person's anniversary.
email                     | array,string  | HOME The address for electronic mail communication with the vCard object.
workEmail                 | array,string  | WORK The address for electronic mail communication with the vCard object.
otherEmail                | array,string  | OTHER The address for electronic mail communication with the vCard object.
logo                      | object        | An image or graphic of the logo of the organization that is associated with the individual to which the vCard belongs.
logo.url                  | string        | Url to img
logo.mediaType            | string        | Type
logo.base64               | boolean       | Format img
photo                     | object        | An image or photograph of the individual associated with the vCard.
photo.url                 | string        | Url to img
photo.mediaType           | string        | Type
photo.base64              | boolean       | Format img
cellPhone                 | array,string  | Phone cellular
pagerPhone                | array,string  | Phone to send messages to a pager
homePhone                 | array,string  | Phone home
workPhone                 | array,string  | Phone work
homeFax                   | array,string  | Fax home
workFax                   | array,string  | Fax work
otherPhone                | array,string  | Other phone
homeAddress               | object        | Home address
homeAddress.label         | string        | Represents the actual text that should be put on the mailing label when delivering a physical package to the person/object associated with the vCard (related to the ADR property).
homeAddress.street        | string        | Home street
homeAddress.city          | string        | Home city
homeAddress.stateProvince | string        | Home stateProvince
homeAddress.postalCode    | string        | Home postalCode
homeAddress.countryRegion | string        | Home countryRegion
workAddress               | object        | Home workAddress
workAddress.label         | string        | Represents the actual text that should be put on the mailing label when delivering a physical package to the person/object associated with the vCard (related to the ADR property).
workAddress.street        | string        | Work street
workAddress.city          | string        | Work city
workAddress.stateProvince | string        | Work stateProvince
workAddress.postalCode    | string        | Work postalCode
workAddress.countryRegion | string        | Work countryRegion
title                     | string        | Specifies the job title, functional position or function of the individual associated with the vCard object within an organization.
role                      | string        | The role, occupation, or business category of the vCard object within an organization.
organization              | string        | The name and optionally the unit(s) of the organization associated with the vCard object. This property is based on the X.520 Organization Name attribute and the X.520 Organization Unit attribute.
url                       | string        | A URL pointing to a website that represents the person in some way.
workUrl                   | string        | Work URL pointing to a website that represents the person in some way.
note                      | string        | Specifies supplemental information or a comment that is associated with the vCard.
socialUrls                | object        | Social contact
socialUrls.facebook       | string        | Facebook
socialUrls.linkedIn       | string        | LinkedIn
socialUrls.twitter        | string        | Twitter
socialUrls.flickr         | string        | Flickr
socialUrls.skype          | string        | Skype
socialUrls.(custom)       | string        | Other social
source                    | string        | By default, if this property is not grouped with other properties it specifies the pronunciation of the FN property of the vCard object
rev                       | string        | A timestamp for the last time the vCard was updated.
## Example

```html
<!-- ... -->
    <script src="../dist/QrCode.js" type="application/javascript"></script>
    <div id="qr1"></div>
    <div id="qr2"></div>
    <div id="qr_vcard"></div>
    <pre id="vcard"></pre>
    <script>
        var  testCard= {
            version: '3.0',
            lastName: 'Нижинский',
            middleName: 'D',
            firstName: 'Костя',
            nameSuffix: 'JR',
            namePrefix: 'MR',
            nickname: 'Test User',
            gender: 'M',
            organization: 'ACME Corporation',
            workPhone: '312-555-1212444',
            homePhone: '312-555-1313333',
            cellPhone: '312-555-1414111',
            pagerPhone: '312-555-1515222',
            homeFax: '312-555-1616',
            workFax: '312-555-1717',
            birthday: "20140112",
            anniversary: "20140112",
            title: 'Crash Test Dummy',
            role: 'Crash Testing',
            email: 'john.doe@testmail',
            workEmail: 'john.doe@workmail',
            url: 'http://johndoe',
            workUrl: 'http://acemecompany/johndoe',
            homeAddress: {
                label: 'Home Address',
                street: '123 Main Street',
                city: 'Chicago',
                stateProvince: 'IL',
                postalCode: '12345',
                countryRegion: 'United States of America'
            },
    
            workAddress: {
                label: 'Work Address',
                street: '123 Corporate Loop\nSuite 500',
                city: 'Los Angeles',
                stateProvince: 'CA',
                postalCode: '54321',
                countryRegion: 'California Republic'
            },
    
            source: 'http://sourceurl',
            note: 'dddddd',
            socialUrls: {
                facebook: 'johndoe',
                linkedIn: 'johndoe',
                twitter: 'johndoe',
                flickr: 'johndoe',
                skype:"test_skype",
                custom: 'johndoe'
            }
        };
    
    
    

        document.getElementById('qr_vcard').innerHTML = qrCode.createVCardQr(testCard, {typeNumber: 30, cellSize: 5});
        
        document.getElementById('qr1').innerHTML = qrCode.createQr({typeElement:"createSvg", data:"text QR", typeNumber: 5, cellSize: 5});
        document.getElementById('qr2').innerHTML = qrCode.createQr("test QR 2");
        
        document.getElementById('vcard').innerHTML = qrCode.createVCard(testCard)
    
    
    </script>


<!-- ... -->
```