import { Component, OnInit } from '@angular/core';
import { department } from 'src/app/models/department';
import { employee } from 'src/app/models/employee';
import { role } from 'src/app/models/role';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { RoleService } from 'src/app/services/role.service';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  employees: employee[] = []
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
  employeeEdit: any = {
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
      department_id: 0,
      departmentName: ''
    }
  }
  departments: department[] = [];
  roles: role[] = [];
  sortValue = '';
  itemPerPage: number = 5;
  page: number = 1;
  employeeName: string = ''


  constructor(
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private roleSerivice: RoleService,
  ) { }

  ngOnInit(): void {
    this.getAll()
    this.getRoles()
    this.getDepartments()
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

  getAll() {
    this.employeeService.getEmployees(5).subscribe((data) => {
      console.log(data);

      this.employees = data;
    })
  }

  getById(id: any) {
    this.employeeService.getEmployeeById(id).subscribe((data) => {
      console.log(data);
      this.employeeEdit = data;
    })
  }

  onSubmit(data: employee) {
    this.employeeService.createEmployee(data).subscribe((data) => {
      this.getAll()
    })
  }

  onEdit(value: any, id: any) {
    this.employeeService.updateEmployeeById(value, id).subscribe((data) => {
      this.getAll()
    })
  }

  removeById(id: any) {
    if (window.confirm("b???n c?? mu???n x??a kh??ng")) {
      this.employeeService.deleteEmployeeById(id).subscribe((data) => {
        alert('X??a th??nh c??ng');
        window.location.reload();
      })
    }
  }

  chageItemPerPage(value: number) {
    return this.itemPerPage = value;
  }

  searchByName(value: string) {
    const result = this.employees.filter((employee) => {
      return (
        employee.fullname.toLowerCase().includes(value.toLowerCase()) ||
        employee.email.toLowerCase().includes(value.toLowerCase())
      )
    })
    this.employees = result;

    if (value.length <= 0) {
      this.getAll()
    }

    if (result.length === 0) {
      console.log('kh??ng t??m th???y k???t qu???');
    }
  }

  sortEmployee(type: string) {
    if (type === 'birthday') {
      this.employees.sort((a: any, b: any) => {
        if (a.birthday < b.birthday) return 1
        return -1
      })
    }

    if (type === 'dergee') {
      this.employees.sort((a: any, b: any) => {
        if (a.dergee < b.dergee) return 1
        return -1
      })
    }

  }
}
