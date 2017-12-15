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
import { HelperUrlParserGithub } from '../../../lib/helper/url-parser/github';
import { HelperUrlBuilderGithubApi } from '../../../lib/helper/url-builder/github-api';
import { ConfigurationGithub } from '../../../lib/configuration/github';

/**
 * Tests for helper/github-api
 */
@suite class HelperUrlBuilderGithubApiTest
{
  /**
   * Username
   *
   * @type {string}
   */
  private static readonly username: string = 'Test';

  /**
   * Token
   *
   * @type {string}
   */
  private static readonly token: string = '123456';

  /**
   * GitHub Pull Request URL
   *
   * @type {string}
   */
  private static url: string = 'https://github.com/clickalicious/ci-github-bot/pull/1';

  /**
   * GitHub configuration
   *
   * @type {ConfigurationGithub}
   */
  private static configurationGithub: ConfigurationGithub;

  /**
   * Subject
   *
   * @type {HelperUrlBuilderGithubApi}
   */
  private static subject: HelperUrlBuilderGithubApi;

  /**
   * Test preparations
   */
  static before() {

    // Preconfigured stub of HelperUrlParserGithub
    const helperUrlParserGithubStub:HelperUrlParserGithub = mock(HelperUrlParserGithub);
    when(helperUrlParserGithubStub.getScheme()).thenReturn('https');
    when(helperUrlParserGithubStub.getOrganisation()).thenReturn('clickalicious');
    when(helperUrlParserGithubStub.getRepository()).thenReturn('ci-github-bot');
    when(helperUrlParserGithubStub.getPullRequestNumber()).thenReturn(1);
    when(helperUrlParserGithubStub.getUrl()).thenReturn(HelperUrlBuilderGithubApiTest.url);

    // Preconfigured stub of ConfigurationGithub
    const configurationGithubStub:ConfigurationGithub = mock(ConfigurationGithub);

    when(configurationGithubStub.getScheme()).thenReturn('https');
    when(configurationGithubStub.getOrganisation()).thenReturn('clickalicious');
    when(configurationGithubStub.getRepository()).thenReturn('ci-github-bot');
    when(configurationGithubStub.getPullRequestNumber()).thenReturn(1);
    when(configurationGithubStub.getHost()).thenReturn('api.github.com');

    HelperUrlBuilderGithubApiTest.configurationGithub = instance(configurationGithubStub);

    HelperUrlBuilderGithubApiTest.subject = new HelperUrlBuilderGithubApi(
      HelperUrlBuilderGithubApiTest.configurationGithub,
    );
  }

  @test 'Test resolve API URL from helper ...'() {

    assert.equal(
      HelperUrlBuilderGithubApiTest.subject.buildUrl(
        'issues/' +
          HelperUrlBuilderGithubApiTest.configurationGithub.getPullRequestNumber() +
          '/comments',
      ),
      'https://api.github.com/repos/clickalicious/ci-github-bot/issues/1/comments',
      'Expected API URL matching',
    );
  }
}
