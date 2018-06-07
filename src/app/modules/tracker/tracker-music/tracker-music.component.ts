import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TrackService } from '../../music/track.service';

@Component({
  selector: 'app-tracker-music',
  templateUrl: './tracker-music.component.html',
  styleUrls: ['./tracker-music.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TrackerMusicComponent implements OnInit {
  searchedArtist: string;

  constructor(private trackService: TrackService) { 
    
  }

  ngOnInit() {
    
  }

  onValueSearched($event) {
    this.searchedArtist = $event;
  }

}
