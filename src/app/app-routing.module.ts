import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './components/department/department-list/department-list.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: 'department', component: DepartmentListComponent, children: [
          { path: 'add', component: DepartmentListComponent }
        ]
      },
      {
        path : 'employee',component : EmployeeListComponent,children : [
          
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
