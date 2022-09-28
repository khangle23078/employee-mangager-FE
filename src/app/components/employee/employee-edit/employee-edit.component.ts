import { Component, OnInit } from '@angular/core';
import { department } from 'src/app/models/department';
import { employee } from 'src/app/models/employee';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
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
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments() {
    this.departmentService.getDepartments().subscribe((data) => {
      console.log(data);

      this.departments = data;
    })
  }

  onSubmit(data: employee) {
    console.log(data);
  }
}
