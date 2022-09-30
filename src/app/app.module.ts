import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { DepartmentListComponent } from './pages/department/department-list/department-list.component';
import { EmployeeListComponent } from './pages/employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from './components/modal/employee-add/employee-add.component';
import { DeparmentAddComponent } from './components/modal/deparment-add/deparment-add.component';
import { DepartmentEditComponent } from './pages/department/department-edit/department-edit.component';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeEditComponent } from './pages/employee/employee-edit/employee-edit.component';
import { RoleListComponent } from './pages/role/role-list/role-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RoleAddComponent } from './components/modal/role-add/role-add.component';
import { TopbarComponent } from './components/topbar/topbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepartmentListComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    DeparmentAddComponent,
    DepartmentEditComponent,
    LoginComponent,
    EmployeeEditComponent,
    RoleListComponent,
    SidebarComponent,
    RoleAddComponent,
    TopbarComponent,
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
