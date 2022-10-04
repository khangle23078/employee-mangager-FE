import { Component, OnInit } from '@angular/core';
import { role } from 'src/app/models/role';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {
  roles: role[] = [];
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



  onRemove(id: number) {
    if (window.confirm('bạn có muốn xóa không')) {
      this.roleServie.deleteRole(id).subscribe((data) => {
        alert('xóa thành công');
        window.location.reload();
      })
    }
  }
}
