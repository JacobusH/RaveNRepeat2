import { Component } from '@angular/core';
import { trigger, state, animate, transition, style, query, stagger,group, animateChild} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      // no need to animate anything on load
      transition(':enter', []),
      // but anytime a route changes let's animate!
      transition('homePage => playgroundPage', [
        group([
          query(':enter', [
            style({ opacity: 0 }),
            animate('5.5s', style({ opacity: 1 })),
            animateChild()
          ]),
          query(':leave', [
            animate('5.5s', style({ opacity: 0 })),
            animateChild()
          ])
        ])
      ]),
      transition('playgroundPage => homePage', [
        group([
          query(':enter', [
            style({ opacity: 0 }),
            animate('5.5s', style({ opacity: 1 })),
            animateChild()
          ]),
          query(':leave', [
            animate('5.5s', style({ opacity: 0 })),
            animateChild()
          ])
        ])
      ]),
      //...
    ])
  ]
})
export class AppComponent {
  title = 'app';

  prepRouteState(outlet: any) {
    return outlet.activatedRouteData['animation'] || 'firstPage'; 
  }

}
