import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { TrackService } from 'app/services/_index';
import { Track } from 'app/models/_index';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-view-track',
  templateUrl: './view-track.component.html',
  styleUrls: ['./view-track.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ViewTrackComponent implements OnInit {
  @Input('track') track: Track;
  

  constructor() { 
  }

  ngOnInit() {
  }

}
