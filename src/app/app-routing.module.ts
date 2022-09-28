import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentEditComponent } from './pages/department/department-edit/department-edit.component';
import { DepartmentListComponent } from './pages/department/department-list/department-list.component';
import { EmployeeEditComponent } from './pages/employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './pages/employee/employee-list/employee-list.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RoleListComponent } from './pages/role/role-list/role-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'department',
        component: DepartmentListComponent,
      },
      {
        path: 'department/edit/:id',
        component: DepartmentEditComponent
      },
      {
        path: 'employee',
        component: EmployeeListComponent,
      },
      {
        path: 'employee/edit/:id',
        component: EmployeeEditComponent
      },
      { path: 'role', component: RoleListComponent }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
