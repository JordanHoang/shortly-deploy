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

<<<<<<< HEAD
    livepush: {
      gitpush: {
        cereal: {
          options: {
            remote: 'origin',
            branch: 'master'
          }
        }
      } 
    },

=======
>>>>>>> 4eb1b39158fce707e204f54d7fbc16559454e399
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
<<<<<<< HEAD
      prodServer: {
=======
      puhpushitrealgood: {
>>>>>>> 4eb1b39158fce707e204f54d7fbc16559454e399
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

<<<<<<< HEAD
  //grunt.registerTask('miniwheats', ['cssmin']);


  grunt.registerTask('push', ['shell']);
=======
>>>>>>> 4eb1b39158fce707e204f54d7fbc16559454e399
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

<<<<<<< HEAD

=======
>>>>>>> 4eb1b39158fce707e204f54d7fbc16559454e399
  grunt.registerTask('build', function(n) {
    grunt.task.run(['concat', 'uglify', 'cssmin']);
  });

  grunt.registerTask('upload', function(n) {
    if (grunt.option('prod')) {
      // add your production server task here
<<<<<<< HEAD
      grunt.log.
=======
      grunt.task.run([ 'shell' ]);
>>>>>>> 4eb1b39158fce707e204f54d7fbc16559454e399
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
