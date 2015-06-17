module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['src/**/*.js', 'test/**/*.spec.js'],
            options: {
                jshintrc: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    /* jshint task */
    grunt.registerTask('test', ['jshint:files']);

    /* Default */
    grunt.registerTask('default', ['test']);
};
