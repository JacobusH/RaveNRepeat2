// import { AuthenticationComponent } from './authentication.component';
import { HelpComponent } from './help/help.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  // { path: '', component: LoginComponent }, // default route of the module
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'help', component: HelpComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);