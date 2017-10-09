'use strict';

module.exports = function () {
  return {

    files: [
      'lib/**/*.js'
    ],

    tests: [
      'test/**/*.js'
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'mocha'
  };
};
