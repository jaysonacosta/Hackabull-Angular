import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PreferencesComponent } from './components/preferences/preferences.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'preferences', component: PreferencesComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
