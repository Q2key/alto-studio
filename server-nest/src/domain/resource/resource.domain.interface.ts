import { IUnit } from '../unit/unit.domain.interface';

export interface IResource {
  id?: string;
  name: string;
  originalName: string;
  mimeType: string;
  type: string;
  size: number;
  src: string;
  available: boolean;
  units?: IUnit[];
}
