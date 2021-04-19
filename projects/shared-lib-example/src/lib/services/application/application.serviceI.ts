export interface ApplicationServiceI {
    _embedded: Embedded;
    _links:    Links;
}

export interface Embedded {
    applications: Application[];
}
export interface Embedded2 {
    functionalities: Functionality[];
}

export interface Application {
    description:     string;
    _embedded: Embedded2;
    id:              number;
}

export interface Functionality {
    description: string;
    id:          number;
    url:         string;
}

export interface Links {
    additionalProp1: AdditionalProp;
    additionalProp2: AdditionalProp;
    additionalProp3: AdditionalProp;
}

export interface AdditionalProp {
    deprecation: string;
    href:        string;
    hreflang:    string;
    media:       string;
    name:        string;
    profile:     string;
    rel:         Rel;
    title:       string;
    type:        string;
}

export interface Rel {
}
