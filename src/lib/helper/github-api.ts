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

import { ConfigurationGithub } from '../configuration/github';

/**
 * Helper for Github-API communication (URL-factory and stuff like that).
 */
export class HelperGithubApi {

  /**
   * Configuration for accessing Github.
   *
   * @var {ConfigurationGithub}
   */
  private configuration: ConfigurationGithub;

  /**
   * Constructor.
   *
   * @param {ConfigurationGithub} configuration
   */
  constructor(configuration: ConfigurationGithub) {
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
   * @returns {ConfigurationGithub}
   */
  private getConfiguration(): ConfigurationGithub {
    return this.configuration;
  }

  /**
   * Setter for configuration.
   *
   * @param {ConfigurationGithub} value
   *
   * @returns {HelperGithubApi}
   */
  private setConfiguration(value: ConfigurationGithub): this {
    this.configuration = value;

    return this;
  }
}
