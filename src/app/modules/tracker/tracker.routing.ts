// import { AuthenticationComponent } from './authentication.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { TrackerComponent } from './tracker.component';
import { TrackerBeerComponent } from './tracker-beer/tracker-beer.component';
import { TrackerFoodComponent } from './tracker-food/tracker-food.component';
import { TrackerMusicComponent } from './tracker-music/tracker-music.component';
import { TrackerWorkoutComponent } from './tracker-workout/tracker-workout.component';

export const routes: Routes = [
  { path: '', component: TrackerComponent, data: { state: 'tracker' },
  children: [
    { path: '', redirectTo: 'tracker', pathMatch: 'full' },
    { path: 'beer', component: TrackerBeerComponent, data: { state: 'tracker-beer' }},
    { path: 'food', component: TrackerFoodComponent, data: { state: 'tracker-food' }},
    { path: 'music-tracker', component: TrackerMusicComponent, data: { state: 'tracker-music' }}, // having just /music loads the other music component
    { path: 'workout', component: TrackerWorkoutComponent, data: { state: 'tracker-workout' }},
  ]
},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);