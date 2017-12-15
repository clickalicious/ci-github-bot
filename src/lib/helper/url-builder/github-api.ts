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

import { ConfigurationGithubInterface } from '../../configuration/github-interface';
import { HelperUrlBuilderInterface } from './interface';

/**
 * Helper for Github-API communication (URL-factory and stuff like that).
 */
export class HelperUrlBuilderGithubApi implements HelperUrlBuilderInterface
{
  /**
   * Configuration for accessing Github.
   *
   * @var {ConfigurationGithubInterface}
   */
  private configuration: ConfigurationGithubInterface;

  /**
   * Constructor.
   *
   * @param {ConfigurationGithubInterface} configurationGithub
   */
  constructor(configurationGithub: ConfigurationGithubInterface) {
    this
      .setConfiguration(configurationGithub);
  }

  /**
   * Returns FQ-API-URL for passed path.
   *
   * @param {string} path
   *
   * @returns {string}
   */
  public buildUrl(path: string): string {
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
   * @returns {ConfigurationGithubInterface}
   */
  private getConfiguration(): ConfigurationGithubInterface {
    return this.configuration;
  }

  /**
   * Setter for configuration.
   *
   * @param {ConfigurationGithubInterface} value
   *
   * @returns {HelperUrlBuilderGithubApi}
   */
  private setConfiguration(value: ConfigurationGithubInterface): this {
    this.configuration = value;

    return this;
  }
}
