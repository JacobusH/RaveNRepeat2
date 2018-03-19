// import { AuthenticationComponent } from './authentication.component';
import { ProfileComponent } from './profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  // { path: '', component: LoginComponent }, // default route of the module
  { path: 'profile', component: ProfileComponent, data: { state: 'profile' }}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);