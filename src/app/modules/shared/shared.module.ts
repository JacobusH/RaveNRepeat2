import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimateRnrComponent } from './animate-rnr/animate-rnr.component';
import { CanvasLazyComponent } from './canvas-lazy/canvas-lazy.component'

@NgModule({
  exports: [
    AnimateRnrComponent,
    CanvasLazyComponent
  ],
  imports: [
    CommonModule
  ],
  declarations: [
    AnimateRnrComponent,
    CanvasLazyComponent
  ]
})
export class SharedModule { }
