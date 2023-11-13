export interface FileStorageService {
  Upload(): Promise<void>;

  Download(): Promise<void>;

  GetFileSource(): Promise<void>;
}
