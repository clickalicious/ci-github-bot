module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    tslint: {
      options: {
        configuration: 'tslint.json',
        force: false,
        fix: false
      },
      test: {
        files: {
          src: [
            './src/test/**/*.ts'
          ]
        }
      },
      lib: {
        files: {
          src: [
            './src/lib/**/*.ts'
          ]
        }
      }
    },
    ts: {
      test: {
        tsconfig: 'tsconfig.json',
        options: {
          rootDir: './src'
        },
        files: [{
          src: [
            '!./src/lib/**/*.ts',
            './src/test/**/*.ts',
            '!./src/test/test.ts'
          ],
          outDir: './test'
        }]
      },
      lib: {
        tsconfig: 'tsconfig.json',
        options: {
          rootDir: './src/lib'
        },
        files: [{
          src: [
            '!./src/test/**/*.ts',
            './src/lib/**/*.ts'
          ],
          outDir: './lib'
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
    'tslint:lib', 'ts:lib', 'tslint:test', 'ts:test'
  ]);

  // Build is alias to default including everything
  grunt.registerTask('build', [
    'tslint', 'ts'
  ]);

  // Build just test
  grunt.registerTask('build:test', [
    'tslint:test', 'ts:test'
  ]);

  // Build just iib
  grunt.registerTask('build:lib', [
    'tslint:lib', 'ts:lib'
  ]);
};
