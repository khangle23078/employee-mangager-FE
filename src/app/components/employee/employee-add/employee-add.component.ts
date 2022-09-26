import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  employee: employee = {
    fullName: '',
    birthDay: '',
    email: '',
    role_id: 0,
    department_id: 0,
    degree: '',
    specialize: ''
  }
  onSubmit(data: employee) {
    console.log(data);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
