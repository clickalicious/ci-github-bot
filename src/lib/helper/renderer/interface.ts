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

import { ConfigurationCommentInterface } from '../../configuration/comment-interface';

/**
 * Contract for template renderer.
 */
export interface HelperRendererInterface
{
  /**
   * Renders a template and returns rendered buffer.
   *
   * @param {ConfigurationCommentInterface} configurationComment
   *
   * @return {string}
   */
  render(configurationComment: ConfigurationCommentInterface): string;
}
