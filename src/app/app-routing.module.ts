import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './components/department/department-list/department-list.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: 'department', component: DepartmentListComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
