import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';

// Components
import { AnimateRnrComponent } from './animate-rnr/animate-rnr.component';
import { AlertComponent } from './alert/alert.component';
import { CanvasLazyComponent } from './canvas-lazy/canvas-lazy.component';
import { VideoPlaylistComponent } from './video-playlist/video-playlist.component'
import { VideoItemComponent } from './video-item/video-item.component';
import { VideoFormComponent } from './video-form/video-form.component';

// Services
import { AlertMultiService } from './alert/alert-multi.service';

@NgModule({
  exports: [
    AnimateRnrComponent,
    AlertComponent,
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
    AlertComponent,
    AnimateRnrComponent,
    CanvasLazyComponent,
    VideoPlaylistComponent,
    VideoItemComponent,
    VideoFormComponent
  ],
  providers: [
    AlertMultiService
  ]
})
export class SharedModule { }
