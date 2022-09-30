import { Component, OnInit } from '@angular/core';
import { role } from 'src/app/models/role';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.scss']
})
export class RoleAddComponent implements OnInit {
  role: role = {
    roleId: 0,
    roleName: ''
  } 
  
  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
  }

  onSubmit(data: role) {
    try {
      this.roleService.createRole(data).subscribe((data) => {
        alert("Thêm thành công")
        window.location.reload();
      })
    } catch (error) {
      alert("có lỗi xảy ra")
    }
  }

}
