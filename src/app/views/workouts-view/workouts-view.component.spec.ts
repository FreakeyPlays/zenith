import { WorkoutsViewComponent } from "./workouts-view.component";

describe('WorkoutsViewComponent', () => {
  let underTest: WorkoutsViewComponent;

  beforeEach(() => {
    underTest = new WorkoutsViewComponent();
  });

  it('should create', () => {
    expect(underTest).toBeTruthy();
  });
});
