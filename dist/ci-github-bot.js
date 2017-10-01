'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Ci-Github-Bot
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
const request = require("request");
const github_api_1 = require("./helper/github-api");
const vanilla_js_1 = require("./renderer/vanilla-js");
/**
 * Generic CI-Bot for Github communication wrapping configuration and template processing.
 */
class CiGithubBot {
    /**
     * Constructor.
     *
     * @param {ConfigurationGithub} configuration Instance of bot configuration (credentials ...)
     */
    constructor(configuration) {
        this
            .setConfiguration(configuration)
            .setHelperGithubApi(new github_api_1.HelperGithubApi(this.configuration));
    }
    /**
     * Creates a review comment on existing PR at Github.
     *
     * @param {ConfigurationComment} configuration Instance of comment configuration (template,
     *   variables ...)
     */
    createPullRequestComment(configuration) {
        if (null === this.getConfiguration().getPullRequestNumber()) {
            throw new Error('Failed creating pull request comment: You need to configure the number of' +
                ' the pull request before creating a comment.');
        }
        const renderer = new vanilla_js_1.RendererVanillaJs();
        // Body of comment - "body" is the name in Github's API (v3)
        const body = CiGithubBot.COMMENT_MARKER_BEGIN + renderer.render(configuration) +
            CiGithubBot.TEMPLATE_POWERED_BY + CiGithubBot.COMMENT_MARKER_END;
        const url = this.getHelperGithubApi().getApiUrl('issues/' + this.getConfiguration().getPullRequestNumber() + '/comments');
        this.sendRequest(url, { body }, 'POST');
    }
    /**
     * Wraps some configuration stuff around request and sends it.
     *
     * @param {string} url
     * @param {object} jsonData
     * @param {string} httpMethod
     *
     * @returns boolean TRUE on success, otherwise FALSE
     */
    sendRequest(url, jsonData, httpMethod = 'GET') {
        const options = {
            headers: {
                'User-Agent': CiGithubBot.HTTP_USER_AGENT,
            },
            json: jsonData,
            method: httpMethod,
        };
        // Send request
        request(url, options)
            .on('response', (response) => {
            if (201 !== response.statusCode) {
                throw Error(`Error: ${response.statusCode} Message: ${response.statusMessage}`);
            }
        })
            .auth(this.getConfiguration().getUsername(), this.getConfiguration().getToken());
    }
    /**
     * Getter for helperGithubApi.
     *
     * @returns {HelperGithubApi}
     */
    getHelperGithubApi() {
        return this.helperGithubApi;
    }
    /**
     * Setter for helperGithubApi.
     *
     * @param {HelperGithubApi} value
     *
     * @returns {CiGithubBot}
     */
    setHelperGithubApi(value) {
        this.helperGithubApi = value;
        return this;
    }
    /**
     * Getter for configuration.
     *
     * @returns {ConfigurationGithub}
     */
    getConfiguration() {
        return this.configuration;
    }
    /**
     * Setter for configuration.
     *
     * @param {ConfigurationGithub} value
     *
     * @returns {CiGithubBot}
     */
    setConfiguration(value) {
        this.configuration = value;
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
CiGithubBot.TEMPLATE_POWERED_BY = '<div>Powered by Ci-Github-Bot ' +
    '<a href="https://github.com/clickalicious/ci-github-bot/" target="_blank"><img' +
    ' src="https://image.flaticon.com/icons/png/32/34/34429.png"' +
    ' /></a></div>';
/**
 * HTTP User Agent.
 *
 * @type {string}
 */
CiGithubBot.HTTP_USER_AGENT = 'Ci-Github-Bot';
exports.CiGithubBot = CiGithubBot;
