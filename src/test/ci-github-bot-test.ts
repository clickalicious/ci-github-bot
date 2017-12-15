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

/* tslint:disable:function-name */
import { suite, test } from 'mocha-typescript';
import * as assert from 'assert';
import { mock, instance, when } from 'ts-mockito';
import { CiGithubBot } from '../lib/ci-github-bot';
import { ConfigurationGithub } from '../lib/configuration/github';
import { HelperRequestVanillaJs } from '../lib/helper/request/vanilla-js';
import { HelperUrlBuilderGithubApi } from '../lib/helper/url-builder/github-api';
import { HelperRendererVanillaJs } from '../lib/helper/renderer/vanilla-js';
import { ConfigurationComment } from '../lib/configuration/comment';

/**
 * Tests for ci-github-bot
 */
@suite class CiGithubBotTest
{
  /**
   * Subject
   *
   * @type {CiGithubBot}
   */
  private static subject: CiGithubBot;

  /**
   * Configuration for accessing GitHub API
   *
   * @type { ConfigurationGithub }
   */
  private static configurationGithub: ConfigurationGithub;

  /**
   * Configuration for accessing GitHub API with invalid/missing data
   *
   * @type { ConfigurationGithub }
   */
  private static configurationGithubInvalid: ConfigurationGithub;

  /**
   * Request helper
   *
   * @type { HelperRequestVanillaJs }
   */
  private static helperRequestVanillaJs: HelperRequestVanillaJs;

  /**
   * URL builder
   *
   * @type { HelperUrlBuilderGithubApi }
   */
  private static helperUrlBuilderGithubApi: HelperUrlBuilderGithubApi;

  /**
   * Configuration Comment
   *
   * @type { ConfigurationComment }
   */
  private static configurationComment: ConfigurationComment;

  /**
   * Renderer
   *
   * @type { HelperRendererVanillaJs }
   */
  private static helperRendererVanillaJs: HelperRendererVanillaJs;

  /**
   * Test preparations
   */
  static before() {

    // Preconfigured stub of ConfigurationGithub
    const configurationGithubStub:ConfigurationGithub = mock(ConfigurationGithub);
    when(configurationGithubStub.getUsername()).thenReturn('foo');
    when(configurationGithubStub.getToken()).thenReturn('bar');
    when(configurationGithubStub.getPullRequestNumber()).thenReturn(1);
    CiGithubBotTest.configurationGithub = instance(configurationGithubStub);

    // Preconfigured stub of ConfigurationGithub
    const configurationGithubInvalidStub:ConfigurationGithub = mock(ConfigurationGithub);
    when(configurationGithubInvalidStub.getUsername()).thenReturn('foo');
    when(configurationGithubInvalidStub.getToken()).thenReturn('bar');
    CiGithubBotTest.configurationGithubInvalid = instance(configurationGithubInvalidStub);

    // Preconfigured stub of HelperRequestVanillaJs
    const helperRequestVanillaJsStub: HelperRequestVanillaJs = mock(HelperRequestVanillaJs);
    CiGithubBotTest.helperRequestVanillaJs = instance(helperRequestVanillaJsStub);

    // Preconfigured stub of HelperRequestVanillaJs
    const helperUrlBuilderGithubStub: HelperUrlBuilderGithubApi = mock(HelperUrlBuilderGithubApi);
    CiGithubBotTest.helperUrlBuilderGithubApi = instance(helperUrlBuilderGithubStub);

    // Preconfigured comment template
    const configurationCommentStub: ConfigurationComment = mock(ConfigurationComment);
    when(configurationCommentStub.getTemplates()).thenReturn(['foo']);
    when(configurationCommentStub.getVariables()).thenReturn({ foo: 'bar' });
    CiGithubBotTest.configurationComment = instance(configurationCommentStub);

    // Preconfigured stub of HelperRendererVanillaJs
    const helperRendererVanillaJsStub: HelperRendererVanillaJs = mock(HelperRendererVanillaJs);
    when(helperRendererVanillaJsStub.render(CiGithubBotTest.configurationComment)).thenReturn(
      'foo',
    );
    CiGithubBotTest.helperRendererVanillaJs = instance(helperRendererVanillaJsStub);
  }

  @test 'Test sending a comment to GitHub with bot ...'() {

    // Create instance of Bot
    CiGithubBotTest.subject = new CiGithubBot(
      CiGithubBotTest.configurationGithub,
      CiGithubBotTest.helperRequestVanillaJs,
      CiGithubBotTest.helperUrlBuilderGithubApi,
      CiGithubBotTest.helperRendererVanillaJs,
    );

    CiGithubBotTest.subject.createComment(
      CiGithubBotTest.configurationComment,
    );
  }

  @test 'Test fail on missing pull request number ...'() {

    // Create instance of Bot
    CiGithubBotTest.subject = new CiGithubBot(
      CiGithubBotTest.configurationGithubInvalid,
      CiGithubBotTest.helperRequestVanillaJs,
      CiGithubBotTest.helperUrlBuilderGithubApi,
      CiGithubBotTest.helperRendererVanillaJs,
    );

    // Mutation: Assert that Pull request is null for testing error condition
    assert.strictEqual(
      CiGithubBotTest.configurationGithubInvalid.getPullRequestNumber(),
      null,
    );

    // Assert throws error on
    assert.throws(
      () => {
        CiGithubBotTest.subject.createComment(
          CiGithubBotTest.configurationComment,
        );
      },
      Error,
      'Failed creating pull request comment: You need to configure the number of the ' +
      'pull request before creating a comment.',
    );
  }
}
