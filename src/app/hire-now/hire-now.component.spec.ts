import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireNowComponent } from './hire-now.component';

describe('HireNowComponent', () => {
  let component: HireNowComponent;
  let fixture: ComponentFixture<HireNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireNowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HireNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
