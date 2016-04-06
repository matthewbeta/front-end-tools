module.exports = function(grunt) {

  grunt.initConfig({

    // WATCH TASK - KEEPS AN EYE ON FILE CHANGES AND TRIGGERS TASKS WHEN THEY DO
    watch: {
      styles: {
        files: 'styles/**/*.scss',
        tasks: ['sass']
      },
      scripts: {
        files: 'scripts/**/*.js',
        tasks: ['uglify']
      }
    },

    // COMPILE SCSS FILES INTO CSS
    sass: {
      options: {
            sourceMap: true
        },
        dist: {
            files: {
                'styles/css/styles.css': 'styles/scss/styles.scss'
            }
        }
    },

    // CONCATENATE AND MINIFY JS
    uglify: {
      options: {
        mangle: {
          except: ['jQuery', '$']
        }
      },
      build: {
        files: {
          'scripts/main.min.js': ['scripts/vendor/**/*.js', 'scripts/modules/**/*.js', 'scripts/main.js']
        }
      }
    },

    // RUN A WEB SERVER, LOAD ALL OUR FILES INTO A BROWSER,
    // SYNCS MULTIPLE BROWSERS TOGETHER INCLUDING CLICKS AND FORM FILLING
    browserSync: {
      bsFiles: {
        src : [
          'styles/css/styles.css',
          '**/*.html',
          'scripts/main.min.js'
        ]
      },
      options: {
        watchTask: true,
        server: {
          baseDir: "./"
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['sass', 'uglify', 'browserSync', 'watch']);

};
