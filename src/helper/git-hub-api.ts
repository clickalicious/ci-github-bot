'use strict';

/**
 * ci-gitHub-bot
 *
 * GitHub communication bot for CI/CD workflow.
 *
 * Simplified abstraction on GitHub's PR/Review-Comment API.
 * Supports templates for comments based on PUG template engine.
 *
 * MIT License
 *
 * @copyright 2017 clickalicious, Benjamin Carl
 */

import ConfigurationGitHub from './../configuration/github';
import ModelGitHubPullRequestComment from './../model/git-hub/pull-request/comment';

/**
 * Helper for calling cURL via commandline.
 */
export default class HelperGitHubApi {

  /**
   * Configuration for accessing GitHub.
   *
   * @var {ConfigurationGitHub}
   */
  private configuration: ConfigurationGitHub;

  /**
   * Constructor.
   *
   * @param {ConfigurationGitHub} configuration
   */
  constructor(configuration: ConfigurationGitHub) {
    this
      .setConfiguration(configuration);
  }

  /**
   * Returns FQ-API-URL for passed path.
   *
   * @param {string} path
   *
   * @returns {string}
   */
  public getApiUrl(path: string): string {
    return this.urlFactory(
      'repos/' +
      this.getConfiguration().getOrganisation() + '/' +
      this.getConfiguration().getRepository() + '/' +
      path,
    );
  }

  /**
   * Parses a Model from a plain JSON object
   *
   * @param {string} response from API request GET /repos/:owner/:repo/pulls/:number
   *
   * @returns {ModelGitHubPullRequestComment}
   */
  public parsePullRequestCommentResponse(response: string): ModelGitHubPullRequestComment {
    return Object.assign(new ModelGitHubPullRequestComment(), JSON.parse(response));
  }

  /**
   *
   * @param {string} path
   *
   * @returns {string}
   */
  private urlFactory(path: string): string {
    return this.getConfiguration().getScheme() + '://' +
      this.getConfiguration().getHost() + '/' +
      path;
  }

  /**
   * Getter for configuration.
   *
   * @returns {ConfigurationGitHub}
   */
  private getConfiguration(): ConfigurationGitHub {
    return this.configuration;
  }

  /**
   * Setter for configuration.
   *
   * @param {ConfigurationGitHub} value
   *
   * @returns {HelperGitHubApi}
   */
  private setConfiguration(value: ConfigurationGitHub): this {
    this.configuration = value;

    return this;
  }
}
