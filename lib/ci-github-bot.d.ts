/**
 * ci-github-bot
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
import { ConfigurationCommentInterface } from './configuration/comment-interface';
import { ConfigurationGithubInterface } from './configuration/github-interface';
import { HelperRequestInterface } from './helper/request/interface';
import { HelperUrlBuilderInterface } from './helper/url-builder/interface';
import { HelperRendererInterface } from './helper/renderer/interface';
/**
 * Generic CI-Bot for Github communication wrapping configuration and template processing.
 */
export declare class CiGithubBot {
    /**
     * Marker for comment (begin)
     *
     * @type {string}
     */
    static readonly COMMENT_MARKER_BEGIN: string;
    /**
     * Marker for comment (end)
     *
     * @type {string}
     */
    static readonly COMMENT_MARKER_END: string;
    /**
     * Powered by advertising for comments (PUG template).
     *
     * @type {string}
     */
    static readonly TEMPLATE_POWERED_BY: string;
    /**
     * Configuration.
     *
     * @var {ConfigurationGithubInterface}
     */
    private configurationGithub;
    /**
     * Request helper
     *
     * @type {HelperRequestInterface}
     */
    private helperRequest;
    /**
     * HelperGithubApi helper.
     *
     * @var {HelperUrlBuilderInterface}
     */
    private helperUrlBuilder;
    /**
     * Renderer.
     *
     * @var {HelperRendererInterface}
     */
    private renderer;
    /**
     * Constructor.
     *
     * @param {ConfigurationGithubInterface} configurationGithub Instance of bot configuration
     * @param {HelperRequestInterface}       helperRequest       Helper for requests
     * @param {HelperUrlBuilderInterface}    helperUrlBuilder    Helper for build GitHub API URLs
     * @param {HelperRendererInterface}      helperRenderer      Renderer used for rendering comments
     */
    constructor(configurationGithub: ConfigurationGithubInterface, helperRequest: HelperRequestInterface, helperUrlBuilder: HelperUrlBuilderInterface, helperRenderer: HelperRendererInterface);
    /**
     * Creates a review comment on existing PR at Github.
     *
     * @param {ConfigurationCommentInterface} configurationComment Instance of comment configuration
     *
     * @return {Promise} A nodejs native promise
     */
    createComment(configurationComment: ConfigurationCommentInterface): any;
    /**
     * Getter for renderer.
     *
     * @return {HelperRendererInterface}
     */
    getHelperRenderer(): HelperRendererInterface;
    /**
     * Setter for renderer.
     *
     * @param {HelperRendererInterface} value
     *
     * @return {CiGithubBot}
     */
    private setHelperRenderer(value);
    /**
     * Getter for helperGithubApi.
     *
     * @return {HelperUrlBuilderInterface}
     */
    getHelperUrlBuilder(): HelperUrlBuilderInterface;
    /**
     * Setter for helperGithubApi.
     *
     * @param {HelperUrlBuilderInterface} value
     *
     * @return {CiGithubBot}
     */
    private setHelperUrlBuilder(value);
    /**
     * Getter for configurationGithub.
     *
     * @return {ConfigurationGithubInterface}
     */
    getConfiguration(): ConfigurationGithubInterface;
    /**
     * Setter for configurationGithub.
     *
     * @param {ConfigurationGithubInterface} value
     *
     * @return {CiGithubBot}
     */
    private setConfiguration(value);
    /**
     * Getter for helperRequest.
     *
     * @return {HelperRequestInterface}
     */
    getHelperRequest(): HelperRequestInterface;
    /**
     * Setter for helperRequest.
     *
     * @param {HelperRequestInterface} value
     *
     * @return {CiGithubBot}
     */
    private setHelperRequest(value);
}
