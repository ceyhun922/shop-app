import { Injectable } from '@angular/core';
import { SortOption } from '../models/sort-option';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  private sorts: SortOption[] = [

    { key: 'default', label: 'Sırala', type: 'none' },

    { key: 'price-asc', label: 'Ucuzdan bahaya', type: 'asc', field: 'price' },
    { key: 'price-desc', label: 'Bahadan ucuza', type: 'desc', field: 'price' },

    { key: 'rating-desc', label: 'Ən yüksək reytinq', type: 'desc', field: 'rating' },

    { key: 'view-desc', label: 'Ən çox baxılan', type: 'desc', field: 'views' },

    { key: 'new', label: 'Yeni məhsullar', type: 'none' },
    { key: 'top', label: 'Top satılanlar', type: 'none' }
  ];

  getAll(): SortOption[] {
    return this.sorts;
  }
}
