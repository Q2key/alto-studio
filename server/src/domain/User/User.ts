import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IUserEntity } from "./IUserEntity";

@Entity()
export class User implements IUserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    firstName: string;
}

