import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { VgAPI } from 'videogular2/core';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class VideoItemComponent implements OnInit {
  player: YT.Player;
  private id: string = 'qDuKsiwS5xw';

	
  constructor() { 
    
  }

  ngOnInit() {
    
  }

  savePlayer (player) {
    this.player = player;
    console.log('player instance', player)
  }
  
  onStateChange(event){
    console.log('player state', event.data);
  }

}
