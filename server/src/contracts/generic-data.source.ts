export interface GenericDataSource<TDataSource> {
  getDataSource: () => TDataSource;
}
