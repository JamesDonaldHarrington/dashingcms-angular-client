module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js']
    },
    concat: {
      options: {
        separator: ' ',
      },
      js: {
        src: 'src/js/**/*.js',
        dest: 'dest/app.min.js',
      },
      // css: {
      //   src: 'src/css/**/*.css',
      //   dest: 'dest/app.min.css',
      // },
    },
    copy: {
      main: {
        src: 'src/index.html',
        dest: 'dest/index.html',
      },
      tpls:{
        expand: true,     // Enable dynamic expansion.
        cwd: 'src/',      // Src matches are relative to this path.
        src: ['tpl/**/*.html'], // Actual pattern(s) to match.
        dest: 'dest/',   // Destination path prefix.
      },
      img:{
        expand: true,
        cwd: 'src/',
        src: ['img/**/*'],
        dest: 'dest/',
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'dest/app.min.js': ['dest/app.min.js']
        }
      }
    },
    sass: {
     
        options: {
            style:'compressed',
            includePaths:['dest/libs/foundation/scss']
            
        },
        dist: {
            files: {
                'dest/app.min.css': 'src/scss/main.scss'
            }
        }
    
    },
    cssmin: {
      target: {
        files: {
          'dest/app.min.css': ['dest/app.min.css']
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/**/*'],
        tasks: ['build'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['build','watch']);
  grunt.registerTask('build', ['concat','copy','sass','jshint']);
  grunt.registerTask('probuild',['build', 'uglify', 'cssmin']);

};
