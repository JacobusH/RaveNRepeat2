// import { AuthenticationComponent } from './authentication.component';
import { ProfileComponent } from './profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  // { path: '', component: LoginComponent }, // default route of the module
  { path: 'profile', component: ProfileComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);