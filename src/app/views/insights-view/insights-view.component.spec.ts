import { InsightsViewComponent } from "./insights-view.component";

describe('InsightsViewComponent', () => {
  let underTest: InsightsViewComponent;

  beforeEach(() => {
    underTest = new InsightsViewComponent();
  });

  it('should create', () => {
    expect(underTest).toBeTruthy();
  });
});
