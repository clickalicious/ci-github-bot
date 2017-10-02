'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
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
const github_1 = require("../parser/url/github");
/**
 * Configuration of CiGithubBot.
 */
class ConfigurationGithub {
    /* Constructor.
     *
     * @param {string} username Bot username - used for bot posts/edits ...
     * @param {string} token    Bot token - for authentication
     */
    constructor(username, token) {
        /**
         * API Host.
         *
         * @type {string}
         */
        this.host = 'api.github.com';
        this
            .setUsername(username)
            .setToken(token);
    }
    /**
     * Load configuration.
     *
     * @param {string} organisation      Organisation (username) of repository the bot communicates to
     * @param {string} repository        Repository the bot communicates to
     * @param {number} pullRequestNumber Number of pull request if we target one
     * @param {string} scheme            Scheme used for communication (http|https)
     */
    load(organisation, repository, pullRequestNumber = null, scheme = 'https') {
        this
            .setOrganisation(organisation)
            .setRepository(repository)
            .setPullRequestNumber(pullRequestNumber)
            .setScheme(scheme);
    }
    /**
     * Loads configuration data from a Pull-Request URL (Github).
     *
     * @param {string} pullRequestUrl
     */
    loadFromPullRequestUrl(pullRequestUrl) {
        // Extract information from Pull Request URL
        const urlParser = new github_1.ParserUrlGithub(pullRequestUrl);
        this.load(urlParser.getOrganisation(), urlParser.getRepository(), urlParser.getPullRequestNumber(), urlParser.getScheme());
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
        return this.organisation;
    }
    /**
     * Setter for organisation.
     *
     * @param {string} value
     *
     * @returns {ConfigurationGithub}
     */
    setOrganisation(value) {
        this.organisation = value;
        return this;
    }
    /**
     * Getter for repository.
     *
     * @returns {string}
     */
    getRepository() {
        return this.repository;
    }
    /**
     * Setter for repository.
     *
     * @param {string} value
     *
     * @returns {ConfigurationGithub}
     */
    setRepository(value) {
        this.repository = value;
        return this;
    }
    /**
     * Getter for pullRequestNumber.
     *
     * @returns {number}
     */
    getPullRequestNumber() {
        return this.pullRequestNumber;
    }
    /**
     * Setter for pullRequestNumber.
     *
     * @param {number} value
     *
     * @returns {ConfigurationGithub}
     */
    setPullRequestNumber(value) {
        this.pullRequestNumber = value;
        return this;
    }
    /**
     * Getter for scheme.
     *
     * @returns {string}
     */
    getScheme() {
        return this.scheme;
    }
    /**
     * Setter for scheme.
     *
     * @param {string} value
     *
     * @returns {ConfigurationGithub}
     */
    setScheme(value) {
        this.scheme = value;
        return this;
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
