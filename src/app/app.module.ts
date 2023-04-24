import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormtodoComponent} from './form/formtodo.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {RouterLink, RouterModule} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {MatTableModule} from "@angular/material/table";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TableComponent} from './table/table.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import { DrawerComponent } from './drawer/drawer.component';
import {MatListModule} from "@angular/material/list";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    AppComponent,
    FormtodoComponent,
    HomeComponent,
    TableComponent,
    LoginComponent,
    RegisterComponent,
    DrawerComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    RouterLink,
    RouterModule,
    AppRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
