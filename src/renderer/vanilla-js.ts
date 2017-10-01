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
   * @returns {string} Rendered buffer
   */
  public render(configuration: ConfigurationComment): string {

    let buffer: string = '';

    const variables: object = Object.assign(configuration.getVariables(), process.env);

    for (const template in configuration.getTemplates()) {
      let currentBuffer: string = configuration.getTemplates()[template];
      const placeholders: RegExpMatchArray = this.resolvePlaceholder(currentBuffer);

      for (const placeholder in placeholders) {
        const plainPlaceholder = placeholders[placeholder]
          .replace('${', '')
          .replace('}', '');
        const replacement = variables[plainPlaceholder];

        if (typeof replacement === 'undefined') {
          throw new Error(
            'Variable "' + plainPlaceholder + '" is undefined. Template could not be rendered!',
          );
        }

        currentBuffer = currentBuffer.replace(
          placeholders[placeholder],
          replacement,
        );
      }

      buffer += currentBuffer;
    }

    return buffer;
  }

  /**
   * Resolves placeholder from passed in buffer.
   *
   * @param {string} buffer
   *
   * @returns {RegExpMatchArray} Resolved placeholders
   */
  private resolvePlaceholder(buffer: string):RegExpMatchArray {
    return buffer.match(
      new RegExp(/\${([\w\d]+)}/g),
    );
  }
}
