import { IUnitResource } from "../../domain/unit-resource/IUnitResource";

export interface IUnitResourceRepository {
  save(user: IUnitResource): Promise<IUnitResource>;
  findOne(id: string): Promise<IUnitResource>;
  find: (fromIndex?: number, count?: number) => Promise<IUnitResource[]>;
  deleteOne: (id: string) => Promise<boolean>;
}
