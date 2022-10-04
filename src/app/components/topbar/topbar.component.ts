import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from 'src/app/models/employee';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  userName?: string = '';
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName() {
    const data = JSON.parse(sessionStorage.getItem('user') as string).username
    this.userName = data;
    console.log(this.userName);

    return data;
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login')
  }


}
