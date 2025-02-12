import { NavigationBarComponent } from "./navigation-bar.component";

describe('NavigationBarComponent', () => {
  let underTest: NavigationBarComponent;

  beforeEach(() => {
    underTest = new NavigationBarComponent();
  });

  it('should create the Navigation Bar', () => {
    expect(underTest).toBeTruthy();
  });
});
