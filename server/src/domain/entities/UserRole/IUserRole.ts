export enum UserRoles {
    Admin,
    User,
    Guest,
}

export interface IUserRole {
    id: string;
    type: UserRoles;
}