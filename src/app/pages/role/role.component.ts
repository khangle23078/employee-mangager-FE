import { Component, OnInit } from '@angular/core';
import { role } from 'src/app/models/role';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  roles: role[] = [];
  role: role = {
    roleId: 0,
    roleName: ''
  }
  constructor(private roleServie: RoleService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.roleServie.getRoles().subscribe((data) => {
      console.log(data);
      this.roles = data;
    })
  }

  onSubmit(data: role) {
    this.roleServie.createRole(data).subscribe((data) => {
      this.getAll()
    })
  }

  onRemove(id: number) {
    if (window.confirm('bạn có muốn xóa không')) {
      this.roleServie.deleteRole(id).subscribe((data) => {
        this.getAll();
      })
    }
  }


}
