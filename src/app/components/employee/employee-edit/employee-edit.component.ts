import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDepartments();
    this.getEmployeeById();
  }

  getDepartments() {
    this.departmentService.getDepartments().subscribe((data) => {
      console.log(data);

      this.departments = data;
    })
  }

  getEmployeeById() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.employeeService.getEmployeeById(Number(id)).subscribe((data) => {
      console.log(data);

      this.employee = data;
    })
  }

  onSubmit(data: employee) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.employeeService.updateEmployeeById(data, Number(id)).subscribe((data) => {
      alert("cập nhập thành công")
      this.router.navigateByUrl('/employee')
    })
  }
}
