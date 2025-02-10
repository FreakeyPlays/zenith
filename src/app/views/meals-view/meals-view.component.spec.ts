import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsViewComponent } from './meals-view.component';

describe('MealsViewComponent', () => {
  let component: MealsViewComponent;
  let fixture: ComponentFixture<MealsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
