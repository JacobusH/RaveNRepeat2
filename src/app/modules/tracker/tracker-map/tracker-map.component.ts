import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tracker-map',
  templateUrl: './tracker-map.component.html',
  styleUrls: ['./tracker-map.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TrackerMapComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
