import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { VgAPI } from 'videogular2/core';

export interface IMedia {
  title: string;
  src: string;
  type: string;
}

@Component({
  selector: 'app-video-playlist',
  templateUrl: './video-playlist.component.html',
  styleUrls: ['./video-playlist.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class VideoPlaylistComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    
  }

  
}
