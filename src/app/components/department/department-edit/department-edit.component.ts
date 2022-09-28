import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.scss']
})
export class DepartmentEditComponent implements OnInit {
  department: department = {
    department_id: 0,
    departmentName: ''
  }

  constructor(
    private activedRoute: ActivatedRoute,
    private departmentService: DepartmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    this.departmentService.getDepartmentById(Number(id)).subscribe((data) => {
      this.department = data;
    })
  }

  onSubmit(data: department) {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    if (Number(id)) {
      this.departmentService.updateDepartmentById(data, Number(id)).subscribe(data => {
        alert("cập nhật thành công");
        this.router.navigateByUrl('/department')
      })

    }
  }
}
