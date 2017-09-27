'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
class HelperCurl {
    constructor(username, password, isOAuth = false) {
        this
            .setUsername(username)
            .setPassword(password)
            .setIsOAuth(isOAuth);
    }
    request(url, method = 'GET', data) {
        return this.execute(this.commandlineFactory(url, method, data), { input: data });
    }
    requestJson(url, method = 'GET', data) {
        return JSON.parse(this.request(url, method, data));
    }
    commandlineFactory(url, method = 'GET', data) {
        if (-1 === HelperCurl.httpMethods.indexOf(method)) {
            throw new RangeError('HTTP-method "' + method + '" unknown and/or not supported.');
        }
        let dataFlag = '';
        if ('undefined' !== typeof (data)) {
            dataFlag += ' --data @-';
        }
        let credentialsFlag = '';
        if ('undefined' !== typeof (this.getUsername())) {
            const credentials = this.getUsername().concat(('undefined' !== typeof (this.getPassword())) ? ':' + this.getPassword() : '');
            credentialsFlag += ' --user ' + credentials;
        }
        return 'curl --silent' + credentialsFlag + dataFlag + ' --request ' + method + ' ' + url;
    }
    execute(commandline, options) {
        let result;
        if ('undefined' !== typeof (options)) {
            result = child_process_1.execSync(commandline, options);
        }
        else {
            result = child_process_1.execSync(commandline);
        }
        return result.toString('utf8').trim();
    }
    getUsername() {
        return this.username;
    }
    setUsername(value) {
        this.username = value;
        return this;
    }
    getPassword() {
        return this.password;
    }
    setPassword(value) {
        this.password = value;
        return this;
    }
    getIsOAuth() {
        return this.isOAuth;
    }
    setIsOAuth(value) {
        this.isOAuth = value;
        return this;
    }
}
HelperCurl.httpMethods = [
    'GET',
    'POST',
    'PUT',
    'OPTIONS',
    'HEAD',
    'DELETE',
    'PATCH',
];
exports.default = HelperCurl;
//# sourceMappingURL=curl.js.map