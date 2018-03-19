import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { VgAPI } from 'videogular2/core';
import { Video } from 'app/models/_index';
import { Observable } from 'rxjs/observable'

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
  @Input('videos') videos: Observable<Video[]>;

  constructor() {
  }

  ngOnInit() {
    
  }

  
}
