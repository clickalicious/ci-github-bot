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

import { ConfigurationComment } from './../configuration/comment';

/**
 * Renderer based on plain vanilla JavaScript.
 */
export class RendererVanillaJs {

  /**
   * Renders a template by plain js replacement.
   *
   * @param {ConfigurationComment} configuration Configuration of comment to be rendered
   *
   * @return {string} Rendered buffer
   */
  public render(configuration: ConfigurationComment): string {

    let buffer: string = '';

    for (const template in configuration.getTemplates()) {
      buffer += configuration.getTemplates()[template];
      for (const variable in configuration.getVariables()) {
        buffer = buffer.replace(
          '${' + variable + '}',
          configuration.getVariables()[variable],
        );
      }
    }

    return buffer;
  }
}
