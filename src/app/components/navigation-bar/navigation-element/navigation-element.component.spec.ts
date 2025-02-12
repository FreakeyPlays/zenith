import { NavigationElementComponent } from "./navigation-element.component";

describe('NavigationElement', () => {
  let underTest: NavigationElementComponent;

  beforeEach(() => {
    underTest = new NavigationElementComponent();
  });

  it('should create the Navigation Element', () => {
    expect(underTest).toBeTruthy();
  });
});
