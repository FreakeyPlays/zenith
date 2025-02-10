import { Component } from '@angular/core';
import { NavigationElementComponent } from './navigation-element/navigation-element.component';

@Component({
  selector: 'app-navigation-bar',
  imports: [NavigationElementComponent],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
})
export class NavigationBarComponent {
  routes = [
    { label: 'Meals', link: '/meals', icon: 'grocery' },
    { label: 'Workouts', link: '/workouts', icon: 'exercise' },
    { label: 'Mindset', link: '/mindset', icon: 'psychology' },
    { label: 'Insights', link: '/insights', icon: 'data_usage' },
  ];
}
