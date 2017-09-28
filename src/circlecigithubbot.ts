'use strict';

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

import CiGithubBot from './cigithubbot';
import ConfigurationGitHub from './configuration/github';

/**
 * "CircleCI to CiGitHubBot bridge" for CircleCI build environment.
 */
export default class CircleCiGithubBot extends CiGithubBot {

  /**
   * Constructor.
   *
   * @param {string} username GitHub username used by the bot.
   * @param {string} token    Token used by the bot.
   */
  constructor(username: string, token: string) {

    const configuration  = new ConfigurationGitHub(username, token);

    // No we insert data from CircleCI environment
    configuration
      .loadFromPullRequestUrl(process.env.CI_PULL_REQUEST);

    super(configuration);
  }
}
