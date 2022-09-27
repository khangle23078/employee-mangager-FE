import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { admin } from 'src/app/models/admin';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  admin: admin = {
    username: '',
    pass: ''
  }

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(data: admin) {
    this.authService.login(data).subscribe((data) => {
      console.log(data);
      localStorage.setItem('user', JSON.stringify(data))
      this.router.navigateByUrl('/department');
    })
  }

}
