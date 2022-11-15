export interface IMapper<Tin, Tout> {
    toDTO(entity: Tin): Tout;
} 