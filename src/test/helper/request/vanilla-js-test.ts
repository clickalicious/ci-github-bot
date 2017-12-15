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

/* tslint:disable:function-name no-unused-variable no-unused-locals */
import { test, suite, timeout } from 'mocha-typescript';
import { mock, instance, when } from 'ts-mockito';
import { HelperRequestVanillaJs } from '../../../lib/helper/request/vanilla-js';
import { ConfigurationGithub } from '../../../lib/configuration/github';
import * as nock from 'nock';

/**
 * Tests for renderer/vanilla-js
 */
@suite class HelperRequestVanillaJsTest
{
  /**
   * Instance for testing
   *
   * @type {HelperRequestVanillaJs}
   */
  private static subject: HelperRequestVanillaJs;

  /**
   * Configuration for accessing GitHub API
   *
   * @type { ConfigurationGithub }
   */
  private static configurationGithub: ConfigurationGithub;

  /**
   * Api Protocol used for constructing URLs
   *
   * @type {string}
   */
  private static apiProtocol = 'https';

  /**
   * API Host for testing
   *
   * @type {string}
   */
  private static apiHost = 'api.github.com';

  /**
   * Dummy route for API mock with nock
   *
   * @type {string}
   */
  private static apiRoute = '/repos/PubTrans/docker-cache/issues/4/comments';

  /**
   * Test preparation
   */
  static before() {

    // Mock GitHub API
    const body = {
      statusMessage: 'WAT?',
    };

    nock(
      HelperRequestVanillaJsTest.apiProtocol + '://' +
      HelperRequestVanillaJsTest.apiHost,
    ).post(HelperRequestVanillaJsTest.apiRoute).reply(
      201, body,
    );

    // Preconfigured stub of ConfigurationGithub
    const configurationGithubStub:ConfigurationGithub = mock(ConfigurationGithub);
    when(configurationGithubStub.getUsername()).thenReturn('foo');
    when(configurationGithubStub.getToken()).thenReturn('bar');

    HelperRequestVanillaJsTest.configurationGithub = instance(configurationGithubStub);

    HelperRequestVanillaJsTest.subject = new HelperRequestVanillaJs(
      HelperRequestVanillaJsTest.configurationGithub,
    );
  }

  @test 'Test successful API call (via stub) ...'() {

    const body = 'some dummy body of a comment';

    const url = HelperRequestVanillaJsTest.apiProtocol + '://' +
      HelperRequestVanillaJsTest.apiHost + HelperRequestVanillaJsTest.apiRoute;

    // Send request and receive Promise in return
    return HelperRequestVanillaJsTest.subject.send(
      url,
      { body },
      'POST',
    );
  }

  @test(timeout(20000)) 'Test unsuccessful API call (via stub) ...'(done) {

    HelperRequestVanillaJsTest.subject.send(
      'http://127.0.0.1:12345/',
      {},
      'POST',
    ).catch(() => {
      done();
    });
  }
}
