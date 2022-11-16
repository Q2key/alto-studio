
export interface IUserProps {
    firstName: string;
}

export interface IUserEntity extends IUserProps {
    id: string;
}

export interface IUserDto extends IUserEntity {

}