export interface ModelLogin {
    user: any;
    status:  boolean;
    message: string;
    result?:  Result;
    jwt?:     string;
}

export interface Result {
    createdBy?:        string;
    lastModifiedBy?:   string;
    createdDate?:      number;
    lastModifiedDate?: number;
    id?:               number;
    adminName?:        string;
    adminSurname?:     string;
    companyName?:      string;
    email?:            string;
    password?:         string;
    enabled?:          boolean;
    tokenExpired?:     boolean;
    roles?:            Roles;
}

export interface Roles {
    id?:   number;
    name?: string;
}
