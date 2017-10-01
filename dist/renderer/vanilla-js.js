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
     * @return {string} Rendered buffer
     */
    render(configuration) {
        let buffer = '';
        for (const template in configuration.getTemplates()) {
            buffer += configuration.getTemplates()[template];
            for (const variable in configuration.getVariables()) {
                buffer = buffer.replace('${' + variable + '}', configuration.getVariables()[variable]);
            }
        }
        return buffer;
    }
}
exports.RendererVanillaJs = RendererVanillaJs;
