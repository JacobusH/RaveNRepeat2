import { Component } from '@angular/core';
import { trigger, state, animate, transition, style, query, stagger,group, animateChild} from '@angular/animations';
import { routerAnimation } from './animations/_index';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerAnimation]
})
export class AppComponent {
  title = 'app';

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
