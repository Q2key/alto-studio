export interface GenericDbDataSource<TDataSource> {
  initDataSource: () => Promise<void>;
  getDataSource: () => TDataSource;
}
