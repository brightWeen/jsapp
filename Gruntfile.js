/*global grunt*/
module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            jsx: {
                files: [
                    'web/app.jsx'
                ],
                tasks: ['react', 'browserify'],
                options: {
                    livereload: true
                }
            },
            static: {
                files: [
                    'web/app.html',
                    'web/main.js'
                ],
                tasks: ['copy'],
                options: {
                    livereload: true
                }
            }
        },
        // browserify: {
        //     options: {
        //         debug: true,
        //         transform: ['babelify']
        //     },
        //     app: {
        //         src: 'web/app.jsx',
        //         dest: 'build/web/app.js'
        //     }
        // },
        react: {
            'modules': {
                files: [{
                    expand: true,
                    cwd: 'web',
                    src: ['**/*.jsx'],
                    dest: 'build/web',
                    ext: '.js'
                }]
            }
        },
        copy: {
            main: {
                src: ['package.json'],
                dest: 'build/'
            },
            web: {
                src: ['web/*', '!web/**/*.jsx'],
                dest: 'build/'
            },
            core: {
                src: ['core/*'],
                dest: 'build/'
            }
        },
        electron: {
            osxBuild: {
                options: {
                    name: 'jsapp',
                    dir: 'build',
                    out: 'package',
                    version: '0.35.1',
                    platform: 'darwin',
                    arch: 'x64',
                    overwrite: true
                }
            },
            winBuild: {
                options: {
                    name: 'jsapp',
                    dir: 'build',
                    out: 'package',
                    version: '0.33.4',
                    platform: 'win32',
                    arch: 'x64',
                    overwirte: true
                }
            }
        },
        bgShell: {
            run: {
                bg: true,
                cmd: '/Users/ligf/.electron/electron-v0.35.1-darwin-x64/Electron.app/Contents/MacOS/Electron build'
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-electron');
    grunt.loadNpmTasks('grunt-bg-shell');

    //build
    grunt.registerTask('default', [
        'copy',
        'react'
        //'browserify'
    ]);

    grunt.registerTask('debug', [
        'copy',
        'react',
        // 'browserify',
        'bgShell',
        'watch'
    ]);

    grunt.registerTask('package', [
        'copy',
        'react',
        //'browserify',
        'electron:winBuild'
    ]);
};
