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
export declare class HelperUrlParserGithub {
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
     * @param {string} pullRequestUrl URL being parsed
     */
    constructor(pullRequestUrl: string);
    /**
     * Resolves data from pull request URL.
     *
     * @param {string} url Pull request URL
     */
    resolveFromPullRequestUrl(url: string): void;
    /**
     * Validates an URL.
     *
     * @param {string} url An URL to validate
     *
     * @return {boolean}
     */
    validateUrl(url: string): boolean;
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
     * @returns {HelperUrlParserGithub}
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
     * @returns {HelperUrlParserGithub}
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
     * @returns {HelperUrlParserGithub}
     */
    private setRepository(value);
    /**
     * Getter for pullRequestNumber.
     *
     * @returns {number}
     */
    getPullRequestNumber(): number;
    /**
     * Setter for pullRequestNumber.
     *
     * @param {number} value
     *
     * @returns {HelperUrlParserGithub}
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
     * @returns {HelperUrlParserGithub}
     */
    private setScheme(value);
}
