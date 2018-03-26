// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { ProfileComponent } from './profile/profile.component';
import { VideoItemComponent } from '../shared/video-item/video-item.component';
import { VideoPlaylistComponent } from '../shared/video-playlist/video-playlist.component';

// Services
import { VideoService } from 'app/services/_index';

// Routing
import { routing } from './user-profile.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing,
    FormsModule,
  ],
  declarations: [
    ProfileComponent,
  ],
  exports: [
    ProfileComponent
  ]
})
export class UserProfileModule { }
