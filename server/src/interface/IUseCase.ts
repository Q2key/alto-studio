export interface IUseCase<TIn, TOut> {
    execute: (payload: TIn) => Promise<TOut>;
}
