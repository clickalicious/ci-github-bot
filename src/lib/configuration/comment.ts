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

import { ConfigurationCommentInterface } from './comment-interface';

/**
 * Configuration of comment.
 */
export class ConfigurationComment implements ConfigurationCommentInterface
{
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
   * Setter for data/configuration of comment.
   *
   * @param {Array<string>} templates Template(s) used for comment
   * @param {object}        variables Key/value pair(s) of template variables
   *
   * @return {ConfigurationComment}
   */
  public setData(templates: string[], variables: object): this {
    this
      .setTemplates(templates)
      .setVariables(variables);

    return this;
  }

  /**
   * Getter for variables.
   *
   * @return {object<string>}
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
  public setVariables(value: object): this {
    this.variables = value;

    return this;
  }

  /**
   * Getter for variables.
   *
   * @return {Array<string>}
   */
  public getTemplates(): string[] {
    return this.templates;
  }

  /**
   * Setter for template.
   *
   * @param {Array<string>} value
   *
   * @return {ConfigurationComment}
   */
  public setTemplates(value: string[]): this {
    this.templates = value;

    return this;
  }
}
