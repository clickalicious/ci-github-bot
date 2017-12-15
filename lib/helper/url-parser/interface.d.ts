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
 * Contract for GitHub API URL builder.
 */
export interface HelperUrlParserInterface {
    /**
     * Loads configuration data from a Pull-Request URL (Github).
     *
     * @param {string} pullRequestUrl
     */
    resolveFromPullRequestUrl(pullRequestUrl: string): any;
    /**
     * Returns parsed "Organisation"
     *
     * @return {string}
     */
    getOrganisation(): string;
    /**
     * Returns parsed "Repository"
     *
     * @return {string}
     */
    getRepository(): string;
    /**
     * Returns parsed "Pull-Request-Number"
     *
     * @return {number}
     */
    getPullRequestNumber(): number;
    /**
     * Returns parsed "Scheme"
     *
     * @return {string}
     */
    getScheme(): string;
}
