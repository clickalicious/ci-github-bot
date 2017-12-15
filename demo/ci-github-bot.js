'use strict';

/**
 * ci-gitHub-bot
 *
 * Github communication bot for CI/CD workflows.
 *
 * Simplified abstraction on Github's PR/Review-Comment API.
 * Supports templates for comments based on PUG template engine.
 *
 * MIT License
 *
 * @copyright 2017 clickalicious, Benjamin Carl
 */

// Imports
const path = require('path');
const dotenv = require('dotenv');
const { DiConfiguration } = require('./../lib/di-configuration');

// Current directory
const applicationDirectory = path.dirname(require.main.filename);

// Default is generic DEMO
let filename = applicationDirectory + '/.env.ci';

// Check for CircleCI DEMO
if (process.env.CIRCLECI && 'true' === process.env.CIRCLECI) {
  filename = applicationDirectory + '/.env.circle-ci';
}

// Simulate CI Env
dotenv.config({
  path: filename,
});

// Create instance of our DI container collection
const diConfiguration = new DiConfiguration(
  process.env.CI_GITHUB_BOT_USERNAME,
  process.env.CI_GITHUB_BOT_TOKEN,
  process.env.CI_GITHUB_PR_URL
);

// Receive ci-github-bot from DIC
const ciGithubBot = diConfiguration.getContainer().resolve('CiGithubBot');
const configurationComment = diConfiguration.getContainer().resolve('ConfigurationComment');

// Configure comment object with data
configurationComment.setData(
  process.env.CI_TEMPLATES.split('|'),
  {
    stageUrl: process.env.CI_STAGE_LINK_URL,
    stageText: process.env.CI_STAGE_LINK_TEXT
  }
);

// Publish comment
ciGithubBot
  .createComment(configurationComment)
  .then(
    () => {
      console.log('Comment created successful.');
      process.exit(0);
    },
    (error) => {
      console.log(error);
      process.exit(1);
    }
  );
