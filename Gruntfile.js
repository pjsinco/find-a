module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-compass");
  grunt.loadNpmTasks("grunt-contrib-jade");
  grunt.loadNpmTasks("grunt-contrib-copy");


  grunt.initConfig({

    compass: {
      dev: {
        options: {
          config: 'config.rb'
        }
      }
    },

    jade: {
      compile: {
        options: {
          pretty: true,
        },
        files: [{
          expand: true,
          cwd: 'components/jade/',
          src: '**/*.jade',
          dest: 'builds/dev',
          ext: '.html'
        }]
      }
    },

    copy: {
      main: {
        options: {

        },
        files: [{
          expand: true,
          cwd: 'components/js',
          src: ['*.js'],
          dest: 'builds/dev/js',
          ext: '.js' 
        }]
      }
    },

    watch: {
      options: {
        livereload: true
      },
      
      sass: {
        files: ['components/sass/**/*.scss'],
        tasks: ['compass:dev'] 
      },

      compileHtml: {
        files: ['components/jade/*.jade'],
        tasks: ['jade']
      },

      copyJs: {
        files: ['components/js/**/*.js'],
        tasks: ['copy:main']
      }
    
    } // watch
  }); // initConfig
  
  grunt.registerTask('default', ['watch']);

}; // exports

