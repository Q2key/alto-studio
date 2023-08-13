import { IUnitResource } from "../entities/UnitResource/IUnitResource";

export interface IUnitResourceRepository {
  save(user: IUnitResource): Promise<IUnitResource>;
  findOne(id: string): Promise<IUnitResource>;
  find: (fromIndex?: number, count?: number) => Promise<IUnitResource[]>;
  deleteOne: (id: string) => Promise<boolean>;
}
