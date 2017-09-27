'use strict';

/**
 * ci-gitHub-bot
 *
 * GitHub communication bot for CI/CD workflow.
 *
 * Simplified abstraction on GitHub's PR/Review-Comment API.
 * Supports templates for comments based on PUG template engine.
 *
 * MIT License
 *
 * @copyright 2017 clickalicious, Benjamin Carl
 */

import { execSync, ExecSyncOptions } from 'child_process';

/**
 * Helper for calling cURL via commandline.
 */
export default class HelperCurl {

  /**
   * Allowed HTTP methods.
   *
   * @var {[string , string , string , string , string]}
   */
  private static readonly httpMethods = [
    'GET',
    'POST',
    'PUT',
    'OPTIONS',
    'HEAD',
    'DELETE',
    'PATCH',
  ];

  /**
   * Username used for request.
   *
   * @var {string}
   */
  private username: string;

  /**
   * Password (or token) used for authenticated requests.
   *
   * @var {string}
   */
  private password: string;

  /**
   * Whether the instance uses OAuth token for authentication.
   *
   * @var {boolean}
   */
  private isOAuth: boolean;

  /**
   * Constructor.
   *
   * @param {string}  username
   * @param {string}  password
   * @param {boolean} isOAuth
   */
  constructor(username?: string, password?: string, isOAuth: boolean = false) {
    this
      .setUsername(username)
      .setPassword(password)
      .setIsOAuth(isOAuth);
  }

  /**
   * Requests data.
   *
   * @param {string} url    URL of request
   * @param {string} method Method used for request
   * @param {string} data   Data being passed with request
   *
   * @returns {string} Response
   */
  public request(url: string, method: string = 'GET', data?: string) {
    return this.execute(this.commandlineFactory(url, method, data), { input: data });
  }

  /**
   * Request data and return JSONfied result string.
   *
   * @param {string} url
   * @param {string} method
   * @param {string} data
   *
   * @returns {Object}
   */
  public requestJson(url: string, method: string = 'GET', data?: string): {} {
    return JSON.parse(this.request(url, method, data));
  }

  /**
   * Generates a commandline for cURL by passed arguments.
   *
   * @param {string} url     URL to call via cURL
   * @param {string} method  Method/Verb being used when calling URL
   * @param {string} data    Optional data to submit with request
   *
   * @returns {string} Generated commandline.
   */
  private commandlineFactory(url: string, method: string = 'GET', data?: string) {

    if (-1 === HelperCurl.httpMethods.indexOf(method)) {
      throw new RangeError('HTTP-method "' + method + '" unknown and/or not supported.');
    }

    let dataFlag = '';
    if ('undefined' !== typeof(data)) {
      // dataFlag += ' --data \'' + data + '\'';
      dataFlag += ' --data @-';
    }

    let credentialsFlag = '';
    if ('undefined' !== typeof(this.getUsername())) {
      const credentials = this.getUsername().concat(
        ('undefined' !== typeof(this.getPassword())) ? ':' + this.getPassword() : '',
      );
      credentialsFlag += ' --user ' + credentials;
    }

    return 'curl --silent' + credentialsFlag + dataFlag + ' --request ' + method + ' ' + url;
  }

  /**
   * Executes a commandline.
   *
   * @param {string}          commandline Commandline to execute
   * @param {ExecSyncOptions} options     Option passed to process
   *
   * @return {string} Result of executed commandline
   */
  private execute(commandline: string, options?: ExecSyncOptions): string {
    let result;

    if ('undefined' !== typeof(options)) {
      result = execSync(commandline, options);
    } else {
      result = execSync(commandline);
    }

    return result.toString('utf8').trim();
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
   * @returns {HelperCurl}
   */
  private setUsername(value?: string): this {
    this.username = value;

    return this;
  }

  /**
   * Getter for password.
   *
   * @returns {string}
   */
  public getPassword(): string {
    return this.password;
  }

  /**
   * Setter for password.
   *
   * @param {string} value
   *
   * @returns {HelperCurl}
   */
  private setPassword(value?: string): this {
    this.password = value;

    return this;
  }

  /**
   * Getter for isOAuth.
   *
   * @returns {string}
   */
  public getIsOAuth(): boolean {
    return this.isOAuth;
  }

  /**
   * Setter for iOAuth
   *
   * @param {boolean} value
   *
   * @returns {HelperCurl}
   */
  private setIsOAuth(value: boolean): this {
    this.isOAuth = value;

    return this;
  }
}
