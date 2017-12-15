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
 * Contract for comment configuration.
 */
export interface ConfigurationCommentInterface {
    /**
     * Getter for variables.
     *
     * @returns {object<string>}
     */
    getVariables(): object;
    /**
     * Getter for variables.
     *
     * @returns {Array<string>}
     */
    getTemplates(): string[];
}
