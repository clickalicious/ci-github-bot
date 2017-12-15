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
/**
 * Contract for sending requests.
 */
export interface HelperRequestInterface {
    /**
     * Sends request and returns response.
     *
     * @param {string} url        URL to send request to
     * @param {Object} jsonData   JSON data used as payload on request
     * @param {string} httpMethod Method (verb) used for request
     *
     * @return {Promise} A nodejs native promise
     */
    send(url: string, jsonData: object, httpMethod: string): any;
}
