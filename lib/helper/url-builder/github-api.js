'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Helper for Github-API communication (URL-factory and stuff like that).
 */
class HelperUrlBuilderGithubApi {
    /**
     * Constructor.
     *
     * @param {ConfigurationGithubInterface} configurationGithub
     */
    constructor(configurationGithub) {
        this
            .setConfiguration(configurationGithub);
    }
    /**
     * Returns FQ-API-URL for passed path.
     *
     * @param {string} path
     *
     * @returns {string}
     */
    buildUrl(path) {
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
     * @returns {ConfigurationGithubInterface}
     */
    getConfiguration() {
        return this.configuration;
    }
    /**
     * Setter for configuration.
     *
     * @param {ConfigurationGithubInterface} value
     *
     * @returns {HelperUrlBuilderGithubApi}
     */
    setConfiguration(value) {
        this.configuration = value;
        return this;
    }
}
exports.HelperUrlBuilderGithubApi = HelperUrlBuilderGithubApi;
