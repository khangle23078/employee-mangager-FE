import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { EmployeeAddComponent } from './components/modal/employee-add/employee-add.component';
import { DeparmentAddComponent } from './components/modal/deparment-add/deparment-add.component';
import { LoginComponent } from './pages/login/login.component';
import { RoleListComponent } from './pages/role/role-list/role-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RoleAddComponent } from './components/modal/role-add/role-add.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { DepartmentComponent } from './pages/department/department.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardComponent } from './components/card/card.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeAddComponent,
    DeparmentAddComponent,
    LoginComponent,
    RoleListComponent,
    SidebarComponent,
    RoleAddComponent,
    TopbarComponent,
    DepartmentComponent,
    EmployeeComponent,
    DashboardComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
