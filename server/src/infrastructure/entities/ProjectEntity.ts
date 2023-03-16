import { BaseDBEntity } from "./BaseDBEntity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { IProject } from "../../domain/entities/Project/IProject";
import { UserEntity } from "./UserEntity";


@Entity('project')
export class ProjectEntity extends BaseDBEntity {
    constructor() {
        super();
    }

    @Column('uuid', {nullable: true})
    userId;

    @ManyToOne(() => UserEntity, (user) => user.projects)
    @JoinColumn()
    user: UserEntity

    @Column('date', { default: null })
    startedAt: string;
    
    @Column('date', { default: null })
    finishedAt: string;

    @Column('varchar')
    name: string;
}