module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        js: { 
            src: ['public/js/*.js'],
            dest: 'public/js/min/',
            expand: true,    // allow dynamic building
            flatten: true,   // remove all unnecessary nesting
            ext: '.min.js' 
        }
    },
    watch: {
        js:  { files: 'js/*.js', tasks: [ 'uglify' , 'concat'] },
    }

  });

// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
grunt.registerTask('default', ['uglify']);
};