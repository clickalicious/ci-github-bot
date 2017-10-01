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

/**
 * Model for Github Pull-Request Comment.
 *
 * @api https://developer.github.com/v3/pulls/#get-a-single-pull-request
 */
export class ModelGithubPullRequestComment {

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
   * @returns {ModelGithubPullRequestComment}
   */
  public setBody(value: string): this {
    this.body = value;

    return this;
  }
}
