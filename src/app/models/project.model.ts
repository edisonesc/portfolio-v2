import { Technology } from './technology.model';
import { PROJECT_TYPE } from '../enums/project-type.enum';
import { TimeRange } from './range.model';

export class Project extends TimeRange {
  name: string;
  description?: string;
  icon_url?: string;
  project_url?: string;
  technologies?: Technology[];
  type?: PROJECT_TYPE;
}
