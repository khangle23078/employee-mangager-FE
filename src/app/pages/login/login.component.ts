import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { admin } from 'src/app/models/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  admin: admin = {
    userName: '',
    password: ''
  }

  onSubmit() {
    this.router.navigateByUrl('/department');
  }


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
