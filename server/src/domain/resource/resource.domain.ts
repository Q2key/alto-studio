import { IResource } from './resource.domain.interface';

export enum ResourceType {
  VideoPoster,
  CourseVideo,
  CommonVideo,
}

export class Resource implements IResource {
  id?: string;
  name: string;
  originalName: string;
  type: string;
  mimeType: string;
  size: number;
  src: string;
  available: boolean;
}
