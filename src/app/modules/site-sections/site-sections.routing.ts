// import { AuthenticationComponent } from './authentication.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HotComponent } from './hot/hot.component';
import { NewComponent } from './new/new.component';
import { FavoriteComponent } from './favorite/favorite.component';

export const routes: Routes = [
  // { path: '', component: LoginComponent }, // default route of the module
  { path: 'fire', component: HotComponent, data: { state: 'hot' }},
  { path: 'new', component: NewComponent, data: { state: 'new' }},
  { path: 'favorites', component: FavoriteComponent, data: { state: 'favorite' }},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);