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

/* istanbul ignore next */
import {
  createContainer,
  asClass,
  asValue,
  ResolutionMode,
  AwilixContainer,
  Lifetime,
} from 'awilix';
/* istanbul ignore next */
import { ConfigurationGithub } from './configuration/github';
/* istanbul ignore next */
import { HelperUrlParserGithub } from './helper/url-parser/github';
import { CiGithubBot } from './ci-github-bot';
import { HelperRequestVanillaJs } from './helper/request/vanilla-js';
import { HelperUrlBuilderGithubApi } from './helper/url-builder/github-api';
import { HelperRendererVanillaJs } from './helper/renderer/vanilla-js';
import { ConfigurationComment } from './configuration/comment';

/**
 * DI Configuration for Bot
 */
export class DiConfiguration
{
  /**
   * DI-Container.
   *
   * @type {AwilixContainer}
   */
  private container: AwilixContainer;

  /**
   * Type generic CI platform.
   *
   * @type {string}
   */
  public static readonly CI_PLATFORM_GENERIC: string = 'Ci';

  /**
   * Type generic CircleCI platform.
   *
   * @type {string}bilde
   */
  public static readonly CI_PLATFORM_CIRCLECI: string = 'CircleCi';

  /**
   * Constructor.
   *
   * @param {string} githubUsername Username used for accessing GitHub API for PR comment
   * @param {string} githubToken    Token used for accessing GitHub API for PR comment
   * @param {string} pullRequestUrl Pull request URL being parsed
   * @param {string} ciPlatform     Platform used -
   */
  constructor(
    githubUsername: string,
    githubToken: string,
    pullRequestUrl: string,
    ciPlatform: string = DiConfiguration.CI_PLATFORM_GENERIC,
  ) {
    // Create the container and set the resolutionMode to CLASSIC.
    this.container = createContainer({
      resolutionMode: ResolutionMode.CLASSIC,
    });

    let url:string = pullRequestUrl;

    switch (ciPlatform) {
    case DiConfiguration.CI_PLATFORM_CIRCLECI:
      url = process.env.PR_URL;
      break;
    }

    // Register configuration (parameter/arguments and classes) ...
    this.container.register({
      pullRequestUrl: asValue(url),
      helperUrlParser: asClass(HelperUrlParserGithub),
      username: asValue(githubUsername),
      token: asValue(githubToken),
      configurationGithub: asClass(ConfigurationGithub),
      helperRequest: asClass(HelperRequestVanillaJs),
      helperUrlBuilder: asClass(HelperUrlBuilderGithubApi),
      helperRenderer: asClass(HelperRendererVanillaJs),
      CiGithubBot: asClass(CiGithubBot),
      ConfigurationComment: asClass(ConfigurationComment),
    });
  }

  /**
   * Getter for DIC.
   *
   * @return {AwilixContainer} Preconfigured and ready to use DIC.
   */
  public getContainer(): AwilixContainer {
    return this.container;
  }
}
