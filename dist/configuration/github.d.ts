export default class ConfigurationGitHub {
    private username;
    private token;
    private organisation;
    private repository;
    private pullRequestNumber;
    private scheme;
    private host;
    constructor(username: string, token: string);
    load(organisation: string, repository: string, pullRequestNumber?: number, scheme?: string): void;
    loadFromPullRequestUrl(pullRequestUrl: string): void;
    getUsername(): string;
    private setUsername(value);
    getToken(): string;
    private setToken(value);
    getOrganisation(): string;
    private setOrganisation(value);
    getRepository(): string;
    private setRepository(value);
    getPullRequestNumber(): number;
    private setPullRequestNumber(value);
    getScheme(): string;
    setScheme(value: string): this;
    getHost(): string;
    setHost(value: string): this;
}
