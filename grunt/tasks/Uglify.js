
"use strict";
var path = require('path'),
    grunt = require('grunt');
module.exports = {
    uglify: {
        options: {
            compress: {
                drop_console: true
            }
        },
        QrCode: {
            files: {
                'dist/QrCode.min.js':[
                    'dist/QrCode.js'
                ]



            }
        }
    }
};