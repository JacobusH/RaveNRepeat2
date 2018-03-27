// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HelpComponent } from './help/help.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Services
import { AuthService } from './auth.service';

// Routing
import { routing } from './authentication.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
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
