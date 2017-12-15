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
export declare class ConfigurationGithub implements ConfigurationGithubInterface {
    /**
     * Username the Bot uses for authentication.
     *
     * @var {string}
     */
    private username;
    /**
     * Token the Bot uses for authentication.
     *
     * @var {string}
     */
    private token;
    /**
     * API Host.
     *
     * @type {string}
     */
    private host;
    /**
     * URL parser for VCS
     *
     * @type {HelperUrlParserInterface}
     */
    private helperUrlParser;
    constructor(helperUrlParser: HelperUrlParserInterface, username: string, token: string);
    /**
     * Getter for helperUrlParser.
     *
     * @returns {HelperUrlParserInterface}
     */
    private getHelperUrlParser();
    /**
     * Setter for helperUrlParser.
     *
     * @param {HelperUrlParserInterface} value
     *
     * @returns {ConfigurationGithub}
     */
    setHelperUrlParser(value: HelperUrlParserInterface): this;
    /**
     * Getter for username.
     *
     * @returns {string}
     */
    getUsername(): string;
    /**
     * Setter for username.
     *
     * @param {string} value
     *
     * @returns {ConfigurationGithub}
     */
    setUsername(value: string): this;
    /**
     * Getter for token.
     *
     * @returns {string}
     */
    getToken(): string;
    /**
     * Setter for token.
     *
     * @param {string} value
     *
     * @returns {ConfigurationGithub}
     */
    setToken(value: string): this;
    /**
     * Getter for organisation.
     *
     * @returns {string}
     */
    getOrganisation(): string;
    /**
     * Getter for repository.
     *
     * @returns {string}
     */
    getRepository(): string;
    /**
     * Getter for pullRequestNumber.
     *
     * @returns {number}
     */
    getPullRequestNumber(): number;
    /**
     * Getter for scheme.
     *
     * @returns {string}
     */
    getScheme(): string;
    /**
     * Getter for host.
     *
     * @returns {string}
     */
    getHost(): string;
    /**
     * Setter for host.
     *
     * @param {string} value
     *
     * @returns {ConfigurationGithub}
     */
    setHost(value: string): this;
}
