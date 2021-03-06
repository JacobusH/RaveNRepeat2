import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';

// Components
import { AnimateRnrComponent } from './animate-rnr/animate-rnr.component';
import { AlertComponent } from './alert/alert.component';
import { CanvasLazyComponent } from './canvas-lazy/canvas-lazy.component';
import { FormDynamicComponent } from './form-dynamic/form-dynamic.component';
import { VideoPlaylistComponent } from './videos/video-playlist/video-playlist.component'
import { VideoItemComponent } from './videos/video-item/video-item.component';
import { VideoFormComponent } from './videos/video-form/video-form.component';

// Services
import { AlertMultiService } from './alert/alert-multi.service';
import { VideoPlaylistService } from './videos/video-playlist.service';
import { VideoItemService } from './videos/video-item.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule
  ],
  exports: [
    AnimateRnrComponent,
    AlertComponent,
    CanvasLazyComponent,
    FormDynamicComponent,
    VideoPlaylistComponent,
    VideoItemComponent,
    VideoFormComponent
  ],
  declarations: [
    AlertComponent,
    AnimateRnrComponent,
    CanvasLazyComponent,
    FormDynamicComponent,
    VideoPlaylistComponent,
    VideoItemComponent,
    VideoFormComponent,
  ],
  providers: [
    AlertMultiService
    , VideoPlaylistService
    , VideoItemService
  ]
})
export class SharedModule { }
