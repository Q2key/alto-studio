import { GenericRepository } from '../../contracts/generic-repository';

export class SessionRepository implements GenericRepository<unknown> {
  Delete(identity: string): Promise<unknown> {
    return Promise.resolve(undefined);
  }

  FindAll(): Promise<unknown[]> {
    return Promise.resolve([]);
  }

  FindOne(params: unknown): Promise<unknown> {
    return Promise.resolve(undefined);
  }

  Save(data: unknown): Promise<unknown> {
    return Promise.resolve(undefined);
  }

  Update(update: unknown): Promise<unknown> {
    return Promise.resolve(undefined);
  }
}
