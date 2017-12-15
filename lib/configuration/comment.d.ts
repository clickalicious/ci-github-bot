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
import { ConfigurationCommentInterface } from './comment-interface';
/**
 * Configuration of comment.
 */
export declare class ConfigurationComment implements ConfigurationCommentInterface {
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
     * Setter for data/configuration of comment.
     *
     * @param {Array<string>} templates Template(s) used for comment
     * @param {object}        variables Key/value pair(s) of template variables
     *
     * @return {ConfigurationComment}
     */
    setData(templates: string[], variables: object): this;
    /**
     * Getter for variables.
     *
     * @return {object<string>}
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
     * @return {Array<string>}
     */
    getTemplates(): string[];
    /**
     * Setter for template.
     *
     * @param {Array<string>} value
     *
     * @return {ConfigurationComment}
     */
    setTemplates(value: string[]): this;
}
