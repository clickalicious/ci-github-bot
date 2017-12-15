'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Configuration of CiGithubBot.
 */
class ConfigurationGithub {
    /* Constructor.
     *
     * @param {HelperUrlParserInterface} helperUrlParser URL Parser for GitHub URLs
     * @param {string}                   username        Bot username - used for bot posts/edits
     * @param {string}                   token           Bot token - for authentication
     */
    constructor(helperUrlParser, username, token) {
        /**
         * API Host.
         *
         * @type {string}
         */
        this.host = 'api.github.com';
        this
            .setHelperUrlParser(helperUrlParser)
            .setUsername(username)
            .setToken(token);
    }
    /**
     * Getter for helperUrlParser.
     *
     * @returns {HelperUrlParserInterface}
     */
    getHelperUrlParser() {
        return this.helperUrlParser;
    }
    /**
     * Setter for helperUrlParser.
     *
     * @param {HelperUrlParserInterface} value
     *
     * @returns {ConfigurationGithub}
     */
    setHelperUrlParser(value) {
        this.helperUrlParser = value;
        return this;
    }
    /**
     * Getter for username.
     *
     * @returns {string}
     */
    getUsername() {
        return this.username;
    }
    /**
     * Setter for username.
     *
     * @param {string} value
     *
     * @returns {ConfigurationGithub}
     */
    setUsername(value) {
        this.username = value;
        return this;
    }
    /**
     * Getter for token.
     *
     * @returns {string}
     */
    getToken() {
        return this.token;
    }
    /**
     * Setter for token.
     *
     * @param {string} value
     *
     * @returns {ConfigurationGithub}
     */
    setToken(value) {
        this.token = value;
        return this;
    }
    /**
     * Getter for organisation.
     *
     * @returns {string}
     */
    getOrganisation() {
        // return this.organisation;
        return this.getHelperUrlParser().getOrganisation();
    }
    /**
     * Getter for repository.
     *
     * @returns {string}
     */
    getRepository() {
        // return this.repository;
        return this.getHelperUrlParser().getRepository();
    }
    /**
     * Getter for pullRequestNumber.
     *
     * @returns {number}
     */
    getPullRequestNumber() {
        // return this.pullRequestNumber;
        return this.getHelperUrlParser().getPullRequestNumber();
    }
    /**
     * Getter for scheme.
     *
     * @returns {string}
     */
    getScheme() {
        return this.getHelperUrlParser().getScheme();
    }
    /**
     * Getter for host.
     *
     * @returns {string}
     */
    getHost() {
        return this.host;
    }
    /**
     * Setter for host.
     *
     * @param {string} value
     *
     * @returns {ConfigurationGithub}
     */
    setHost(value) {
        this.host = value;
        return this;
    }
}
exports.ConfigurationGithub = ConfigurationGithub;
