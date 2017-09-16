module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    tslint: {
      options: {
        configuration: ".tslint.json",
        force: false,
        fix: false
      },
      your_target: {
        files: {
          src: [
            "src/**/*.ts"
          ]
        }
      }
    },
    ts: {
      app: {
        files: [{
          src: ['src/\*\*/\*.ts', '!src/.baseDir.ts'],
          dest: './dist'
        }],
        options: {
          experimentalDecorators: true,
          emitDecoratorMetadata: true,
          module: 'commonjs',
          target: 'es6',
          sourceMap: false,
          rootDir: 'src'
        }
      }
    },
    watch: {
      ts: {
        files: ['src/\*\*/\*.ts'],
        tasks: ['ts']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-tslint");
  grunt.loadNpmTasks('grunt-ts');

  grunt.registerTask('default', [
    'tslint', 'ts'
  ]);
};
