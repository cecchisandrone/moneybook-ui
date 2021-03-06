// Generated on 2015-01-21 using generator-angular 0.9.2
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    var localConfig;
    try {
        localConfig = require('./server/config/local.env');
    } catch(e) {
        localConfig = {};
    }

    // Load grunt tasks automatically, when needed
    require('jit-grunt')(grunt, {
        express: 'grunt-express-server',
        useminPrepare: 'grunt-usemin',
        ngtemplates: 'grunt-angular-templates',
        cdnify: 'grunt-google-cdn',
        protractor: 'grunt-protractor-runner',
        buildcontrol: 'grunt-build-control',
        ngconstant: 'grunt-ng-constant',
        jasmine_node: 'grunt-jasmine-nodejs',
        grunt_env: 'grunt-env'
    });

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        dist: 'dist',
        server: 'server'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: appConfig,

        express: {
            options: {
                port: process.env.PORT || 9000
            },
            dev: {
                options: {
                    script: '<%= yeoman.server %>',
                    debug: true
                }
            },
            prod: {
                options: {
                    script: '<%= yeoman.server %>'
                }
            },
            test: {
                options: {
                    script: '<%= yeoman.server %>'
                }
            }
        },

        env: {
            test: {
                NODE_ENV: 'test'
            },
            prod: {
                NODE_ENV: 'production'
            },
            all: localConfig
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            js: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
                tasks: ['newer:jshint:all'],
                options: {
                    livereload: true
                }
            },
            jsTest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['newer:jshint:test', 'karma']
            },
            jsTestServer: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['env:test', 'newer:jshint:test', 'jasmine_nodejs:all']
            },
            styles: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    '<%= yeoman.app %>/**/*.html',
                    '.tmp/styles/{,*/}*.css',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            },
            express: {
                files: ['<%= yeoman.server %>/**/*.{js,json}'],
                tasks: ['express:dev', 'wait'],
                options: {
                    spawn: false //Without this option specified express won't be reloaded
                }
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    '<%= yeoman.app %>/scripts/{,*/}*.js'
                ]
            },
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['test/spec/{,*/}*.js']
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/{,*/}*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the app
        /*    wiredep: {
         options: {
         cwd: '<%= yeoman.app %>'
         },
         app: {
         src: ['<%= yeoman.app %>/index.html'],
         ignorePath:  /\.\.\//
         }
         },
         */
        // Renames files for browser caching purposes
        filerev: {
            dist: {
                src: [
                    '<%= yeoman.dist %>/scripts/{,*/}*.js',
                    '<%= yeoman.dist %>/styles/{,*/}*.css',
                    '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                    '<%= yeoman.dist %>/styles/fonts/*'
                ]
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/images']
            }
        },

        // The following *-min tasks will produce minified files in the dist folder
        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: 'styles/*.css',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        uglify: {
            build: {
                files: [{
                    expand: true,
                    src: '**/*.js',
                    dest: '<%= yeoman.dist %>/scripts',
                    cwd: '<%= yeoman.app %>/scripts'
                }]
            },
            options: {
                mangle: false
            },
        },
        // concat: {
        //   dist: {}
        // },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: '**/*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },

        // ngAnnotate tries to make the code safe for minification automatically by
        // using the Angular long form for dependency injection. It doesn't work on
        // things like resolve or inject so those have to be done manually.
        ngAnnotate: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/scripts',
                    src: '**/*.js',
                    dest: '<%= yeoman.dist %>/scripts',
                }]
            }
        },

        // Replace Google CDN references
        cdnify: {
            dist: {
                html: ['<%= yeoman.dist %>/*.html']
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: ['**']
                }, {

                    expand: true,
                    cwd: 'bower_components',
                    dest: '<%= yeoman.dist %>/bower_components',
                    src: ['**']
                },

                    {
                        expand: true,
                        cwd: '.tmp/images',
                        dest: '<%= yeoman.dist %>/images',
                        src: ['generated/*']
                    }, {
                        expand: true,
                        cwd: 'bower_components/bootstrap/dist',
                        src: 'fonts/*',
                        dest: '<%= yeoman.dist %>'
                    }]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
                'copy:styles'
            ],
            test: [
                'copy:styles'
            ],
            dist: [
                'copy:styles',
                'imagemin',
                'svgmin'
            ]
        },

        // Test settings
        karma: {
            options: {
                configFile: 'karma.conf.js',
            },
            unit: {
                autoWatch: true
            }
        },
        jasmine_nodejs: {
            // task specific (default) options 
            options: {
                specNameSuffix: ["spec.js", "integration.js"], // also accepts an array
                helperNameSuffix: "helper.js",
                useHelpers: false,
                stopOnFailure: false,
                // configure one or more built-in reporters 
                reporters: {
                    console: {
                        colors: true,
                        cleanStack: 1,       // (0|false)|(1|true)|2|3 
                        verbosity: 4,        // (0|false)|1|2|3|(4|true) 
                        listStyle: "indent", // "flat"|"indent" 
                        activity: false
                    }
                },
                // add custom Jasmine reporter(s) 
                customReporters: []
            },
        all: {
            // target specific options 
            options: {
                useHelpers: false
            },
            // spec files 
            specs: [
                "test/spec/api/**"
            ]
        }

    }
});


    grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'express:prod', 'express-keepalive']);
        }

        grunt.task.run([
            'clean:server',
           // 'concurrent:server',
            'autoprefixer',
            'express:dev',
            'wait',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'express:test',
        'karma'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'concurrent:dist',
        'copy:dist',
        'cssmin',
        'ngAnnotate',
        'uglify',
        'htmlmin'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);

    // Used for delaying livereload until after server has restarted
    grunt.registerTask('wait', function () {
        grunt.log.ok('Waiting for server reload...');

        var done = this.async();

        setTimeout(function () {
            grunt.log.writeln('Done waiting!');
            done();
        }, 1500);
    });

    grunt.registerTask('express-keepalive', 'Keep grunt running', function () {
        this.async();
    });
};
