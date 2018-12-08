import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
=======
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
>>>>>>> 853c03a087cdda08f25540e7f0f8f95f8535961c
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
<<<<<<< HEAD
  {path: 'profile', component: ProfileComponent},
];
=======
  {path: 'profile', component: ProfileComponent}

]
>>>>>>> 853c03a087cdda08f25540e7f0f8f95f8535961c

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
=======
    HttpModule,
    RouterModule.forRoot(appRoutes)

>>>>>>> 853c03a087cdda08f25540e7f0f8f95f8535961c
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
