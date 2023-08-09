import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponentComponent } from './components/user-component/user-component.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { AddUsersComponent } from './components/add-users/add-users.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'', component:DashboardComponent},
  {path:'', redirectTo: 'dashboard', pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  { path: 'addUsers', component: AddUsersComponent },
  { path: 'products', component: AddProductsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
