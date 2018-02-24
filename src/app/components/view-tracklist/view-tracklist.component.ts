import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { TrackService } from 'app/services/_index';
import { Track } from 'app/models/_index';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-view-tracklist',
  templateUrl: './view-tracklist.component.html',
  styleUrls: ['./view-tracklist.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ViewTracklistComponent implements OnInit {
  @Input('artist') artist: string;
  currentTracks: Observable<Track[]>;

  constructor(private trackService: TrackService) { 
  }

  ngOnInit() {
    this.currentTracks = this.trackService.get(this.artist).valueChanges();
  }

}
