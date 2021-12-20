import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppearanceCardComponent } from './appearance-card.component';

describe('AppearanceCardComponent', () => {
  let component: AppearanceCardComponent;
  let fixture: ComponentFixture<AppearanceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppearanceCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppearanceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
