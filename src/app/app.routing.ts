import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', loadChildren: './modules/authentication/authentication.module#AuthenticationModule' },
  { path: 'profile', loadChildren: './modules/user-profile/user-profile.module#UserProfileModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);