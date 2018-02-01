import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { VgAPI } from 'videogular2/core';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class VideoItemComponent implements OnInit {
  preload:string = 'auto';
  vgApi:VgAPI;
  cueList:TextTrackCueList;

  constructor() { 
    
  }

  ngOnInit() {
    
  }

  onPlayerReady(vgApi:VgAPI) {
    this.vgApi = vgApi;

    this.vgApi.getDefaultMedia().subscriptions.ended.subscribe(
        () => {
            // Set the video to the beginning
            this.vgApi.getDefaultMedia().currentTime = 0;
        }
    );
  }

}
