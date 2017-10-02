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
const { CircleCiGithubBot } = require('./../lib/circleci-github-bot');
const { ConfigurationComment } = require('./../lib/configuration/comment');

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
ciGithubBot.createComment(
  new ConfigurationComment(
    process.env.CI_TEMPLATES.split('|'),
    {
      stageUrl: process.env.CI_STAGE_LINK_URL,
      stageText: process.env.CI_STAGE_LINK_TEXT
    }
  )
);

