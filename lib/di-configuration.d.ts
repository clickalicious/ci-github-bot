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
import { AwilixContainer } from 'awilix';
/**
 * DI Configuration for Bot
 */
export declare class DiConfiguration {
    /**
     * DI-Container.
     *
     * @type {AwilixContainer}
     */
    private container;
    /**
     * Type generic CI platform.
     *
     * @type {string}
     */
    static readonly CI_PLATFORM_GENERIC: string;
    /**
     * Type generic CircleCI platform.
     *
     * @type {string}bilde
     */
    static readonly CI_PLATFORM_CIRCLECI: string;
    /**
     * Constructor.
     *
     * @param {string} githubUsername Username used for accessing GitHub API for PR comment
     * @param {string} githubToken    Token used for accessing GitHub API for PR comment
     * @param {string} pullRequestUrl Pull request URL being parsed
     * @param {string} ciPlatform     Platform used -
     */
    constructor(githubUsername: string, githubToken: string, pullRequestUrl: string, ciPlatform?: string);
    /**
     * Getter for DIC.
     *
     * @return {AwilixContainer} Preconfigured and ready to use DIC.
     */
    getContainer(): AwilixContainer;
}
