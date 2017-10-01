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
 * Configuration of comment.
 */
class ConfigurationComment {
    /**
     * Constructor.
     *
     * @param {Array<string>} templates Template(s) used for comment
     * @param {object}        variables Key/value pair(s) of template variables
     */
    constructor(templates, variables) {
        this
            .setTemplates(templates)
            .setVariables(variables);
    }
    /**
     * Getter for variables.
     *
     * @returns {object<string>}
     */
    getVariables() {
        return this.variables;
    }
    /**
     * Setter for variables.
     *
     * @param {object} value
     *
     * @returns {ConfigurationComment}
     */
    setVariables(value) {
        this.variables = value;
        return this;
    }
    /**
     * Getter for variables.
     *
     * @returns {Array<string>}
     */
    getTemplates() {
        return this.templates;
    }
    /**
     * Setter for template.
     *
     * @param {Array<string>} value
     *
     * @returns {ConfigurationComment}
     */
    setTemplates(value) {
        this.templates = value;
        return this;
    }
}
exports.ConfigurationComment = ConfigurationComment;
