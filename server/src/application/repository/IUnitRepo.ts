import { IUnit } from "../../domain/unit/IUnit";

export interface IUnitRepository {
  save(user: IUnit): Promise<IUnit>;
  findOne(id: number): Promise<IUnit>;
  find: (fromIndex?: number, count?: number) => Promise<IUnit[]>;
  deleteOne: (id: string) => Promise<boolean>;
}
