import { IUnitResource } from './unit-resource.domain.interface';

export class UnitResource implements IUnitResource {
  id?: string;
  resourceId: string;
  unitId: string;
  type: string;
}
