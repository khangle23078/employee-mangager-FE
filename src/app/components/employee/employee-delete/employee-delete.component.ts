import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { department } from 'src/app/models/department';
import { employee } from 'src/app/models/employee';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.scss']
})
export class EmployeeDeleteComponent implements OnInit {
  employee: employee = {
    fullname: '',
    birthday: '',
    email: '',
    roleId: 0,
    department_id: 0,
    degree: '',
    specialize: ''
  }
  departments: department[] = [];
  constructor(
    private departmentService: DepartmentService,
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(data: employee) {

  }
}
