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
 * Parser for parsing out required information from a Github-URL.
 */
export class HelperUrlParserGithub
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
   * @param {string} pullRequestUrl URL being parsed
   */
  constructor(pullRequestUrl: string) {

    // Validate pull request URL
    if (false === this.validateUrl(pullRequestUrl)) {
      throw new Error('Error validating URL "' + pullRequestUrl + '"');
    }

    this
      .setUrl(pullRequestUrl)
      .parse();
  }

  /**
   * Resolves data from pull request URL.
   *
   * @param {string} url Pull request URL
   */
  public resolveFromPullRequestUrl(url: string) {

    // Validate pull request URL
    if (false === this.validateUrl(url)) {
      throw new Error('Error validating URL "' + url + '"');
    }

    this
      .setUrl(url)
      .parse();
  }

  /**
   * Validates an URL.
   *
   * @param {string} url An URL to validate
   *
   * @return {boolean}
   */
  public validateUrl(url: string): boolean {
    const urlParts:string[] = url.split('/');
    let result: boolean     = true;

    // Validate result
    if (7 !== urlParts.length || true === isNaN(parseInt(urlParts[6], 10))) {
      result = false;
    }

    return result;
  }

  /**
   * Parses information out of an VCS-URL like "https://github.com/Foo/Bar/pull/235"
   *
   * @throws {Error}
   */
  private parse() {
    const urlParts = this.getUrl().split('/');

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
   * @returns {HelperUrlParserGithub}
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
   * @returns {HelperUrlParserGithub}
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
   * @returns {HelperUrlParserGithub}
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
   * @returns {HelperUrlParserGithub}
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
   * @returns {HelperUrlParserGithub}
   */
  private setScheme(value: string): this {
    this.scheme = value;

    return this;
  }
}
