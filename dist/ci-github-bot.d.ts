import { ConfigurationComment } from './configuration/comment';
import { ConfigurationGithub } from './configuration/github';
import { HelperGithubApi } from './helper/github-api';
/**
 * Generic CI-Bot for Github communication wrapping configuration and template processing.
 */
export declare class CiGithubBot {
    /**
     * Marker for comment (begin)
     *
     * @type {string}
     */
    static readonly COMMENT_MARKER_BEGIN: string;
    /**
     * Marker for comment (end)
     *
     * @type {string}
     */
    static readonly COMMENT_MARKER_END: string;
    /**
     * Powered by advertising for comments (PUG template).
     *
     * @type {string}
     */
    static readonly TEMPLATE_POWERED_BY: string;
    /**
     * HTTP User Agent.
     *
     * @type {string}
     */
    static readonly HTTP_USER_AGENT: string;
    /**
     * Configuration of Bot.
     *
     * @var {configurationBot}
     */
    private configuration;
    /**
     * HelperGithubApi helper.
     *
     * @var {HelperGithubApi}
     */
    private helperGithubApi;
    /**
     * Constructor.
     *
     * @param {ConfigurationGithub} configuration Instance of bot configuration (credentials ...)
     */
    constructor(configuration: ConfigurationGithub);
    /**
     * Creates a review comment on existing PR at Github.
     *
     * @param {ConfigurationComment} configuration Instance of comment configuration (template,
     *   variables ...)
     */
    createPullRequestComment(configuration: ConfigurationComment): void;
    /**
     * Wraps some configuration stuff around request and sends it.
     *
     * @param {string} url
     * @param {object} jsonData
     * @param {string} httpMethod
     *
     * @returns boolean TRUE on success, otherwise FALSE
     */
    private sendRequest(url, jsonData, httpMethod?);
    /**
     * Getter for helperGithubApi.
     *
     * @returns {HelperGithubApi}
     */
    getHelperGithubApi(): HelperGithubApi;
    /**
     * Setter for helperGithubApi.
     *
     * @param {HelperGithubApi} value
     *
     * @returns {CiGithubBot}
     */
    private setHelperGithubApi(value);
    /**
     * Getter for configuration.
     *
     * @returns {ConfigurationGithub}
     */
    getConfiguration(): ConfigurationGithub;
    /**
     * Setter for configuration.
     *
     * @param {ConfigurationGithub} value
     *
     * @returns {CiGithubBot}
     */
    private setConfiguration(value);
}
