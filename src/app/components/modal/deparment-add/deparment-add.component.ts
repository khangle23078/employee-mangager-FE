import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-deparment-add',
  templateUrl: './deparment-add.component.html',
  styleUrls: ['./deparment-add.component.scss']
})
export class DeparmentAddComponent implements OnInit {
  department: department = {
    department_id: 0,
    departmentName: ''
  }
  constructor(private departmentService: DepartmentService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(data: department) {
    try {
      this.departmentService.createDepartment(data).subscribe((data) => {
        alert("Thêm thành công")
        window.location.reload();
      })
    } catch (error) {
      alert("có lỗi xảy ra")
    }
  }

}
