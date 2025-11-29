import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsOfDayComponent } from './deals-of-day.component';

describe('DealsOfDayComponent', () => {
  let component: DealsOfDayComponent;
  let fixture: ComponentFixture<DealsOfDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DealsOfDayComponent]
    });
    fixture = TestBed.createComponent(DealsOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
