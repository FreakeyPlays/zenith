import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindsetViewComponent } from './mindset-view.component';

describe('MindsetViewComponent', () => {
  let component: MindsetViewComponent;
  let fixture: ComponentFixture<MindsetViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindsetViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MindsetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
