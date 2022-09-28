import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  departments: department[] = []

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

  onRemove(id: any): void {
    if (window.confirm('bạn có muốn xóa hay không ?')) {
      this.departmentService.deleteDepartmentById(id).subscribe((data) => {
        alert("Xóa thành công")
        console.log(data);
        window.location.reload();
      })
    }
  }

}
