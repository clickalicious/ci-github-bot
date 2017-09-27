<img src="https://avatars0.githubusercontent.com/u/26927954?v=3&s=80" align="right" />

---

![Logo of ci-github-bot](docs/logo-large.png)

**GitHub** communication bot for `CI/CD` workflows.

| [![Build Status](https://travis-ci.org/clickalicious/GitHubBot.svg?branch=master)](https://travis-ci.org/clickalicious/GitHubBot) 	| [![Codacy branch grade](https://img.shields.io/codacy/grade/c73c519d18dd4d6ca703271b4d5faccf/master.svg)](https://www.codacy.com/app/clickalicious/GitHubBot?utm_source=github.com&utm_medium=referral&utm_content=clickalicious/GitHubBot&utm_campaign=Badge_Grade) 	| [![Codacy coverage](https://img.shields.io/codacy/coverage/c73c519d18dd4d6ca703271b4d5faccf.svg)](https://www.codacy.com/app/clickalicious/GitHubBot?utm_source=github.com&utm_medium=referral&utm_content=clickalicious/GitHubBot&utm_campaign=Badge_Grade) 	| [![clickalicious open source](https://img.shields.io/badge/clickalicious-open--source-green.svg?style=flat)](https://clickalicious.de/) 	|
|---	|---	|---	|---	|
| [![GitHub release](https://img.shields.io/github/release/clickalicious/GitHubBot.svg?style=flat)](https://github.com/clickalicious/GitHubBot/releases) 	| [![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)  	| [![Issue Stats](https://img.shields.io/issuestats/i/github/clickalicious/GitHubBot.svg)](https://github.com/clickalicious/GitHubBot/issues) 	| [![Dependency Status](https://dependencyci.com/github/clickalicious/GitHubBot/badge)](https://dependencyci.com/github/clickalicious/GitHubBot)  	|


## Table of Contents

- [Features](#features)
- [Example](#example)
- [Requirements](#requirements)
- [Philosophy](#philosophy)
- [Versioning](#versioning)
- [Roadmap](#roadmap)
- [Security-Issues](#security-issues)
- [License »](LICENSE)


## Features

 - Simplified abstraction for GitHub's `Pull Request Reviews` API
 - Template support for messages based on `PUG`
 - Written in `TypeScript` and compiled to `JavaScript` based on `Grunt`
 - Easy to use
 - Clean + well documented code


## Example

We ship a simple bridge for passing configuration from environment variables (ENV/.env) to `CiGitHubBot`. This bridge works on CircleCI - but it's easy to translate it to other CI services:

### CircleCI

This is an example on how to bridge between CircleCI Environment and `CiGitHubBot`:
```javascript
 
// Create an instance of PHP's internal webserver
$webserverDaemon = new \Clickalicious\Webserver\Daemon\Demonize(
    $interface,
    $port,
    $documentRoot,
    $uid,
    $phpBinary,
    $tempDir
);

// Daemon control
$webserverDaemon->start();
$webserverDaemon->restart();
$webserverDaemon->stop();

// Get PID
$webserverDaemon->start();
$webserverDaemon->getPid();

```


### Start

The following simple example shows how the daemon can be `started`:
[Demo START daemon »](demo/start.php)

Use this command for execution of the demo:
```shell
$> php demo/start.php
```

### Stop

The following simple example shows how the daemon can be `stopped`:
[Demo STOP daemon »](demo/stop.php)

Use this command for execution of the demo:
```shell
$> php demo/stop.php
```

### Restart

The following simple example shows how the daemon can be `restarted`:
[Demo RESTART daemon »](demo/restart.php)

Use this command for execution of the demo:
```shell
$> php demo/restart.php
```

### Status

The following simple example shows how the `status` of the daemon can be queried:
[Demo STATUS daemon »](demo/status.php)

Use this command for execution of the demo:
```shell
$> php demo/status.php
```


## Requirements

 - `PHP >= 5.6` (compatible up to version `7.2` as well as `HHVM`)


## Philosophy

This library provides the functionality to daemonize PHP's internal webserver and send the process to background without blocking the `console` or process starting the internal webserver.


## Versioning

For a consistent versioning i decided to make use of `Semantic Versioning 2.0.0` http://semver.org. Its easy to understand, very common and known from many other software projects.


## Roadmap

- [ ] Target stable release `1.0.0`
- [ ] `>= 90%` test coverage

[![Throughput Graph](https://graphs.waffle.io/clickalicious/github-bot/throughput.svg)](https://waffle.io/clickalicious/webserver-daemon/metrics)


## Security Issues

If you encounter a (potential) security issue don't hesitate to get in contact with us `opensource@clickalicious.de` before releasing it to the public. So i get a chance to prepare and release an update before the issue is getting shared. Thank you!


## Participate & Share

... yeah. If you're a code monkey too - maybe we can build a force ;) If you would like to participate in either **Code**, **Comments**, **Documentation**, **Wiki**, **Bug-Reports**, **Unit-Tests**, **Bug-Fixes**, **Feedback** and/or **Critic** then please let me know as well!
<a href="https://twitter.com/intent/tweet?hashtags=&original_referer=http%3A%2F%2Fgithub.com%2F&text=webserver-daemon%20-%20Small%20utility%20to%20demonize%20PHP%27s%20internal%20webserver%20%40phpfluesterer%20%23webserver-daemon%20%23php%20https%3A%2F%2Fgithub.com%2Fclickalicious%2Fwebserver-daemon&tw_p=tweetbutton" target="_blank">
  <img src="http://jpillora.com/github-twitter-button/img/tweet.png"></img>
</a>

## Sponsors

Thanks to our sponsors and supporters:

| JetBrains | Navicat |
|---|---|
| <a href="https://www.jetbrains.com/phpstorm/" title="PHP IDE :: JetBrains PhpStorm" target="_blank"><img src="http://resources.jetbrains.com/storage/products/jetbrains/img/meta/jetbrains_250x250.png" height="55"></img></a> | <a href="http://www.navicat.com/" title="Navicat GUI - DB GUI-Admin-Tool for MySQL, MariaDB, SQL Server, SQLite, Oracle & PostgreSQL" target="_blank"><img src="http://upload.wikimedia.org/wikipedia/en/9/90/PremiumSoft_Navicat_Premium_Logo.png" height="55" /></a>  |


###### Copyright
<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
