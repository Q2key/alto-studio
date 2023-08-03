import { IResource } from "../entities/Resource/IResource";

export interface IResourceRepository {
  save(user: IResource): Promise<IResource>;
  findOne(id: number): Promise<IResource>;
  find: (fromIndex?: number, count?: number) => Promise<IResource[]>;
  deleteOne: (id: string) => Promise<boolean>;
}
