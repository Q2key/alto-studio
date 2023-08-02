import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { BaseDBEntity } from "./BaseDBEntity";
import { UserEntity } from "./UserEntity";
import { IProject } from "../../domain/entities/Project/IProject";


@Entity('project')
export class ProjectEntity extends BaseDBEntity implements IProject {
    constructor() {
        super();
    }

    @Column('uuid', {nullable: true})
    userId;

    @Column('date', { default: null })
    startedAt: string;
    
    @Column('date', { default: null })
    finishedAt: string;

    @Column('varchar')
    name: string;

    /* Relations */
    // @ManyToOne(() => UserEntity, e => e.projects)
    // @JoinColumn()
    // // user: UserEntity
}