module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    tslint: {
     options: {
       configuration: 'tslint.json',
       force: false,
       fix: false
     },
     app: {
       files: {
         src: [
           'src/**/*.ts',
         ]
       }
     }
    },
    ts: {
     app: {
       tsconfig: 'tsconfig.json',
       options: {
         rootDir: './src',
       },
       files: [{
         src: ['src/\*\*/\*.ts', '!src/**/*.d.ts'],
         outDir: './dist'
       }]
     }
    },
    copy: {
     env: {
       expand: true,
       cwd: './',
       src: ['.env.dist'],
       dest: './dist/'
     }
    },
    rename: {
     env: {
       files: [{
         src: './dist/.env.dist',
         dest: './dist/.env'
       }]
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
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-rename');
  grunt.loadNpmTasks('grunt-tslint');
  grunt.loadNpmTasks('grunt-ts');

  grunt.registerTask('default', [
    'tslint:app', 'ts:app', 'copy:env', 'rename:env',
  ]);
};
