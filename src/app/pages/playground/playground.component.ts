import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {trigger, transition} from "@angular/animations";
import { fractalAnimation } from '../../animations/_index'

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  animations: [fractalAnimation]
})
export class PlaygroundComponent implements OnInit {
  private bindingVar = "";

  fadeIn() {
    return this.bindingVar = "fadeIn";
  }

  fadeOut() {
    return this.bindingVar = "fadeOut";    
  }

  toggle() {
    this.bindingVar = 'fadeOut' ? this.fadeIn() : this.fadeOut();
  }

  constructor() { }

  ngOnInit() {
  }

}
