export interface IRepository<T> {
  FindAll: () => Promise<T[]>;
  Save: (data: T) => Promise<T>;
}
