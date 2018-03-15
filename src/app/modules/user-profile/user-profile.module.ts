// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';

// Routing
import { routing } from './user-profile.routing';
import { Profile } from 'selenium-webdriver/firefox';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    ProfileComponent
  ],
  exports: [
    ProfileComponent
  ]
})
export class UserProfileModule { }
