export default class HelperCurl {
    private static readonly httpMethods;
    private username;
    private password;
    private isOAuth;
    constructor(username?: string, password?: string, isOAuth?: boolean);
    request(url: string, method?: string, data?: string): string;
    requestJson(url: string, method?: string, data?: string): {};
    private commandlineFactory(url, method?, data?);
    private execute(commandline, options?);
    getUsername(): string;
    private setUsername(value?);
    getPassword(): string;
    private setPassword(value?);
    getIsOAuth(): boolean;
    private setIsOAuth(value);
}
