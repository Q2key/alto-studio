import { AbstractFileStorageService } from '../abs/abstract.fille-storage.service';

export class S3Service extends AbstractFileStorageService {
  Download(): Promise<void> {
    return Promise.resolve(undefined);
  }

  GetFileSource(): Promise<void> {
    return Promise.resolve(undefined);
  }

  Upload(): Promise<void> {
    return Promise.resolve(undefined);
  }
}
