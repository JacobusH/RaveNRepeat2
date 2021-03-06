// import { AuthenticationComponent } from './authentication.component';
import { BugsComponent } from './bugs/bugs.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  // { path: '', component: LoginComponent }, // default route of the module
  { path: 'bugs', component: BugsComponent, data: { state: 'bugs' }},
  { path: 'roadmap', component: RoadmapComponent, data: { state: 'roadmap' }},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);