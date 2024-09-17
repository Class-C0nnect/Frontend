import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { UrlComponent } from './components/atoms/url/url.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { H1Component } from './components/atoms/h1/h1.component';

import { ButtonsComponent } from './components/atoms/buttons/buttons.component';
import { AvatarComponent } from './components/atoms/avatar/avatar.component';
import { IconComponent } from './components/atoms/icon/icon.component';
import { InputsComponent } from './components/atoms/inputs/inputs.component';

import { AlertFormComponent } from './components/organisms/alert-form/alert-form.component';
import { H2Component } from './components/atoms/h2/h2.component';
import { H3Component } from './components/atoms/h3/h3.component';
import { PComponent } from './components/atoms/p/p.component';
import { SidebarComponent } from './components/molecules/sidebar/sidebar.component';
import { HomeComponent } from './components/molecules/home/home.component';
import { SidebarprofeComponent } from './components/molecules/sidebarprofe/sidebarprofe.component';
import { SidebaradminComponent } from './components/molecules/sidebaradmin/sidebaradmin.component';
import { RegisterComponent } from './components/molecules/register/register.component';
import { LoginComponent } from './components/molecules/login/login.component';



@NgModule({
  declarations: [

    UrlComponent,
    H1Component,
    ButtonsComponent,
    AvatarComponent,
    IconComponent,
    InputsComponent,
    AlertFormComponent,
    H2Component,
    H3Component,
    PComponent,
    SidebarComponent,
    HomeComponent,
        SidebarprofeComponent,
        SidebaradminComponent,
        RegisterComponent,
        LoginComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    RouterModule
  ],
  exports: [
    UrlComponent,
    H1Component,
    ButtonsComponent,
    AvatarComponent,
    IconComponent,
    InputsComponent,
    SidebarComponent,
    SidebaradminComponent,
    SidebarprofeComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent


  ]
})
export class SharedModule { }
