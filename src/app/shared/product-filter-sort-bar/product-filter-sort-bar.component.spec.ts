import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFilterSortBarComponent } from './product-filter-sort-bar.component';

describe('ProductFilterSortBarComponent', () => {
  let component: ProductFilterSortBarComponent;
  let fixture: ComponentFixture<ProductFilterSortBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductFilterSortBarComponent]
    });
    fixture = TestBed.createComponent(ProductFilterSortBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
