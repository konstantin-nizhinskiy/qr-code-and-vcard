
"use strict";
var path = require('path'),
    grunt = require('grunt');
grunt.task.registerTask('buildPrototype','build prototype',function(){
    var prototype=[''],
        lib=[''];
    grunt.file.recurse('src/prototype', function (a) {
        prototype.push(grunt.file.read(a));
    });
    grunt.file.recurse('src/private', function (a) {
        lib.push(grunt.file.read(a));
    });
    grunt.file.write('dist/QrCode.js',grunt.template.process(
        grunt.file.read('src/QrCode.js'),
        {
            data:{
                prototype:prototype.join('\n'),
                lib:lib.join('\n')
            }
        }));

});