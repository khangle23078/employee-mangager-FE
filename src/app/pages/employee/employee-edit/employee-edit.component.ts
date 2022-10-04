import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { department } from 'src/app/models/department';
import { employee } from 'src/app/models/employee';
import { role } from 'src/app/models/role';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { RoleService } from 'src/app/services/role.service';

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
    role: {
      roleId: 0
    },
    department: {
      department_id: 0,
      departmentName: ''
    },
    degree: '',
    specialize: ''
  }
  departments: department[] = [];
  roles: role[] = [];

  constructor(
    private departmentService: DepartmentService,
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private roleService: RoleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDepartments();
    this.getEmployeeById();
    this.getRoles();
  }

  getDepartments() {
    this.departmentService.getDepartments().subscribe((data) => {
      console.log(data);

      this.departments = data;
    })
  }

  getRoles() {
    this.roleService.getRoles().subscribe((data) => {
      console.log(data)
      this.roles = data;
    })
  }

  getEmployeeById() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.employeeService.getEmployeeById(Number(id)).subscribe((data) => {
      console.log(data);

      this.employee = data;
    })
  }

  onSubmit(data: employee, id: any) {
    // const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.employeeService.updateEmployeeById(data, id).subscribe((data) => {
      alert("cập nhập thành công")
      this.router.navigateByUrl('/employee')
    })
  }
}
