// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';

// Components
import { ProfileComponent } from './profile/profile.component';
import { VideoFormComponent } from './video-form/video-form.component';

// Services
import { VideoService } from 'app/services/_index';

// Routing
import { routing } from './user-profile.routing';
import { Profile } from 'selenium-webdriver/firefox';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    TagInputModule
  ],
  declarations: [
    ProfileComponent,
    VideoFormComponent
  ],
  exports: [
    ProfileComponent
  ]
})
export class UserProfileModule { }
