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

import * as pug from 'pug';
import * as request from 'request';
import ConfigurationComment from './configuration/comment';
import ConfigurationGitHub from './configuration/github';
import HelperGitHubApi from './helper/git-hub-api';

/**
 * Generic CI-Bot for GitHub communication wrapping configuration and template processing.
 */
export default class CiGithubBot {
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
  static readonly TEMPLATE_POWERED_BY: string = '<div>Powered by Ci-GitHub-Bot ' +
    '<a href="https://github.com/clickalicious/ci-github-bot/" target="_blank"><img' +
    ' src="https://image.flaticon.com/icons/png/32/34/34429.png"' +
    ' /></a></div>';

  /**
   * HTTP User Agent.
   *
   * @type {string}
   */
  static readonly HTTP_USER_AGENT: string = 'Ci-GitHub-Bot';

  /**
   * Configuration of Bot.
   *
   * @var {configurationBot}
   */
  private configuration: ConfigurationGitHub;

  /**
   * HelperGitHubApi helper.
   *
   * @var {HelperGitHubApi}
   */
  private helperGitHubApi: HelperGitHubApi;

  /**
   * Constructor.
   *
   * @param {ConfigurationGitHub} configuration Instance of bot configuration (credentials ...)
   */
  constructor(configuration: ConfigurationGitHub) {

    this
      .setConfiguration(configuration)
      .setHelperGitHubApi(
        new HelperGitHubApi(
          this.configuration,
        ),
      );
  }

  /**
   * Creates a review comment on existing PR at GitHub.
   *
   * @param {ConfigurationComment} configuration Instance of comment configuration (template,
   *   variables ...)
   */
  public createPullRequestComment(configuration: ConfigurationComment) {

    if (null === this.getConfiguration().getPullRequestNumber()) {
      throw new Error('Failed creating pull request comment: You need to configure the number of' +
        ' the pull request before creating a comment.');
    }

    // Body of comment - "body" is the name in GitHub's API (v3)
    let body = '';

    // Render (all) template(s) passed into processing stack
    for (const template in configuration.getTemplates()) {
      body += pug.render(configuration.getTemplates()[template], configuration.getVariables());
    }
    body = CiGithubBot.COMMENT_MARKER_BEGIN + body +
      pug.render(CiGithubBot.TEMPLATE_POWERED_BY) + CiGithubBot.COMMENT_MARKER_END;

    const url = this.getHelperGitHubApi().getApiUrl(
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
        console.log(response.statusCode); // 200
      })
      .auth(
        this.getConfiguration().getUsername(),
        this.getConfiguration().getToken(),
      );
  }

  /**
   * Getter for helperGitHubApi.
   *
   * @returns {HelperGitHubApi}
   */
  public getHelperGitHubApi(): HelperGitHubApi {
    return this.helperGitHubApi;
  }

  /**
   * Setter for helperGitHubApi.
   *
   * @param {HelperGitHubApi} value
   *
   * @returns {CiGithubBot}
   */
  private setHelperGitHubApi(value: HelperGitHubApi): this {
    this.helperGitHubApi = value;

    return this;
  }

  /**
   * Getter for configuration.
   *
   * @returns {ConfigurationGitHub}
   */
  public getConfiguration(): ConfigurationGitHub {
    return this.configuration;
  }

  /**
   * Setter for configuration.
   *
   * @param {ConfigurationGitHub} value
   *
   * @returns {CiGithubBot}
   */
  private setConfiguration(value: ConfigurationGitHub): this {
    this.configuration = value;

    return this;
  }
}
