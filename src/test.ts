'use strict';

/**
 /**
 * ci-gitHub-bot
 *
 * GitHub communication bot for CI/CD workflows.
 *
 * Simplified abstraction on GitHub's PR/Review-Comment API.
 * Supports templates for comments based on PUG template engine.
 *
 * MIT License
 *
 * @copyright 2017 clickalicious, Benjamin Carl
 */

/**
 * e2e test script for development.
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
