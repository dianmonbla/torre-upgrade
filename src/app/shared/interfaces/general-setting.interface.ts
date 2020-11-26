export interface GeneralSetiingConfigurationPropertiesInterface {
    [key: string]: string | number | { [key: string]: string | number };
}

export interface GeneralSetiingConfigurationInterface {
    [key: string]: GeneralSetiingConfigurationPropertiesInterface
}

export interface GeneralSetiingApiResourceInterface {
    [key: string]: string;
}

export interface GeneralSetiingApiInterface {
    resource: GeneralSetiingApiResourceInterface;
}

export interface GeneralSetiingInterface {
    configuration: GeneralSetiingConfigurationInterface;
    api: { [key: string]: GeneralSetiingApiInterface };
}