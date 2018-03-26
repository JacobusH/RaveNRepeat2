import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fractalAnimation, openCloseAnimation } from 'app/animations/_index';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  animations: [
    fractalAnimation, openCloseAnimation
  ]
})
export class AnimationsComponent implements OnInit {
  stateExpression: string;

  constructor() { this.collapse(); }

  expand() { this.stateExpression = 'expanded'; }

  collapse() { this.stateExpression = 'collapsed'; }

  ngOnInit() {
  }

}
