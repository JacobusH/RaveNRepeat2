import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { VgAPI } from 'videogular2/core';
import { Observable } from 'rxjs'
import { VideoPlaylistService } from './video-playlist.service';
import { VideoItemService } from '../video-item/video-item.service';
import { VideoPlaylist } from './video-playlist.model';
import { VideoItem } from '../video-item/video-item.model';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-video-playlist',
  templateUrl: './video-playlist.component.html',
  styleUrls: ['./video-playlist.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class VideoPlaylistComponent implements OnInit {
  @Input('playlistId') playlistId: string;
  currentPlaylist$: Observable<VideoPlaylist>;
  currentVideos$: Observable<string[]>;
  currentVideos: Array<VideoItem>;

  constructor(private playlistService: VideoPlaylistService
    , private videoService: VideoItemService) { }

  ngOnInit() {
    this.currentVideos = new Array<VideoItem>();
    this.currentPlaylist$ = this.playlistService.get(this.playlistId).valueChanges();
    this.currentVideos$ = this.playlistService.getVideos(this.playlistId).valueChanges();

    this.currentPlaylist$.subscribe(playlist => {
      console.log(playlist)
    })
  
    this.currentVideos$.subscribe(videos => {
      videos.forEach(x => {
      this.videoService.get(x['videoId']).valueChanges().subscribe(video => {
          this.currentVideos.push(video);
        })
      }); 
    })
  
  }

}
