// import { AuthenticationComponent } from './authentication.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Components
import { AnimationsComponent } from './animations/animations.component';
import { PlaygroundComponent } from './playground.component';
import { ModalComponent } from './modal/modal.component';
import { CanvasComponent } from './canvas/canvas.component'; 

export const routes: Routes = [
  // { path: '', component: LoginComponent }, // default route of the module
  { path: 'playground', component: PlaygroundComponent, data: { state: 'playground' }, 
  children: [
    { path: '', redirectTo: 'playground', pathMatch: 'full' },
    { path: 'modal', component: ModalComponent },
    { path: 'animations', component: AnimationsComponent },
    { path: 'canvas', component: CanvasComponent }
  ]}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);