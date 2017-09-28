'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ci-gitHub-bot
 *
 * GitHub communication bot for CI/CD workflows.
 *
 * Simplified abstraction on GitHub's PR/Review-Comment API.
 * Supports templates for comments based on PUG template engine.
 *
 * MIT License
 *
 * @copyright 2017 clickalicious, Benjamin Carl
 */
/**
 * Parser for parsing out required information from a GitHub-URL.
 */
class ParserUrlGitHub {
    /**
     * Constructor.
     *
     * @param {string} url URL being parsed
     */
    constructor(url) {
        this
            .setUrl(url)
            .parse();
    }
    /**
     * Parses information out of an VCS-URL like "https://github.com/Foo/Bar/pull/235"
     *
     * @throws {Error}
     */
    parse() {
        const urlParts = this.getUrl().split('/');
        // Validate result
        if (7 !== urlParts.length || true === isNaN(parseInt(urlParts[6], 10))) {
            throw new Error('Error resolving required data from passed URL "' + this.getUrl() + '"');
        }
        this
            .setScheme(urlParts[0].replace(':', ''))
            .setOrganisation(urlParts[3])
            .setRepository(urlParts[4])
            .setPullRequestNumber(parseInt(urlParts[6], 10));
    }
    /**
     * Getter for url.
     *
     * @returns {string}
     */
    getUrl() {
        return this.url;
    }
    /**
     * Setter for url.
     *
     * @param {string} value
     *
     * @returns {ParserUrlGitHub}
     */
    setUrl(value) {
        this.url = value;
        return this;
    }
    /**
     * Getter for organisation.
     *
     * @returns {string}
     */
    getOrganisation() {
        return this.organisation;
    }
    /**
     * Setter for organisation.
     *
     * @param {string} value
     *
     * @returns {ParserUrlGitHub}
     */
    setOrganisation(value) {
        this.organisation = value;
        return this;
    }
    /**
     * Getter for repository.
     *
     * @returns {string}
     */
    getRepository() {
        return this.repository;
    }
    /**
     * Setter for repository.
     *
     * @param {string} value
     *
     * @returns {ParserUrlGitHub}
     */
    setRepository(value) {
        this.repository = value;
        return this;
    }
    /**
     * Getter for pullRequestNumber.
     *
     * @returns {string}
     */
    getPullRequestNumber() {
        return this.pullRequestNumber;
    }
    /**
     * Setter for pullRequestNumber.
     *
     * @param {number} value
     *
     * @returns {ParserUrlGitHub}
     */
    setPullRequestNumber(value) {
        this.pullRequestNumber = value;
        return this;
    }
    /**
     * Getter for scheme.
     *
     * @returns {string}
     */
    getScheme() {
        return this.scheme;
    }
    /**
     * Setter for scheme.
     *
     * @param {string} value
     *
     * @returns {ParserUrlGitHub}
     */
    setScheme(value) {
        this.scheme = value;
        return this;
    }
}
exports.default = ParserUrlGitHub;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LWh1Yi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvdXJsL2dpdC1odWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViOzs7Ozs7Ozs7OztHQVdHO0FBRUg7O0dBRUc7QUFDSDtJQXFDRTs7OztPQUlHO0lBQ0gsWUFBWSxHQUFXO1FBQ3JCLElBQUk7YUFDRCxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ1gsS0FBSyxFQUFFLENBQUM7SUFDYixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLEtBQUs7UUFDWCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTFDLGtCQUFrQjtRQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLE1BQU0sSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkUsTUFBTSxJQUFJLEtBQUssQ0FBQyxpREFBaUQsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDM0YsQ0FBQztRQUVELElBQUk7YUFDRCxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDdkMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1QixhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFCLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU07UUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ssTUFBTSxDQUFDLEtBQWE7UUFDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFFakIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksZUFBZTtRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ssZUFBZSxDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFFMUIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksYUFBYTtRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ssYUFBYSxDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFFeEIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksb0JBQW9CO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLG9CQUFvQixDQUFDLEtBQWE7UUFDeEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUUvQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxTQUFTO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLFNBQVMsQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXBCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0Y7QUFqTEQsa0NBaUxDIn0=