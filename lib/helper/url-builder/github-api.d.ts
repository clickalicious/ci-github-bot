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
import { ConfigurationGithubInterface } from '../../configuration/github-interface';
import { HelperUrlBuilderInterface } from './interface';
/**
 * Helper for Github-API communication (URL-factory and stuff like that).
 */
export declare class HelperUrlBuilderGithubApi implements HelperUrlBuilderInterface {
    /**
     * Configuration for accessing Github.
     *
     * @var {ConfigurationGithubInterface}
     */
    private configuration;
    /**
     * Constructor.
     *
     * @param {ConfigurationGithubInterface} configurationGithub
     */
    constructor(configurationGithub: ConfigurationGithubInterface);
    /**
     * Returns FQ-API-URL for passed path.
     *
     * @param {string} path
     *
     * @returns {string}
     */
    buildUrl(path: string): string;
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
     * @returns {ConfigurationGithubInterface}
     */
    private getConfiguration();
    /**
     * Setter for configuration.
     *
     * @param {ConfigurationGithubInterface} value
     *
     * @returns {HelperUrlBuilderGithubApi}
     */
    private setConfiguration(value);
}
