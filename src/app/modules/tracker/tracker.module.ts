import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MusicModule } from '../music/music.module';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { TrackerComponent } from './tracker.component';

// Routing
import { routing } from './tracker.routing';
import { TrackerBeerComponent } from './tracker-beer/tracker-beer.component';
import { TrackerWorkoutComponent } from './tracker-workout/tracker-workout.component';
import { TrackerFoodComponent } from './tracker-food/tracker-food.component';
import { TrackerMusicComponent } from './tracker-music/tracker-music.component';
import { TrackerMapComponent } from './tracker-map/tracker-map.component';
import { BackpackingComponent } from './backpacking/backpacking.component';


@NgModule({
  imports: [
    routing,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MusicModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAPnNOzeRaEkOsYhruEHno67C1CwUlgT7s',
      libraries: ["places"]
    }),
    AgmSnazzyInfoWindowModule,
  ],
  exports: [
    TrackerComponent
  ],
  declarations: [TrackerComponent, 
    TrackerBeerComponent, TrackerWorkoutComponent, 
    TrackerFoodComponent, TrackerMusicComponent, 
    TrackerMapComponent, BackpackingComponent
  ]
})
export class TrackerModule { }
