import { BaseDBEntity } from "./BaseDBEntity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { IProject } from "../../domain/entities/Project/IProject";
import { UserEntity } from "./UserEntity";
import { RenderEntity } from "./RenderEntity";
import { Render } from "../../domain/entities/Render/Render";


@Entity('project')
export class ProjectEntity extends BaseDBEntity {
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
    @ManyToOne(() => UserEntity, e => e.projects)
    @JoinColumn()
    user: UserEntity

    @OneToMany(() => RenderEntity, e => e.project)
    @JoinColumn()
    renders: RenderEntity[]
}