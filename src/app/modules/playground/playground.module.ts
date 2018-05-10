import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/modules/shared/shared.module';

// Routing
import { routing } from './playground.routing';

// Components
import { AnimationsComponent } from './animations/animations.component';
import { PlaygroundComponent } from './playground.component';
import { ModalComponent } from './modal/modal.component';
import { CanvasComponent } from './canvas/canvas.component';
import { ObservablesComponent } from './observables/observables.component'; 


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [
    PlaygroundComponent,
    ModalComponent,
    AnimationsComponent,
    CanvasComponent,
    ObservablesComponent
  ],
  exports: [
    PlaygroundComponent
  ]
})
export class PlaygroundModule { }
