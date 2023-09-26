export interface GenericUseCase<TIn, TOut> {
  execute(dto: TIn): TOut;
}
