import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { TrackService } from '../track.service';
import { Track } from 'app/models/_index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-tracklist',
  templateUrl: './view-tracklist.component.html',
  styleUrls: ['./view-tracklist.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ViewTracklistComponent implements OnInit, OnChanges {
  @Input('artist') artist: string;
  currentTracks: Observable<Track[]>;

  constructor(private trackService: TrackService) { 
  }

  ngOnInit() {
    // this.currentTracks = this.trackService.get(this.artist).valueChanges();
  }

  ngOnChanges(changes) {
    this.setTracks()
  }

  setTracks(){
    if(this.artist != undefined)
    {
      this.currentTracks = this.trackService.get(this.artist).valueChanges();
    }
  }

}
