import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './shared/components/molecules/register/register.component';
import { HomeComponent } from './shared/components/molecules/home/home.component';
import { LoginComponent } from './shared/components/molecules/login/login.component';
const routes: Routes = [
  { 
     path: '',
      component: HomeComponent 
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
