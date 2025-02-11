import { MealsViewComponent } from "./meals-view.component";

describe('MealsViewComponent', () => {
  let underTest: MealsViewComponent;

  beforeEach(() => {
    underTest = new MealsViewComponent();
  });

  it('should create', () => {
    expect(underTest).toBeTruthy();
  });
});
