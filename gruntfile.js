module.exports = function(grunt) {

    var config  = require('./.screeps.json');
    var email = grunt.option('email') || config.email;
    var password = grunt.option('password') || config.password;
    var branch = grunt.option('branch') || config.branch;
    var ptr = grunt.option('ptr') ? true : config.ptr;

    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-screeps');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({
        ts: {
            default: {
                tsconfig: './tsconfig.json'
            }
        }, 

        // Remove all files from the dist folder
        clean: {
            'dist': ['dist']
        },

        // Copy all source files into the dist folder, flattening the folder structure by converting path delimiters to underscores
        copy: {
            // Pushes the game code to the dist folder so it can be modified before being send to the screeps server.
            screeps: {
                files: [{
                    expand: true,
                    cwd: 'target/main/',
                    src: '**',
                    dest: 'dist/',
                    filter: 'isFile',
                    rename: function(dest, src) {
                        // Change the path name utilize underscores for folders
                        return dest + src.replace(/\//g,'.');
                    }
                }]
            }
        },

        // Uploading source files from dist/ folder to Screeps server
        screeps: {
            options: {
                email: email,
                password: password,
                branch: branch,
                ptr: ptr
            },
            dist: {
                src: ['dist/*.js']
            }
        }
    });

    grunt.registerTask('default', ['ts', 'clean', 'copy:screeps', 'screeps']);
}