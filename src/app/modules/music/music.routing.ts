// import { AuthenticationComponent } from './authentication.component';
import { ViewArtistComponent } from './view-artist/view-artist.component';
import { ViewTrackComponent } from './view-track/view-track.component';
import { ViewTracklistComponent } from './view-tracklist/view-tracklist.component';
import { MusicComponent } from './music.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: 'all', component: MusicComponent, data: { state: 'music' }},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);