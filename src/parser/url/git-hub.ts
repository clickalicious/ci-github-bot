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

/**
 * Parser for parsing out required information from a GitHub-URL.
 */
export default class ParserUrlGitHub
{
  /**
   * URL containing information about organisation, repository, pr-number ...
   *
   * @var {string}
   */
  private url: string;

  /**
   * Scheme extracted from URL.
   *
   * @var {string}
   */
  private scheme: string;

  /**
   * Organisation/User the PR was opened on.
   *
   * @var {string}
   */
  private organisation: string;

  /**
   * Repository the PR was opened on.
   *
   * @var {string}
   */
  private repository: string;

  /**
   * Number of the PR which was opened.
   *
   * @var {string}
   */
  private pullRequestNumber: number;

  /**
   * Constructor.
   *
   * @param {string} url URL being parsed
   */
  constructor(url: string) {
    this
      .setUrl(url)
      .parse();
  }

  /**
   * Parses information out of an VCS-URL like "https://github.com/Foo/Bar/pull/235"
   *
   * @throws {Error}
   */
  private parse() {
    const urlParts = this.getUrl().split('/');

    // Validate result
    if (7 !== urlParts.length || true === isNaN(parseInt(urlParts[6], 10))) {
      throw new Error('Error resolving required data from passed URL "' + this.getUrl() + '"');
    }

    this
      .setScheme(urlParts[0].replace(':', ''))
      .setOrganisation(urlParts[3])
      .setRepository(urlParts[4])
      .setPullRequestNumber(parseInt(urlParts[6], 10));
  }

  /**
   * Getter for url.
   *
   * @returns {string}
   */
  public getUrl(): string {
    return this.url;
  }

  /**
   * Setter for url.
   *
   * @param {string} value
   *
   * @returns {ParserUrlGitHub}
   */
  private setUrl(value: string): this {
    this.url = value;

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
   * @returns {ParserUrlGitHub}
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
   * @returns {ParserUrlGitHub}
   */
  private setRepository(value: string): this {
    this.repository = value;

    return this;
  }

  /**
   * Getter for pullRequestNumber.
   *
   * @returns {string}
   */
  public getPullRequestNumber(): number {
    return this.pullRequestNumber;
  }

  /**
   * Setter for pullRequestNumber.
   *
   * @param {number} value
   *
   * @returns {ParserUrlGitHub}
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
   * @returns {ParserUrlGitHub}
   */
  private setScheme(value: string): this {
    this.scheme = value;

    return this;
  }
}
