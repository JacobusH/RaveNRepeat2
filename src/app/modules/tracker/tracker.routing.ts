// import { AuthenticationComponent } from './authentication.component';
import { TrackerComponent } from './tracker.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', component: TrackerComponent, data: { state: 'tracker' }},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);