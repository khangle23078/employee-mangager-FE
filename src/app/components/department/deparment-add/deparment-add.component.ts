import { Component, OnInit } from '@angular/core';
import { department } from 'src/app/models/department';

@Component({
  selector: 'app-deparment-add',
  templateUrl: './deparment-add.component.html',
  styleUrls: ['./deparment-add.component.scss']
})
export class DeparmentAddComponent implements OnInit {
  department: department = {
    name: ''
  }


  onSubmit(data: department) {
    console.log(data);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
