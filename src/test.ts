'use strict';

/**
 * ci-gitHub-bot
 * GitHub communication bot for CI/CD workflow.
 *
 * Bridge between CI-server like "CircleCI" or "Travis CI" or similar and ci-github-bot.
 * Takes ENVIRONMENT variables and pass them as JSON configuration to ci-github-bot instance.
 *
 * MIT License
 * *
 * @copyright 2017 clickalicious, Benjamin Carl
 */

import * as path from 'path';
import * as dotenv from 'dotenv';
import CiGithubBot from './cigithubbot';
import ConfigurationComment from './configuration/comment';
import ConfigurationGitHub from './configuration/github';

// Retrieve application directory
const applicationDirectory = path.dirname(require.main.filename);

// Simulate CI/CD environment var setup
dotenv.config({
  path: applicationDirectory + '\\.env',
});


// Bot configuration base ...
const configurationGitHub = new ConfigurationGitHub(
  process.env.GB_GITHUB_BOT_USERNAME,
  process.env.GB_GITHUB_BOT_TOKEN,
);

// Load the target/subject configuration from URL
configurationGitHub.loadFromPullRequestUrl(
  process.env.GB_GITHUB_PR_URL,
);

// Create instance of Bot
const bot = new CiGithubBot(
  configurationGitHub,
);

// Creates a new PR review comment on existing PR.
bot.createPullRequestComment(
  new ConfigurationComment(
    process.env.GB_TEMPLATES.split('|'),
    {
      stageUrl: process.env.GB_STAGE_LINK_URL,
      stageText: process.env.GB_STAGE_LINK_TEXT,
      buildNumber: process.env.GB_CI_BUILD_NUMBER,
      buildUrl: process.env.GB_CI_BUILD_URL,
    },
  ),
);
