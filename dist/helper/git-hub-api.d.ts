/**
 * ci-gitHub-bot
 *
 * GitHub communication bot for CI/CD workflows.
 *
 * Simplified abstraction on GitHub's PR/Review-Comment API.
 * Supports templates for comments based on PUG template engine.
 *
 * MIT License
 *
 * @copyright 2017 clickalicious, Benjamin Carl
 */
import ConfigurationGitHub from './../configuration/github';
import ModelGitHubPullRequestComment from './../model/git-hub/pull-request/comment';
/**
 * Helper for GitHub-API communication (URL-factory and stuff like that).
 */
export default class HelperGitHubApi {
    /**
     * Configuration for accessing GitHub.
     *
     * @var {ConfigurationGitHub}
     */
    private configuration;
    /**
     * Constructor.
     *
     * @param {ConfigurationGitHub} configuration
     */
    constructor(configuration: ConfigurationGitHub);
    /**
     * Returns FQ-API-URL for passed path.
     *
     * @param {string} path
     *
     * @returns {string}
     */
    getApiUrl(path: string): string;
    /**
     * Parses a Model from a plain JSON object
     *
     * @param {string} response from API request GET /repos/:owner/:repo/pulls/:number
     *
     * @returns {ModelGitHubPullRequestComment}
     */
    parsePullRequestCommentResponse(response: string): ModelGitHubPullRequestComment;
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
     * @returns {ConfigurationGitHub}
     */
    private getConfiguration();
    /**
     * Setter for configuration.
     *
     * @param {ConfigurationGitHub} value
     *
     * @returns {HelperGitHubApi}
     */
    private setConfiguration(value);
}
