// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
// import { TrackerModule } from '../../modules/tracker/tracker.module';

// Components
import { ProfileComponent } from './profile/profile.component';
import { VideoItemComponent } from '../shared/videos/video-item/video-item.component';
import { VideoPlaylistComponent } from '../shared/videos/video-playlist/video-playlist.component';

// Services

// Routing
import { routing } from './user-profile.routing';

@NgModule({
  imports: [
    routing,
    CommonModule,
    SharedModule,
    FormsModule,
    // TrackerModule,
  ],
  declarations: [
    ProfileComponent,
  ],
  exports: [
    ProfileComponent
  ]
})
export class UserProfileModule { }
