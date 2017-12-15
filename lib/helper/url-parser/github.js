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
class HelperUrlParserGithub {
    /**
     * Constructor.
     *
     * @param {string} pullRequestUrl URL being parsed
     */
    constructor(pullRequestUrl) {
        // Validate pull request URL
        if (false === this.validateUrl(pullRequestUrl)) {
            throw new Error('Error validating URL "' + pullRequestUrl + '"');
        }
        this
            .setUrl(pullRequestUrl)
            .parse();
    }
    /**
     * Resolves data from pull request URL.
     *
     * @param {string} url Pull request URL
     */
    resolveFromPullRequestUrl(url) {
        // Validate pull request URL
        if (false === this.validateUrl(url)) {
            throw new Error('Error validating URL "' + url + '"');
        }
        this
            .setUrl(url)
            .parse();
    }
    /**
     * Validates an URL.
     *
     * @param {string} url An URL to validate
     *
     * @return {boolean}
     */
    validateUrl(url) {
        const urlParts = url.split('/');
        let result = true;
        // Validate result
        if (7 !== urlParts.length || true === isNaN(parseInt(urlParts[6], 10))) {
            result = false;
        }
        return result;
    }
    /**
     * Parses information out of an VCS-URL like "https://github.com/Foo/Bar/pull/235"
     *
     * @throws {Error}
     */
    parse() {
        const urlParts = this.getUrl().split('/');
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
     * @returns {HelperUrlParserGithub}
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
     * @returns {HelperUrlParserGithub}
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
     * @returns {HelperUrlParserGithub}
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
     * @returns {HelperUrlParserGithub}
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
     * @returns {HelperUrlParserGithub}
     */
    setScheme(value) {
        this.scheme = value;
        return this;
    }
}
exports.HelperUrlParserGithub = HelperUrlParserGithub;
