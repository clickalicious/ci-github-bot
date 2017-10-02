/**
 * Configuration of CiGithubBot.
 */
export declare class ConfigurationGithub {
    /**
     * Username the Bot uses for authentication.
     *
     * @var {string}
     */
    private username;
    /**
     * Token the Bot uses for authentication.
     *
     * @var {string}
     */
    private token;
    /**
     * Organisation/User the PR is created on.
     *
     * @var {string}
     */
    private organisation;
    /**
     * Name of the repository the PR is created on.
     *
     * @var {string}
     */
    private repository;
    /**
     * Number of the pull request.
     *
     * @var {number}
     */
    private pullRequestNumber;
    /**
     * Scheme used for building API URL.
     *
     * @var {string}
     */
    private scheme;
    /**
     * API Host.
     *
     * @type {string}
     */
    private host;
    constructor(username: string, token: string);
    /**
     * Load configuration.
     *
     * @param {string} organisation      Organisation (username) of repository the bot communicates to
     * @param {string} repository        Repository the bot communicates to
     * @param {number} pullRequestNumber Number of pull request if we target one
     * @param {string} scheme            Scheme used for communication (http|https)
     */
    load(organisation: string, repository: string, pullRequestNumber?: number, scheme?: string): void;
    /**
     * Loads configuration data from a Pull-Request URL (Github).
     *
     * @param {string} pullRequestUrl
     */
    loadFromPullRequestUrl(pullRequestUrl: string): void;
    /**
     * Getter for username.
     *
     * @returns {string}
     */
    getUsername(): string;
    /**
     * Setter for username.
     *
     * @param {string} value
     *
     * @returns {ConfigurationGithub}
     */
    private setUsername(value);
    /**
     * Getter for token.
     *
     * @returns {string}
     */
    getToken(): string;
    /**
     * Setter for token.
     *
     * @param {string} value
     *
     * @returns {ConfigurationGithub}
     */
    private setToken(value);
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
     * @returns {ConfigurationGithub}
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
     * @returns {ConfigurationGithub}
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
     * @returns {ConfigurationGithub}
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
     * @returns {ConfigurationGithub}
     */
    setScheme(value: string): this;
    /**
     * Getter for host.
     *
     * @returns {string}
     */
    getHost(): string;
    /**
     * Setter for host.
     *
     * @param {string} value
     *
     * @returns {ConfigurationGithub}
     */
    setHost(value: string): this;
}
