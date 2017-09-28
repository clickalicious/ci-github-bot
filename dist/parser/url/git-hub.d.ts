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
/**
 * Parser for parsing out required information from a GitHub-URL.
 */
export default class ParserUrlGitHub {
    /**
     * URL containing information about organisation, repository, pr-number ...
     *
     * @var {string}
     */
    private url;
    /**
     * Scheme extracted from URL.
     *
     * @var {string}
     */
    private scheme;
    /**
     * Organisation/User the PR was opened on.
     *
     * @var {string}
     */
    private organisation;
    /**
     * Repository the PR was opened on.
     *
     * @var {string}
     */
    private repository;
    /**
     * Number of the PR which was opened.
     *
     * @var {string}
     */
    private pullRequestNumber;
    /**
     * Constructor.
     *
     * @param {string} url URL being parsed
     */
    constructor(url: string);
    /**
     * Parses information out of an VCS-URL like "https://github.com/Foo/Bar/pull/235"
     *
     * @throws {Error}
     */
    private parse();
    /**
     * Getter for url.
     *
     * @returns {string}
     */
    getUrl(): string;
    /**
     * Setter for url.
     *
     * @param {string} value
     *
     * @returns {ParserUrlGitHub}
     */
    private setUrl(value);
    /**
     * Getter for organisation.
     *
     * @returns {string}
     */
    getOrganisation(): string;
    /**
     * Setter for organisation.
     *
     * @param {string} value
     *
     * @returns {ParserUrlGitHub}
     */
    private setOrganisation(value);
    /**
     * Getter for repository.
     *
     * @returns {string}
     */
    getRepository(): string;
    /**
     * Setter for repository.
     *
     * @param {string} value
     *
     * @returns {ParserUrlGitHub}
     */
    private setRepository(value);
    /**
     * Getter for pullRequestNumber.
     *
     * @returns {string}
     */
    getPullRequestNumber(): number;
    /**
     * Setter for pullRequestNumber.
     *
     * @param {number} value
     *
     * @returns {ParserUrlGitHub}
     */
    private setPullRequestNumber(value);
    /**
     * Getter for scheme.
     *
     * @returns {string}
     */
    getScheme(): string;
    /**
     * Setter for scheme.
     *
     * @param {string} value
     *
     * @returns {ParserUrlGitHub}
     */
    private setScheme(value);
}
