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
import { ConfigurationGithub } from '../configuration/github';
/**
 * Helper for Github-API communication (URL-factory and stuff like that).
 */
export declare class HelperGithubApi {
    /**
     * Configuration for accessing Github.
     *
     * @var {ConfigurationGithub}
     */
    private configuration;
    /**
     * Constructor.
     *
     * @param {ConfigurationGithub} configuration
     */
    constructor(configuration: ConfigurationGithub);
    /**
     * Returns FQ-API-URL for passed path.
     *
     * @param {string} path
     *
     * @returns {string}
     */
    getApiUrl(path: string): string;
    /**
     *
     * @param {string} path
     *
     * @returns {string}
     */
    private urlFactory(path);
    /**
     * Getter for configuration.
     *
     * @returns {ConfigurationGithub}
     */
    private getConfiguration();
    /**
     * Setter for configuration.
     *
     * @param {ConfigurationGithub} value
     *
     * @returns {HelperGithubApi}
     */
    private setConfiguration(value);
}
