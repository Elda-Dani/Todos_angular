import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { TodoComponent } from './todo/todo.component';

const appRoutes:Routes=[
  {
    path:"",component:LoginComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"todo",component:TodoComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
