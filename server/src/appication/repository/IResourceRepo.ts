import { IResource } from "../../domain/resource/IResource";

export interface IResourceRepository {
  save(user: IResource): Promise<IResource>;
  findOne(id: string): Promise<IResource>;
  find: (fromIndex?: number, count?: number) => Promise<IResource[]>;
  deleteOne: (id: string) => Promise<boolean>;
}
