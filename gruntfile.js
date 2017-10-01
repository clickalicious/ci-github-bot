module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    tslint: {
      options: {
        configuration: 'tslint.json',
        force: false,
        fix: false
      },
      dev: {
        files: {
          src: [
            './src/**/*.ts'
          ]
        }
      },
      dist: {
        files: {
          src: [
            './src/**/*.ts', '!./src/test.ts'
          ]
        }
      }
    },
    ts: {
      dev: {
        tsconfig: 'tsconfig.json',
        options: {
          rootDir: './src'
        },
        files: [{
          src: ['./src/\*\*/\*.ts', '!./src/**/*.d.ts'],
          outDir: './dist'
        }]
      },
      dist: {
        tsconfig: 'tsconfig.json',
        options: {
          rootDir: './src'
        },
        files: [{
          src: ['./src/\*\*/\*.ts', '!./src/**/*.d.ts', '!./src/test.ts'],
          outDir: './dist'
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
       tasks: ['tslint:dev', 'ts:dev']
     }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-tslint');
  grunt.loadNpmTasks('grunt-ts');

  grunt.registerTask('default', [
    'tslint:dist', 'ts:dist'
  ]);

  grunt.registerTask('lint', [
    'tslint:dist'
  ]);

  grunt.registerTask('build', [
    'tslint:dist', 'ts:dist'
  ]);

  grunt.registerTask('build-dev', [
    'tslint:dev', 'ts:dev'
  ]);
};
