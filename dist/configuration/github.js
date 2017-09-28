'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
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
const git_hub_1 = require("./../parser/url/git-hub");
/**
 * Configuration of CiGitHubBot.
 */
class ConfigurationGitHub {
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
     * Loads configuration data from a Pull-Request URL (GitHub).
     *
     * @param {string} pullRequestUrl
     */
    loadFromPullRequestUrl(pullRequestUrl) {
        // Extract information from Pull Request URL
        const urlParser = new git_hub_1.default(pullRequestUrl);
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
     * @returns {ConfigurationGitHub}
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
     * @returns {ConfigurationGitHub}
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
     * @returns {ConfigurationGitHub}
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
     * @returns {ConfigurationGitHub}
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
     * @returns {ConfigurationGitHub}
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
     * @returns {ConfigurationGitHub}
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
     * @returns {ConfigurationGitHub}
     */
    setHost(value) {
        this.host = value;
        return this;
    }
}
exports.default = ConfigurationGitHub;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZ3VyYXRpb24vZ2l0aHViLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYjs7Ozs7Ozs7Ozs7R0FXRztBQUVILHFEQUFzRDtBQUV0RDs7R0FFRztBQUNIO0lBbURFOzs7O09BSUc7SUFDSCxZQUFZLFFBQWdCLEVBQUUsS0FBYTtRQVozQzs7OztXQUlHO1FBQ0ssU0FBSSxHQUFXLGdCQUFnQixDQUFDO1FBUXRDLElBQUk7YUFDRCxXQUFXLENBQUMsUUFBUSxDQUFDO2FBQ3JCLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLElBQUksQ0FDVCxZQUFvQixFQUNwQixVQUFrQixFQUNsQixvQkFBNEIsSUFBSSxFQUNoQyxTQUFpQixPQUFPO1FBRXhCLElBQUk7YUFDRCxlQUFlLENBQUMsWUFBWSxDQUFDO2FBQzdCLGFBQWEsQ0FBQyxVQUFVLENBQUM7YUFDekIsb0JBQW9CLENBQUMsaUJBQWlCLENBQUM7YUFDdkMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksc0JBQXNCLENBQUMsY0FBc0I7UUFFbEQsNENBQTRDO1FBQzVDLE1BQU0sU0FBUyxHQUFHLElBQUksaUJBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsSUFBSSxDQUNQLFNBQVMsQ0FBQyxlQUFlLEVBQUUsRUFDM0IsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUN6QixTQUFTLENBQUMsb0JBQW9CLEVBQUUsRUFDaEMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUN0QixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxXQUFXO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSyxXQUFXLENBQUMsS0FBYTtRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUV0QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxRQUFRO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLFFBQVEsQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRW5CLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGVBQWU7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLGVBQWUsQ0FBQyxLQUFhO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBRTFCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGFBQWE7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLGFBQWEsQ0FBQyxLQUFhO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXhCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLG9CQUFvQjtRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSyxvQkFBb0IsQ0FBQyxLQUFhO1FBQ3hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFFL0IsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksU0FBUztRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxTQUFTLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUVwQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxPQUFPO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLE9BQU8sQ0FBQyxLQUFhO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBRWxCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0Y7QUE5UEQsc0NBOFBDIn0=