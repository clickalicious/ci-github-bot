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
import { ConfigurationCommentInterface } from '../../configuration/comment-interface';
import { HelperRendererInterface } from './interface';
/**
 * Renderer based on plain vanilla JavaScript.
 */
export declare class HelperRendererVanillaJs implements HelperRendererInterface {
    /**
     * Renders a template by plain js replacement.
     *
     * @param {ConfigurationComment} configurationComment Configuration of comment to be rendered
     *
     * @returns {string} Rendered buffer
     */
    render(configurationComment: ConfigurationCommentInterface): string;
    /**
     * Resolves placeholder from passed in buffer.
     *
     * @param {string} buffer
     *
     * @returns {RegExpMatchArray} Resolved placeholders
     */
    private resolvePlaceholder(buffer);
}
