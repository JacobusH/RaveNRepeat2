import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class RatingComponent implements OnInit {
  currentRate = 6;

  constructor() { }

  ngOnInit() {
  }

  setHoverColors($event) {
    // console.log($event);
  }

  getColor(idx, fill) {
    if(fill == 100) {
      switch(idx) {
        case 0:
          return '#442299';
        case 1: 
          return '#3b0cbd';
        case 2: 
          return '#3311bb';
        case 3: 
          return '#11aabb';
        case 4: 
          return '#22ccaa';
        case 5: 
          return '#69d025';
        case 6: 
          return '#d0c310';
        case 7: 
          return '#feae2d';
        case 8: 
          return '#ff6644';
        case 9: 
          return '#ff3311';
        case 10: 
          return '#f80c12';
      }
    }
  }



}
