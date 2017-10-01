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
import { ConfigurationComment } from './../configuration/comment';
/**
 * Renderer based on plain vanilla JavaScript.
 */
export declare class RendererVanillaJs {
    /**
     * Renders a template by plain js replacement.
     *
     * @param {ConfigurationComment} configuration Configuration of comment to be rendered
     *
     * @returns {string} Rendered buffer
     */
    render(configuration: ConfigurationComment): string;
    /**
     * Resolves placeholder from passed in buffer.
     *
     * @param {string} buffer
     *
     * @returns {RegExpMatchArray} Resolved placeholders
     */
    private resolvePlaceholder(buffer);
}
