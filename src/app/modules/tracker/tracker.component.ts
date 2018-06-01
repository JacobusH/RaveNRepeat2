import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TrackerItem, TrackerItemDyn } from './tracker.model';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TrackerComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  dataObj;
  
  constructor() { 
    let test: TrackerItem;
    this.dataObj = test;
  }

  ngOnInit() {

  }

}
