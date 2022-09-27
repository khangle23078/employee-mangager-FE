import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName?: string = '';
  constructor() { }

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName() {
    const data = JSON.parse(localStorage.getItem('user') as string).username
    console.log(data);

    this.userName = data;
    return data;
  }
}
