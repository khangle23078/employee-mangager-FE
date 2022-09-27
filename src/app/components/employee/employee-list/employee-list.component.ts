import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employee: employee[] = []
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }


}
