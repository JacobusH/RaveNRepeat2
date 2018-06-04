import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TrackerItem, trackerItemDyn } from './tracker.model';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TrackerComponent implements OnInit {

  trackerItem;
  
  constructor() { 
    this.trackerItem = trackerItemDyn;
  }

  ngOnInit() {

  }

}
 