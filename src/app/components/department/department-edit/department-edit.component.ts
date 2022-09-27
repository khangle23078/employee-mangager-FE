import { Component, OnInit } from '@angular/core';
import { department } from 'src/app/models/department';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.scss']
})
export class DepartmentEditComponent implements OnInit {
  department: department = {
    departmentName: ''
  }


  onSubmit(data: department) {
    console.log(data);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
