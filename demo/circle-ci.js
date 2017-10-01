'use strict';

/**
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
const { CircleCiGithubBot } = require('./../dist/circleci-github-bot');
const { ConfigurationComment } = require('./../dist/configuration/comment');

// Current directory
const applicationDirectory = path.dirname(require.main.filename);

// Simulate CI Env
dotenv.config({
  path: applicationDirectory + '/.env.circle-ci',
});

// Create a bot instance
const ciGithubBot = new CircleCiGithubBot(
  process.env.CI_GITHUB_BOT_USERNAME,
  process.env.CI_GITHUB_BOT_TOKEN
);

// Publish comment
ciGithubBot.createPullRequestComment(
  new ConfigurationComment(
    process.env.CI_TEMPLATES,
    {
      stageUrl: process.env.CI_STAGE_LINK_URL,
      stageText: process.env.CI_STAGE_LINK_TEXT,
      buildNumber: process.env.CI_CI_BUILD_NUMBER,
      buildUrl: process.env.CI_CI_BUILD_URL,
    }
  )
);

