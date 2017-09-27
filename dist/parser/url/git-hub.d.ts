export default class ParserUrlGitHub {
    private url;
    private scheme;
    private organisation;
    private repository;
    private pullRequestNumber;
    constructor(url: string);
    private parse();
    getUrl(): string;
    private setUrl(value);
    getOrganisation(): string;
    private setOrganisation(value);
    getRepository(): string;
    private setRepository(value);
    getPullRequestNumber(): number;
    private setPullRequestNumber(value);
    getScheme(): string;
    private setScheme(value);
}
