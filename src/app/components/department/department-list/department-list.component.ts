import { Component, OnInit } from '@angular/core';
import { department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  departments: department[] = []
  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.departmentService.getDepartments().subscribe((data) => {
      console.log(data);
      this.departments = data;
    })
  }
}
