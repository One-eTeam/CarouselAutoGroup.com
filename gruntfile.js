module.exports = function (grunt) {
    grunt.initConfig({
        inline: {
            options: {
                cssmin: true
            },
            dist: {
                src: 'content.html',
                dest: 'index.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-inline');
};
