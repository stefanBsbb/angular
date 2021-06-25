import { Category } from '../../categories/models/category.model';

export class Food {
  id: number;
  created: Date;
  lastUpdated: Date;

  name: string;
  description: string;
  categoryId: number;
  type: string;
  price: number;
  discount: number;
  isCertificateIncluded: boolean;
  posterImgUrl: string;
  expiredDate: Date;

  category: Category;

  constructor() {
    this.type = 'Protein';
    this.price = 0;
    this.discount = 0;
    this.isCertificateIncluded = true;
  }
}
