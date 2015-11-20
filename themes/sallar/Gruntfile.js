module.exports = function(grunt){
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    'source/css/style.css': 'source/lib/style.scss'
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', []);
};