import { FileStorageService } from '../../contracts/file-storage-service';

export abstract class AbstractFileStorageService implements FileStorageService {
  abstract Upload(): Promise<void>;
  abstract Download(): Promise<void>;
  abstract GetFileSource(): Promise<void>;
}
