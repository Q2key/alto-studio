export interface GenericDataSource<TDataSource> {
  initDataSource: () => Promise<void>;
  getDataSource: () => TDataSource;
}
