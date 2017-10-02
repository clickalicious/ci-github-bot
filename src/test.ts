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

/**
 * e2e test script for development.
 */

import * as path from 'path';
import * as dotenv from 'dotenv';
import { CiGithubBot } from './ci-github-bot';
import { ConfigurationComment } from './configuration/comment';
import { ConfigurationGithub } from './configuration/github';

// Retrieve application directory
const applicationDirectory = path.dirname(require.main.filename);

// Simulate CI/CD environment var setup
dotenv.config({
  path: applicationDirectory + '/../demo/.env',
});


// Bot configuration base ...
const configurationGithub = new ConfigurationGithub(
  process.env.CGB_GITHUB_BOT_USERNAME,
  process.env.CGB_GITHUB_BOT_TOKEN,
);

// Load the target/subject configuration from URL
configurationGithub.loadFromPullRequestUrl(
  process.env.CGB_GITHUB_PR_URL,
);

// Create instance of Bot
const bot = new CiGithubBot(
  configurationGithub,
);

// Creates a new PR review comment on existing PR.
bot.createComment(
  new ConfigurationComment(
    process.env.CGB_TEMPLATES.split('|'),
    {
      stageUrl: process.env.CGB_STAGE_LINK_URL,
      stageText: process.env.CGB_STAGE_LINK_TEXT,
      buildNumber: process.env.CGB_CI_BUILD_NUMBER,
      buildUrl: process.env.CGB_CI_BUILD_URL,
    },
  ),
);
