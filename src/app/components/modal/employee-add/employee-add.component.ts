import { Component, OnInit } from '@angular/core';
import { department } from 'src/app/models/department';
import { employee } from 'src/app/models/employee';
import { role } from 'src/app/models/role';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  employee: any = {
    fullname: '',
    birthday: '',
    username: '',
    pass: '',
    email: '',
    roleId: 0,
    department_id: 0,
    degree: '',
    specialize: ''
  }
  departments: department[] = [];
  roles: role[] = [];
  constructor(
    private departmentService: DepartmentService,
    private employeeService: EmployeeService,
    private roleSerivice: RoleService,
  ) { }

  ngOnInit(): void {
    this.getDepartments();
    this.getRoles();
  }
  
  getRoles() {
    this.roleSerivice.getRoles().subscribe((data) => {
      this.roles = data;
    })
  }

  getDepartments() {
    this.departmentService.getDepartments().subscribe((data) => {
      this.departments = data;
    })
  }

  onSubmit(data: employee) {
    this.employeeService.createEmployee(data).subscribe((data) => {
      this.employeeService.getEmployees(10)
    })
  }
}
