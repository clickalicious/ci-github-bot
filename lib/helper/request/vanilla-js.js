'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
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
const request = require("request");
/**
 * Helper for sending requests.
 */
class HelperRequestVanillaJs {
    /**
     * Constructor.
     *
     * @param {ConfigurationGithubInterface} configurationGithub
     */
    constructor(configurationGithub) {
        this
            .setUsername(configurationGithub.getUsername())
            .setPassword(configurationGithub.getToken());
    }
    /**
     * Sends request and returns response.
     *
     * @param {string} url        URL endpoint of request
     * @param {Object} jsonData   Data to pass with request
     * @param {string} httpMethod Request method
     *
     * @return {Promise} A nodejs native promise
     */
    send(url, jsonData, httpMethod) {
        const options = {
            headers: {
                'User-Agent': HelperRequestVanillaJs.HTTP_USER_AGENT,
            },
            json: jsonData,
            method: httpMethod,
        };
        return new Promise((resolve, reject) => {
            // Send request and resolve or reject promise
            request(url, options)
                .on('response', (response) => {
                return resolve(response);
            })
                .on('error', (error) => {
                return reject(error);
            })
                .auth(this.getUsername(), this.getPassword());
        });
    }
    /**
     * Getter for username.
     *
     * @returns {string}
     */
    getUsername() {
        return this.username;
    }
    /**
     * Setter for username.
     *
     * @param {string} value
     *
     * @returns {string}
     */
    setUsername(value) {
        this.username = value;
        return this;
    }
    /**
     * Getter for password.
     *
     * @returns {string}
     */
    getPassword() {
        return this.password;
    }
    /**
     * Setter for password.
     *
     * @param {string} value
     *
     * @returns {string}
     */
    setPassword(value) {
        this.password = value;
        return this;
    }
}
/**
 * HTTP User Agent.
 *
 * @type {string}
 */
HelperRequestVanillaJs.HTTP_USER_AGENT = 'ci-github-bot';
exports.HelperRequestVanillaJs = HelperRequestVanillaJs;
