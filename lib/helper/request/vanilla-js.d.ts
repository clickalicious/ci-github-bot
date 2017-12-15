/// <reference types="node" />
import { HelperRequestInterface } from './interface';
import { ConfigurationGithubInterface } from '../../configuration/github-interface';
import { IncomingMessage } from 'http';
/**
 * Helper for sending requests.
 */
export declare class HelperRequestVanillaJs implements HelperRequestInterface {
    /**
     * HTTP User Agent.
     *
     * @type {string}
     */
    static readonly HTTP_USER_AGENT: string;
    /**
     * Username
     *
     * @type {string}
     */
    private username;
    /**
     * Password
     *
     * @type {string}
     */
    private password;
    /**
     * Constructor.
     *
     * @param {ConfigurationGithubInterface} configurationGithub
     */
    constructor(configurationGithub: ConfigurationGithubInterface);
    /**
     * Sends request and returns response.
     *
     * @param {string} url        URL endpoint of request
     * @param {Object} jsonData   Data to pass with request
     * @param {string} httpMethod Request method
     *
     * @return {Promise} A nodejs native promise
     */
    send(url: string, jsonData: object, httpMethod: string): Promise<IncomingMessage>;
    /**
     * Getter for username.
     *
     * @returns {string}
     */
    private getUsername();
    /**
     * Setter for username.
     *
     * @param {string} value
     *
     * @returns {string}
     */
    private setUsername(value);
    /**
     * Getter for password.
     *
     * @returns {string}
     */
    private getPassword();
    /**
     * Setter for password.
     *
     * @param {string} value
     *
     * @returns {string}
     */
    private setPassword(value);
}
