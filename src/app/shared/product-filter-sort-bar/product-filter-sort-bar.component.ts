import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { SortService } from 'src/app/core/services/sort.service';
import { SortOption } from 'src/app/core/models/sort-option';

@Component({
  selector: 'app-product-filter-sort-bar',
  templateUrl: './product-filter-sort-bar.component.html',
  styleUrls: ['./product-filter-sort-bar.component.scss']
})
export class ProductFilterSortBarComponent implements OnInit {

  sorts: SortOption[] = [];
  selected: string = 'default';

  @Output() sortChanged = new EventEmitter<string>();

  constructor(private sortService: SortService) {}

  ngOnInit() {
    this.sorts = this.sortService.getAll();
  }

  onChange() {
    this.sortChanged.emit(this.selected);
  }
}
