import { Component, OnInit } from '@angular/core';
import { map, pipe } from 'rxjs';
import { employee } from 'src/app/models/employee';
import { AuthService } from 'src/app/services/auth.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: employee[] = []
  loading = false;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.employeeService.getEmployees().subscribe((data) => {
      console.log(data);
      this.employees = data;
    })
  }

  removeById(id: any) {
    if (window.confirm("bạn có muốn xóa không")) {
      this.employeeService.deleteEmployeeById(id).subscribe((data) => {
        alert('Xóa thành công');
        console.log(data);
        window.location.reload();
      })
    }
  }
}
