module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['public/client/**/*.js', 'public/lib/**/*.js'],
        dest: 'public/dist/clientconcat.js',
      }, 
    
    },

    mochaTest: {
      cocoapuffs: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    uglify: {

      //fuglify stuff here
      captainCrunch: {
        files: {
          'public/dist/clientmin.js': ['public/dist/clientconcat.js']
        }
      }

    },

    eslint: {
      chexmix: [
        'app/**/*.js', 'lib/*.js', 'public/**/*.js',
        'test/*.js', 'server.js', 'server-config'
      ]
    },

    cssmin: {
      miniwheats: {
        files: [{
          expand: true,
          cwd: 'public',
          src: ['*.css'],
          dest: 'public/dist/',
          ext: '.min.css'
        }]
      }
  
    },

    watch: {
      scripts: {
        files: [
          'public/client/**/*.js',
          'public/lib/**/*.js',
        ],
        tasks: [
          'build'
        ]
      },
      css: {
        files: 'public/*.css',
        tasks: ['cssmin']
      }
    },

    shell: {
      puhpushitrealgood: {
        command: 'git push live master'
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-git');


  //grunt.registerTask('miniwheats', ['cssmin']);


  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('server-dev', function (target) {
    grunt.task.run([ 'nodemon', 'watch']);
  });

  grunt.registerTask('test', [
    'eslint',
    'mochaTest'
  ]);

  grunt.registerTask('build', function(n) {
    grunt.log.write('hello world');
    grunt.task.run(['concat', 'uglify', 'cssmin']);
  });

  grunt.registerTask('upload', function(n) {
    if (grunt.option('prod')) {
      // add your production server task here
      grunt.task.run([ 'shell' ]);
    } else {
      grunt.task.run([ 'server-dev' ]);
    }
  });

  grunt.registerTask('deploy', function(n) {
    // add your deploy tasks here
    if (grunt.option('prod')) {
      grunt.task.run([ 'upload']);
    } else {
      grunt.task.run([ 'test', 'build']);
    }
  });

};
