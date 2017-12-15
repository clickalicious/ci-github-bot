module.exports = function(config) {
  config.set({
    files: [
      {
        pattern: "lib/**/*.js",
        mutated: true,
        included: false
      },
      "test/**/*.js",
      "!*/di-configuration*.js",
      "!lib/**/*interface.js",
    ],
    testRunner: "mocha",
    mutator: "javascript",
    mutate: ["lib/**/*.js", "!lib/di-configuration.js", "!lib/**/*interface.js"],
    transpilers: [],
    reporter: ["html", "progress"],
    testFramework: "mocha",
    coverageAnalysis: "perTest",
    htmlReporter: {
      baseDir: "docs/report/mutation/html"
    }
  });
};
