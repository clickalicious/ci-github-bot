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
const { CiGithubBot } = require('./../dist/ci-github-bot');
const { ConfigurationComment } = require('./../dist/configuration/comment');
const { ConfigurationGithub } = require('./../dist/configuration/github');

// Current directory
const applicationDirectory = path.dirname(require.main.filename);

// Simulate CI Env
dotenv.config({
  path: applicationDirectory + '/.env.circle-ci',
});

// Create a Github configuration
const configurationGithub = new ConfigurationGithub(
  process.env.CGB_GITHUB_BOT_USERNAME,
  process.env.CGB_GITHUB_BOT_TOKEN
);

// Load configuration from PR URL
configurationGithub.loadFromPullRequestUrl(process.env.CGB_GITHUB_PR_URL);

// Create a bot instance
const ciGithubBot = new CiGithubBot(configurationGithub);

// Publish comment
ciGithubBot.createPullRequestComment(
  new ConfigurationComment(
    process.env.CGB_TEMPLATES,
    {
      stageUrl: process.env.CGB_STAGE_LINK_URL,
      stageText: process.env.CGB_STAGE_LINK_TEXT,
      buildNumber: process.env.CGB_CI_BUILD_NUMBER,
      buildUrl: process.env.CGB_CI_BUILD_URL,
    }
  )
);

