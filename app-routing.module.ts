import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ByeComponent } from './bye/bye.component';
import { HelloComponent } from './hello/hello.component';
import { JavaComponent } from './java/java.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'hello/:coursename',
    component:HelloComponent
  },
  {
    path:'hello',
    component:HelloComponent
  },
  {
    path:'bye',
    redirectTo:'bye/testUser',pathMatch:'full'
  },
  {
    path:'bye/:studentname',
    component:ByeComponent
  },
  {
    path:'java',
    component:JavaComponent
  },
  {
    path:"cart",
    component:CartComponent
  },
  {
    path:'home/:team',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
path:'',
redirectTo:'home',pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'home',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
