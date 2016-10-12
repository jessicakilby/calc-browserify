// module.exports = function(grunt) {

//   grunt.initConfig({
//     jshint: {
//       files: ['../javascripts/**/*.js'],
//       options: {
//         predef: [ "document", "console", "$" ],
//         esnext: true,
//         globalstrict: true,
//         globals: {},
//         browserify: true
//       }
//     },
//     watch: {
//       javascripts: {
//         files: ['../javascripts/**/*.js'],
//         tasks: ['jshint']
//       }
//     }
//   });

//   require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
//   grunt.registerTask('default', ['jshint', 'watch']);
// };

module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      js: {
          src: ['../javascripts/main.js'],
          dest: '../dist/app.js'
      }
    },
    jshint: {
      options: {
        predef: [ "document", "console" ],
        esnext: true,
        globalstrict: true,
        globals: {},
        browserify: true
      },
      files: ['../javascripts/**/*.js']
    },
    watch: {
      options: {
        livereload: true,
      },
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint', 'browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint', 'browserify', 'watch']);
};