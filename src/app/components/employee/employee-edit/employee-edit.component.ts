import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/models/employee';

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
  onSubmit(data: employee) {
    console.log(data);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
