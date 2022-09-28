import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { DepartmentListComponent } from './components/department/department-list/department-list.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from './components/employee/employee-add/employee-add.component';
import { DeparmentAddComponent } from './components/department/deparment-add/deparment-add.component';
import { DepartmentEditComponent } from './components/department/department-edit/department-edit.component';
import { EmployeeDeleteComponent } from './components/employee/employee-delete/employee-delete.component';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeEditComponent } from './components/employee/employee-edit/employee-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepartmentListComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    DeparmentAddComponent,
    DepartmentEditComponent,
    EmployeeDeleteComponent,
    LoginComponent,
    EmployeeEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
