import { Component } from '@angular/core';

interface FilterGroup {
  title: string;
  key: string;
  open: boolean;
  options: {
    name: string;
    id: number;
    selected: boolean;
  }[];
}

@Component({
  selector: 'app-product-filter-sidebar',
  templateUrl: './product-filter-sidebar.component.html',
  styleUrls: ['./product-filter-sidebar.component.scss']
})
export class ProductFilterSidebarComponent {

  filterGroups: FilterGroup[] = [

    {
      title: 'Kategori',
      key: 'category',
      open: true,
      options: [
        { id: 1, name: 'Telefon', selected: false },
        { id: 2, name: 'Planşet', selected: false },
        { id: 3, name: 'Qulaqlıq', selected: false },
        { id: 4, name: 'Notebook', selected: false },
        { id: 5, name: 'Tv', selected: false }
      ]
    },

    {
      title: 'Marka',
      key: 'brand',
      open: false,
      options: [
        { id: 1, name: 'Apple', selected: false },
        { id: 2, name: 'Samsung', selected: false },
        { id: 3, name: 'Xiaomi', selected: false },
        { id: 4, name: 'Asus', selected: false },
        { id: 5, name: 'HP', selected: false }
      ]
    },

    {
      title: 'Bədən',
      key: 'size',
      open: false,
      options: [
        { id: 1, name: 'XS', selected: false },
        { id: 2, name: 'S', selected: false },
        { id: 3, name: 'M', selected: false },
        { id: 4, name: 'L', selected: false },
        { id: 5, name: 'XL', selected: false }
      ]
    },

    {
      title: 'Rəng',
      key: 'color',
      open: false,
      options: [
        { id: 1, name: 'Qara', selected: false },
        { id: 2, name: 'Ağ', selected: false },
        { id: 3, name: 'Boz', selected: false },
        { id: 4, name: 'Göy', selected: false }
      ]
    }

  ];

  toggle(group: FilterGroup) {
    group.open = !group.open;
  }

  applyFilters() {
    console.log("SEÇİLƏN FILTERLƏR: ", this.filterGroups);
  }

}
