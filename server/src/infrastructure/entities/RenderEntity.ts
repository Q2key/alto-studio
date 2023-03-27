import { BaseDBEntity } from "./BaseDBEntity";
import { IRender } from "../../domain/entities/Render/IRender";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { ProjectEntity } from "./ProjectEntity";


@Entity('render')
export class RenderEntity extends BaseDBEntity implements IRender {
    constructor() {
        super();
    }

    @Column('varchar')
    meta: string;

    @Column('varchar')
    name: string;

    @Column('varchar')
    src: string;

    /* Relation */
    @ManyToOne(() => ProjectEntity, e => e.renders)
    @JoinColumn()
    project: ProjectEntity
}