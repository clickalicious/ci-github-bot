import ConfigurationComment from './configuration/comment';
import ConfigurationGitHub from './configuration/github';
import HelperGitHubApi from './helper/git-hub-api';
/**
 * Generic CI-Bot for GitHub communication wrapping configuration and template processing.
 */
export default class CiGithubBot {
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
     * HelperGitHubApi helper.
     *
     * @var {HelperGitHubApi}
     */
    private helperGitHubApi;
    /**
     * Constructor.
     *
     * @param {ConfigurationGitHub} configuration Instance of bot configuration (credentials ...)
     */
    constructor(configuration: ConfigurationGitHub);
    /**
     * Creates a review comment on existing PR at GitHub.
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
     */
    private sendRequest(url, jsonData, httpMethod?);
    /**
     * Getter for helperGitHubApi.
     *
     * @returns {HelperGitHubApi}
     */
    getHelperGitHubApi(): HelperGitHubApi;
    /**
     * Setter for helperGitHubApi.
     *
     * @param {HelperGitHubApi} value
     *
     * @returns {CiGithubBot}
     */
    private setHelperGitHubApi(value);
    /**
     * Getter for configuration.
     *
     * @returns {ConfigurationGitHub}
     */
    getConfiguration(): ConfigurationGitHub;
    /**
     * Setter for configuration.
     *
     * @param {ConfigurationGitHub} value
     *
     * @returns {CiGithubBot}
     */
    private setConfiguration(value);
}
