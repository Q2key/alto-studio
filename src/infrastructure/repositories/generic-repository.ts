export interface GenericRepository<T> {
  FindAll: () => Promise<T[]>;
  FindOne: (params: unknown) => Promise<T>;
  Save: (data: T) => Promise<T>;
  Update: (update: T) => Promise<T>;
  Delete: (identity: string) => Promise<T>;
}
