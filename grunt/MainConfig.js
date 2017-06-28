"use strict";

var grunt = require('grunt');

module.exports = {
    bowerJson:grunt.file.readJSON('bower.json'),
    banner: '\nname: <%= bowerJson.name %>\n' +
    'version: <%= bowerJson.version %>\n' +
    'author: <%= bowerJson.authors %>\n' +
    'date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> \n\n'

};
