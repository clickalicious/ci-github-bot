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

import ParserUrlGitHub from './../parser/url/git-hub';

/**
 * Configuration of CiGitHubBot.
 */
export default class ConfigurationGitHub {

  /**
   * Username the Bot uses for authentication.
   *
   * @var {string}
   */
  private username: string;

  /**
   * Token the Bot uses for authentication.
   *
   * @var {string}
   */
  private token: string;

  /**
   * Organisation/User the PR is created on.
   *
   * @var {string}
   */
  private organisation: string;

  /**
   * Name of the repository the PR is created on.
   *
   * @var {string}
   */
  private repository: string;

  /**
   * Number of the pull request.
   *
   * @var {number}
   */
  private pullRequestNumber: number;

  /**
   * Scheme used for building API URL.
   *
   * @var {string}
   */
  private scheme: string;

  /**
   * API Host.
   *
   * @type {string}
   */
  private host: string = 'api.github.com';

  /* Constructor.
   *
   * @param {string} username Bot username - used for bot posts/edits ...
   * @param {string} token    Bot token - for authentication
   */
  constructor(username: string, token: string) {
    this
      .setUsername(username)
      .setToken(token);
  }

  /**
   * Load configuration.
   *
   * @param {string} organisation      Organisation (username) of repository the bot communicates to
   * @param {string} repository        Repository the bot communicates to
   * @param {number} pullRequestNumber Number of pull request if we target one
   * @param {string} scheme            Scheme used for communication (http|https)
   */
  public load(
    organisation: string,
    repository: string,
    pullRequestNumber: number = null,
    scheme: string = 'https',
  ) {
    this
      .setOrganisation(organisation)
      .setRepository(repository)
      .setPullRequestNumber(pullRequestNumber)
      .setScheme(scheme);
  }

  /**
   * Loads configuration data from a Pull-Request URL (GitHub).
   *
   * @param {string} pullRequestUrl
   */
  public loadFromPullRequestUrl(pullRequestUrl: string) {

    // Extract information from Pull Request URL
    const urlParser = new ParserUrlGitHub(pullRequestUrl);

    this.load(
      urlParser.getOrganisation(),
      urlParser.getRepository(),
      urlParser.getPullRequestNumber(),
      urlParser.getScheme(),
    );
  }

  /**
   * Getter for username.
   *
   * @returns {string}
   */
  public getUsername(): string {
    return this.username;
  }

  /**
   * Setter for username.
   *
   * @param {string} value
   *
   * @returns {ConfigurationGitHub}
   */
  private setUsername(value: string): this {
    this.username = value;

    return this;
  }

  /**
   * Getter for token.
   *
   * @returns {string}
   */
  public getToken(): string {
    return this.token;
  }

  /**
   * Setter for token.
   *
   * @param {string} value
   *
   * @returns {ConfigurationGitHub}
   */
  private setToken(value: string): this {
    this.token = value;

    return this;
  }

  /**
   * Getter for organisation.
   *
   * @returns {string}
   */
  public getOrganisation(): string {
    return this.organisation;
  }

  /**
   * Setter for organisation.
   *
   * @param {string} value
   *
   * @returns {ConfigurationGitHub}
   */
  private setOrganisation(value: string): this {
    this.organisation = value;

    return this;
  }

  /**
   * Getter for repository.
   *
   * @returns {string}
   */
  public getRepository(): string {
    return this.repository;
  }

  /**
   * Setter for repository.
   *
   * @param {string} value
   *
   * @returns {ConfigurationGitHub}
   */
  private setRepository(value: string): this {
    this.repository = value;

    return this;
  }

  /**
   * Getter for pullRequestNumber.
   *
   * @returns {number}
   */
  public getPullRequestNumber(): number {
    return this.pullRequestNumber;
  }

  /**
   * Setter for pullRequestNumber.
   *
   * @param {number} value
   *
   * @returns {ConfigurationGitHub}
   */
  private setPullRequestNumber(value: number): this {
    this.pullRequestNumber = value;

    return this;
  }

  /**
   * Getter for scheme.
   *
   * @returns {string}
   */
  public getScheme(): string {
    return this.scheme;
  }

  /**
   * Setter for scheme.
   *
   * @param {string} value
   *
   * @returns {ConfigurationGitHub}
   */
  public setScheme(value: string): this {
    this.scheme = value;

    return this;
  }

  /**
   * Getter for host.
   *
   * @returns {string}
   */
  public getHost(): string {
    return this.host;
  }

  /**
   * Setter for host.
   *
   * @param {string} value
   *
   * @returns {ConfigurationGitHub}
   */
  public setHost(value: string): this {
    this.host = value;

    return this;
  }
}
