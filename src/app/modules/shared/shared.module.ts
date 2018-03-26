import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';

import { AnimateRnrComponent } from './animate-rnr/animate-rnr.component';
import { CanvasLazyComponent } from './canvas-lazy/canvas-lazy.component';
import { VideoPlaylistComponent } from './video-playlist/video-playlist.component'
import { VideoItemComponent } from './video-item/video-item.component';
import { VideoFormComponent } from './video-form/video-form.component';

@NgModule({
  exports: [
    AnimateRnrComponent,
    CanvasLazyComponent,
    VideoPlaylistComponent,
    VideoItemComponent,
    VideoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule
  ],
  declarations: [
    AnimateRnrComponent,
    CanvasLazyComponent,
    VideoPlaylistComponent,
    VideoItemComponent,
    VideoFormComponent
  ]
})
export class SharedModule { }
