"use strict";

var gruntTasks = require('grunt-tasks');

module.exports = function(grunt) {
    var path = require('path');

    gruntTasks(grunt, {
        tasks: [
            'grunt/tasks/*.js'

        ],
        config: 'grunt/MainConfig.js',
        aliases: 'grunt/Aliases.js'
    });

};