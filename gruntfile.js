/* istanbul ignore next */
module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    tslint: {
      options: {
        configuration: 'tslint.json',
        force: false,
        fix: false
      },
      lib: {
        files: {
          src: [
            './src/lib/**/*.ts',
            './src/test/**/*.ts'
          ]
        }
      }
    },
    ts: {
      lib: {
        tsconfig: 'tsconfig.json',
        options: {
          rootDir: './src'
        },
        files: [{
          src: [
            './src/lib/**/*.ts',
            './src/test/**/*.ts',
            '!./src/**/*.d.ts',
            '!./src/test/test.ts'
          ],
          outDir: '.'
        }]
      }
    },
    copy: {
     env: {
       expand: true,
       cwd: './tests/fixtures',
       src: ['.env.ci', '.env.circle-ci'],
       dest: './demo'
     }
    },
    watch: {
     ts: {
       files: ['./src/\*\*/\*.ts', '!./src/**/*.d.ts'],
       tasks: ['tslint:test', 'ts:test']
     }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-tslint');
  grunt.loadNpmTasks('grunt-ts');

  // Default build everything / full stack
  grunt.registerTask('default', [
    'tslint', 'ts'
  ]);

  // Build is alias to default including everything
  grunt.registerTask('build', [
    'tslint', 'ts'
  ]);
};
