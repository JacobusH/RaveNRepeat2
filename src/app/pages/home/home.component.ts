import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Track } from 'app/models/_index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {
  searchedArtist: string;

  constructor() { 
    
  }

  ngOnInit() {
    
  }


}
