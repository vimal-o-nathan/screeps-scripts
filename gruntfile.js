module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                email: 'vimal.olaganathan@gmail.com',
                password: '<your password>',
                branch: 'default',
                ptr: false
            },
            dist: {
                src: ['target/main/**/*.js']
            }
        }
    });
}