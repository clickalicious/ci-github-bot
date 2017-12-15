'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
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
/* istanbul ignore next */
const awilix_1 = require("awilix");
/* istanbul ignore next */
const github_1 = require("./configuration/github");
/* istanbul ignore next */
const github_2 = require("./helper/url-parser/github");
const ci_github_bot_1 = require("./ci-github-bot");
const vanilla_js_1 = require("./helper/request/vanilla-js");
const github_api_1 = require("./helper/url-builder/github-api");
const vanilla_js_2 = require("./helper/renderer/vanilla-js");
const comment_1 = require("./configuration/comment");
/**
 * DI Configuration for Bot
 */
class DiConfiguration {
    /**
     * Constructor.
     *
     * @param {string} githubUsername Username used for accessing GitHub API for PR comment
     * @param {string} githubToken    Token used for accessing GitHub API for PR comment
     * @param {string} pullRequestUrl Pull request URL being parsed
     * @param {string} ciPlatform     Platform used -
     */
    constructor(githubUsername, githubToken, pullRequestUrl, ciPlatform = DiConfiguration.CI_PLATFORM_GENERIC) {
        // Create the container and set the resolutionMode to CLASSIC.
        this.container = awilix_1.createContainer({
            resolutionMode: awilix_1.ResolutionMode.CLASSIC,
        });
        let url = pullRequestUrl;
        switch (ciPlatform) {
            case DiConfiguration.CI_PLATFORM_CIRCLECI:
                url = process.env.PR_URL;
                break;
        }
        // Register configuration (parameter/arguments and classes) ...
        this.container.register({
            pullRequestUrl: awilix_1.asValue(url),
            helperUrlParser: awilix_1.asClass(github_2.HelperUrlParserGithub),
            username: awilix_1.asValue(githubUsername),
            token: awilix_1.asValue(githubToken),
            configurationGithub: awilix_1.asClass(github_1.ConfigurationGithub),
            helperRequest: awilix_1.asClass(vanilla_js_1.HelperRequestVanillaJs),
            helperUrlBuilder: awilix_1.asClass(github_api_1.HelperUrlBuilderGithubApi),
            helperRenderer: awilix_1.asClass(vanilla_js_2.HelperRendererVanillaJs),
            CiGithubBot: awilix_1.asClass(ci_github_bot_1.CiGithubBot),
            ConfigurationComment: awilix_1.asClass(comment_1.ConfigurationComment),
        });
    }
    /**
     * Getter for DIC.
     *
     * @return {AwilixContainer} Preconfigured and ready to use DIC.
     */
    getContainer() {
        return this.container;
    }
}
/**
 * Type generic CI platform.
 *
 * @type {string}
 */
DiConfiguration.CI_PLATFORM_GENERIC = 'Ci';
/**
 * Type generic CircleCI platform.
 *
 * @type {string}bilde
 */
DiConfiguration.CI_PLATFORM_CIRCLECI = 'CircleCi';
exports.DiConfiguration = DiConfiguration;
