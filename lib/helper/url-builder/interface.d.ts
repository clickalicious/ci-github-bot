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
export interface HelperUrlBuilderInterface {
    /**
     * Builds and returns the API URL for passed path.
     *
     * @param {string} path to add to base
     *
     * @return {string} Resulting URL
     */
    buildUrl(path: string): string;
}
