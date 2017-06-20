var jshint_options = {
  'predef': [
    'angular'
  ],
  'bitwise': true,
  'eqeqeq': true,
  'forin': true,
  'freeze': true,
  'maxdepth': 5,
  'noarg': true,
  'nonew': true,
  'singleGroups': false,
  'undef': true
};

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          'node_modules/angular/angular.js',
          'node_modules/angular-route/angular-route.js',
          'node_modules/angular-storage/dist/angular-storage.js',
          'node_modules/angular-cookies/angular-cookies,js',
          'node_modules/angular-foundation/mm-foundation-tpls.js',
          'src/js/app.js',
          'src/js/app.config.js',
          'src/js/app.run.js',
          'src/js/directives/**/*.js',
          'src/js/app-services/**/*.js',
          'src/js/components/**/*.js'
        ],
        dest: 'www/js/bundle.js',
      },
    },
    sass: {
      dist: {
        options: {
          includePaths: ['node_modules/foundation-sites/scss'],
          outputStyle: 'expanded'
        },
        files: {
          'www/css/styles.css' : 'src/scss/styles.scss'
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js']
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src/js',
            src: ['components/**/*.html'],
            dest: 'www/'
          },
          {
            expand: true,
            cwd: 'src/js',
            src: ['templates/**/*.html'],
            dest: 'www/'
          },
          {
            expand: true,
            cwd: 'src/',
            src: ['index.html'],
            dest: 'www/'
          },
        ],
      },
    },
    watch: {
      css: {
        files: 'src/scss/*.scss',
        tasks: ['sass']
      },
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint', 'concat']
      },
      html: {
        files: ['src/**/*.html'],
        tasks: ['copy']
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build',['sass', 'jshint', 'concat', 'copy' ]);
  grunt.registerTask('default',['build','watch']);
};
