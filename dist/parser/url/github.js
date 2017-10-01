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
/**
 * Parser for parsing out required information from a Github-URL.
 */
class ParserUrlGithub {
    /**
     * Constructor.
     *
     * @param {string} url URL being parsed
     */
    constructor(url) {
        this
            .setUrl(url)
            .parse();
    }
    /**
     * Parses information out of an VCS-URL like "https://github.com/Foo/Bar/pull/235"
     *
     * @throws {Error}
     */
    parse() {
        const urlParts = this.getUrl().split('/');
        // Validate result
        if (7 !== urlParts.length || true === isNaN(parseInt(urlParts[6], 10))) {
            throw new Error('Error resolving required data from passed URL "' + this.getUrl() + '"');
        }
        this
            .setScheme(urlParts[0].replace(':', ''))
            .setOrganisation(urlParts[3])
            .setRepository(urlParts[4])
            .setPullRequestNumber(parseInt(urlParts[6], 10));
    }
    /**
     * Getter for url.
     *
     * @returns {string}
     */
    getUrl() {
        return this.url;
    }
    /**
     * Setter for url.
     *
     * @param {string} value
     *
     * @returns {ParserUrlGithub}
     */
    setUrl(value) {
        this.url = value;
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
     * @returns {ParserUrlGithub}
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
     * @returns {ParserUrlGithub}
     */
    setRepository(value) {
        this.repository = value;
        return this;
    }
    /**
     * Getter for pullRequestNumber.
     *
     * @returns {string}
     */
    getPullRequestNumber() {
        return this.pullRequestNumber;
    }
    /**
     * Setter for pullRequestNumber.
     *
     * @param {number} value
     *
     * @returns {ParserUrlGithub}
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
     * @returns {ParserUrlGithub}
     */
    setScheme(value) {
        this.scheme = value;
        return this;
    }
}
exports.ParserUrlGithub = ParserUrlGithub;
