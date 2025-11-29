import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';
import { Category } from 'src/app/core/models/category';

@Component({
  selector: 'app-catalog-menu',
  templateUrl: './catalog-menu.component.html',
  styleUrls: ['./catalog-menu.component.scss']
})
export class CatalogMenuComponent implements OnInit {

  categories: Category[] = [];
  active = false;

  constructor(private catService: CategoryService) {}

  ngOnInit(): void {
    this.categories = this.catService.getAll();
  }

  open() {
    this.active = true;
  }

  close() {
    this.active = false;
  }

}
