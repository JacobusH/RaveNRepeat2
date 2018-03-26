import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { transition, trigger, state, style, keyframes, animate, query } from '@angular/animations';
import { fractalAnimation } from '../../animations/_index';

@Component({ 
  selector: 'app-rave-repeater',
  templateUrl: './rave-repeater.component.html',
  styleUrls: ['./rave-repeater.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  animations: [ fractalAnimation ]
})
export class RaveRepeaterComponent implements OnInit {
  @HostBinding('@preview')
  public count: number = 0;
  bindingVar = '';
  items = [1, 2, 3, 4, 5];
 
  constructor() { }

  ngOnInit() {
  }

  getPathForA(): string {
    return "10 10 10 10";
  }

  fadeIn() {
    return this.bindingVar = 'fadeIn';
  }
  fadeOut() {
    return this.bindingVar = 'fadeOut';
  }
  toggle() {
    this.bindingVar == 'fadeOut' ? this.fadeIn() : this.fadeOut();
  }

}
