import { Entity, Column, OneToMany, JoinColumn } from 'typeorm'
import { IUser } from '../../domain/entities/User/IUser';
import { BaseDBEntity } from './BaseDBEntity';
import { ProjectEntity } from './ProjectEntity';

@Entity('user')
export class UserEntity extends BaseDBEntity implements IUser {
    constructor() {
        super();
    }

    @Column('varchar')
    firstName: string;

    @OneToMany(() => ProjectEntity, e => e.user)
    @JoinColumn()
    projects: ProjectEntity[]
}