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
import { ConfigurationGithub } from '../../lib/configuration/github';
import { HelperUrlParserGithub } from '../../lib/helper/url-parser/github';

/**
 * Tests for configuration/github
 */
@suite class ConfigurationGithubTest
{
  /**
   * GitHub username
   *
   * @type {string}
   */
  private static readonly username: string = 'Test';

  /**
   * GitHub password/token
   *
   * @type {string}
   */
  private static readonly token: string = '123456';

  /**
   * GitHub URL scheme for SSL connections
   *
   * @type {string}
   */
  private static readonly schemeHttps: string = 'https';

  /**
   * GitHub URL scheme for non-SSL connections
   *
   * @type {string}
   */
  private static readonly schemeHttp: string = 'http';


  /**
   * GitHub organisation
   *
   * @type {string}
   */
  private static readonly organisation = 'clickalicious';

  /**
   * GitHub Repository
   *
   * @type {string}
   */
  private static readonly repository = 'ci-github-bot';

  /**
   * GitHub Pull Request number
   *
   * @type {number}
   */
  private static readonly pullRequestNumber = 1;

  /**
   * Instance for testing
   *
   * @type {ConfigurationGithub}
   */
  private static subject: ConfigurationGithub;

  /**
   * GitHub default API hostname
   *
   * @type {string}
   */
  private static hostDefault: string = 'api.github.com';

  private static organisationDefault: string = 'clickalicious';

  private static repositoryDefault: string = 'ci-github-bot';

  private static pullRequestNumberDefault: number = 1;

  private static schemeDefault: string = 'http';

  /**
   * GitHub alternative API hostname
   *
   * @type {string}
   */
  private static host: string = 'example.github.com';

  /**
   * GitHub Pull Request URL.
   *
   * @type {string}
   */
  private static urlHttps: string = 'https://github.com/clickalicious/ci-github-bot/pull/1';

  /**
   * GitHub Pull Request URL.
   *
   * @type {string}
   */
  private static urlHttp: string = 'http://github.com/clickalicious/ci-github-bot/pull/1';

  /**
   * Test preparation
   */
  static before() {
    const helperUrlParserGithub: HelperUrlParserGithub = new HelperUrlParserGithub(this.urlHttp);

    ConfigurationGithubTest.subject = new ConfigurationGithub(
      helperUrlParserGithub,
      ConfigurationGithubTest.username,
      ConfigurationGithubTest.token,
    );
  }

  @test 'Test getting username & token ...'() {

    assert.equal(
      ConfigurationGithubTest.subject.getUsername(),
      ConfigurationGithubTest.username,
      'Expected username matching input',
    );

    assert.equal(
      ConfigurationGithubTest.subject.getToken(),
      ConfigurationGithubTest.token,
      'Expected token matching input',
    );
  }

  @test 'Test setting and getting API host ...'() {

    assert.equal(
      ConfigurationGithubTest.subject.getHost(),
      ConfigurationGithubTest.hostDefault,
      'Expected API host matching default',
    );

    assert.equal(
      ConfigurationGithubTest.subject.setHost(ConfigurationGithubTest.host).getHost(),
      ConfigurationGithubTest.host,
      'Expected API host matching input',
    );
  }

  @test 'Test getting "organisation" ...'() {

    assert.equal(
      ConfigurationGithubTest.subject.getOrganisation(),
      ConfigurationGithubTest.organisationDefault,
      'Expected "organisation" matching default',
    );
  }

  @test 'Test getting "repository" ...'() {

    assert.equal(
      ConfigurationGithubTest.subject.getRepository(),
      ConfigurationGithubTest.repositoryDefault,
      'Expected "repository" matching default',
    );
  }

  @test 'Test getting "pull-request-number" ...'() {

    assert.equal(
      ConfigurationGithubTest.subject.getPullRequestNumber(),
      ConfigurationGithubTest.pullRequestNumberDefault,
      'Expected "pull-request-number" matching default',
    );
  }

  @test 'Test getting "scheme" ...'() {

    assert.equal(
      ConfigurationGithubTest.subject.getScheme(),
      ConfigurationGithubTest.schemeDefault,
      'Expected "scheme" matching default',
    );
  }
}
