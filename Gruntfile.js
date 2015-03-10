/**
 * Created by anderson.mota on 10/03/2015.
 */
module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    var basePath = "./src/";
    var componentsJS = require('wiredep')().js;

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'public/js/main.min.js': [
                        componentsJS,
                        basePath + 'js/**/*.js',
                        '!./**/*.min.js'
                    ]
                }
            }
        },
        concurrent: {
            dev: {
                tasks: ['watch:scripts', 'watch:style'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        watch: {
            scripts: {
                files: [basePath + 'js/**/*.js', './Gruntfile.js', '!./**/*.min.js'],
                tasks: ['uglify']
            },
            style: {
                files: [basePath + 'sass/**/*.scss'],
                tasks: ['style']
            }
        }
    });

    grunt.registerTask('default', ['uglify', 'compass']);
    grunt.registerTask('style', ['compass']);
    grunt.registerTask('develop', ['uglify', 'style', 'concurrent:dev']);
};