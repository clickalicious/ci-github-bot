'use strict';

/**
 * Ci-Github-Bot
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

import * as request from 'request';
import { ConfigurationComment } from './configuration/comment';
import { ConfigurationGithub } from './configuration/github';
import { HelperGithubApi } from './helper/github-api';
import { RendererVanillaJs } from './renderer/vanilla-js';

/**
 * Generic CI-Bot for Github communication wrapping configuration and template processing.
 */
export class CiGithubBot {
  /**
   * Marker for comment (begin)
   *
   * @type {string}
   */
  static readonly COMMENT_MARKER_BEGIN: string = '<!-- CiGithubBot:BEGIN -->';

  /**
   * Marker for comment (end)
   *
   * @type {string}
   */
  static readonly COMMENT_MARKER_END: string = '<!-- CiGithubBot:END -->';

  /**
   * Powered by advertising for comments (PUG template).
   *
   * @type {string}
   */
  static readonly TEMPLATE_POWERED_BY: string = '<div>Powered by Ci-Github-Bot ' +
    '<a href="https://github.com/clickalicious/ci-github-bot/" target="_blank"><img' +
    ' src="https://image.flaticon.com/icons/png/32/34/34429.png"' +
    ' /></a></div>';

  /**
   * HTTP User Agent.
   *
   * @type {string}
   */
  static readonly HTTP_USER_AGENT: string = 'Ci-Github-Bot';

  /**
   * Configuration of Bot.
   *
   * @var {configurationBot}
   */
  private configuration: ConfigurationGithub;

  /**
   * HelperGithubApi helper.
   *
   * @var {HelperGithubApi}
   */
  private helperGithubApi: HelperGithubApi;

  /**
   * Constructor.
   *
   * @param {ConfigurationGithub} configuration Instance of bot configuration (credentials ...)
   */
  constructor(configuration: ConfigurationGithub) {

    this
      .setConfiguration(configuration)
      .setHelperGithubApi(
        new HelperGithubApi(
          this.configuration,
        ),
      );
  }

  /**
   * Creates a review comment on existing PR at Github.
   *
   * @param {ConfigurationComment} configuration Instance of comment configuration (template,
   *   variables ...)
   */
  public createPullRequestComment(configuration: ConfigurationComment) {

    if (null === this.getConfiguration().getPullRequestNumber()) {
      throw new Error('Failed creating pull request comment: You need to configure the number of' +
        ' the pull request before creating a comment.');
    }

    const renderer = new RendererVanillaJs();

    // Body of comment - "body" is the name in Github's API (v3)
    const body = CiGithubBot.COMMENT_MARKER_BEGIN + renderer.render(configuration) +
      CiGithubBot.TEMPLATE_POWERED_BY + CiGithubBot.COMMENT_MARKER_END;

    const url = this.getHelperGithubApi().getApiUrl(
      'issues/' + this.getConfiguration().getPullRequestNumber() + '/comments',
    );

    this.sendRequest(url, { body }, 'POST');
  }

  /**
   * Wraps some configuration stuff around request and sends it.
   *
   * @param {string} url
   * @param {object} jsonData
   * @param {string} httpMethod
   *
   * @returns boolean TRUE on success, otherwise FALSE
   */
  private sendRequest(url: string, jsonData: object, httpMethod: string = 'GET') {

    const options = {
      headers: {
        'User-Agent': CiGithubBot.HTTP_USER_AGENT,
      },
      json: jsonData,
      method: httpMethod,
    };

    // Send request
    request
      (url, options)
      .on('response', (response) => {
        if (201 !== response.statusCode) {
          throw Error(`Error: ${response.statusCode} Message: ${response.statusMessage}`);
        }
      })
      .auth(
        this.getConfiguration().getUsername(),
        this.getConfiguration().getToken(),
      );
  }

  /**
   * Getter for helperGithubApi.
   *
   * @returns {HelperGithubApi}
   */
  public getHelperGithubApi(): HelperGithubApi {
    return this.helperGithubApi;
  }

  /**
   * Setter for helperGithubApi.
   *
   * @param {HelperGithubApi} value
   *
   * @returns {CiGithubBot}
   */
  private setHelperGithubApi(value: HelperGithubApi): this {
    this.helperGithubApi = value;

    return this;
  }

  /**
   * Getter for configuration.
   *
   * @returns {ConfigurationGithub}
   */
  public getConfiguration(): ConfigurationGithub {
    return this.configuration;
  }

  /**
   * Setter for configuration.
   *
   * @param {ConfigurationGithub} value
   *
   * @returns {CiGithubBot}
   */
  private setConfiguration(value: ConfigurationGithub): this {
    this.configuration = value;

    return this;
  }
}
