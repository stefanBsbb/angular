import { Food } from '../../food/models/food.model';

export class Category {
  id: number;
  created: Date;
  lastUpdated: Date;

  name: string;

  foods: Food[];
}
