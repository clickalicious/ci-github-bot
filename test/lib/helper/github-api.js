'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Helper for Github-API communication (URL-factory and stuff like that).
 */
class HelperGithubApi {
    /**
     * Constructor.
     *
     * @param {ConfigurationGithub} configuration
     */
    constructor(configuration) {
        this
            .setConfiguration(configuration);
    }
    /**
     * Returns FQ-API-URL for passed path.
     *
     * @param {string} path
     *
     * @returns {string}
     */
    getApiUrl(path) {
        return this.urlFactory('repos/' +
            this.getConfiguration().getOrganisation() + '/' +
            this.getConfiguration().getRepository() + '/' +
            path);
    }
    /**
     *
     * @param {string} path
     *
     * @returns {string}
     */
    urlFactory(path) {
        return this.getConfiguration().getScheme() + '://' +
            this.getConfiguration().getHost() + '/' +
            path;
    }
    /**
     * Getter for configuration.
     *
     * @returns {ConfigurationGithub}
     */
    getConfiguration() {
        return this.configuration;
    }
    /**
     * Setter for configuration.
     *
     * @param {ConfigurationGithub} value
     *
     * @returns {HelperGithubApi}
     */
    setConfiguration(value) {
        this.configuration = value;
        return this;
    }
}
exports.HelperGithubApi = HelperGithubApi;
