'use strict';

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
 * Configuration of comment.
 */
export class ConfigurationComment {

  /**
   * Templates combined rendered for commenting.
   *
   * @var {Array<string>}
   */
  private templates: string[];

  /**
   * @var {object}
   */
  private variables: object;

  /**
   * Constructor.
   *
   * @param {Array<string>} templates Template(s) used for comment
   * @param {object}        variables Key/value pair(s) of template variables
   */
  constructor(templates: string[], variables: object) {
    this
      .setTemplates(templates)
      .setVariables(variables);
  }

  /**
   * Getter for variables.
   *
   * @returns {object<string>}
   */
  public getVariables(): object {
    return this.variables;
  }

  /**
   * Setter for variables.
   *
   * @param {object} value
   *
   * @returns {ConfigurationComment}
   */
  protected setVariables(value: object): this {
    this.variables = value;

    return this;
  }

  /**
   * Getter for variables.
   *
   * @returns {Array<string>}
   */
  public getTemplates(): string[] {
    return this.templates;
  }

  /**
   * Setter for template.
   *
   * @param {Array<string>} value
   *
   * @returns {ConfigurationComment}
   */
  protected setTemplates(value: string[]): this {
    this.templates = value;

    return this;
  }
}
