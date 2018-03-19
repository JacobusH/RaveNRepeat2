import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {trigger, transition} from "@angular/animations";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PlaygroundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
