import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightBannersComponent } from './right-banners.component';

describe('RightBannersComponent', () => {
  let component: RightBannersComponent;
  let fixture: ComponentFixture<RightBannersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightBannersComponent]
    });
    fixture = TestBed.createComponent(RightBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
