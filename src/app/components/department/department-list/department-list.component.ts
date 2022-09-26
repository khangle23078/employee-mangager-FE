import { Component, OnInit } from '@angular/core';
import { department } from 'src/app/models/department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }

}
