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

/**
 * Model for GitHub Pull-Request Comment.
 *
 * @api https://developer.github.com/v3/pulls/#get-a-single-pull-request
 */
export default class ModelGitHubPullRequestComment {

  /**
   * Attribute body
   *
   * @var {string}
   */
  public body: string;

  /**
   * Getter for body.
   *
   * @returns {string}
   */
  public getBody(): string {
    return this.body;
  }

  /**
   * Setter for body.
   *
   * @param {string} value
   *
   * @returns {ModelGitHubPullRequestComment}
   */
  public setBody(value: string): this {
    this.body = value;

    return this;
  }
}
