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

import { HelperUrlParserInterface } from '../helper/url-parser/interface';
import { ConfigurationGithubInterface } from './github-interface';

/**
 * Configuration of CiGithubBot.
 */
export class ConfigurationGithub implements ConfigurationGithubInterface
{
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
   * API Host.
   *
   * @type {string}
   */
  private host: string = 'api.github.com';

  /**
   * URL parser for VCS
   *
   * @type {HelperUrlParserInterface}
   */
  private helperUrlParser: HelperUrlParserInterface;

  /* Constructor.
   *
   * @param {HelperUrlParserInterface} helperUrlParser URL Parser for GitHub URLs
   * @param {string}                   username        Bot username - used for bot posts/edits
   * @param {string}                   token           Bot token - for authentication
   */
  constructor(helperUrlParser: HelperUrlParserInterface, username: string, token: string) {
    this
      .setHelperUrlParser(helperUrlParser)
      .setUsername(username)
      .setToken(token);
  }

  /**
   * Getter for helperUrlParser.
   *
   * @returns {HelperUrlParserInterface}
   */
  private getHelperUrlParser(): HelperUrlParserInterface {
    return this.helperUrlParser;
  }

  /**
   * Setter for helperUrlParser.
   *
   * @param {HelperUrlParserInterface} value
   *
   * @returns {ConfigurationGithub}
   */
  public setHelperUrlParser(value: HelperUrlParserInterface): this {
    this.helperUrlParser = value;

    return this;
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
   * @returns {ConfigurationGithub}
   */
  public setUsername(value: string): this {
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
   * @returns {ConfigurationGithub}
   */
  public setToken(value: string): this {
    this.token = value;

    return this;
  }

  /**
   * Getter for organisation.
   *
   * @returns {string}
   */
  public getOrganisation(): string {
    // return this.organisation;
    return this.getHelperUrlParser().getOrganisation();
  }

  /**
   * Getter for repository.
   *
   * @returns {string}
   */
  public getRepository(): string {
    // return this.repository;
    return this.getHelperUrlParser().getRepository();
  }

  /**
   * Getter for pullRequestNumber.
   *
   * @returns {number}
   */
  public getPullRequestNumber(): number {
    // return this.pullRequestNumber;
    return this.getHelperUrlParser().getPullRequestNumber();
  }

  /**
   * Getter for scheme.
   *
   * @returns {string}
   */
  public getScheme(): string {
    return this.getHelperUrlParser().getScheme();
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
   * @returns {ConfigurationGithub}
   */
  public setHost(value: string): this {
    this.host = value;

    return this;
  }
}
