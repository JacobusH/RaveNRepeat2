// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HelpComponent } from './help/help.component';

// Services
import { AuthService } from './auth.service';

// Routing
import { routing } from './authentication.routing';

@NgModule({
  imports: [
    routing,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
      LoginComponent
    , RegisterComponent
    , HelpComponent
  ],
  providers: [
    AuthService
  ],
  exports: [
      LoginComponent
    , RegisterComponent
    , HelpComponent
  ]
})
export class AuthenticationModule { }
