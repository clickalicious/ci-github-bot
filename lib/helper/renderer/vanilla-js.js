'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Renderer based on plain vanilla JavaScript.
 */
class HelperRendererVanillaJs {
    /**
     * Renders a template by plain js replacement.
     *
     * @param {ConfigurationComment} configurationComment Configuration of comment to be rendered
     *
     * @returns {string} Rendered buffer
     */
    render(configurationComment) {
        let buffer = '';
        const variables = Object.assign(configurationComment.getVariables(), process.env);
        const templates = configurationComment.getTemplates();
        for (const template in templates) {
            let currentBuffer = templates[template];
            const placeholders = this.resolvePlaceholder(currentBuffer);
            for (const placeholder in placeholders) {
                const plainPlaceholder = placeholders[placeholder]
                    .replace('${', '')
                    .replace('}', '');
                const replacement = variables[plainPlaceholder];
                if (typeof replacement === 'undefined') {
                    throw new Error('Variable "' + plainPlaceholder + '" is undefined. Template could not be rendered!');
                }
                currentBuffer = currentBuffer.replace(placeholders[placeholder], replacement);
            }
            buffer += currentBuffer;
        }
        return buffer;
    }
    /**
     * Resolves placeholder from passed in buffer.
     *
     * @param {string} buffer
     *
     * @returns {RegExpMatchArray} Resolved placeholders
     */
    resolvePlaceholder(buffer) {
        return buffer.match(new RegExp(/\${([\w\d]+)}/g));
    }
}
exports.HelperRendererVanillaJs = HelperRendererVanillaJs;
