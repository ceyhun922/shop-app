import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTopCategoriesComponent } from './product-top-categories.component';

describe('ProductTopCategoriesComponent', () => {
  let component: ProductTopCategoriesComponent;
  let fixture: ComponentFixture<ProductTopCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductTopCategoriesComponent]
    });
    fixture = TestBed.createComponent(ProductTopCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
