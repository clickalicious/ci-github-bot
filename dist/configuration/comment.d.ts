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
 * Configuration of comment.
 */
export declare class ConfigurationComment {
    /**
     * Templates combined rendered for commenting.
     *
     * @var {Array<string>}
     */
    private templates;
    /**
     * @var {object}
     */
    private variables;
    /**
     * Constructor.
     *
     * @param {Array<string>} templates Template(s) used for comment
     * @param {object}        variables Key/value pair(s) of template variables
     */
    constructor(templates: string[], variables: object);
    /**
     * Getter for variables.
     *
     * @returns {object<string>}
     */
    getVariables(): object;
    /**
     * Setter for variables.
     *
     * @param {object} value
     *
     * @returns {ConfigurationComment}
     */
    setVariables(value: object): this;
    /**
     * Getter for variables.
     *
     * @returns {Array<string>}
     */
    getTemplates(): string[];
    /**
     * Setter for template.
     *
     * @param {Array<string>} value
     *
     * @returns {ConfigurationComment}
     */
    setTemplates(value: string[]): this;
}
