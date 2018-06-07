// import { AuthenticationComponent } from './authentication.component';
import { ProfileComponent } from './profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  // { path: '', component: LoginComponent }, // default route of the module
  { path: '', component: ProfileComponent, data: { state: 'profile' }, 
  children: [
    { path: '', redirectTo: 'profile', pathMatch: 'full' },
    { path: 'tracker', loadChildren: '../tracker/tracker.module#TrackerModule', data: { state: 'tracker' }},
  ]}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);