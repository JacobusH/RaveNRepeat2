import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TrackerBeer, trackerBeerDyn } from './tracker-beer.model';

@Component({
  selector: 'app-tracker-beer',
  templateUrl: './tracker-beer.component.html',
  styleUrls: ['./tracker-beer.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TrackerBeerComponent implements OnInit {
  trackerBeerDyn;

  constructor() { 
    this.trackerBeerDyn = trackerBeerDyn;
  }

  ngOnInit() {
  }

  onSave(formJSON: JSON) {
    console.log("BEER", formJSON);
  }

}
