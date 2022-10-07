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
  employeeName: string = ''
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
  sortValue = '';
  itemPerPage: number = 0;
  page: number = 1;


  public config: PaginationInstance = {
    id: 'pagination',
    itemsPerPage: 3,
    currentPage: 1
  } 
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
      this.employeeEdit = data;
    })
  }

  onEdit(value: any, id: any) {
    this.employeeService.updateEmployeeById(value, id).subscribe((data) => {
    })
  }

  removeById(id: any) {
    if (window.confirm("bạn có muốn xóa không")) {
      this.employeeService.deleteEmployeeById(id).subscribe((data) => {
        alert('Xóa thành công');
        window.location.reload();
      })
    }
  }

  chageItemPerPage(value: number) {
    this.employees.length = value
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
      console.log('không tìm thấy kết quả');
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
