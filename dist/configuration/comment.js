'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class ConfigurationComment {
    constructor(templates, variables) {
        this
            .setTemplates(templates)
            .setVariables(variables);
    }
    getVariables() {
        return this.variables;
    }
    setVariables(value) {
        this.variables = value;
        return this;
    }
    getTemplates() {
        return this.templates;
    }
    setTemplates(value) {
        this.templates = value;
        return this;
    }
}
exports.default = ConfigurationComment;
//# sourceMappingURL=comment.js.map