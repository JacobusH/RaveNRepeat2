import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { transition, trigger, state, style, keyframes, animate } from '@angular/animations';

 
@Component({
  selector: '[app-svg-line]',
  templateUrl: './svg-line.component.html',
  styleUrls: ['./svg-line.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  animations: [
    trigger('aState', [
      state('small', style({transform: 'scale(1)', stroke: 'blue'})),
      state('large', style({transform: 'scale(4.2)', stroke: 'pink'}), {params: {testParm: 'orange'}}),
      transition('small => large', animate('1s ease', keyframes([
        style({transform: 'scale(1)', stroke: '{{testParm}}', offset: 0}),
        style({transform: 'scale(0.7) rotate(15deg)', stroke: 'pink', offset: 0.15}),
        style({transform: 'scale(1)', stroke: '{{testParm}}', offset: 0.3}),
        style({transform: 'scale(4.2)', stroke: '{{testParm}}', offset: 1})
      ])), {params: {testParm: 'orange'}}),
      transition('large => small', animate('1s ease', keyframes([
        style({transform: 'scale(4.2)', offset: 0}),
        style({transform: 'scale(5) rotate(-15deg)', offset: 0.15}),
        style({transform: 'scale(4.2)', offset: 0.3}),
        style({transform: 'scale(1)', offset: 1})
      ])), {params: {testParm: 'orange'}})
    ])
  ]
})
export class SvgLineComponent implements OnInit {
  private aState = "small";
  private test;

  constructor() { }

  ngOnInit() {
    this.test = tinycolor('red');
  }

  toggleState() {
    if(this.aState === "small") {
      this.aState = "large";
    } else {
      this.aState = "small";
    }

  }

}
