export interface GenericDataSource<TDataSource> {
  getDataSource: () => Promise<TDataSource>;
}
