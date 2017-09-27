export default class ConfigurationComment {
    private templates;
    private variables;
    constructor(templates: string[], variables: object);
    getVariables(): object;
    setVariables(value: object): this;
    getTemplates(): string[];
    setTemplates(value: string[]): this;
}
