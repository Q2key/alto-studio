import { BaseDBEntity } from "./BaseDBEntity";
import { Column, Entity, OneToMany } from "typeorm";
import { IProject } from "../../domain/entities/Project/IProject";
import { UserEntity } from "./UserEntity";


@Entity('project')
export class ProjectEntity extends BaseDBEntity implements IProject {
    constructor() {
        super();
    }
    
    @OneToMany(() => UserEntity, (user) => user.id)
    userId: string;

    @Column('date', { default: null })
    startedAt: string;
    
    @Column('date', { default: null })
    finishedAt: string;

    @Column('varchar')
    name: string;
}