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

import { CiGithubBot } from './ci-github-bot';
import { ConfigurationGithub } from './configuration/github';

/**
 * "CircleCI to CiGithubBot bridge" for CircleCI build environment.
 */
export class CircleCiGithubBot extends CiGithubBot {

  /**
   * Constructor.
   *
   * @param {string} username Github username used by the bot.
   * @param {string} token    Token used by the bot.
   */
  constructor(username: string, token: string) {

    const configuration  = new ConfigurationGithub(username, token);

    // No we insert data from CircleCI environment
    configuration
      .loadFromPullRequestUrl(process.env.CI_PULL_REQUEST);

    super(configuration);
  }
}
