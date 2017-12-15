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

import * as request from 'request';
import { HelperRequestInterface } from './interface';
import { ConfigurationGithubInterface } from '../../configuration/github-interface';
import { IncomingMessage } from 'http';

/**
 * Helper for sending requests.
 */
export class HelperRequestVanillaJs implements HelperRequestInterface
{
  /**
   * HTTP User Agent.
   *
   * @type {string}
   */
  static readonly HTTP_USER_AGENT: string = 'ci-github-bot';

  /**
   * Username
   *
   * @type {string}
   */
  private username: string;

  /**
   * Password
   *
   * @type {string}
   */
  private password: string;

  /**
   * Constructor.
   *
   * @param {ConfigurationGithubInterface} configurationGithub
   */
  constructor(configurationGithub: ConfigurationGithubInterface) {

    this
      .setUsername(configurationGithub.getUsername())
      .setPassword(configurationGithub.getToken());
  }

  /**
   * Sends request and returns response.
   *
   * @param {string} url        URL endpoint of request
   * @param {Object} jsonData   Data to pass with request
   * @param {string} httpMethod Request method
   *
   * @return {Promise} A nodejs native promise
   */
  public send(url: string, jsonData: object, httpMethod: string) {

    const options = {
      headers: {
        'User-Agent': HelperRequestVanillaJs.HTTP_USER_AGENT,
      },
      json: jsonData,
      method: httpMethod,
    };

    return new Promise<IncomingMessage>(
      (resolve, reject) => {
        // Send request and resolve or reject promise
        request(url, options)
          .on('response', (response) => {
            return resolve(response);
          })
          .on('error', (error) => {
            return reject(error);
          })
          .auth(
            this.getUsername(),
            this.getPassword(),
          );
      },
    );
  }

  /**
   * Getter for username.
   *
   * @returns {string}
   */
  private getUsername(): string {
    return this.username;
  }

  /**
   * Setter for username.
   *
   * @param {string} value
   *
   * @returns {string}
   */
  private setUsername(value: string): this {
    this.username = value;

    return this;
  }

  /**
   * Getter for password.
   *
   * @returns {string}
   */
  private getPassword(): string {
    return this.password;
  }

  /**
   * Setter for password.
   *
   * @param {string} value
   *
   * @returns {string}
   */
  private setPassword(value: string): this {
    this.password = value;

    return this;
  }
}
