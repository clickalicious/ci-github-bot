'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Renderer based on plain vanilla JavaScript.
 */
class RendererVanillaJs {
    /**
     * Renders a template by plain js replacement.
     *
     * @param {ConfigurationComment} configuration Configuration of comment to be rendered
     *
     * @returns {string} Rendered buffer
     */
    render(configuration) {
        let buffer = '';
        const variables = Object.assign(configuration.getVariables(), process.env);
        for (const template in configuration.getTemplates()) {
            let currentBuffer = configuration.getTemplates()[template];
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
exports.RendererVanillaJs = RendererVanillaJs;
