'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generic CI-Bot for Github communication wrapping configuration and template processing.
 */
class CiGithubBot {
    /**
     * Constructor.
     *
     * @param {ConfigurationGithubInterface} configurationGithub Instance of bot configuration
     * @param {HelperRequestInterface}       helperRequest       Helper for requests
     * @param {HelperUrlBuilderInterface}    helperUrlBuilder    Helper for build GitHub API URLs
     * @param {HelperRendererInterface}      helperRenderer      Renderer used for rendering comments
     */
    constructor(configurationGithub, helperRequest, helperUrlBuilder, helperRenderer) {
        this
            .setConfiguration(configurationGithub)
            .setHelperRequest(helperRequest)
            .setHelperUrlBuilder(helperUrlBuilder)
            .setHelperRenderer(helperRenderer);
    }
    /**
     * Creates a review comment on existing PR at Github.
     *
     * @param {ConfigurationCommentInterface} configurationComment Instance of comment configuration
     *
     * @return {Promise} A nodejs native promise
     */
    createComment(configurationComment) {
        if (null === this.getConfiguration().getPullRequestNumber()) {
            const errorMessage = '';
            errorMessage.concat('Failed creating pull request comment: You need to configure the number of', ' the pull request before creating a comment.');
            throw new Error(errorMessage);
        }
        // Body of comment - "body" is the name in Github's API (v3)
        const body = CiGithubBot.COMMENT_MARKER_BEGIN.concat(this.getHelperRenderer().render(configurationComment), CiGithubBot.TEMPLATE_POWERED_BY, CiGithubBot.COMMENT_MARKER_END);
        const url = this.getHelperUrlBuilder().buildUrl('issues/'.concat(this.getConfiguration().getPullRequestNumber().toString(), '/comments'));
        // Send request and return Promise 1:1 ...
        return this.getHelperRequest()
            .send(url, { body }, 'POST');
    }
    /**
     * Getter for renderer.
     *
     * @return {HelperRendererInterface}
     */
    getHelperRenderer() {
        return this.renderer;
    }
    /**
     * Setter for renderer.
     *
     * @param {HelperRendererInterface} value
     *
     * @return {CiGithubBot}
     */
    setHelperRenderer(value) {
        this.renderer = value;
        return this;
    }
    /**
     * Getter for helperGithubApi.
     *
     * @return {HelperUrlBuilderInterface}
     */
    getHelperUrlBuilder() {
        return this.helperUrlBuilder;
    }
    /**
     * Setter for helperGithubApi.
     *
     * @param {HelperUrlBuilderInterface} value
     *
     * @return {CiGithubBot}
     */
    setHelperUrlBuilder(value) {
        this.helperUrlBuilder = value;
        return this;
    }
    /**
     * Getter for configurationGithub.
     *
     * @return {ConfigurationGithubInterface}
     */
    getConfiguration() {
        return this.configurationGithub;
    }
    /**
     * Setter for configurationGithub.
     *
     * @param {ConfigurationGithubInterface} value
     *
     * @return {CiGithubBot}
     */
    setConfiguration(value) {
        this.configurationGithub = value;
        return this;
    }
    /**
     * Getter for helperRequest.
     *
     * @return {HelperRequestInterface}
     */
    getHelperRequest() {
        return this.helperRequest;
    }
    /**
     * Setter for helperRequest.
     *
     * @param {HelperRequestInterface} value
     *
     * @return {CiGithubBot}
     */
    setHelperRequest(value) {
        this.helperRequest = value;
        return this;
    }
}
/**
 * Marker for comment (begin)
 *
 * @type {string}
 */
CiGithubBot.COMMENT_MARKER_BEGIN = '<!-- CiGithubBot:BEGIN -->';
/**
 * Marker for comment (end)
 *
 * @type {string}
 */
CiGithubBot.COMMENT_MARKER_END = '<!-- CiGithubBot:END -->';
/**
 * Powered by advertising for comments (PUG template).
 *
 * @type {string}
 */
CiGithubBot.TEMPLATE_POWERED_BY = '<div>Powered by ci-github-bot '.concat('<a href="https://github.com/clickalicious/ci-github-bot/" target="_blank"><img', ' src="https://raw.githubusercontent.com/clickalicious/ci-github-bot/develop/docs/', 'logo-32x32.png" /></a></div>');
exports.CiGithubBot = CiGithubBot;
