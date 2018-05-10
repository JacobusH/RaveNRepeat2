import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { state: 'home' }},
  { path: 'home', component: HomeComponent, data: { state: 'home' }},
  // { path: 'playground', component: PlaygroundComponent,data: { state: 'playground' }},
  { path: 'playground', loadChildren: './modules/playground/playground.module#PlaygroundModule', data: { state: 'playground' }},
  { path: 'login', loadChildren: './modules/authentication/authentication.module#AuthenticationModule', data: { state: 'login' }},
  { path: 'profile', loadChildren: './modules/user-profile/user-profile.module#UserProfileModule', data: { state: 'profile' }},
  { path: 'music', loadChildren: './modules/music/music.module#MusicModule', data: { state: 'music' }},
  // { path: 'sections', loadChildren: './modules/user-profile/user-profile.module#UserProfileModule', data: { state: 'sections' }},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);