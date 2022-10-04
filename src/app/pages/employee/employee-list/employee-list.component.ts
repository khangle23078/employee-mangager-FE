import { Component, OnInit } from '@angular/core';
import { map, pipe } from 'rxjs';
import { department } from 'src/app/models/department';
import { employee } from 'src/app/models/employee';
import { role } from 'src/app/models/role';
import { AuthService } from 'src/app/services/auth.service';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: employee[] = []
  employeeEdit: employee = {
    fullname: '',
    email: '',
    birthday: '',
    role: {
      roleId: 0,
      roleName: ''
    },
    degree: '',
    specialize: '',
    department: {
      departmentName: ''
    }
  }
  departments: department[] = [];
  roles: role[] = [];

  constructor(
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private roleSerivice: RoleService
  ) { }

  ngOnInit(): void {
    this.getAll()
    this.getRoles()
    this.getDepartments()
  }

  getRoles() {
    this.roleSerivice.getRoles().subscribe((data) => {
      console.log(data)
      this.roles = data;
    })
  }

  getDepartments() {
    this.departmentService.getDepartments().subscribe((data) => {
      console.log(data);

      this.departments = data;
    })
  }

  getAll() {
    this.employeeService.getEmployees(10).subscribe((data) => {
      console.log(data);
      this.employees = data;
    })
  }

  getById(id: any) {
    this.employeeService.getEmployeeById(id).subscribe((data) => {
      this.employeeEdit = data;
      console.log(this.employeeEdit);
    })
  }

  onEdit(value: any, id: any) {
    this.employeeService.updateEmployeeById(value, id).subscribe((data) => {
      console.log(data);
    })
  }

  removeById(id: any) {
    if (window.confirm("bạn có muốn xóa không")) {
      this.employeeService.deleteEmployeeById(id).subscribe((data) => {
        alert('Xóa thành công');
        console.log(data);
        window.location.reload();
      })
    }
  }
}
