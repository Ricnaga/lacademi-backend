import Plan from '../model/Plans';

export interface IPlansRepository {
  update(services: Plan[]): Plan[];
  all(): Plan[];
}
