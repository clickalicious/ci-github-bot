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
     * @returns {object}
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
exports.default = ConfigurationComment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWd1cmF0aW9uL2NvbW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViOzs7Ozs7Ozs7OztHQVdHO0FBRUg7O0dBRUc7QUFDSDtJQWNFOzs7OztPQUtHO0lBQ0gsWUFBWSxTQUFtQixFQUFFLFNBQWlCO1FBQ2hELElBQUk7YUFDRCxZQUFZLENBQUMsU0FBUyxDQUFDO2FBQ3ZCLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFlBQVk7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLFlBQVksQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBRXZCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFlBQVk7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLFlBQVksQ0FBQyxLQUFlO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBRXZCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0Y7QUFyRUQsdUNBcUVDIn0=