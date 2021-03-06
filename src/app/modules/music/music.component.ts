import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { TrackService } from './track.service';
import { Track } from 'app/models/_index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MusicComponent implements OnInit {
  searchedArtist: string;

  constructor(private trackService: TrackService) { 
    
  }

  ngOnInit() {
    
  }

  onValueSearched($event) {
    this.searchedArtist = $event;
  }

}
