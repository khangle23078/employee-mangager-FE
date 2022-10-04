import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  departments: department[] = [];
  department: department = {
    department_id: 0,
    departmentName: '',
  }

  constructor(private departmentService: DepartmentService, private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.departmentService.getDepartments().subscribe((data) => {
      console.log(data);
      this.departments = data;
    })
  }

  getById(id: any) {
    this.departmentService.getDepartmentById(id).subscribe((data) => {
      console.log(data);
      this.department = data;
    })
  }

  onEdit(value: department, id: any) {
    this.departmentService.updateDepartmentById(value, id).subscribe((data) => {
      console.log(data);
      this.getAll();
    })
  }

  onRemove(id: any): void {
    if (window.confirm('bạn có muốn xóa hay không ?')) {
      this.departmentService.deleteDepartmentById(id).subscribe((data) => {
        alert("Xóa thành công")
        console.log(data);
        this.getAll();
      })
    }
  }
}
