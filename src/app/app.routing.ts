import { HomeComponent } from './pages/home/home.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', component: HomeComponent,
  data: {
    animation: 'homePage'
  }},
  { path: 'home', component: HomeComponent,
  data: {
    animation: 'homePage'
  } },
  { path: 'playground', component: PlaygroundComponent,
  data: {
    animation: 'playgroundPage'
  } },
  { path: 'login', loadChildren: './modules/authentication/authentication.module#AuthenticationModule', data: {
    animation: 'loginPage'
  } },
  { path: 'profile', loadChildren: './modules/user-profile/user-profile.module#UserProfileModule',
  data: {
    animation: 'profilePage'
  } },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);