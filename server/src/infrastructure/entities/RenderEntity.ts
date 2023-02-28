import { BaseDBEntity } from "./BaseDBEntity";
import { IRender } from "../../domain/entities/Render/IRender";
import { Column, Entity } from "typeorm";


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
}