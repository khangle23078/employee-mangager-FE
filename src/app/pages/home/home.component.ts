import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName?: string = '';
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName() {
    const data = JSON.parse(localStorage.getItem('user') as string).username
    this.userName = data;
    return data;
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login')
  }
}
