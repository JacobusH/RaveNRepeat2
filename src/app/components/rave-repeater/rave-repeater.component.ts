import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-rave-repeater',
  templateUrl: './rave-repeater.component.html',
  styleUrls: ['./rave-repeater.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class RaveRepeaterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getPathForA(): string {
    return "10 10 10 10";
  }

}
