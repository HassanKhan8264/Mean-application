import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponentComponent } from './components/user-component/user-component.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'', component:DashboardComponent},
  {path:'', redirectTo: 'dashboard', pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  { path: 'allUsers', component: UserComponentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
