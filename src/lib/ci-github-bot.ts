'use strict';

/**
 * ci-github-bot
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

import { ConfigurationCommentInterface } from './configuration/comment-interface';
import { ConfigurationGithubInterface } from './configuration/github-interface';
import { HelperRequestInterface } from './helper/request/interface';
import { HelperUrlBuilderInterface } from './helper/url-builder/interface';
import { HelperRendererInterface } from './helper/renderer/interface';

/**
 * Generic CI-Bot for Github communication wrapping configuration and template processing.
 */
export class CiGithubBot
{
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
  static readonly TEMPLATE_POWERED_BY: string = '<div>Powered by ci-github-bot '.concat(
    '<a href="https://github.com/clickalicious/ci-github-bot/" target="_blank"><img',
    ' src="https://raw.githubusercontent.com/clickalicious/ci-github-bot/develop/docs/',
    'logo-32x32.png" /></a></div>',
  );

  /**
   * Configuration.
   *
   * @var {ConfigurationGithubInterface}
   */
  private configurationGithub: ConfigurationGithubInterface;

  /**
   * Request helper
   *
   * @type {HelperRequestInterface}
   */
  private helperRequest: HelperRequestInterface;

  /**
   * HelperGithubApi helper.
   *
   * @var {HelperUrlBuilderInterface}
   */
  private helperUrlBuilder: HelperUrlBuilderInterface;

  /**
   * Renderer.
   *
   * @var {HelperRendererInterface}
   */
  private renderer: HelperRendererInterface;

  /**
   * Constructor.
   *
   * @param {ConfigurationGithubInterface} configurationGithub Instance of bot configuration
   * @param {HelperRequestInterface}       helperRequest       Helper for requests
   * @param {HelperUrlBuilderInterface}    helperUrlBuilder    Helper for build GitHub API URLs
   * @param {HelperRendererInterface}      helperRenderer      Renderer used for rendering comments
   */
  constructor(
    configurationGithub: ConfigurationGithubInterface,
    helperRequest: HelperRequestInterface,
    helperUrlBuilder: HelperUrlBuilderInterface,
    helperRenderer: HelperRendererInterface,
  ) {
    this
      .setConfiguration(configurationGithub)
      .setHelperRequest(helperRequest)
      .setHelperUrlBuilder(helperUrlBuilder)
      .setHelperRenderer(helperRenderer);
  }

  /**
   * Creates a review comment on existing PR at Github.
   *
   * @param {ConfigurationCommentInterface} configurationComment Instance of comment configuration
   *
   * @return {Promise} A nodejs native promise
   */
  public createComment(configurationComment: ConfigurationCommentInterface) {

    if (null === this.getConfiguration().getPullRequestNumber()) {
      const errorMessage = '';
      errorMessage.concat(
        'Failed creating pull request comment: You need to configure the number of',
        ' the pull request before creating a comment.',
      );

      throw new Error(errorMessage);
    }

    // Body of comment - "body" is the name in Github's API (v3)
    const body = CiGithubBot.COMMENT_MARKER_BEGIN.concat(
      this.getHelperRenderer().render(configurationComment),
      CiGithubBot.TEMPLATE_POWERED_BY,
      CiGithubBot.COMMENT_MARKER_END,
    );

    const url = this.getHelperUrlBuilder().buildUrl(
      'issues/'.concat(
        this.getConfiguration().getPullRequestNumber().toString(),
        '/comments',
      ),
    );

    // Send request and return Promise 1:1 ...
    return this.getHelperRequest()
      .send(url, { body }, 'POST');
  }

  /**
   * Getter for renderer.
   *
   * @return {HelperRendererInterface}
   */
  public getHelperRenderer(): HelperRendererInterface {
    return this.renderer;
  }

  /**
   * Setter for renderer.
   *
   * @param {HelperRendererInterface} value
   *
   * @return {CiGithubBot}
   */
  private setHelperRenderer(value: HelperRendererInterface): this {
    this.renderer = value;

    return this;
  }

  /**
   * Getter for helperGithubApi.
   *
   * @return {HelperUrlBuilderInterface}
   */
  public getHelperUrlBuilder(): HelperUrlBuilderInterface {
    return this.helperUrlBuilder;
  }

  /**
   * Setter for helperGithubApi.
   *
   * @param {HelperUrlBuilderInterface} value
   *
   * @return {CiGithubBot}
   */
  private setHelperUrlBuilder(value: HelperUrlBuilderInterface): this {
    this.helperUrlBuilder = value;

    return this;
  }

  /**
   * Getter for configurationGithub.
   *
   * @return {ConfigurationGithubInterface}
   */
  public getConfiguration(): ConfigurationGithubInterface {
    return this.configurationGithub;
  }

  /**
   * Setter for configurationGithub.
   *
   * @param {ConfigurationGithubInterface} value
   *
   * @return {CiGithubBot}
   */
  private setConfiguration(value: ConfigurationGithubInterface): this {
    this.configurationGithub = value;

    return this;
  }

  /**
   * Getter for helperRequest.
   *
   * @return {HelperRequestInterface}
   */
  public getHelperRequest(): HelperRequestInterface {
    return this.helperRequest;
  }

  /**
   * Setter for helperRequest.
   *
   * @param {HelperRequestInterface} value
   *
   * @return {CiGithubBot}
   */
  private setHelperRequest(value: HelperRequestInterface): this {
    this.helperRequest = value;

    return this;
  }
}
