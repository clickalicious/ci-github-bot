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
 * Contract for GitHub configuration.
 */
export interface ConfigurationGithubInterface
{
  /**
   * Getter for username.
   *
   * @returns {string}
   */
  getUsername(): string;

  /**
   * Getter for token.
   *
   * @returns {string}
   */
  getToken(): string;

  /**
   * Getter for organisation.
   *
   * @returns {string}
   */
  getOrganisation(): string;

  /**
   * Getter for repository.
   *
   * @returns {string}
   */
  getRepository(): string;

  /**
   * Getter for pullRequestNumber.
   *
   * @returns {number}
   */
  getPullRequestNumber(): number;

  /**
   * Getter for scheme.
   *
   * @returns {string}
   */
  getScheme(): string;

  /**
   * Getter for host.
   *
   * @returns {string}
   */
  getHost(): string;
}
