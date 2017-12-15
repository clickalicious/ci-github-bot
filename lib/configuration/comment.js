'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Configuration of comment.
 */
class ConfigurationComment {
    /**
     * Setter for data/configuration of comment.
     *
     * @param {Array<string>} templates Template(s) used for comment
     * @param {object}        variables Key/value pair(s) of template variables
     *
     * @return {ConfigurationComment}
     */
    setData(templates, variables) {
        this
            .setTemplates(templates)
            .setVariables(variables);
        return this;
    }
    /**
     * Getter for variables.
     *
     * @return {object<string>}
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
     * @return {Array<string>}
     */
    getTemplates() {
        return this.templates;
    }
    /**
     * Setter for template.
     *
     * @param {Array<string>} value
     *
     * @return {ConfigurationComment}
     */
    setTemplates(value) {
        this.templates = value;
        return this;
    }
}
exports.ConfigurationComment = ConfigurationComment;
