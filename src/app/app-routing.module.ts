import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginsComponent } from './logins/logins.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'logins', component: LoginsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/logins', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
