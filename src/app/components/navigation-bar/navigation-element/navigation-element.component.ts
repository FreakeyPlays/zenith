import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation-element',
  imports: [MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation-element.component.html',
  styleUrl: './navigation-element.component.scss',
})
export class NavigationElementComponent {
  label = input.required<string>();
  icon = input.required<string>();
  link = input.required<string>();
}
