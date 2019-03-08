import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { MusicComponent } from './music.component';
import { TypeAheadComponent } from './type-ahead/type-ahead.component';
import { RatingComponent } from './rating/rating.component';
import { ViewArtistComponent } from './view-artist/view-artist.component';
import { ViewTrackComponent } from './view-track/view-track.component';
import { ViewTracklistComponent } from './view-tracklist/view-tracklist.component';

import { TrackService } from './track.service';

// Routing
import { routing } from './music.routing';

@NgModule({
  imports: [
    routing,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbRatingModule.forRoot()
  ],
  declarations: [
    MusicComponent
    , RatingComponent
    , TypeAheadComponent
    , ViewArtistComponent
    , ViewTrackComponent
    , ViewTracklistComponent  
  ],
  exports: [
    TypeAheadComponent,
    MusicComponent
    , RatingComponent
    , ViewArtistComponent
    , ViewTrackComponent
    , ViewTracklistComponent  
  ],
  providers: [
    TrackService
  ]
})
export class MusicModule { }
