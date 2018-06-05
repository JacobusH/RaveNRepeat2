import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'app/modules/shared/shared.module';

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
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCUXVv45TIEeHtxkDIEy5ZEFsjmKKnAXiI',
      libraries: ["places"]
    }),
    AgmSnazzyInfoWindowModule,
  ],
  exports: [
    TrackerComponent
  ],
  declarations: [TrackerComponent, TrackerBeerComponent, TrackerWorkoutComponent, TrackerFoodComponent, TrackerMusicComponent, TrackerMapComponent, BackpackingComponent]
})
export class TrackerModule { }
